// Room server: players, lobby with a game menu, and hand-off to a game module.
// Transport-agnostic: handleSocket() takes any standard WebSocket (Node `ws` or Neon's upgradeWebSocket).
import * as poker from './games/poker.js';

const GAMES = { poker };
const GAME_LIST = [{ ...poker.meta, options: poker.OPTIONS }];
const ROOM_IDLE_MS = 30 * 60 * 1000;
const CODE_CHARS = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
const COLORS = ['#FFC83D', '#5EE6C8', '#8FB4FF', '#FF9F6B', '#FF7AB6', '#B79CFF', '#9BE36B', '#F4F5FA'];
const MAX_PLAYERS = 8;

const rooms = new Map();

function makeCode() {
  for (;;) {
    let c = '';
    for (let i = 0; i < 4; i++) c += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
    if (!rooms.has(c)) return c;
  }
}

export function send(ws, msg) {
  if (ws && ws.readyState === 1) {
    try { ws.send(typeof msg === 'string' ? msg : JSON.stringify(msg)); } catch { /* closing */ }
  }
}

function createRoom(code) {
  const room = {
    code: code || makeCode(),
    tvs: new Set(),
    players: new Map(),
    phase: 'lobby', // lobby | game | final
    selected: 'poker',
    settings: { poker: { ...poker.DEFAULTS } }, // table options the host picks per game
    game: null,
    results: null,
    lastActive: Date.now(),
  };
  rooms.set(room.code, room);
  return room;
}

// Used by the cross-copy relay: make sure a room exists here under a given code, and check if it still does.
export function ensureRoom(code) { return rooms.get(code) || createRoom(code); }
export function roomExists(code) { return rooms.has(code); }
export function newCode() { return makeCode(); }

function hostId(room) {
  for (const p of room.players.values()) if (p.connected) return p.id;
  return null;
}

function playerList(room) {
  const host = hostId(room);
  return [...room.players.values()].map((p) => ({ id: p.id, name: p.name, color: p.color, connected: p.connected, isHost: p.id === host }));
}

// What a game module gets to talk to the room.
function makeCtx(room) {
  return {
    players: () => [...room.players.values()].filter((p) => p.connected),
    allPlayers: () => [...room.players.values()],
    broadcast: () => broadcast(room),
    toTv: (msg) => { const s = JSON.stringify(msg); for (const tv of room.tvs) send(tv, s); },
    toAll: (msg) => {
      const s = JSON.stringify(msg);
      for (const tv of room.tvs) send(tv, s);
      for (const p of room.players.values()) send(p.ws, s);
    },
    toPlayer: (p, msg) => send(p.ws, msg),
    fx: (name, pid) => {
      const s = JSON.stringify({ t: 'fx', n: name, pid: pid || null });
      for (const tv of room.tvs) send(tv, s);
      for (const p of room.players.values()) send(p.ws, s);
    },
    end: (results) => endGame(room, results),
  };
}

function broadcast(room) {
  const g = room.game;
  const s = {
    code: room.code,
    phase: room.phase,
    selected: room.selected,
    games: GAME_LIST,
    settings: room.settings,
    players: playerList(room),
    notice: room.notice || '',
    g: g ? g.pub(false) : null,
    results: room.phase === 'final' ? room.results : null,
  };
  room.notice = '';
  // The TV may get a fuller picture than phones (game modules decide via pub(full)).
  const tvMsg = JSON.stringify({ t: 'state', s: { ...s, g: g ? g.pub(true) : null } });
  for (const tv of room.tvs) send(tv, tvMsg);
  const host = hostId(room);
  for (const p of room.players.values()) {
    if (!p.ws) continue;
    send(p.ws, { t: 'state', s, you: { id: p.id, name: p.name, color: p.color, isHost: p.id === host, g: g ? g.priv(p) : null } });
  }
}

function startGame(room, id) {
  const mod = GAMES[id || room.selected];
  if (!mod || room.phase === 'game') return;
  const n = [...room.players.values()].filter((p) => p.connected).length;
  if (n < mod.meta.min) {
    room.notice = `${mod.meta.name} needs at least ${mod.meta.min} players`;
    broadcast(room);
    return;
  }
  room.selected = mod.meta.id;
  room.phase = 'game';
  room.results = null;
  room.game = mod.start({ ...makeCtx(room), settings: room.settings[mod.meta.id] });
  broadcast(room);
}

function endGame(room, results) {
  if (room.game) room.game.stop();
  room.game = null;
  room.phase = 'final';
  room.results = results;
  broadcast(room);
}

function backToLobby(room) {
  if (room.game) room.game.stop();
  room.game = null;
  room.phase = 'lobby';
  room.results = null;
  broadcast(room);
}

function cleanName(name) {
  return String(name || '').replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, 12) || 'Player';
}

function pickColor(room, wanted, self) {
  const taken = new Set([...room.players.values()].filter((p) => p !== self && p.connected).map((p) => p.color));
  if (COLORS.includes(wanted) && !taken.has(wanted)) return wanted;
  return COLORS.find((c) => !taken.has(c)) || COLORS[0];
}

// TV remote: left/right picks a game in the menu, OK starts / continues.
function tvKey(room, key) {
  if (room.phase === 'lobby') {
    const i = GAME_LIST.findIndex((g) => g.id === room.selected);
    if (key === 'left' || key === 'right') {
      room.selected = GAME_LIST[(i + (key === 'right' ? 1 : GAME_LIST.length - 1)) % GAME_LIST.length].id;
      broadcast(room);
    } else if (key === 'ok') startGame(room);
  } else if (room.phase === 'final' && key === 'ok') backToLobby(room);
  else if (room.phase === 'game' && room.game && room.game.tvKey) room.game.tvKey(key);
}

export function handleSocket(ws) {
  let room = null;
  let role = null;
  let pid = null;

  ws.addEventListener('message', (event) => {
    let m;
    try { m = JSON.parse(typeof event.data === 'string' ? event.data : Buffer.from(event.data).toString()); } catch { return; }
    if (!m || typeof m.t !== 'string' || m.t === 'pong') return;

    if (m.t === 'tv:hello') {
      const wanted = typeof m.room === 'string' ? m.room.toUpperCase().slice(0, 4) : '';
      room = (wanted && rooms.get(wanted)) || createRoom(/^[A-Z0-9]{4}$/.test(wanted) ? wanted : undefined);
      role = 'tv';
      room.tvs.add(ws);
      room.lastActive = Date.now();
      send(ws, { t: 'tv:room', code: room.code });
      broadcast(room);
      return;
    }

    if (m.t === 'join') {
      const r = rooms.get(String(m.room || '').toUpperCase().trim());
      if (!r) { send(ws, { t: 'error', msg: 'Room not found. Check the code on the TV.' }); return; }
      room = r;
      role = 'player';
      let p = typeof m.pid === 'string' ? r.players.get(m.pid) : null;
      if (!p) {
        if ([...r.players.values()].filter((x) => x.connected).length >= MAX_PLAYERS) { send(ws, { t: 'error', msg: `Room is full (${MAX_PLAYERS} players).` }); return; }
        p = { id: Math.random().toString(36).slice(2, 10) };
        r.players.set(p.id, p);
      }
      p.name = cleanName(m.name);
      p.color = pickColor(r, m.color, p);
      if (p.ws && p.ws !== ws) { try { p.ws.close(); } catch { /* ignore */ } }
      p.ws = ws;
      const wasNew = !p.connected;
      p.connected = true;
      pid = p.id;
      r.lastActive = Date.now();
      send(ws, { t: 'joined', pid: p.id, room: r.code });
      if (r.game && r.game.join) r.game.join(p);
      if (wasNew) makeCtx(r).fx('join', p.id);
      broadcast(r);
      return;
    }

    if (!room) return;
    room.lastActive = Date.now();
    if (role === 'tv' && m.t === 'tv:key') { tvKey(room, String(m.k)); return; }

    const me = pid ? room.players.get(pid) : null;
    if (!me) return;
    const isHost = hostId(room) === me.id;

    if (m.t === 'pick' && isHost && room.phase === 'lobby' && GAMES[m.game]) { room.selected = m.game; broadcast(room); return; }
    if (m.t === 'set' && isHost && room.phase === 'lobby') {
      const opts = GAME_LIST.find((g) => g.id === m.game)?.options;
      if (opts && opts[m.key] && opts[m.key].includes(m.value)) { room.settings[m.game][m.key] = m.value; broadcast(room); }
      return;
    }
    if (m.t === 'start' && isHost) { if (room.phase === 'lobby') startGame(room, m.game); else if (room.phase === 'final') backToLobby(room); return; }
    if (m.t === 'quit' && isHost && room.phase === 'game' && room.game) { room.game.quit ? room.game.quit() : backToLobby(room); return; }
    if (m.t === 'menu' && isHost && room.phase !== 'game') { backToLobby(room); return; }
    if (room.phase === 'game' && room.game) room.game.input(me, m);
  });

  function leave() {
    if (!room) return;
    if (role === 'tv') room.tvs.delete(ws);
    if (role === 'player' && pid) {
      const p = room.players.get(pid);
      if (p && p.ws === ws) {
        p.connected = false;
        p.ws = null;
        if (room.phase === 'lobby') room.players.delete(pid);
        if (room.game && room.game.leave) room.game.leave(p);
      }
    }
    broadcast(room);
  }

  ws.addEventListener('close', leave);
  ws.addEventListener('error', () => {});
}

// Keepalive so proxies don't drop quiet sockets, plus idle-room cleanup.
const beat = setInterval(() => {
  const now = Date.now();
  for (const room of rooms.values()) {
    const live = room.tvs.size > 0 || [...room.players.values()].some((p) => p.connected);
    if (!live && now - room.lastActive > ROOM_IDLE_MS) {
      if (room.game) room.game.stop();
      rooms.delete(room.code);
      continue;
    }
    for (const tv of room.tvs) send(tv, '{"t":"ping"}');
    for (const p of room.players.values()) send(p.ws, '{"t":"ping"}');
  }
}, 20000);
beat.unref?.();
