// Poker hand evaluation. Cards are strings like "As", "Td", "7c".
export const RANKS = '23456789TJQKA';
export const NAMES = ['High card', 'Pair', 'Two pair', 'Three of a kind', 'Straight', 'Flush', 'Full house', 'Four of a kind', 'Straight flush'];

const parse = (c) => ({ r: RANKS.indexOf(c[0]) + 2, s: c[1] });

// Score of up to 5 cards; higher is better. Category is Math.floor(score / 15 ** 5).
export function score5(cards) {
  const cs = cards.map(parse);
  const rs = cs.map((c) => c.r).sort((a, b) => b - a);
  const five = cs.length === 5;
  const flush = five && cs.every((c) => c.s === cs[0].s);
  const uniq = [...new Set(rs)];
  let straight = 0;
  if (five && uniq.length === 5) {
    if (uniq[0] - uniq[4] === 4) straight = uniq[0];
    else if (uniq.join() === '14,5,4,3,2') straight = 5; // wheel
  }
  const cnt = {};
  for (const r of rs) cnt[r] = (cnt[r] || 0) + 1;
  const groups = Object.entries(cnt).map(([r, c]) => [c, +r]).sort((a, b) => b[0] - a[0] || b[1] - a[1]);
  const counts = groups.map((g) => g[0]);
  const ranks = groups.map((g) => g[1]);
  let cat, tb;
  if (straight && flush) { cat = 8; tb = [straight]; }
  else if (counts[0] === 4) { cat = 7; tb = ranks; }
  else if (counts[0] === 3 && counts[1] === 2) { cat = 6; tb = ranks; }
  else if (flush) { cat = 5; tb = rs; }
  else if (straight) { cat = 4; tb = [straight]; }
  else if (counts[0] === 3) { cat = 3; tb = ranks; }
  else if (counts[0] === 2 && counts[1] === 2) { cat = 2; tb = ranks; }
  else if (counts[0] === 2) { cat = 1; tb = ranks; }
  else { cat = 0; tb = rs; }
  let v = cat;
  for (let i = 0; i < 5; i++) v = v * 15 + (tb[i] || 0);
  return v;
}

// Best score using any 5 of the given cards (2 to 7 cards).
export function best(cards) {
  if (cards.length <= 5) return score5(cards);
  let top = 0;
  const n = cards.length;
  for (let a = 0; a < n; a++) for (let b = a + 1; b < n; b++) {
    const five = cards.filter((_, i) => i !== a && i !== b);
    if (n === 7) { const v = score5(five); if (v > top) top = v; }
    else {
      // n === 6: drop one card
      for (let c = 0; c < n; c++) { const v = score5(cards.filter((_, i) => i !== c)); if (v > top) top = v; }
      return top;
    }
  }
  return top;
}

export const handName = (v) => NAMES[Math.floor(v / 15 ** 5)];

export function newDeck() {
  const d = [];
  for (const r of RANKS) for (const s of 'shdc') d.push(r + s);
  for (let i = d.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [d[i], d[j]] = [d[j], d[i]]; }
  return d;
}
