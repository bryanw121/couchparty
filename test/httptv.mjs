// Plays poker where the TV is an HTTP long-poll client (like the Roku app) and phones are bots.
import WebSocket from 'ws';
const BASE = process.argv[2] || 'http://localhost:8000';
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const post = (p) => fetch(BASE + p, { method: 'POST' }).then((r) => r.json());
const { tv } = await post('/api/tv/hello');
let since = 0, state = null, code = null, fx = {}, polls = 0;
let stop = false;
(async () => {
  while (!stop) {
    const r = await fetch(`${BASE}/api/tv/poll?tv=${tv}&since=${since}`).then((x) => x.json());
    polls++; since = r.seq;
    for (const m of r.msgs) { if (m.t === 'tv:room') code = m.code; if (m.t === 'state') state = m.s; if (m.t === 'fx') fx[m.n] = (fx[m.n] || 0) + 1; }
  }
})();
while (!code) await wait(50);
console.log('room', code);
const phones = [];
for (const n of ['Bryan', 'Mia', 'Dev']) {
  const ws = new WebSocket(BASE.replace('http', 'ws') + '/ws');
  await new Promise((r) => ws.on('open', r));
  ws.on('message', (d) => { const m = JSON.parse(d); if (m.t === 'state' && m.you?.g?.myTurn) setTimeout(() => ws.send(JSON.stringify({ t: 'act', a: m.you.g.canCheck ? 'check' : 'call' })), 5); });
  ws.send(JSON.stringify({ t: 'join', room: code, name: n }));
  phones.push(ws);
}
await wait(400);
console.log('lobby via poll:', state.players.map((p) => p.name).join(','), 'phase', state.phase);
await post(`/api/tv/key?tv=${tv}&k=ok`); // remote OK starts the game
await wait(1500);
console.log('after OK:', state.phase, state.g && state.g.kind, 'hands', state.g && state.g.hands);
await wait(3000);
console.log('hands played', state.g.hands, 'fx seen', JSON.stringify(fx), 'polls', polls);
phones[0].send('{"t":"quit"}'); await wait(500);
console.log('final:', state.phase, state.results.map((r) => `${r.name}:${r.score}`).join(' '));
stop = true; process.exit(0);
