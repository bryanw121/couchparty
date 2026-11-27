// Light Cycles: Tron-style snakes. Last one riding wins the round.
export const meta = { id: 'cycles', name: 'Light Cycles', min: 1, max: 8, blurb: 'Swipe to turn. Don\'t hit a trail.' };

const W = 64, H = 36, TICK_MS = 85, ROUNDS = 5;
const DIRS = { U: [0, -1], D: [0, 1], L: [-1, 0], R: [1, 0] };
const OPP = { U: 'D', D: 'U', L: 'R', R: 'L' };

export function start(ctx) {
  const scores = new Map(); // pid -> points
  let round = 0, phase = 'countdown', count = 3, bikes = [], grid = null, timers = [], loop = null, winner = null;

  const later = (fn, ms) => { timers.push(setTimeout(fn, ms)); };

  function spawn(n) {
    // Left and right edges facing inward; extra riders on top and bottom edges.
    const spots = [];
    const perSide = Math.ceil(n / 4) || 1;
    for (let k = 0; k < perSide; k++) {
      // Opposite riders are offset so nobody starts on a head-on collision course.
      const y = Math.round(((k + 1) / (perSide + 1)) * H) - 4, x = Math.round(((k + 1) / (perSide + 1)) * W) - 8;
      spots.push([3, y, 'R'], [W - 4, H - 1 - y, 'L'], [x, 3, 'D'], [W - 1 - x, H - 4, 'U']);
    }
    return spots.slice(0, n);
  }

  function startRound() {
    round += 1;
    winner = null;
    grid = new Uint8Array(W * H);
    const ps = ctx.players().slice(0, 8);
    const spots = spawn(ps.length);
    bikes = ps.map((p, i) => {
      const [x, y, dir] = spots[i];
      grid[y * W + x] = i + 1;
      if (!scores.has(p.id)) scores.set(p.id, 0);
      return { pid: p.id, name: p.name, color: p.color, x, y, dir, queue: [], alive: true, trail: [x, y] };
    });
    phase = 'countdown';
    count = 3;
    ctx.broadcast();
    ctx.fx('count');
    later(() => { count = 2; ctx.toAll({ t: 'cyc', c: 2 }); ctx.fx('count'); }, 1000);
    later(() => { count = 1; ctx.toAll({ t: 'cyc', c: 1 }); ctx.fx('count'); }, 2000);
    later(() => {
      phase = 'play';
      ctx.fx('go');
      ctx.broadcast();
      loop = setInterval(tick, TICK_MS);
    }, 3000);
  }

  function tick() {
    const moves = [], dead = [], next = new Map();
    for (let i = 0; i < bikes.length; i++) {
      const b = bikes[i];
      if (!b.alive) continue;
      if (b.queue.length) b.dir = b.queue.shift();
      const [dx, dy] = DIRS[b.dir];
      const nx = b.x + dx, ny = b.y + dy;
      if (nx < 0 || ny < 0 || nx >= W || ny >= H || grid[ny * W + nx]) { dead.push(i); continue; }
      const key = ny * W + nx;
      if (next.has(key)) { dead.push(i); dead.push(next.get(key)); continue; } // head-on
      next.set(key, i);
    }
    for (const [key, i] of next) {
      if (dead.includes(i)) continue;
      const b = bikes[i];
      b.x = key % W; b.y = Math.floor(key / W);
      grid[key] = i + 1;
      b.trail.push(b.x, b.y);
      moves.push(i, b.x, b.y);
    }
    const already = bikes.filter((b) => !b.alive).length;
    const uniqueDead = [...new Set(dead)];
    for (const i of uniqueDead) {
      bikes[i].alive = false;
      scores.set(bikes[i].pid, (scores.get(bikes[i].pid) || 0) + already); // points = riders outlasted
    }
    ctx.toTv({ t: 'cy', m: moves, d: uniqueDead });
    if (uniqueDead.length) {
      for (const i of uniqueDead) ctx.fx('crash', bikes[i].pid);
      ctx.broadcast();
    }
    const alive = bikes.filter((b) => b.alive);
    if ((bikes.length > 1 && alive.length <= 1) || alive.length === 0) endRound(alive[0]);
  }

  function endRound(survivor) {
    clearInterval(loop); loop = null;
    if (survivor) {
      scores.set(survivor.pid, (scores.get(survivor.pid) || 0) + bikes.length - 1 + 1); // outlasted everyone, +1 bonus
      winner = survivor.pid;
      ctx.fx('win', survivor.pid);
    }
    phase = 'roundover';
    ctx.broadcast();
    later(() => {
      if (round >= ROUNDS) ctx.end(results());
      else startRound();
    }, 3500);
  }

  function results() {
    return [...scores.entries()]
      .map(([pid, score]) => { const p = ctx.allPlayers().find((x) => x.id === pid); return { id: pid, name: p ? p.name : '?', color: p ? p.color : '#fff', score, unit: 'pts' }; })
      .sort((a, b) => b.score - a.score);
  }

  later(startRound, 300);

  return {
    pub(full) {
      return {
        kind: 'cycles', W, H, round, rounds: ROUNDS, phase, count, winner,
        bikes: bikes.map((b, i) => ({ i, pid: b.pid, name: b.name, color: b.color, alive: b.alive, score: scores.get(b.pid) || 0, trail: full ? b.trail : undefined })),
      };
    },
    priv(p) {
      const b = bikes.find((x) => x.pid === p.id);
      return { riding: !!b, alive: b ? b.alive : false, score: scores.get(p.id) || 0, rank: results().findIndex((r) => r.id === p.id) + 1 };
    },
    input(p, m) {
      if (m.t !== 'dir' || !DIRS[m.d]) return;
      const b = bikes.find((x) => x.pid === p.id);
      if (!b || !b.alive) return;
      const last = b.queue.length ? b.queue[b.queue.length - 1] : b.dir;
      if (m.d === last || m.d === OPP[last] || b.queue.length >= 3) return;
      b.queue.push(m.d);
    },
    leave() {},
    quit() { ctx.end(results()); },
    stop() { timers.forEach(clearTimeout); clearInterval(loop); },
  };
}
