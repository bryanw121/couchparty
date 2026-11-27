// Cross-copy relay. Neon may run several copies ("isolates") of this server, each with its own memory.
// Every room lives in memory on exactly one copy, its owner, recorded in Postgres (cp_rooms).
// A phone or TV that connects to a different copy is relayed: its messages go to the owner through
// the cp_msgs table, and the owner's replies come back the same way. When everyone lands on the owner
// (the usual case) messages never touch the database; only a heartbeat does.
//
// createRelay({ sql, game }) — sql(text, params) returns rows; game is the module from game.js.
// Returns { attach(ws), tvApi(url, method) }.

const ALIVE = "now() - interval '20 seconds'";
const CLOSE = '\u0000close';
const rid = () => Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 6);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// A socket-like object the game can use: addEventListener / send / close / readyState.
function fakeSocket(onSend, onClose) {
  const ls = { message: [], close: [], error: [] };
  const s = {
    readyState: 1,
    addEventListener(type, fn) { (ls[type] || (ls[type] = [])).push(fn); },
    send(data) { if (s.readyState === 1) onSend(data); },
    close() { if (s.readyState !== 1) return; onClose && onClose(); s.fireClose(); },
    fire(data) { if (s.readyState === 1) for (const fn of ls.message) fn({ data }); },
    fireClose() { if (s.readyState === 3) return; s.readyState = 3; for (const fn of ls.close) fn({}); },
  };
  return s;
}

export function createRelay({ sql, game, log = () => {} }) {
  const ISO = rid();
  const owned = new Set(); // room codes this copy owns
  const held = new Map(); // connId -> { ws, room, owner } client sockets held here, owned elsewhere
  const proxies = new Map(); // connId -> fakeSocket standing in for a remote client (owner side)
  let outbox = []; // [dest, body]
  let flushing = null;
  let dead = false;

  const q = async (text, params) => {
    try { return await sql(text, params); } catch (e) { log('[relay] sql', e.message); throw e; }
  };

  // ---------- ownership ----------
  async function claimNew() {
    for (let i = 0; i < 20; i++) {
      const code = game.newCode();
      const r = await q('INSERT INTO cp_rooms (code, owner) VALUES ($1, $2) ON CONFLICT DO NOTHING RETURNING code', [code, ISO]);
      if (r.length) { owned.add(code); game.ensureRoom(code); return code; }
    }
    throw new Error('no free room code');
  }

  // Who owns `code`? Takes over a room whose owner stopped heartbeating. create: make it if missing.
  async function ownerOf(code, create) {
    for (let i = 0; i < 3; i++) {
      const r = await q(`SELECT owner, (beat > ${ALIVE})::int AS alive FROM cp_rooms WHERE code = $1`, [code]);
      if (r.length && Number(r[0].alive) === 1) {
        if (r[0].owner === ISO) game.ensureRoom(code);
        return r[0].owner;
      }
      if (r.length) {
        const t = await q(`UPDATE cp_rooms SET owner = $2, beat = now() WHERE code = $1 AND beat <= ${ALIVE} RETURNING code`, [code, ISO]);
        if (t.length) { owned.add(code); game.ensureRoom(code); log('[relay] took over', code); return ISO; }
        continue;
      }
      if (!create) return null;
      const n = await q('INSERT INTO cp_rooms (code, owner) VALUES ($1, $2) ON CONFLICT DO NOTHING RETURNING code', [code, ISO]);
      if (n.length) { owned.add(code); game.ensureRoom(code); return ISO; }
    }
    return null;
  }

  // ---------- message plumbing ----------
  let flushSoon = null;
  function queue(dest, body) {
    outbox.push([dest, body]);
    if (!flushSoon) flushSoon = setTimeout(() => { flushSoon = null; flush().catch(() => {}); }, 0);
  }

  async function flush() {
    if (flushing) await flushing;
    if (!outbox.length) return;
    const batch = outbox;
    outbox = [];
    flushing = q('INSERT INTO cp_msgs (dest, body) SELECT d, b FROM unnest($1::text[], $2::text[]) WITH ORDINALITY AS x(d, b, n) ORDER BY n',
      [batch.map((x) => x[0]), batch.map((x) => x[1])]).catch(() => { outbox = batch.concat(outbox); });
    await flushing;
    flushing = null;
  }

  // Deliver an inbox item to the owner side (this copy owns the room).
  function ownerReceive(item) {
    const c = item.c;
    if (item.o === 'open') {
      if (proxies.has(c)) return;
      const p = fakeSocket((data) => queue('conn:' + c, typeof data === 'string' ? data : String(data)), () => queue('conn:' + c, CLOSE));
      proxies.set(c, p);
      p.addEventListener('close', () => proxies.delete(c));
      game.handleSocket(p);
    } else if (item.o === 'close') {
      const p = proxies.get(c);
      if (p) p.fireClose();
    } else if (item.d !== undefined) {
      const p = proxies.get(c);
      if (p) p.fire(item.d);
    }
  }

  function toOwner(owner, item) {
    if (owner === ISO) ownerReceive(item);
    else queue('iso:' + owner, JSON.stringify(item));
  }

  // ---------- polling loop ----------
  async function tick() {
    if (dead) return;
    try {
      await flush();
      const dests = ['iso:' + ISO];
      for (const c of held.keys()) dests.push('conn:' + c);
      if (owned.size || held.size) {
        const rows = await q('DELETE FROM cp_msgs WHERE dest = ANY($1) RETURNING id, dest, body', [dests]);
        rows.sort((a, b) => Number(a.id) - Number(b.id));
        for (const row of rows) {
          if (row.dest.startsWith('iso:')) {
            let item;
            try { item = JSON.parse(row.body); } catch { continue; }
            ownerReceive(item);
          } else {
            const h = held.get(row.dest.slice(5));
            if (!h) continue;
            if (row.body === CLOSE) { try { h.ws.close(); } catch { /* ignore */ } } else game.send(h.ws, row.body);
          }
        }
        await flush();
      }
    } catch { /* retry next tick */ }
    // Fast while relaying, quick enough while owning a room (so a join from another copy lands within ~0.3 s).
    const delay = held.size || proxies.size ? 120 : owned.size ? 300 : 1000;
    setTimeout(tick, delay).unref?.();
  }

  async function housekeeping() {
    try {
      if (owned.size) {
        for (const code of [...owned]) {
          if (!game.roomExists(code)) {
            owned.delete(code);
            await q('DELETE FROM cp_rooms WHERE code = $1 AND owner = $2', [code, ISO]);
          }
        }
        const kept = await q('UPDATE cp_rooms SET beat = now() WHERE code = ANY($1) AND owner = $2 RETURNING code', [[...owned], ISO]);
        const still = new Set(kept.map((r) => r.code));
        for (const code of owned) if (!still.has(code)) owned.delete(code);
      }
      if (held.size) {
        await q('UPDATE cp_conns SET seen = now() WHERE id = ANY($1)', [[...held.keys()]]);
        // If a room's owner went away, drop its clients so they reconnect (and someone takes over).
        const rooms = [...new Set([...held.values()].map((h) => h.room))];
        const alive = await q(`SELECT code, owner FROM cp_rooms WHERE code = ANY($1) AND beat > ${ALIVE}`, [rooms]);
        const ok = new Map(alive.map((r) => [r.code, r.owner]));
        for (const [c, h] of held) if (ok.get(h.room) !== h.owner) { try { h.ws.close(); } catch { /* ignore */ } held.delete(c); }
      }
      if (proxies.size) {
        // A remote client whose copy stopped heartbeating counts as disconnected.
        const live = await q('SELECT id FROM cp_conns WHERE id = ANY($1) AND seen > ' + ALIVE, [[...proxies.keys()]]);
        const ids = new Set(live.map((r) => r.id));
        for (const [c, p] of proxies) if (!ids.has(c)) p.fireClose();
      }
      if (Math.random() < 0.1) {
        await q("DELETE FROM cp_msgs WHERE at < now() - interval '2 minutes'");
        await q("DELETE FROM cp_conns WHERE seen < now() - interval '10 minutes'");
      }
    } catch { /* next round */ }
  }

  setTimeout(tick, 200).unref?.();
  setInterval(housekeeping, 5000).unref?.();

  // ---------- WebSocket clients ----------
  function attach(ws) {
    const w = fakeSocket((data) => { try { ws.send(data); } catch { /* closing */ } }, () => { try { ws.close(); } catch { /* ignore */ } });
    Object.defineProperty(w, 'readyState', { get: () => ws.readyState, set() {} });
    let mode = null; // null until routed, then 'local' | 'remote'
    let conn = null;
    let routing = null;
    const early = [];

    async function route(raw, m) {
      let code = null;
      let owner = null;
      if (m.t === 'tv:hello') {
        const wanted = typeof m.room === 'string' ? m.room.toUpperCase().slice(0, 4) : '';
        if (/^[A-Z0-9]{4}$/.test(wanted)) { code = wanted; owner = await ownerOf(code, true); }
        if (!owner) { code = await claimNew(); owner = ISO; }
        m.room = code;
        raw = JSON.stringify(m);
      } else {
        code = String(m.room || '').toUpperCase().trim();
        owner = code ? await ownerOf(code, false) : null;
        if (!owner) { game.send(ws, { t: 'error', msg: 'Room not found. Check the code on the TV.' }); return false; }
      }
      if (owner === ISO) {
        mode = 'local';
        game.handleSocket(w);
        w.fire(raw);
      } else {
        mode = 'remote';
        conn = rid();
        held.set(conn, { ws, room: code, owner });
        await q('INSERT INTO cp_conns (id, room, owner) VALUES ($1, $2, $3)', [conn, code, owner]);
        toOwner(owner, { c: conn, o: 'open' });
        toOwner(owner, { c: conn, d: raw });
      }
      return true;
    }

    ws.addEventListener('message', (event) => {
      const raw = typeof event.data === 'string' ? event.data : Buffer.from(event.data).toString();
      if (mode === 'local') return w.fire(raw);
      if (mode === 'remote') return toOwner(held.get(conn)?.owner, { c: conn, d: raw });
      if (routing) { early.push(raw); return; }
      let m;
      try { m = JSON.parse(raw); } catch { return; }
      if (!m || (m.t !== 'tv:hello' && m.t !== 'join')) return;
      routing = route(raw, m).then((ok) => {
        routing = null;
        if (!ok) return;
        for (const r of early.splice(0)) {
          if (mode === 'local') w.fire(r);
          else toOwner(held.get(conn).owner, { c: conn, d: r });
        }
      }).catch(() => { routing = null; game.send(ws, { t: 'error', msg: 'Server busy, try again.' }); });
    });

    ws.addEventListener('close', () => {
      if (mode === 'local') w.fireClose();
      if (mode === 'remote' && held.has(conn)) {
        const { owner } = held.get(conn);
        held.delete(conn);
        toOwner(owner, { c: conn, o: 'close' });
        q('DELETE FROM cp_conns WHERE id = $1', [conn]).catch(() => {});
      }
    });
    ws.addEventListener('error', () => {});
  }

  // ---------- HTTP long-poll TVs (Roku fallback) ----------
  // Each poll may land on any copy, so the TV's outgoing messages always wait in cp_msgs.
  const json = (status, obj) => ({ status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' }, body: JSON.stringify(obj) });

  async function tvApi(url, method) {
    const op = url.pathname.slice('/api/tv/'.length);
    try {
      if (op === 'hello' && method === 'POST') {
        const wanted = String(url.searchParams.get('room') || '').toUpperCase().slice(0, 4);
        let code = null;
        let owner = null;
        if (/^[A-Z0-9]{4}$/.test(wanted)) { code = wanted; owner = await ownerOf(code, true); }
        if (!owner) { code = await claimNew(); owner = ISO; }
        const c = 'h' + rid();
        await q('INSERT INTO cp_conns (id, room, owner) VALUES ($1, $2, $3)', [c, code, owner]);
        toOwner(owner, { c, o: 'open' });
        toOwner(owner, { c, d: JSON.stringify({ t: 'tv:hello', room: code }) });
        await flush();
        return json(200, { tv: c });
      }
      const c = String(url.searchParams.get('tv') || '');
      const row = c ? (await q('UPDATE cp_conns SET seen = now() WHERE id = $1 RETURNING owner, room', [c]))[0] : null;
      if (!row) return json(404, { error: 'unknown tv' });
      if (op === 'key' && method === 'POST') {
        const k = String(url.searchParams.get('k') || '');
        if (['ok', 'left', 'right'].includes(k)) toOwner(row.owner, { c, d: JSON.stringify({ t: 'tv:key', k }) });
        await flush();
        return json(200, { ok: true });
      }
      if (op === 'poll') {
        const until = Date.now() + 15000;
        for (;;) {
          await flush();
          const rows = await q('DELETE FROM cp_msgs WHERE dest = $1 RETURNING id, body', ['conn:' + c]);
          if (rows.length || Date.now() > until) {
            rows.sort((a, b) => Number(a.id) - Number(b.id));
            const msgs = [];
            let lastState = -1;
            for (const r of rows) {
              if (r.body === CLOSE) return json(404, { error: 'closed' });
              let m;
              try { m = JSON.parse(r.body); } catch { continue; }
              if (m.t === 'ping') continue;
              if (m.t === 'state') { if (lastState >= 0) msgs[lastState] = null; lastState = msgs.length; }
              msgs.push(m);
            }
            return json(200, { seq: 0, msgs: msgs.filter(Boolean) });
          }
          await sleep(200);
        }
      }
      return json(404, { error: 'not found' });
    } catch {
      return json(503, { error: 'busy' });
    }
  }

  return { attach, tvApi, iso: ISO, stop() { dead = true; } };
}
