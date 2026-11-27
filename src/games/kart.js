// Kart Racer: the race itself runs in 3D on the TV (web/kart). The server runs the menus
// (mode, speed, drivers, course), seats racers, passes phone controls straight to the TV
// (no state round trip, to keep steering snappy), relays per-player events back to phones,
// and keeps Cup points across races.

export const meta = { id: 'kart', name: 'Kart Racer', min: 1, max: 8, blurb: 'Tilt or joystick. 3D split screen for up to 4.', needs: 'webgl' };

// Picked in the in-game menu now, not the lobby.
export const OPTIONS = {};
export const DEFAULTS = {};

const MAX_RACERS = 4;
export const MODES = [
  { id: 'cup', name: 'Cup', blurb: '4 courses in a row · points' },
  { id: 'vs', name: 'Single Race', blurb: 'Pick one course' },
  { id: 'tt', name: 'Time Trial', blurb: 'No CPUs, no items · beat the clock' },
];
export const SPEEDS = [
  { id: 'chill', name: 'Chill', blurb: 'Relaxed · great for first-timers' },
  { id: 'fast', name: 'Fast', blurb: 'The classic' },
  { id: 'turbo', name: 'Turbo', blurb: 'Hold on tight' },
];
export const DRIVERS = [
  { id: 'tabby', name: 'Tabby', color: '#FF9F43', topper: 'cat', spd: 3, acc: 4, hnd: 4 },
  { id: 'bunbun', name: 'Bun Bun', color: '#FF7AC6', topper: 'bunny', spd: 2, acc: 5, hnd: 5 },
  { id: 'duke', name: 'Duke', color: '#9B6BFF', topper: 'crown', spd: 5, acc: 2, hnd: 3 },
  { id: 'rex', name: 'Rex', color: '#3DDC84', topper: 'horns', spd: 5, acc: 3, hnd: 2 },
  { id: 'lulu', name: 'Lulu', color: '#FF5D8F', topper: 'bow', spd: 3, acc: 5, hnd: 4 },
  { id: 'zippy', name: 'Zippy', color: '#4CC9F0', topper: 'antenna', spd: 4, acc: 4, hnd: 3 },
  { id: 'ace', name: 'Ace', color: '#FFC83D', topper: 'cap', spd: 4, acc: 3, hnd: 4 },
  { id: 'grizz', name: 'Grizz', color: '#B07A4F', topper: 'bear', spd: 5, acc: 2, hnd: 2 },
];
export const COURSES = [
  { id: 'meadow', name: 'Meadow Loop', blurb: 'Rolling hills & blossoms', sky: '#7cc8ff', ground: '#5ccf45', path: 'M48.9 47.0L49.2 46.0L49.3 44.2L49.2 41.9L49.0 39.2L48.8 36.4L48.7 33.6L48.7 30.9L48.9 28.7L49.3 26.7L49.8 24.7L50.4 22.9L51.1 21.1L51.8 19.3L52.7 17.7L53.6 16.2L54.6 14.9L55.8 13.6L57.1 12.4L58.5 11.2L60.0 10.2L61.5 9.3L63.0 8.6L64.6 8.2L66.1 8.0L67.7 8.2L69.4 8.6L71.1 9.3L72.9 10.2L74.6 11.2L76.1 12.4L77.6 13.6L78.8 14.9L79.8 16.3L80.7 17.8L81.4 19.6L82.1 21.3L82.6 23.2L83.0 25.1L83.2 26.9L83.4 28.7L83.3 30.4L83.2 32.2L82.9 34.0L82.5 35.8L82.0 37.5L81.4 39.2L80.7 40.9L79.9 42.4L78.9 43.9L77.7 45.2L76.2 46.5L74.7 47.8L73.3 49.0L72.1 50.2L71.2 51.5L70.7 52.8L70.7 54.2L71.0 55.6L71.6 57.0L72.4 58.5L73.4 60.0L74.4 61.4L75.5 62.9L76.5 64.3L77.5 65.6L78.8 66.8L80.3 68.1L81.7 69.3L83.1 70.5L84.2 71.8L85.1 73.1L85.6 74.6L85.8 76.2L85.7 78.0L85.3 80.0L84.8 81.9L84.1 83.8L83.2 85.6L82.2 87.1L81.1 88.4L79.8 89.4L78.2 90.2L76.5 90.9L74.6 91.5L72.7 91.8L70.8 92.0L69.0 92.0L67.3 91.8L65.8 91.3L64.3 90.3L63.0 89.1L61.6 87.7L60.3 86.4L58.9 85.2L57.4 84.3L55.8 83.8L54.1 83.8L52.3 84.3L50.4 85.1L48.5 86.0L46.5 86.9L44.6 87.7L42.7 88.3L40.9 88.4L39.1 88.1L37.3 87.6L35.5 86.9L33.7 86.1L32.0 85.1L30.3 84.0L28.6 82.7L27.1 81.5L25.6 80.1L24.1 78.6L22.6 76.9L21.2 75.2L19.9 73.3L18.7 71.5L17.6 69.6L16.8 67.7L16.0 65.8L15.4 63.8L14.9 61.8L14.5 59.8L14.3 57.8L14.2 55.7L14.3 53.7L14.5 51.6L14.9 49.5L15.4 47.4L16.2 45.1L17.0 42.9L18.0 40.8L19.1 38.8L20.2 37.1L21.4 35.6L22.6 34.2L24.0 33.0L25.4 32.0L27.0 31.1L28.5 30.4L30.0 30.0L31.5 29.7L32.8 29.8L34.1 30.3L35.3 31.1L36.5 32.2L37.7 33.5L38.8 35.0L39.9 36.4L41.0 37.8L42.0 39.0L43.0 40.2L44.1 41.7L45.1 43.3L46.0 44.7L46.9 46.0L47.7 46.9L48.4 47.3Z' },
  { id: 'sunset', name: 'Sunset Bay', blurb: 'Dunes at golden hour', sky: '#ff8a5c', ground: '#f0cf86', path: 'M51.1 47.0L50.8 46.0L50.7 44.2L50.8 41.9L51.0 39.2L51.2 36.4L51.3 33.6L51.3 30.9L51.1 28.7L50.7 26.7L50.2 24.7L49.6 22.9L48.9 21.1L48.2 19.3L47.3 17.7L46.4 16.2L45.4 14.9L44.2 13.6L42.9 12.4L41.5 11.2L40.0 10.2L38.5 9.3L37.0 8.6L35.4 8.2L33.9 8.0L32.3 8.2L30.6 8.6L28.9 9.3L27.1 10.2L25.4 11.2L23.9 12.4L22.4 13.6L21.2 14.9L20.2 16.3L19.3 17.8L18.6 19.6L17.9 21.3L17.4 23.2L17.0 25.1L16.8 26.9L16.6 28.7L16.7 30.4L16.8 32.2L17.1 34.0L17.5 35.8L18.0 37.5L18.6 39.2L19.3 40.9L20.1 42.4L21.1 43.9L22.3 45.2L23.8 46.5L25.3 47.8L26.7 49.0L27.9 50.2L28.8 51.5L29.3 52.8L29.3 54.2L29.0 55.6L28.4 57.0L27.6 58.5L26.6 60.0L25.6 61.4L24.5 62.9L23.5 64.3L22.5 65.6L21.2 66.8L19.7 68.1L18.3 69.3L16.9 70.5L15.8 71.8L14.9 73.1L14.4 74.6L14.2 76.2L14.3 78.0L14.7 80.0L15.2 81.9L15.9 83.8L16.8 85.6L17.8 87.1L18.9 88.4L20.2 89.4L21.8 90.2L23.5 90.9L25.4 91.5L27.3 91.8L29.2 92.0L31.0 92.0L32.7 91.8L34.2 91.3L35.7 90.3L37.0 89.1L38.4 87.7L39.7 86.4L41.1 85.2L42.6 84.3L44.2 83.8L45.9 83.8L47.7 84.3L49.6 85.1L51.5 86.0L53.5 86.9L55.4 87.7L57.3 88.3L59.1 88.4L60.9 88.1L62.7 87.6L64.5 86.9L66.3 86.1L68.0 85.1L69.7 84.0L71.4 82.7L72.9 81.5L74.4 80.1L75.9 78.6L77.4 76.9L78.8 75.2L80.1 73.3L81.3 71.5L82.4 69.6L83.2 67.7L84.0 65.8L84.6 63.8L85.1 61.8L85.5 59.8L85.7 57.8L85.8 55.7L85.7 53.7L85.5 51.6L85.1 49.5L84.6 47.4L83.8 45.1L83.0 42.9L82.0 40.8L80.9 38.8L79.8 37.1L78.6 35.6L77.4 34.2L76.0 33.0L74.6 32.0L73.0 31.1L71.5 30.4L70.0 30.0L68.5 29.7L67.2 29.8L65.9 30.3L64.7 31.1L63.5 32.2L62.3 33.5L61.2 35.0L60.1 36.4L59.0 37.8L58.0 39.0L57.0 40.2L55.9 41.7L54.9 43.3L54.0 44.7L53.1 46.0L52.3 46.9L51.6 47.3Z' },
  { id: 'frosty', name: 'Frosty Peaks', blurb: 'Snowy hairpins', sky: '#bfe3ff', ground: '#f4f8ff', path: 'M47.3 48.6L47.2 46.4L47.3 43.8L47.4 41.0L47.5 38.0L47.6 35.0L47.6 32.1L47.6 29.4L47.3 27.0L47.0 24.8L46.5 22.8L46.0 20.9L45.5 19.2L44.8 17.6L44.0 16.1L43.0 14.7L41.9 13.4L40.6 12.3L39.1 11.2L37.4 10.2L35.6 9.4L33.8 8.7L31.9 8.2L30.1 8.0L28.4 8.0L26.6 8.3L24.7 8.9L22.8 9.7L20.9 10.7L19.1 11.9L17.5 13.2L16.0 14.7L14.8 16.1L13.9 17.8L13.1 19.8L12.4 21.9L12.0 24.1L11.7 26.3L11.6 28.5L11.7 30.6L12.1 32.4L12.9 34.0L13.9 35.4L15.3 36.7L16.9 38.0L18.5 39.2L20.1 40.5L21.6 41.8L23.0 43.2L24.2 44.8L25.6 46.4L27.0 48.1L28.4 49.8L29.5 51.6L30.4 53.3L31.0 55.0L31.1 56.8L30.5 58.4L29.3 60.1L27.7 61.7L25.8 63.4L24.0 65.0L22.3 66.7L21.0 68.5L20.3 70.3L20.1 72.3L20.2 74.4L20.6 76.7L21.3 78.9L22.1 81.1L23.2 83.2L24.4 85.0L25.7 86.5L27.2 87.8L29.0 89.0L31.0 90.0L33.1 90.8L35.3 91.4L37.6 91.8L39.8 92.0L41.9 92.0L44.0 91.6L46.2 91.0L48.5 90.1L50.7 89.1L52.9 87.9L54.9 86.6L56.6 85.2L58.2 83.8L59.3 82.3L60.1 80.6L60.6 78.8L61.0 76.9L61.4 75.0L61.9 73.2L62.6 71.6L63.6 70.3L64.9 69.3L66.4 68.6L68.2 68.0L70.0 67.6L71.9 67.1L73.7 66.6L75.5 65.9L77.1 64.9L78.7 63.6L80.3 62.2L82.0 60.6L83.5 59.0L85.0 57.2L86.2 55.3L87.2 53.4L87.9 51.3L88.3 49.2L88.4 46.7L88.3 44.2L87.9 41.5L87.4 38.9L86.8 36.5L86.0 34.3L85.2 32.4L84.3 30.7L83.1 29.2L81.8 27.8L80.3 26.6L78.8 25.7L77.3 24.9L75.8 24.4L74.4 24.3L73.0 24.5L71.6 25.0L70.1 25.9L68.6 27.0L67.2 28.2L65.9 29.6L64.7 31.0L63.6 32.4L62.7 33.8L61.9 35.4L61.3 37.1L60.7 38.8L60.1 40.6L59.6 42.4L58.9 44.2L58.2 45.9L57.2 47.8L56.2 49.9L55.1 52.1L53.9 54.2L52.8 56.2L51.7 57.8L50.8 58.9L50.0 59.5L49.4 59.4L48.9 58.7L48.5 57.7L48.2 56.3L47.9 54.6L47.7 52.7L47.5 50.7Z' },
  { id: 'neon', name: 'Neon Night', blurb: 'Glow-in-the-dark sweepers', sky: '#241a5e', ground: '#1d2b5a', path: 'M46.2 52.4L46.3 50.5L46.3 48.3L46.3 46.0L46.2 43.5L46.2 41.0L46.1 38.5L46.1 36.0L46.2 33.8L46.3 31.6L46.4 29.4L46.5 27.2L46.7 25.0L46.9 23.0L47.3 21.0L47.8 19.1L48.6 17.5L49.6 15.9L50.8 14.3L52.1 12.8L53.7 11.5L55.3 10.3L56.9 9.3L58.6 8.6L60.2 8.2L61.9 8.0L63.7 8.1L65.7 8.5L67.6 9.0L69.5 9.8L71.3 10.7L72.9 11.7L74.2 12.8L75.3 14.1L76.3 15.7L77.1 17.5L77.8 19.4L78.3 21.3L78.7 23.2L78.9 25.1L78.8 26.8L78.4 28.3L77.6 29.8L76.5 31.2L75.3 32.6L74.1 34.0L73.0 35.4L72.2 36.9L71.8 38.4L71.8 40.1L72.0 41.9L72.4 43.7L73.0 45.5L73.7 47.4L74.6 49.2L75.5 50.8L76.5 52.4L77.7 53.7L79.2 54.9L81.0 55.9L82.8 56.9L84.5 57.9L86.0 59.0L87.3 60.2L88.1 61.7L88.6 63.5L88.8 65.5L88.8 67.7L88.6 70.0L88.1 72.3L87.5 74.4L86.8 76.4L85.8 78.0L84.6 79.4L83.1 80.7L81.4 81.9L79.6 82.9L77.6 83.8L75.6 84.4L73.7 84.8L71.8 85.0L70.0 84.7L68.2 83.9L66.3 82.8L64.4 81.5L62.6 80.2L60.9 79.1L59.3 78.3L57.9 78.0L56.7 78.2L55.8 78.8L55.0 79.6L54.4 80.6L53.7 81.7L53.0 82.9L52.0 84.0L50.9 85.0L49.5 85.9L47.9 87.0L46.3 88.1L44.5 89.2L42.6 90.2L40.7 91.0L38.8 91.6L36.9 92.0L34.9 92.0L32.8 91.8L30.7 91.5L28.5 90.9L26.3 90.2L24.3 89.4L22.3 88.4L20.6 87.3L19.0 86.0L17.5 84.5L16.0 82.7L14.7 80.9L13.5 79.0L12.5 77.0L11.8 75.1L11.3 73.3L11.2 71.6L11.4 69.7L11.8 67.9L12.5 66.1L13.3 64.3L14.1 62.5L15.1 60.9L16.0 59.4L16.9 57.9L17.9 56.3L19.0 54.7L20.2 53.3L21.4 52.0L22.7 51.0L24.0 50.3L25.3 50.1L26.7 50.4L28.1 51.2L29.7 52.5L31.2 54.0L32.8 55.6L34.3 57.1L35.7 58.4L36.9 59.4L38.0 60.1L39.1 60.7L40.1 61.3L41.0 61.7L41.8 62.0L42.6 62.1L43.3 62.0L43.9 61.7L44.4 61.2L44.9 60.4L45.2 59.5L45.5 58.3L45.7 57.1L45.9 55.6L46.1 54.1Z' },
];
const POINTS = [15, 12, 10, 8, 6, 5, 4, 3, 2, 1];
const LAPS = [2, 3, 5];
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const byId = (list, id) => list.find((x) => x.id === id);

export function start(ctx) {
  const seated = ctx.players().slice(0, MAX_RACERS).map((p) => p.id);
  const isRacer = (p) => seated.includes(p.id);
  const pick = new Map(); // pid -> { driver, ready }
  const st = {
    phase: 'menu', // menu | race | standings
    step: 'mode', // mode | speed | driver | course | rules
    mode: 'cup', speed: 'fast', course: 'meadow', laps: 3, items: true,
    cursor: 0, // highlighted tile on shared steps (driven by the captain's phone)
    raceNo: 0, raceId: null,
    lastOrder: [],
  };
  const points = new Map(); // id -> { name, color, pts, human }
  const hud = new Map();
  let ended = false;

  // The captain drives the shared menu: room host if racing, else the first racer.
  function captain() {
    const ps = ctx.players();
    const host = ps.find((p) => p.isHost && isRacer(p));
    return host ? host.id : seated.find((id) => ps.some((p) => p.id === id)) || null;
  }
  const steps = () => (st.mode === 'cup' ? ['mode', 'speed', 'driver', 'rules'] : ['mode', 'speed', 'driver', 'course', 'rules']);
  const listFor = (step) => (step === 'mode' ? MODES : step === 'speed' ? SPEEDS : step === 'course' ? COURSES : []);
  const cupCourses = () => COURSES.map((c) => c.id);

  // Default drivers: everyone starts on a different one
  seated.forEach((id, i) => pick.set(id, { driver: DRIVERS[i % DRIVERS.length].id, ready: false }));

  function racers() {
    const ps = new Map(ctx.allPlayers().map((p) => [p.id, p]));
    return seated.filter((id) => ps.has(id)).map((id) => {
      const p = ps.get(id), d = byId(DRIVERS, pick.get(id).driver);
      return { id, name: p.name, color: d.color, topper: d.topper, driver: d.id, stats: { spd: d.spd, acc: d.acc, hnd: d.hnd } };
    });
  }

  function go(stepName) { st.step = stepName; const l = listFor(stepName); st.cursor = Math.max(0, l.findIndex((x) => x.id === st[stepName])); if (stepName === 'driver') for (const v of pick.values()) v.ready = false; ctx.broadcast(); }
  function next() { const s = steps(); const i = s.indexOf(st.step); if (i < s.length - 1) go(s[i + 1]); else startRace(); }
  function back() { const s = steps(); const i = s.indexOf(st.step); if (i > 0) go(s[i - 1]); }

  function startRace() {
    st.phase = 'race';
    if (st.mode === 'cup') st.course = cupCourses()[st.raceNo];
    st.raceId = Math.random().toString(36).slice(2, 8);
    hud.clear();
    ctx.broadcast();
  }

  function finishRace(order) {
    const names = new Map(ctx.allPlayers().map((p) => [p.id, p]));
    const clean = (order || []).filter((r) => r && typeof r.id === 'string').slice(0, 12).map((r, i) => {
      const p = names.get(r.id);
      return {
        id: r.id, place: i + 1, human: !!p,
        name: p ? p.name : String(r.name || 'CPU').slice(0, 16),
        color: String(r.color || (p && p.color) || '#A9AEC8').slice(0, 9),
        time: typeof r.time === 'number' ? Math.round(r.time * 10) / 10 : null,
        bestLap: typeof r.bestLap === 'number' ? Math.round(r.bestLap * 10) / 10 : null,
      };
    });
    st.lastOrder = clean;
    if (st.mode === 'cup') {
      clean.forEach((r, i) => {
        const cur = points.get(r.id) || { name: r.name, color: r.color, pts: 0, human: r.human };
        cur.pts += POINTS[i] || 0;
        cur.last = POINTS[i] || 0;
        points.set(r.id, cur);
      });
      st.raceNo++;
      st.phase = 'standings';
      ctx.broadcast();
      return;
    }
    endAll(clean.map((r) => ({ ...r, score: r.place, unit: 'place' })));
  }

  function cupTable() {
    return [...points.entries()].map(([id, v]) => ({ id, ...v })).sort((a, b) => b.pts - a.pts);
  }

  function endAll(results) {
    if (ended) return;
    ended = true;
    ctx.end(results);
  }

  function afterStandings() {
    if (st.raceNo < cupCourses().length) startRace();
    else endAll(cupTable().map((r, i) => ({ id: r.id, name: r.name, color: r.color, human: r.human, score: r.pts, unit: 'pts', place: true, rank: i + 1 })));
  }

  return {
    pub() {
      const cap = captain();
      const capP = ctx.allPlayers().find((p) => p.id === cap);
      return {
        kind: 'kart', phase: st.phase, step: st.step, steps: steps(), cursor: st.cursor,
        captain: cap, captainName: capP ? capP.name : '',
        mode: st.mode, speed: st.speed, course: st.course, laps: st.laps, items: st.mode === 'tt' ? false : st.items,
        cpus: st.mode !== 'tt',
        raceNo: st.raceNo, races: st.mode === 'cup' ? cupCourses().length : 1, cup: cupCourses(),
        raceId: st.raceId,
        racers: racers(),
        picks: seated.map((id) => ({ id, driver: pick.get(id).driver, ready: pick.get(id).ready })),
        standings: st.mode === 'cup' ? cupTable() : null,
        lastOrder: st.lastOrder,
        lists: { modes: MODES, speeds: SPEEDS, drivers: DRIVERS, courses: COURSES, laps: LAPS },
        spectators: ctx.players().filter((p) => !isRacer(p)).map((p) => p.name),
      };
    },
    priv(p) {
      return { kind: 'kart', racing: isRacer(p) && st.phase === 'race', racer: isRacer(p), captain: captain() === p.id, hud: hud.get(p.id) || null };
    },
    input(p, m) {
      if (m.t === 'kin') {
        if (st.phase !== 'race' || !isRacer(p)) return;
        ctx.toTv({ t: 'kin', p: p.id, s: clamp(Number(m.s) || 0, -1, 1), g: !!m.g, b: !!m.b, d: !!m.d, i: !!m.i, a: m.a === 'back' ? 'back' : 'front' });
        return;
      }
      if (m.t !== 'kmenu' || !isRacer(p)) return;
      const isCap = captain() === p.id;
      if (st.phase === 'standings') { if (isCap && m.a === 'next') afterStandings(); return; }
      if (st.phase !== 'menu') return;
      const a = m.a;
      if (st.step === 'driver') {
        const mine = pick.get(p.id);
        if (a === 'driver' && byId(DRIVERS, m.v) && !mine.ready) { mine.driver = m.v; ctx.broadcast(); return; }
        if (a === 'ready') { mine.ready = !mine.ready; if (seated.every((id) => !ctx.players().some((x) => x.id === id) || pick.get(id).ready)) next(); else ctx.broadcast(); return; }
        if (a === 'start' && isCap) { next(); return; }
        if (a === 'back' && isCap) { back(); return; }
        return;
      }
      if (!isCap) return;
      if (a === 'back') { back(); return; }
      if (st.step === 'rules') {
        if (a === 'laps' && LAPS.includes(m.v)) { st.laps = m.v; ctx.broadcast(); return; }
        if (a === 'items' && st.mode !== 'tt') { st.items = !!m.v; ctx.broadcast(); return; }
        if (a === 'go') { st.raceNo = 0; points.clear(); startRace(); }
        return;
      }
      const list = listFor(st.step);
      if (a === 'hover' && Number.isInteger(m.v)) { st.cursor = clamp(m.v, 0, list.length - 1); ctx.broadcast(); return; }
      if (a === 'choose' && byId(list, m.v)) { st[st.step] = m.v; st.cursor = list.findIndex((x) => x.id === m.v); next(); }
    },
    tvInput(m) {
      if (m.raceId && m.raceId !== st.raceId) return;
      if (m.k === 'ev' && typeof m.p === 'string') {
        const p = ctx.allPlayers().find((x) => x.id === m.p);
        if (p) ctx.toPlayer(p, { t: 'kev', e: String(m.e || '').slice(0, 12), item: m.item ? String(m.item).slice(0, 8) : null, rank: m.rank | 0, level: m.level | 0, fin: !!m.fin });
      } else if (m.k === 'hud' && Array.isArray(m.list)) {
        for (const h of m.list.slice(0, MAX_RACERS)) {
          const p = ctx.allPlayers().find((x) => x.id === h.p);
          if (!p) continue;
          const v = { rank: h.rank | 0, of: h.of | 0, lap: h.lap | 0, laps: st.laps, item: h.item ? String(h.item).slice(0, 8) : null, n: clamp(h.n | 0, 0, 3), done: !!h.done };
          hud.set(p.id, v);
          ctx.toPlayer(p, { t: 'khud', h: v });
        }
      } else if (m.k === 'done' && Array.isArray(m.order) && st.phase === 'race') {
        finishRace(m.order);
      } else if (m.k === 'unsupported') {
        endAll(null);
      }
    },
    // TV remote: OK / back on the shared menu, and Roku's 'menu' to leave
    tvKey(key) {
      if (key === 'menu' && !ended) { endAll(null); return; }
      if (st.phase === 'standings' && (key === 'ok' || key === 'select')) { afterStandings(); return; }
      if (st.phase !== 'menu') return;
      const list = listFor(st.step);
      if (list.length && (key === 'left' || key === 'up')) { st.cursor = (st.cursor + list.length - 1) % list.length; ctx.broadcast(); }
      else if (list.length && (key === 'right' || key === 'down')) { st.cursor = (st.cursor + 1) % list.length; ctx.broadcast(); }
      else if (list.length && (key === 'ok' || key === 'select')) { st[st.step] = list[st.cursor].id; next(); }
      else if (key === 'back') back();
    },
    join() { ctx.broadcast(); },
    leave() { ctx.broadcast(); },
    quit() { endAll(st.mode === 'cup' && points.size ? cupTable().map((r, i) => ({ id: r.id, name: r.name, color: r.color, human: r.human, score: r.pts, unit: 'pts', place: true, rank: i + 1 })) : []); },
    stop() { ended = true; },
  };
}
