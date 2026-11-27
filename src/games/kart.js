// Kart Racer: the race itself runs in 3D on the TV (web/kart). The server only seats racers,
// passes phone controls straight to the TV (no state round trip, to keep steering snappy),
// relays per-player events back to phones (buzz on hits, item and place on the phone),
// and records the finishing order the TV reports.

export const meta = { id: 'kart', name: 'Kart Racer', min: 1, max: 8, blurb: 'Tilt your phone to steer. 3D split screen for up to 4.', needs: 'webgl' };

export const OPTIONS = {
  laps: [2, 3, 5],
  items: [true, false],
};
export const DEFAULTS = { laps: 3, items: true };

const MAX_RACERS = 4;
const TOPPERS = ['cap', 'cat', 'bunny', 'crown', 'horns', 'bow', 'antenna'];
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

export function start(ctx) {
  const cfg = { ...DEFAULTS, ...(ctx.settings || {}) };
  const seated = ctx.players().slice(0, MAX_RACERS);
  const racers = seated.map((p, i) => ({ id: p.id, name: p.name, color: p.color, topper: TOPPERS[i % TOPPERS.length] }));
  const raceId = Math.random().toString(36).slice(2, 8);
  let phase = 'race'; // race | done
  let ended = false;
  const hud = new Map(); // pid -> { rank, lap, item }

  const isRacer = (p) => racers.some((r) => r.id === p.id);

  function finish(order) {
    if (ended) return;
    ended = true;
    phase = 'done';
    const names = new Map(ctx.allPlayers().map((p) => [p.id, p]));
    const results = (order || [])
      .filter((r) => r && typeof r.id === 'string')
      .slice(0, 12)
      .map((r, i) => {
        const p = names.get(r.id);
        return {
          id: r.id,
          name: p ? p.name : String(r.name || 'CPU').slice(0, 16),
          color: p ? p.color : String(r.color || '#A9AEC8').slice(0, 9),
          score: i + 1,
          unit: 'place',
          place: true,
          human: !!p,
          time: typeof r.time === 'number' ? Math.round(r.time * 10) / 10 : null,
          bestLap: typeof r.bestLap === 'number' ? Math.round(r.bestLap * 10) / 10 : null,
        };
      });
    ctx.end(results);
  }

  return {
    pub() {
      return { kind: 'kart', phase, raceId, laps: cfg.laps, items: cfg.items, racers, spectators: ctx.players().filter((p) => !isRacer(p)).map((p) => p.name) };
    },
    priv(p) {
      return { kind: 'kart', racing: isRacer(p), hud: hud.get(p.id) || null };
    },
    // Phone controls: forwarded straight to the TV.
    input(p, m) {
      if (m.t !== 'kin' || phase !== 'race' || !isRacer(p)) return;
      ctx.toTv({
        t: 'kin',
        p: p.id,
        s: clamp(Number(m.s) || 0, -1, 1),
        g: !!m.g, b: !!m.b, d: !!m.d, i: !!m.i,
      });
    },
    // Messages from the TV: race events for phones, and the final order.
    tvInput(m) {
      if (m.raceId && m.raceId !== raceId) return;
      if (m.k === 'ev' && typeof m.p === 'string') {
        const p = ctx.allPlayers().find((x) => x.id === m.p);
        if (p) ctx.toPlayer(p, { t: 'kev', e: String(m.e || ''), item: m.item ? String(m.item) : null, rank: m.rank | 0 });
      } else if (m.k === 'hud' && Array.isArray(m.list)) {
        for (const h of m.list.slice(0, MAX_RACERS)) {
          const p = ctx.allPlayers().find((x) => x.id === h.p);
          if (!p) continue;
          const v = { rank: h.rank | 0, of: h.of | 0, lap: h.lap | 0, laps: cfg.laps, item: h.item ? String(h.item).slice(0, 8) : null, done: !!h.done };
          hud.set(p.id, v);
          ctx.toPlayer(p, { t: 'khud', h: v });
        }
      } else if (m.k === 'done' && Array.isArray(m.order)) {
        finish(m.order);
      } else if (m.k === 'unsupported') {
        // This TV can't draw 3D: back to the lobby with a note.
        ended = true;
        ctx.end(null);
      }
    },
    // Roku and other TVs without 3D send 'menu' from their notice screen.
    tvKey(key) { if (key === 'menu' && !ended) { ended = true; ctx.end(null); } },
    join() {},
    leave() {},
    quit() { finish([]); },
    stop() { ended = true; },
  };
}
