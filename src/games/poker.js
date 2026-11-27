// Texas Hold'em with play chips. Hole cards go only to their owner's phone.
import { best, handName, newDeck } from './handeval.js';

export const meta = { id: 'poker', name: "Texas Hold'em", min: 2, max: 8, blurb: 'Cards on your phone. Chips on the TV.' };

const FAST = typeof process !== 'undefined' && process.env && process.env.CP_FAST; // speeds up tests
const START = 1000, SB = 10, BB = 20, ACT_MS = 30000, AWAY_MS = 5000, SHOW_MS = FAST ? 30 : 7000, RUNOUT_MS = FAST ? 10 : 1500;

export function start(ctx) {
  const seats = []; // { pid, name, color, chips, cards, bet, total, folded, allIn, acted, dealt, last }
  let dealer = -1, turn = -1, board = [], deck = [], street = 'preflop', currentBet = 0, minRaise = BB;
  let phase = 'hand', hands = 0, turnEnds = 0, timer = null, winners = [], ended = false;

  const later = (fn, ms) => { clearTimeout(timer); timer = setTimeout(fn, ms); };
  const playerOf = (s) => ctx.allPlayers().find((p) => p.id === s.pid);
  const live = (s) => { const p = playerOf(s); return p && p.connected; };

  function seat(p) {
    let s = seats.find((x) => x.pid === p.id);
    if (!s && seats.length < 8) {
      s = { pid: p.id, chips: START, cards: [], bet: 0, total: 0, folded: true, allIn: false, acted: false, dealt: false, last: 'Joins next hand' };
      seats.push(s);
    }
    if (s) { s.name = p.name; s.color = p.color; }
    return s;
  }
  ctx.players().forEach(seat);

  const nextFrom = (i, ok) => {
    for (let k = 1; k <= seats.length; k++) { const j = (i + k) % seats.length; if (ok(seats[j])) return j; }
    return -1;
  };
  const isDealt = (s) => s.dealt;
  const canAct = (s) => s.dealt && !s.folded && !s.allIn;
  const inHand = () => seats.filter((s) => s.dealt && !s.folded);

  function post(s, amt) {
    const a = Math.max(0, Math.min(amt, s.chips));
    s.chips -= a; s.bet += a; s.total += a;
    if (s.chips === 0) s.allIn = true;
    return a;
  }

  function newHand() {
    if (ended) return;
    winners = [];
    // Players who left the room give up their seat between hands.
    for (const s of seats) if (!playerOf(s)) s.chips = 0;
    const eligible = seats.filter((s) => s.chips > 0 && live(s));
    if (eligible.length < 2) { finish(); return; }
    hands += 1;
    deck = newDeck();
    board = [];
    street = 'preflop';
    for (const s of seats) {
      const play = s.chips > 0 && live(s);
      Object.assign(s, { cards: play ? [deck.pop(), deck.pop()] : [], bet: 0, total: 0, folded: !play, allIn: false, acted: false, dealt: play, last: play ? '' : (s.chips > 0 ? 'Sitting out' : 'Out of chips') });
    }
    dealer = nextFrom(dealer < 0 ? seats.length - 1 : dealer, (s) => s.dealt);
    const heads = eligible.length === 2;
    const sb = heads ? dealer : nextFrom(dealer, isDealt);
    const bb = nextFrom(sb, isDealt);
    post(seats[sb], SB); seats[sb].last = `Small blind ${SB}`;
    post(seats[bb], BB); seats[bb].last = `Big blind ${BB}`;
    currentBet = BB; minRaise = BB;
    phase = 'hand';
    ctx.fx('deal');
    setTurn(nextFrom(bb, canAct));
  }

  function setTurn(i) {
    turn = i;
    if (i < 0) { advance(); return; }
    const s = seats[i];
    const wait = live(s) ? ACT_MS : AWAY_MS;
    turnEnds = Date.now() + wait;
    later(() => act(s, s.bet >= currentBet ? 'check' : 'fold', 0, true), wait);
    ctx.broadcast();
    ctx.fx('turn', s.pid);
  }

  function act(s, kind, amount, auto) {
    if (phase !== 'hand' || seats[turn] !== s) return;
    const toCall = currentBet - s.bet;
    if (kind === 'check' && toCall > 0) kind = 'call';
    if (kind === 'fold') { s.folded = true; s.last = auto ? 'Folded (timeout)' : 'Folded'; ctx.fx('fold'); }
    else if (kind === 'check') { s.last = 'Check'; ctx.fx('check'); }
    else if (kind === 'call') { post(s, toCall); s.last = s.allIn ? 'All in' : `Call ${toCall}`; ctx.fx(s.allIn ? 'allin' : 'chip'); }
    else if (kind === 'raise') {
      const maxTo = s.bet + s.chips;
      let to = Math.floor(Number(amount) || 0);
      to = Math.max(to, currentBet + minRaise);
      if (to >= maxTo) to = maxTo;
      if (to <= currentBet) { act(s, 'call'); return; }
      if (to - currentBet >= minRaise) minRaise = to - currentBet;
      currentBet = to;
      post(s, to - s.bet);
      for (const o of seats) if (o !== s) o.acted = false;
      s.last = s.allIn ? `All in ${to}` : `Raise to ${to}`;
      ctx.fx(s.allIn ? 'allin' : 'raise');
    } else return;
    s.acted = true;
    advance();
  }

  function advance() {
    const remaining = inHand();
    if (remaining.length === 1) { award(false); return; }
    // Someone still owes chips, or hasn't acted while there's someone left to bet against.
    const multi = seats.filter(canAct).length > 1;
    const needs = (s) => canAct(s) && (s.bet < currentBet || (!s.acted && multi));
    if (seats.some(needs)) { setTurn(nextFrom(turn < 0 ? dealer : turn, needs)); return; }
    // Betting round over.
    for (const s of seats) { s.bet = 0; s.acted = false; }
    currentBet = 0; minRaise = BB;
    const actors = seats.filter(canAct);
    if (street === 'river') { award(true); return; }
    dealStreet();
    if (actors.length <= 1) {
      // Everyone else is all in: run out the board.
      turn = -1;
      ctx.broadcast();
      later(advance, RUNOUT_MS);
      return;
    }
    turn = dealer;
    setTurn(nextFrom(dealer, canAct));
  }

  function dealStreet() {
    if (street === 'preflop') { board.push(deck.pop(), deck.pop(), deck.pop()); street = 'flop'; }
    else if (street === 'flop') { board.push(deck.pop()); street = 'turn'; }
    else if (street === 'turn') { board.push(deck.pop()); street = 'river'; }
    ctx.fx('deal');
  }

  // Split the money into main and side pots by how much each player put in.
  function pots() {
    const levels = [...new Set(seats.filter((s) => s.total > 0).map((s) => s.total))].sort((a, b) => a - b);
    const out = [];
    let prev = 0;
    for (const L of levels) {
      let amount = 0;
      for (const s of seats) amount += Math.max(0, Math.min(s.total, L) - Math.min(s.total, prev));
      const elig = seats.filter((s) => s.dealt && !s.folded && s.total >= L);
      if (!elig.length && out.length) out[out.length - 1].amount += amount;
      else if (out.length && out[out.length - 1].elig.length === elig.length) out[out.length - 1].amount += amount;
      else out.push({ amount, elig });
      prev = L;
    }
    return out;
  }

  function award(showdown) {
    clearTimeout(timer);
    turn = -1;
    const won = new Map();
    const scores = new Map();
    for (const s of inHand()) scores.set(s, best(s.cards.concat(board)));
    for (const pot of pots()) {
      let elig = pot.elig.length ? pot.elig : inHand();
      const top = Math.max(...elig.map((s) => scores.get(s)));
      const wins = showdown ? elig.filter((s) => scores.get(s) === top) : elig;
      const share = Math.floor(pot.amount / wins.length);
      let rest = pot.amount - share * wins.length;
      // Odd chips go to the first winner left of the dealer.
      wins.sort((a, b) => ((seats.indexOf(a) - dealer + seats.length) % seats.length) - ((seats.indexOf(b) - dealer + seats.length) % seats.length));
      for (const w of wins) { const amt = share + (rest-- > 0 ? 1 : 0); w.chips += amt; won.set(w, (won.get(w) || 0) + amt); }
    }
    winners = [...won.entries()].map(([s, amount]) => ({ pid: s.pid, name: s.name, amount, hand: showdown ? handName(scores.get(s)) : '' }));
    for (const s of seats) { s.bet = 0; s.total = 0; }
    phase = showdown ? 'showdown' : 'won';
    ctx.fx('pot');
    ctx.broadcast();
    later(newHand, SHOW_MS);
  }

  function finish() {
    if (ended) return;
    ended = true;
    clearTimeout(timer);
    // Unfinished hand: return what everyone put in.
    for (const s of seats) { s.chips += s.total; s.total = 0; }
    ctx.end(seats.map((s) => ({ id: s.pid, name: s.name, color: s.color, score: s.chips, unit: 'chips' })).sort((a, b) => b.score - a.score));
  }

  later(newHand, 500);

  return {
    pub() {
      const show = phase === 'showdown';
      return {
        kind: 'poker', phase, street, board, hands, sb: SB, bb: BB,
        pot: seats.reduce((a, s) => a + s.total, 0),
        turnEndsIn: turn >= 0 ? Math.max(0, turnEnds - Date.now()) : 0,
        winners,
        seats: seats.map((s, i) => ({
          pid: s.pid, name: s.name, color: s.color, chips: s.chips, bet: s.bet, folded: s.folded, allIn: s.allIn,
          dealt: s.dealt, dealer: i === dealer, turn: i === turn, last: s.last, away: !live(s),
          cards: show && s.dealt && !s.folded ? s.cards : null,
          hand: show && s.dealt && !s.folded ? handName(best(s.cards.concat(board))) : '',
        })),
      };
    },
    priv(p) {
      const s = seats.find((x) => x.pid === p.id);
      if (!s) return { seated: false };
      const myTurn = seats[turn] === s && phase === 'hand';
      const toCall = Math.max(0, currentBet - s.bet);
      return {
        seated: true, cards: s.cards, chips: s.chips, bet: s.bet, dealt: s.dealt, folded: s.folded, allIn: s.allIn, myTurn,
        toCall: Math.min(toCall, s.chips), canCheck: toCall === 0,
        minTo: Math.min(currentBet + minRaise, s.bet + s.chips), maxTo: s.bet + s.chips, currentBet,
        hand: s.dealt && s.cards.length ? handName(best(s.cards.concat(board))) : '',
      };
    },
    input(p, m) {
      if (m.t !== 'act') return;
      const s = seats.find((x) => x.pid === p.id);
      if (s && ['fold', 'check', 'call', 'raise'].includes(m.a)) act(s, m.a, m.to);
    },
    join(p) { seat(p); },
    leave() {
      const s = seats[turn];
      if (s && !live(s) && phase === 'hand') { turnEnds = Date.now() + AWAY_MS; later(() => act(s, s.bet >= currentBet ? 'check' : 'fold', 0, true), AWAY_MS); }
    },
    quit() { finish(); },
    stop() { ended = true; clearTimeout(timer); },
  };
}
