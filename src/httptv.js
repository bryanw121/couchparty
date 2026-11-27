// HTTP long-poll transport for TVs that can't use WebSockets (the Roku app).
// Each HTTP TV is a pseudo-socket handed to handleSocket(), so the game logic is unchanged.
//   POST /api/tv/hello?room=ABCD  -> { tv }
//   GET  /api/tv/poll?tv=ID&since=N -> { seq, msgs: [...] }  (waits up to 15 s for news)
//   POST /api/tv/key?tv=ID&k=ok|left|right
import { handleSocket } from './game.js';

const POLL_WAIT_MS = 15000;
const IDLE_CLOSE_MS = 45000;
const tvs = new Map();

function makePseudoSocket() {
  const listeners = { message: [], close: [], error: [] };
  const t = {
    id: Math.random().toString(36).slice(2, 12),
    seq: 0,
    queue: [], // { seq, msg }
    waiters: [],
    lastSeen: Date.now(),
    readyState: 1,
    addEventListener(type, fn) { (listeners[type] || (listeners[type] = [])).push(fn); },
    send(data) {
      const msg = typeof data === 'string' ? JSON.parse(data) : data;
      if (msg.t === 'ping') return;
      t.seq += 1;
      // Only the newest full state matters: drop older unread states to keep the queue short.
      if (msg.t === 'state') t.queue = t.queue.filter((q) => q.msg.t !== 'state');
      t.queue.push({ seq: t.seq, msg });
      if (t.queue.length > 200) t.queue.splice(0, t.queue.length - 200);
      const ws = t.waiters; t.waiters = [];
      ws.forEach((fn) => fn());
    },
    emit(obj) { listeners.message.forEach((fn) => fn({ data: JSON.stringify(obj) })); },
    close() {
      if (t.readyState !== 1) return;
      t.readyState = 3;
      tvs.delete(t.id);
      listeners.close.forEach((fn) => fn());
      t.waiters.forEach((fn) => fn()); t.waiters = [];
    },
  };
  return t;
}

const json = (status, obj) => ({ status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' }, body: JSON.stringify(obj) });

export async function tvApi(url, method) {
  const path = url.pathname;
  const q = url.searchParams;
  if (path === '/api/tv/hello' && method === 'POST') {
    const t = makePseudoSocket();
    tvs.set(t.id, t);
    handleSocket(t);
    t.emit({ t: 'tv:hello', room: (q.get('room') || '').toUpperCase().slice(0, 4) });
    return json(200, { tv: t.id });
  }
  const t = tvs.get(q.get('tv') || '');
  if (!t) return json(404, { error: 'unknown tv' });
  t.lastSeen = Date.now();
  if (path === '/api/tv/key' && method === 'POST') {
    t.emit({ t: 'tv:key', k: String(q.get('k') || '') });
    return json(200, { ok: true });
  }
  if (path === '/api/tv/poll') {
    const since = Number(q.get('since') || 0);
    t.queue = t.queue.filter((m) => m.seq > since); // acknowledged messages can go
    if (!t.queue.length) {
      await new Promise((resolve) => {
        const timer = setTimeout(resolve, POLL_WAIT_MS);
        t.waiters.push(() => { clearTimeout(timer); resolve(); });
      });
    }
    t.lastSeen = Date.now();
    return json(200, { seq: t.seq, msgs: t.queue.filter((m) => m.seq > since).map((m) => m.msg) });
  }
  return json(404, { error: 'not found' });
}

// Drop TVs that stopped polling (app closed, TV off).
const sweep = setInterval(() => {
  const now = Date.now();
  for (const t of tvs.values()) if (now - t.lastSeen > IDLE_CLOSE_MS && !t.waiters.length) t.close();
}, 10000);
sweep.unref?.();
