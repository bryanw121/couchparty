// Plays Light Cycles and Hold'em with a fake TV + 3 bot phones against a running server.
import WebSocket from 'ws';
const URL_ = process.argv[2] || 'ws://localhost:8000/ws';
const which = process.argv[3] || 'both';
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
function client(onMsg) {
  const ws = new WebSocket(URL_);
  ws.last = null; ws.msgs = [];
  ws.on('message', (d) => { const m = JSON.parse(d); if (m.t === 'ping') return ws.send('{"t":"pong"}'); ws.msgs.push(m); if (m.t === 'state') ws.last = m; onMsg && onMsg(ws, m); });
  return new Promise((r) => ws.on('open', () => r(ws)));
}
const send = (ws, o) => ws.send(JSON.stringify(o));
let violations = 0, maxPot = 0, tvTicks = 0;
const tv = await client((ws, m) => { if (m.t === 'cy') tvTicks++; });
send(tv, { t: 'tv:hello' }); await wait(300);
const code = tv.msgs.find((m) => m.t === 'tv:room').code;
const bot = (ws, m) => {
  if (m.t !== 'state' || !m.you || !m.you.g) return;
  const g = m.you.g, s = m.s;
  if (s.g && s.g.kind === 'poker') {
    const total = s.g.seats.reduce((a, x) => a + x.chips, 0) + s.g.pot;
    if (s.g.phase === 'hand' && total !== 3000) { violations++; console.log('CHIP MISMATCH', total); }
    maxPot = Math.max(maxPot, s.g.pot);
    if (g.myTurn) {
      const r = Math.random();
      setTimeout(() => {
        if (r < 0.15) send(ws, { t: 'act', a: 'fold' });
        else if (r < 0.35) send(ws, { t: 'act', a: 'raise', to: g.minTo + Math.floor(Math.random() * 200) });
        else if (r < 0.4) send(ws, { t: 'act', a: 'raise', to: g.maxTo });
        else send(ws, { t: 'act', a: g.canCheck ? 'check' : 'call' });
      }, 5);
    }
  }
};
const phones = [];
for (const n of ['Bryan', 'Mia', 'Dev']) { const p = await client(bot); send(p, { t: 'join', room: code, name: n }); phones.push(p); }
await wait(300);
console.log('lobby:', tv.last.s.players.map((p) => p.name + (p.isHost ? '*' : '')).join(','), 'games:', tv.last.s.games.map((g) => g.id).join(','));

if (which !== 'poker') {
  send(tv, { t: 'tv:key', k: 'ok' }); // remote OK starts selected game (cycles)
  const dirs = 'URDL';
  const steer = setInterval(() => phones.forEach((p) => send(p, { t: 'dir', d: dirs[Math.floor(Math.random() * 4)] })), 400);
  while (tv.last.s.phase !== 'final') await wait(500);
  clearInterval(steer);
  console.log('cycles final:', tv.last.s.results.map((r) => `${r.name}:${r.score}`).join(' '), 'tv tick msgs:', tvTicks);
  send(phones[0], { t: 'start' }); await wait(200); // host: back to menu
  console.log('after host start on final ->', tv.last.s.phase);
}
if (which !== 'cycles') {
  send(phones[1], { t: 'pick', game: 'poker' }); await wait(100);
  console.log('non-host pick ignored ->', tv.last.s.selected);
  send(phones[0], { t: 'pick', game: 'poker' }); await wait(100);
  send(phones[0], { t: 'start' });
  const t0 = Date.now();
  while (tv.last.s.phase !== 'final' && Date.now() - t0 < 60000) await wait(200);
  if (tv.last.s.phase !== 'final') { send(phones[0], { t: 'quit' }); await wait(300); }
  const res = tv.last.s.results;
  console.log('poker final:', res.map((r) => `${r.name}:${r.score}`).join(' '), 'sum', res.reduce((a, r) => a + r.score, 0), 'hands', 'maxPot', maxPot, 'violations', violations);
}
process.exit(0);
