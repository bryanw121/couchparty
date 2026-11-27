// Two server copies ("isolates") sharing one Postgres. Clients are split across copies on purpose.
// Run: CP_FAST=1 NODE_PATH=/tmp/pgl/node_modules node test/relay.mjs
import { createRequire } from 'module';
import { createRelay } from '../src/relay.js';

const require = createRequire('/tmp/pgl/');
const { PGlite } = await import(require.resolve('@electric-sql/pglite'));
const db = new PGlite();
await db.exec(`
CREATE TABLE cp_rooms (code text PRIMARY KEY, owner text NOT NULL, beat timestamptz NOT NULL DEFAULT now());
CREATE TABLE cp_conns (id text PRIMARY KEY, room text NOT NULL, owner text NOT NULL, seen timestamptz NOT NULL DEFAULT now());
CREATE TABLE cp_msgs (id bigserial PRIMARY KEY, dest text NOT NULL, body text NOT NULL, at timestamptz NOT NULL DEFAULT now());`);
let queries = 0;
const sql = async (t, p) => { queries++; return (await db.query(t, p)).rows; };

const gameA = await import('../src/game.js?a');
const gameB = await import('../src/game.js?b');
const A = createRelay({ sql, game: gameA });
const B = createRelay({ sql, game: gameB });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
let fails = 0;
const check = (ok, what) => { console.log((ok ? 'ok   ' : 'FAIL ') + what); if (!ok) fails++; };

// A fake browser WebSocket attached to one copy.
function client(copy, onMsg) {
  const ls = { message: [], close: [], error: [] };
  const c = { msgs: [], last: null, open: true };
  const server = {
    readyState: 1,
    addEventListener: (t, fn) => ls[t].push(fn),
    send: (s) => { const m = JSON.parse(s); if (m.t === 'ping') return; c.msgs.push(m); if (m.t === 'state') c.last = m; onMsg && onMsg(c, m); },
    close: () => { server.readyState = 3; c.open = false; ls.close.forEach((f) => f({})); },
  };
  c.send = (o) => ls.message.forEach((f) => f({ data: JSON.stringify(o) }));
  c.close = () => server.close();
  copy.attach(server);
  return c;
}

let violations = 0;
const bot = (c, m) => {
  if (m.t !== 'state' || !m.you || !m.you.g) return;
  const g = m.you.g, s = m.s;
  if (s.g && s.g.kind === 'poker') {
    const total = s.g.seats.reduce((a, x) => a + x.chips + x.pending, 0) + s.g.pot;
    const bought = s.g.seats.reduce((a, x) => a + x.bought, 0);
    if (s.g.phase === 'hand' && total !== bought) violations++;
    if (g.canRebuy && g.chips === 0 && g.buyIns < 3 && !c.asked) { c.asked = true; setTimeout(() => { c.asked = false; c.send({ t: 'rebuy' }); }, 20); }
    if (g.myTurn && !c.acting) {
      c.acting = true;
      const r = Math.random();
      setTimeout(() => {
        c.acting = false;
        if (r < 0.15) c.send({ t: 'act', a: 'fold' });
        else if (r < 0.35) c.send({ t: 'act', a: 'raise', to: g.minTo + Math.floor(Math.random() * 200) });
        else c.send({ t: 'act', a: g.canCheck ? 'check' : 'call' });
      }, 5);
    }
  }
};

// ---- 1. WebSocket TV on copy A, phones split across A and B ----
const tv = client(A);
tv.send({ t: 'tv:hello' });
await wait(400);
const code = tv.msgs.find((m) => m.t === 'tv:room')?.code;
check(!!code, 'TV got a room code: ' + code);
const phones = [client(A, bot), client(B, bot), client(B, bot)];
['Bryan', 'Mia', 'Dev'].forEach((n, i) => phones[i].send({ t: 'join', room: code, name: n }));
await wait(1500);
check(tv.last?.s.players.length === 3, 'TV on A sees all 3 players (2 joined through B): ' + tv.last?.s.players.map((p) => p.name).join(','));
check(phones[1].msgs.some((m) => m.t === 'joined'), 'phone on B got its join confirmation');
check(phones[2].last?.s.players.length === 3, 'phone on B gets live state');

phones[0].send({ t: 'set', game: 'poker', key: 'blinds', value: '5/10' });
await wait(300);
phones[0].send({ t: 'start' });
const t0 = Date.now();
let hands = 0;
while (Date.now() - t0 < 20000) { hands = tv.last?.s.g?.hands || hands; if (hands >= 15) break; await wait(200); }
check(hands >= 15, `poker hands played across copies: ${hands}`);
phones[0].send({ t: 'quit' });
await wait(1500);
const res = tv.last?.s.results || [];
check(tv.last?.s.phase === 'final' && res.length === 3, 'game ended with a ledger on the TV');
check(res.reduce((a, r) => a + r.score, 0) === 0 && violations === 0, `money balances (nets sum ${res.reduce((a, r) => a + r.score, 0)}, violations ${violations})`);
tv.send({ t: 'tv:key', k: 'ok' });
await wait(400);
check(tv.last?.s.phase === 'lobby', 'remote OK on TV goes back to the lobby');

// Disconnect of a relayed phone reaches the owner.
phones[2].close();
await wait(800);
check(tv.last?.s.players.length === 2, 'closing a phone on B removes it from the room on A');

// ---- 2. Roku-style HTTP TV: hello on B, polls bounce between copies, phone on A ----
const call = async (copy, path, method = 'GET') => {
  const r = await copy.tvApi(new URL('http://x/api/tv/' + path), method);
  return { status: r.status, body: JSON.parse(r.body) };
};
const hello = await call(B, 'hello?room=', 'POST');
const tvId = hello.body.tv;
let roku = { code: null, state: null, fx: 0 };
async function pollOnce(copy) {
  const r = await call(copy, 'poll?tv=' + tvId);
  for (const m of r.body.msgs || []) { if (m.t === 'tv:room') roku.code = m.code; if (m.t === 'state') roku.state = m.s; if (m.t === 'fx') roku.fx++; }
  return r.status;
}
await pollOnce(A);
if (!roku.code) await pollOnce(B);
check(!!roku.code, 'HTTP TV got a room code via polls on either copy: ' + roku.code);
const p2 = [client(A, bot), client(B, bot)];
p2[0].send({ t: 'join', room: roku.code, name: 'Ana' });
p2[1].send({ t: 'join', room: roku.code, name: 'Lee' });
let polling = true;
(async () => { let i = 0; while (polling) { await pollOnce(i++ % 2 ? A : B); } })();
await wait(1500);
check(roku.state?.players.length === 2, 'HTTP TV sees both players');
await call(A, 'key?tv=' + tvId + '&k=ok', 'POST'); // OK on the remote starts the game
const t1 = Date.now();
while (Date.now() - t1 < 15000 && !((roku.state?.g?.hands || 0) >= 8)) await wait(200);
check((roku.state?.g?.hands || 0) >= 8, `HTTP TV game running: ${roku.state?.g?.hands} hands, ${roku.fx} sounds`);
polling = false;
await wait(16000 * 0); // the last poll returns on its own

// ---- 3. Owner copy dies: another copy takes the room over ----
await sql("UPDATE cp_rooms SET beat = now() - interval '1 minute' WHERE code = $1", [code]);
A.stop();
const late = client(B);
late.send({ t: 'join', room: code, name: 'Kim' });
await wait(800);
check(late.msgs.some((m) => m.t === 'joined'), 'after the owner stops, a join on B takes the room over');
const owner = (await sql('SELECT owner FROM cp_rooms WHERE code = $1', [code]))[0]?.owner;
check(owner === B.iso, 'room ownership moved to copy B');

console.log(`\n${fails ? fails + ' FAILED' : 'all passed'} · ${queries} queries`);
process.exit(fails ? 1 : 0);
