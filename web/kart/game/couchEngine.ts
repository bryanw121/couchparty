import * as THREE from 'three';
import { RacerConfig, RacerState, InputState } from '../types';
import { TrackSystem } from './track';
import { createKartMesh, KartMeshHandles } from './kartModel';
import { ParticleSystem } from './particles';
import { KartPhysicsEngine } from './kartPhysics';
import { AIController } from './aiController';
import { CameraController } from './camera';
import { soundEngine } from './audio';
import { ItemSystem, ItemEvent, ItemKind } from './items';
import { courseById } from './tracks';
import { CourseMusic } from './music';
import { applyCartoonStyle, blobShadow, toonify, toonGradient, BoostPad } from './style';

// One TV, up to four players on phones, split screen like a console kart racer.
// The race runs here on the TV; phones only send their controls.

export interface CouchPlayer { id: string; name: string; color: string; topper?: string; driver?: string; stats?: { spd: number; acc: number; hnd: number } }
export interface PadInput { steer: number; gas: boolean; brake: boolean; drift: boolean; item: boolean }
export interface CouchResult { id: string; name: string; color: string; human: boolean; rank: number; time: number | null; bestLap: number | null }
export interface CouchOptions {
  players: CouchPlayer[];
  laps?: number;
  items?: boolean;
  course?: string; // meadow | sunset | frosty | neon
  speed?: 'chill' | 'fast' | 'turbo';
  cpus?: boolean; // false for Time Trial
  quality?: 'low' | 'high';
  music?: boolean; // force music in autopilot/demo
  autopilot?: boolean; // demo / attract mode: the computer drives the player karts too
  onFinish?: (results: CouchResult[]) => void;
  onEvent?: (e: ItemEvent | { type: string; racer: string; lap?: number; rank?: number; final?: boolean; level?: number }) => void;
}

const CPU: Array<{ id: string; name: string; color: string; accent: string; topper: string; spd: number; acc: number; hnd: number }> = [
  { id: 'tabby', name: 'Tabby', color: '#FF9F43', accent: '#fff3d6', topper: 'cat', spd: 3, acc: 4, hnd: 4 },
  { id: 'bunbun', name: 'Bun Bun', color: '#FF7AC6', accent: '#fdf2f8', topper: 'bunny', spd: 2, acc: 5, hnd: 5 },
  { id: 'duke', name: 'Duke', color: '#9B6BFF', accent: '#fcd34d', topper: 'crown', spd: 5, acc: 2, hnd: 3 },
  { id: 'rex', name: 'Rex', color: '#3DDC84', accent: '#ecfdf5', topper: 'horns', spd: 5, acc: 3, hnd: 2 },
  { id: 'lulu', name: 'Lulu', color: '#FF5D8F', accent: '#ffe4ec', topper: 'bow', spd: 3, acc: 5, hnd: 4 },
  { id: 'zippy', name: 'Zippy', color: '#4CC9F0', accent: '#f0f9ff', topper: 'antenna', spd: 4, acc: 4, hnd: 3 },
  { id: 'ace', name: 'Ace', color: '#FFC83D', accent: '#fff7d6', topper: 'cap', spd: 4, acc: 3, hnd: 4 },
  { id: 'grizz', name: 'Grizz', color: '#B07A4F', accent: '#f4f1e6', topper: 'bear', spd: 5, acc: 2, hnd: 2 },
];
const SPEED_MULT = { chill: 0.8, fast: 1, turbo: 1.2 };
function tune(spd: number, acc: number, hnd: number, mult: number) {
  return { weight: spd >= 5 ? 3 : acc >= 5 ? 1 : 2, topSpeed: (41.5 + (spd - 3) * 1.1) * mult, acceleration: (30 + (acc - 3) * 2.6) * mult, handling: (3.2 + (hnd - 3) * 0.18) * (mult > 1 ? 1.08 : 1) };
}
const TOPPERS = ['cap', 'cat', 'bunny', 'crown', 'horns', 'bow', 'antenna'];
const GRID = 8;

const ICONS: Record<ItemKind, string> = {
  banana: '<svg viewBox="0 0 40 40"><path d="M7 12 C8 30 28 36 35 22 C25 25 15 22 12 9 Z" fill="#ffd93b" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><path d="M12 9 L10 4" stroke="#5a3a12" stroke-width="3" stroke-linecap="round"/><path d="M14 20 C18 26 24 28 30 26" fill="none" stroke="#fff6b0" stroke-width="2" stroke-linecap="round"/></svg>',
  green: '<svg viewBox="0 0 40 40"><ellipse cx="20" cy="36" rx="10" ry="2.5" fill="rgba(0,0,0,.35)"/><circle cx="20" cy="20" r="14" fill="#3ddc84" stroke="#1b1b3a" stroke-width="2.5"/><circle cx="14" cy="14" r="4" fill="#fff" opacity=".85"/><circle cx="16" cy="21" r="2.2" fill="#1b1b3a"/><circle cx="24" cy="21" r="2.2" fill="#1b1b3a"/><path d="M16 26 Q20 29 24 26" fill="none" stroke="#1b1b3a" stroke-width="2" stroke-linecap="round"/></svg>',
  red: '<svg viewBox="0 0 40 40"><g transform="rotate(45 20 20)"><path d="M20 3 C26 9 26 22 25 28 H15 C14 22 14 9 20 3 Z" fill="#ff3b3b" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><path d="M20 3 C23 6 24.5 9 25 12 H15 C15.5 9 17 6 20 3 Z" fill="#fff" stroke="#1b1b3a" stroke-width="2" stroke-linejoin="round"/><rect x="15" y="17" width="10" height="3" fill="#ffc83d"/><path d="M15 22 L10 30 L15 28 Z M25 22 L30 30 L25 28 Z" fill="#fff" stroke="#1b1b3a" stroke-width="2" stroke-linejoin="round"/><path d="M17 29 L20 37 L23 29 Z" fill="#ffa31a"/></g></svg>',
  blue: '<svg viewBox="0 0 40 40"><path d="M10 24 A6 6 0 0 1 11 13 A8 8 0 0 1 26 10 A7 7 0 0 1 31 24 Z" fill="#5b6bd6" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><path d="M15 17 L18 18.5 M25 17 L22 18.5" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><path d="M21 24 L16 31 H20 L17 38 L25 28 H21 L23 24 Z" fill="#fff15a" stroke="#1b1b3a" stroke-width="1.5" stroke-linejoin="round"/></svg>',
  boost: '<svg viewBox="0 0 40 40"><rect x="12" y="8" width="16" height="24" rx="5" fill="#ff7a00" stroke="#1b1b3a" stroke-width="2.5"/><rect x="15" y="4" width="10" height="5" rx="2" fill="#c9d3e6" stroke="#1b1b3a" stroke-width="2"/><path d="M21 12 L15 21 H19 L17 28 L25 18 H21 Z" fill="#ffe14d" stroke="#1b1b3a" stroke-width="1.5" stroke-linejoin="round"/><path d="M15 33 L20 39 L25 33 Z" fill="#ffd34d"/></svg>',
  star: '<svg viewBox="0 0 40 40"><defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff7ac6"/><stop offset=".5" stop-color="#ffd34d"/><stop offset="1" stop-color="#5ee6c8"/></linearGradient></defs><path d="M20 3 L25 14.5 L37.5 15.5 L28 23.5 L31 36 L20 29.5 L9 36 L12 23.5 L2.5 15.5 L15 14.5 Z" fill="url(#sg)" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="34" cy="6" r="2" fill="#fff"/><circle cx="6" cy="31" r="1.5" fill="#fff"/></svg>',
  bolt: '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="17" fill="#2b2f6b" stroke="#1b1b3a" stroke-width="2"/><path d="M24 4 L9 22 H18 L14 37 L31 16 H22 Z" fill="#fff15a" stroke="#1b1b3a" stroke-width="2" stroke-linejoin="round"/></svg>',
  fake: '<svg viewBox="0 0 40 40"><rect x="7" y="13" width="26" height="22" rx="3" fill="#ff5d8f" stroke="#1b1b3a" stroke-width="2.5"/><rect x="17.5" y="13" width="5" height="22" fill="#d62839"/><rect x="7" y="21" width="26" height="5" fill="#d62839"/><path d="M20 13 C14 4 8 9 14 13 M20 13 C26 4 32 9 26 13" fill="none" stroke="#d62839" stroke-width="3" stroke-linecap="round"/><text x="20" y="31" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="9" fill="#fff">!</text></svg>',
  coin: '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="#ffc83d" stroke="#1b1b3a" stroke-width="2.5"/><circle cx="20" cy="20" r="10.5" fill="none" stroke="#e0a400" stroke-width="2"/><path d="M20 12 L22.4 17.2 L28 17.6 L23.8 21.2 L25.1 26.6 L20 23.7 L14.9 26.6 L16.2 21.2 L12 17.6 L17.6 17.2 Z" fill="#fff6c2"/></svg>',
  horn: '<svg viewBox="0 0 40 40"><path d="M6 17 h6 l12 -9 v24 l-12 -9 h-6 z" fill="#ff5d5d" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><rect x="9" y="23" width="4" height="8" rx="1.5" fill="#c9d3e6" stroke="#1b1b3a" stroke-width="2"/><path d="M29 14 Q33 20 29 26 M32.5 10 Q39 20 32.5 30" fill="none" stroke="#1b1b3a" stroke-width="2.5" stroke-linecap="round"/></svg>',
  bomb: '<svg viewBox="0 0 40 40"><circle cx="18" cy="24" r="12" fill="#23233a" stroke="#1b1b3a" stroke-width="2.5"/><rect x="15" y="9" width="7" height="5" rx="1.5" fill="#8a8fa8" stroke="#1b1b3a" stroke-width="2"/><path d="M20 9 Q22 4 27 5" fill="none" stroke="#c9a46a" stroke-width="2.5"/><path d="M29 2 l1.5 3 3 0.5 -2.3 2 0.6 3.2 -2.8 -1.6 -2.8 1.6 0.6 -3.2 -2.3 -2 3 -0.5 z" fill="#ffd34d"/><circle cx="13" cy="19" r="3" fill="#fff" opacity=".6"/></svg>',
  ink: '<svg viewBox="0 0 40 40"><path d="M20 6 C26 6 25 12 30 11 C36 10 36 17 32 19 C37 22 34 29 28 27 C28 33 22 36 18 31 C13 35 7 31 10 26 C4 25 4 18 9 17 C6 12 12 8 15 11 C15 7 17 6 20 6 Z" fill="#7b4cc9" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="34" cy="31" r="2.5" fill="#7b4cc9"/><circle cx="6" cy="9" r="2" fill="#7b4cc9"/><circle cx="16" cy="17" r="3" fill="#fff" opacity=".5"/></svg>',
  golden: '<svg viewBox="0 0 40 40"><rect x="12" y="8" width="16" height="24" rx="5" fill="#ffc83d" stroke="#1b1b3a" stroke-width="2.5"/><rect x="15" y="4" width="10" height="5" rx="2" fill="#fff1a8" stroke="#1b1b3a" stroke-width="2"/><path d="M21 12 L15 21 H19 L17 28 L25 18 H21 Z" fill="#fff" stroke="#1b1b3a" stroke-width="1.5" stroke-linejoin="round"/><path d="M33 8 l1 2.5 2.5 1 -2.5 1 -1 2.5 -1 -2.5 -2.5 -1 2.5 -1 z M7 26 l0.8 2 2 0.8 -2 0.8 -0.8 2 -0.8 -2 -2 -0.8 2 -0.8 z" fill="#fff"/><path d="M15 33 L20 39 L25 33 Z" fill="#ff7a00"/></svg>',
  ride: '<svg viewBox="0 0 40 40"><g transform="rotate(-35 20 20)"><path d="M20 3 C26 9 26 22 25 29 H15 C14 22 14 9 20 3 Z" fill="#f4f5fa" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="20" cy="15" r="3.5" fill="#4cc9f0" stroke="#1b1b3a" stroke-width="2"/><path d="M15 21 L9 30 L15 28 Z M25 21 L31 30 L25 28 Z" fill="#ff7a00" stroke="#1b1b3a" stroke-width="2" stroke-linejoin="round"/><path d="M16 30 L20 39 L24 30 Z" fill="#ffd34d"/></g></svg>',
  ghost: '<svg viewBox="0 0 40 40"><path d="M8 34 V18 C8 10 13 5 20 5 C27 5 32 10 32 18 V34 L28 31 L24 34 L20 31 L16 34 L12 31 Z" fill="#f4f5fa" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><ellipse cx="15.5" cy="17" rx="2.5" ry="3.5" fill="#1b1b3a"/><ellipse cx="24.5" cy="17" rx="2.5" ry="3.5" fill="#1b1b3a"/><ellipse cx="20" cy="25" rx="3" ry="2" fill="#1b1b3a"/></svg>',
};

function ordinal(n: number) { return n + (n === 1 ? 'st' : n === 2 ? 'nd' : n === 3 ? 'rd' : 'th'); }
function fmtTime(t: number | null) {
  if (t == null) return '--';
  const m = Math.floor(t / 60);
  const s = t - m * 60;
  return m + ':' + (s < 10 ? '0' : '') + s.toFixed(1);
}

interface Racer {
  state: RacerState;
  handles: KartMeshHandles;
  ai?: AIController;
  human?: { idx: number; cam: CameraController; pad: PadInput; itemWas: boolean; gasAt: number; hud: HTMLElement; map: HTMLCanvasElement; banner: HTMLElement; ink: HTMLElement; finishedShown: boolean; lastRank?: number; lastBump?: number; driftLvl?: number; wasDrifting?: boolean; onDirt?: boolean; rankCalm?: number };
}

export class CouchEngine {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private track: TrackSystem;
  private particles = new ParticleSystem();
  private physics: KartPhysicsEngine;
  private items: ItemSystem | null = null;
  private racers: Racer[] = [];
  private humans: Racer[] = [];
  private overview: CameraController; // fills the spare quarter with 3 players
  private overlay: HTMLElement;
  private banner: HTMLElement;
  private clock = new THREE.Clock(false);
  private raf = 0;
  private phase: 'countdown' | 'racing' | 'done' | 'replay' | 'podium' = 'countdown';
  private countdown = 0;
  private step = -1;
  private laps: number;
  private firstHumanFinishAt = -1;
  private elapsed = 0;
  private disposed = false;
  private finalLapMusic = false;
  private music: any = null;
  private style: { pads: BoostPad[]; update: (t: number) => void };
  private gradient = toonGradient();
  private shadows = new Map<string, THREE.Mesh>();
  private padCooldown = new Map<string, number>();

  constructor(private container: HTMLElement, private opts: CouchOptions) {
    this.laps = opts.laps || 3;
    const many = Math.min(opts.players.length, 4) > 1;
    this.renderer = new THREE.WebGLRenderer({ antialias: !many, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(opts.quality === 'high' ? Math.min(window.devicePixelRatio, 1.5) : 1);
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.shadowMap.enabled = !many && opts.quality === 'high';
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.setScissorTest(true);
    container.appendChild(this.renderer.domElement);
    this.renderer.domElement.style.display = 'block';

    const th = courseById(opts.course).theme;
    this.scene.add(new THREE.AmbientLight(0xffffff, th.ambient));
    const sun = new THREE.DirectionalLight(th.sunColor, th.sun);
    sun.position.set(100, 150, 80);
    sun.castShadow = this.renderer.shadowMap.enabled;
    sun.shadow.mapSize.set(1024, 1024);
    const d = 160;
    Object.assign(sun.shadow.camera, { left: -d, right: d, top: d, bottom: -d, near: 10, far: 400 });
    this.scene.add(sun);
    this.scene.add(new THREE.HemisphereLight(th.hemiSky, th.ground, 0.55));

    this.track = new TrackSystem(this.scene, opts.course);
    this.scene.add(this.particles.group);
    this.physics = new KartPhysicsEngine(this.track, this.particles);
    this.physics.totalLaps = this.laps;
    if (opts.items !== false) {
      this.items = new ItemSystem(this.scene, this.track);
      this.items.onEvent = (e) => this.onItemEvent(e);
    }
    this.style = applyCartoonStyle(this.scene, this.track);
    // Sharp road and curb stripes at low viewing angles (otherwise red/white blurs to pink)
    const aniso = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());
    this.scene.traverse((o) => { const m = (o as THREE.Mesh).material as any; if (m && m.map) { m.map.anisotropy = aniso; m.map.needsUpdate = true; } });
    this.overview = new CameraController(1);
    this.overview.setView('topdown');

    this.overlay = document.createElement('div');
    this.overlay.style.cssText = 'position:absolute;inset:0;pointer-events:none;font-family:Inter,Segoe UI,Roboto,sans-serif;color:#fff';
    container.style.position = container.style.position || 'relative';
    container.appendChild(this.overlay);
    this.banner = document.createElement('div');
    this.banner.style.cssText = 'position:absolute;left:50%;top:42%;transform:translate(-50%,-50%);font:900 120px/1 "Space Grotesk",Inter,sans-serif;text-shadow:0 6px 0 rgba(0,0,0,.35),0 0 30px rgba(0,0,0,.4);transition:transform .15s;white-space:nowrap';
    this.overlay.appendChild(this.banner);

    this.build();
    window.addEventListener('resize', this.onResize);
  }

  private build() {
    const players = this.opts.players.slice(0, 4);
    const configs: RacerConfig[] = [];
    const mult = SPEED_MULT[this.opts.speed || 'fast'] || 1;
    players.forEach((p, i) => {
      const st = p.stats || { spd: 3, acc: 3, hnd: 3 };
      configs.push({
        id: p.id, name: p.name, isPlayer: true, audioLead: i === 0,
        color: p.color, accentColor: '#ffffff', helmetColor: p.color, visorColor: '#0f172a',
        number: i + 1, ...tune(st.spd, st.acc, st.hnd, mult), driftMultiplier: 1.35,
        topper: p.topper || TOPPERS[i % TOPPERS.length],
      });
    });
    const used = new Set(players.map((p) => (p.driver || p.color).toLowerCase()));
    for (const c of this.opts.cpus === false ? [] : CPU) {
      if (configs.length >= GRID) break;
      if (used.has(c.id) || used.has(c.color.toLowerCase())) continue;
      const t = tune(c.spd, c.acc, c.hnd, mult);
      configs.push({
        id: 'cpu-' + c.id, name: c.name, isPlayer: false,
        color: c.color, accentColor: c.accent, helmetColor: c.color, visorColor: '#0f172a',
        number: configs.length + 1, topSpeed: t.topSpeed * (0.95 + Math.random() * 0.04), acceleration: t.acceleration * 0.95,
        handling: t.handling, weight: t.weight, driftMultiplier: 1.3, aiAggression: 0.9 + Math.random() * 0.3, topper: c.topper,
      });
    }
    // Humans start at the back like a console Grand Prix
    const order = configs.filter((c) => !c.isPlayer).concat(configs.filter((c) => c.isPlayer));
    order.forEach((cfg, idx) => {
      const handles = createKartMesh(cfg);
      handles.driverHead.scale.setScalar(1.35); // big cartoon heads
      toonify(handles.rootGroup, this.gradient);
      this.scene.add(handles.rootGroup);
      const shadow = blobShadow();
      this.scene.add(shadow);
      this.shadows.set(cfg.id, shadow);
      const state: RacerState = {
        config: cfg,
        position: { x: idx % 2 ? 3.5 : -3.5, y: 0.1, z: -6 - idx * 5.5 },
        rotation: { y: Math.PI, pitch: 0, roll: 0 },
        speed: 0, angularVelocity: 0, steerAngle: 0, isDrifting: false, driftDirection: 0, driftTime: 0, driftLevel: 0,
        boostTimer: 0, boostMultiplier: 1, currentLap: 1, lapDistance: 0, totalDistance: 0, splineProgress: 0,
        checkpointIndex: 0, lapTimes: [], currentLapTime: 0, bestLapTime: null, totalRaceTime: 0, rank: idx + 1,
        isFinished: false, invulnerableTimer: 0, spinOutTimer: 0, shrinkTimer: 0, starTimer: 0,
      };
      const r: Racer = { state, handles };
      if (cfg.isPlayer) {
        const hud = document.createElement('div');
        hud.style.cssText = 'position:absolute;box-sizing:border-box;padding:2.2vh 2vw;display:flex;flex-direction:column;justify-content:space-between';
        this.overlay.appendChild(hud);
        const map = document.createElement('canvas');
        map.width = map.height = 256;
        map.style.cssText = 'position:absolute;pointer-events:none;filter:drop-shadow(0 4px 8px rgba(0,0,0,.45))';
        this.overlay.appendChild(map);
        const ink = document.createElement('div');
        ink.style.cssText = 'position:absolute;pointer-events:none;opacity:0;background:' +
          'radial-gradient(circle at 30% 40%, #3b1f6e 0 12%, transparent 13%),radial-gradient(circle at 62% 55%, #4a2a85 0 16%, transparent 17%),radial-gradient(circle at 45% 70%, #2e1957 0 10%, transparent 11%),radial-gradient(circle at 75% 30%, #3b1f6e 0 9%, transparent 10%),radial-gradient(circle at 20% 75%, #4a2a85 0 8%, transparent 9%)';
        this.overlay.appendChild(ink);
        const banner = document.createElement('div');
        banner.style.cssText = 'position:absolute;pointer-events:none;text-align:center;font:italic 900 64px/1 "Space Grotesk",Inter,sans-serif;color:#fff;-webkit-text-stroke:5px #1b1b3a;paint-order:stroke fill;opacity:0;white-space:nowrap';
        this.overlay.appendChild(banner);
        r.human = { idx: this.humans.length, cam: new CameraController(1), pad: { steer: 0, gas: false, brake: false, drift: false, item: false }, itemWas: false, gasAt: -1, hud, map, banner, ink, finishedShown: false };
        this.humans.push(r);
      } else {
        r.ai = new AIController(this.track, state);
      }
      this.racers.push(r);
    });
    this.onResize();
  }

  // ---------- controls from phones ----------
  public setInput(id: string, pad: Partial<PadInput>) {
    const r = this.humans.find((h) => h.state.config.id === id);
    if (!r || !r.human) return;
    if (pad.gas && !r.human.pad.gas) r.human.gasAt = this.countdown;
    Object.assign(r.human.pad, pad);
  }

  // Place, lap and item for each phone player (sent to their phone a few times a second).
  public hudInfo() {
    return this.humans.map((r) => {
      const h = this.items ? this.items.held.get(r.state.config.id) : undefined;
      return {
        p: r.state.config.id,
        rank: r.state.rank,
        of: this.racers.length,
        lap: Math.min(r.state.currentLap, this.laps),
        item: h ? (h.kind || 'rolling') : null,
        n: h && h.kind ? h.count : 0,
        done: r.state.isFinished,
      };
    });
  }

  public start() {
    soundEngine.init();
    this.clock.start();
    this.loop();
  }

  public dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.raf);
    soundEngine.stopEngine();
    this.music?.stop();
    window.removeEventListener('resize', this.onResize);
    this.renderer.dispose();
    this.container.innerHTML = '';
  }

  // ---------- layout ----------
  private views(): Array<{ x: number; y: number; w: number; h: number }> {
    const W = this.container.clientWidth, H = this.container.clientHeight;
    const n = this.humans.length;
    if (n <= 1) return [{ x: 0, y: 0, w: W, h: H }];
    if (n === 2) return [{ x: 0, y: H / 2, w: W, h: H / 2 }, { x: 0, y: 0, w: W, h: H / 2 }];
    return [
      { x: 0, y: H / 2, w: W / 2, h: H / 2 }, { x: W / 2, y: H / 2, w: W / 2, h: H / 2 },
      { x: 0, y: 0, w: W / 2, h: H / 2 }, { x: W / 2, y: 0, w: W / 2, h: H / 2 },
    ];
  }

  private onResize = () => {
    const W = this.container.clientWidth, H = this.container.clientHeight;
    this.renderer.setSize(W, H);
    const vs = this.views();
    this.humans.forEach((r, i) => {
      const v = vs[i];
      r.human!.cam.onResize(v.w, v.h);
      Object.assign(r.human!.hud.style, { left: v.x + 'px', top: H - v.y - v.h + 'px', width: v.w + 'px', height: v.h + 'px' });
      // Mini map: lower left, above the name tag
      const size = Math.round(Math.min(v.h * 0.36, v.w * 0.2, 210));
      const pad = Math.round(Math.min(v.w, v.h) * 0.03);
      const nameTag = this.humans.length > 1 ? 44 : 60;
      Object.assign(r.human!.ink.style, { left: v.x + 'px', top: H - v.y - v.h + 'px', width: v.w + 'px', height: v.h + 'px' });
      Object.assign(r.human!.banner.style, { left: v.x + 'px', width: v.w + 'px', top: H - v.y - v.h + v.h * 0.26 + 'px', fontSize: Math.round(Math.min(v.h * 0.13, 72)) + 'px' });
      Object.assign(r.human!.map.style, { width: size + 'px', height: size + 'px', left: v.x + pad + 'px', top: H - v.y - size - pad - nameTag + 'px' });
    });
    if (vs[3] && this.humans.length === 3) this.overview.onResize(vs[3].w, vs[3].h);
    this.banner.style.fontSize = (this.humans.length > 2 ? 80 : 120) + 'px';
  };

  // ---------- loop ----------
  private loop = () => {
    if (this.disposed) return;
    this.raf = requestAnimationFrame(this.loop);
    const delta = Math.min(this.clock.getDelta(), 0.05);
    this.elapsed += delta;
    if (this.phase === 'replay') this.replayFrame();
    else if (this.phase === 'podium') this.podiumFrame(delta);
    else this.update(delta);
    this.render();
  };

  private update(delta: number) {
    this.track.update(this.elapsed, delta);
    this.tickCountdown(delta);
    const states = this.racers.map((r) => r.state);
    const uses = new Set<string>();
    const idle: InputState = { throttle: false, brake: false, steerLeft: false, steerRight: false, drift: false, respawn: false, cameraToggle: false };

    for (const r of this.racers) {
      let input = idle;
      if (this.phase !== 'countdown') {
        if ((r.state.rideTimer || 0) > 0) {
          if (!r.ai) r.ai = new AIController(this.track, r.state);
          input = r.ai.update(delta, states);
        } else if (r.human && this.opts.autopilot) {
          if (!r.ai) r.ai = new AIController(this.track, r.state);
          input = r.ai.update(delta, states);
        } else if (r.human) {
          const p = r.human.pad;
          if (r.state.isFinished) input = r.ai ? r.ai.update(delta, states) : { ...idle, throttle: true };
          else input = { throttle: p.gas, brake: p.brake, steerLeft: false, steerRight: false, steer: p.steer, drift: p.drift, respawn: false, cameraToggle: false };
          if (this.items && this.phase === 'racing') {
            if (p.item && !r.human.itemWas) this.items.press(r.state.config.id, states);
            if (!p.item && r.human.itemWas) this.items.release(r.state.config.id, states);
          }
          r.human.itemWas = p.item;
        } else if (r.ai) {
          input = r.ai.update(delta, states);
          if ((r.state.inkTimer || 0) > 0) input = { ...input, steer: (input.steer || 0) + Math.sin(this.elapsed * 3 + r.state.position.x) * 0.5 };
        }
      }
      const lapBefore = r.state.currentLap;
      this.physics.updateRacer(r.state, input, r.handles, delta, states);
      if (r.state.starTimer && r.state.starTimer > 0) {
        const hue = (this.elapsed * 2) % 1;
        r.handles.bodyGroup.traverse((o) => { const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial; if (m && m.emissive) { m.emissive.setHSL(hue, 1, 0.45); } });
      } else if (r.state.starTimer !== undefined && r.state.starTimer <= 0 && r.state.starTimer > -1) {
        r.handles.bodyGroup.traverse((o) => { const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial; if (m && m.emissive) m.emissive.setRGB(0, 0, 0); });
        r.state.starTimer = -1;
      }
      if (this.phase === 'racing' && !r.state.isFinished) {
        r.state.currentLapTime += delta;
        r.state.totalRaceTime += delta;
        if (r.state.currentLap !== lapBefore && r.state.currentLap <= this.laps) {
          this.opts.onEvent?.({ type: 'lap', racer: r.state.config.id, lap: r.state.currentLap, final: r.state.currentLap === this.laps });
          if (r.human) this.say(r, r.state.currentLap === this.laps ? 'FINAL LAP!' : 'LAP ' + r.state.currentLap, r.state.currentLap === this.laps ? '#ffc83d' : '#ffffff', 1500);
          if (r.human && r.state.currentLap === this.laps && !this.finalLapMusic) { this.finalLapMusic = true; this.music?.finalLap(); }
        }
        if (r.state.currentLap > this.laps) {
          r.state.isFinished = true;
          r.state.finishRank = this.racers.filter((o) => o.state.isFinished).length;
          if (r.state.finishRank === 1) { this.winnerFrame = this.frames.length; this.winnerId = r.state.config.id; }
          if (r.human) {
            if (!r.ai) r.ai = new AIController(this.track, r.state);
            if (this.firstHumanFinishAt < 0) this.firstHumanFinishAt = this.elapsed;
            this.opts.onEvent?.({ type: 'finish', racer: r.state.config.id, rank: r.state.finishRank });
            this.say(r, r.state.finishRank === 1 ? '1ST PLACE!' : 'FINISH!', r.state.finishRank === 1 ? '#ffc83d' : '#ffffff', 2200);
            soundEngine.playFinishFanfare();
          }
        }
      }
    }

    // Standings: finished racers keep their finishing place, the rest by distance
    const sorted = [...this.racers].sort((a, b) => {
      const fa = a.state.finishRank || 99, fb = b.state.finishRank || 99;
      if (fa !== fb) return fa - fb;
      return b.state.totalDistance - a.state.totalDistance;
    });
    sorted.forEach((r, i) => { r.state.rank = i + 1; });
    if (this.phase === 'racing') { this.detectMoments(); this.record(); }

    if (this.items && this.phase !== 'countdown') {
      this.items.update(delta, this.elapsed, states, uses, (id, s) => {
        const r = this.racers.find((x) => x.state.config.id === id);
        if (r) r.handles.rootGroup.scale.setScalar(THREE.MathUtils.lerp(r.handles.rootGroup.scale.x, s, delta * 6));
      });
    }
    this.style.update(this.elapsed);
    for (const r of this.racers) {
      const ghost = (r.state.ghostTimer || 0) > 0;
      if (ghost !== !!r.handles.rootGroup.userData.ghost) {
        r.handles.rootGroup.userData.ghost = ghost;
        r.handles.rootGroup.traverse((o) => { const m = (o as THREE.Mesh).material as THREE.Material & { opacity: number }; if (m) { m.transparent = ghost || m.transparent; m.opacity = ghost ? 0.25 : 1; } });
      }
      if (r.human) {
        const ink = (r.state.inkTimer || 0) > 0;
        const el = r.human.ink;
        if (ink && el.style.opacity !== '1') { el.style.transition = 'opacity .15s'; el.style.opacity = '1'; }
        else if (!ink && el.style.opacity === '1') { el.style.transition = 'opacity 1.2s'; el.style.opacity = '0'; }
      }
      const sh = this.shadows.get(r.state.config.id);
      if (sh) { sh.position.set(r.state.position.x, r.state.position.y + 0.06, r.state.position.z); sh.rotation.z = r.state.rotation.y; sh.scale.setScalar(r.handles.rootGroup.scale.x); }
      const cd = (this.padCooldown.get(r.state.config.id) || 0) - delta;
      this.padCooldown.set(r.state.config.id, cd);
      if (cd <= 0 && this.phase === 'racing') {
        for (const pad of this.style.pads) {
          const dx = r.state.position.x - pad.x, dz = r.state.position.z - pad.z;
          if (dx * dx + dz * dz < 7) {
            r.state.boostTimer = Math.max(r.state.boostTimer, 1.1);
            r.state.boostMultiplier = Math.max(r.state.boostMultiplier, 1.45);
            r.state.speed = Math.max(r.state.speed, r.state.config.topSpeed * 1.15);
            this.padCooldown.set(r.state.config.id, 0.8);
            if (r.human && r.state.config.audioLead) soundEngine.playBoostSound();
            break;
          }
        }
      }
    }
    this.particles.update(delta);
    for (const r of this.humans) r.human!.cam.update(r.state, delta);
    if (this.humans.length === 3) this.overview.update(sorted[0].state, delta);
    this.drawHud();
    this.drawMaps();

    // End: every human finished, or 25 s after the first one did
    if (this.phase === 'racing') {
      const allDone = this.humans.every((h) => h.state.isFinished);
      if (allDone || (this.firstHumanFinishAt >= 0 && this.elapsed - this.firstHumanFinishAt > 25)) this.finish(sorted);
    }
  }

  private tickCountdown(delta: number) {
    if (this.phase !== 'countdown' && this.countdown > 5) return;
    this.countdown += delta;
    const t = this.countdown;
    const step = t < 1 ? 0 : t < 2 ? 1 : t < 3 ? 2 : t < 4 ? 3 : t < 5 ? 4 : 5;
    if (step === this.step) return;
    this.step = step;
    const text = ['', '3', '2', '1', 'GO!', ''][step];
    this.banner.textContent = text;
    this.banner.style.color = step === 4 ? '#5ee6c8' : '#ffffff';
    this.banner.style.transform = 'translate(-50%,-50%) scale(1.25)';
    setTimeout(() => { this.banner.style.transform = 'translate(-50%,-50%) scale(1)'; }, 120);
    if (step >= 1 && step <= 3) { soundEngine.playCountdownBeep(false); this.track.setStartingLights(step); }
    if (step === 4) {
      soundEngine.playCountdownBeep(true);
      this.track.setStartingLights(4);
      this.phase = 'racing';
      if (!this.opts.autopilot || this.opts.music) { this.music = new CourseMusic(this.opts.course || 'meadow'); this.music.start(); }
      // Rocket start: pressed gas during the last half second before GO
      for (const r of this.humans) {
        const at = r.human!.gasAt;
        if (r.human!.pad.gas && at >= 3.5 && at < 4.05) this.physics.triggerStartBoost(r.state);
      }
    }
    if (step === 5) this.track.setStartingLights(0);
  }

  private finish(sorted: Racer[]) {
    this.phase = 'done';
    const results: CouchResult[] = sorted.map((r, i) => ({
      id: r.state.config.id, name: r.state.config.name, color: r.state.config.color, human: !!r.human,
      rank: i + 1, time: r.state.isFinished ? r.state.totalRaceTime : null, bestLap: r.state.bestLapTime,
    }));
    this.banner.textContent = 'FINISH!';
    this.banner.style.color = '#ffc83d';
    this.finalOrder = sorted;
    this.music?.stop();
    soundEngine.stopEngine();
    // Short replay of the winner crossing the line, then the podium, then results
    setTimeout(() => this.startReplay(), 1800);
    setTimeout(() => this.startPodium(), 1800 + 6500);
    setTimeout(() => { this.phase = 'done'; this.opts.onFinish?.(results); }, 1800 + 6500 + 7000);
  }

  // ---------- replay + podium ----------
  private frames: Float32Array[] = [];
  private winnerFrame = -1;
  private winnerId = '';
  private finalOrder: Racer[] = [];
  private cine = new THREE.PerspectiveCamera(50, 16 / 9, 0.1, 1500);
  private replayAt = 0;
  private confetti: THREE.Mesh[] = [];
  private labels: HTMLElement[] = [];
  private recTick = 0;
  private record() {
    if (++this.recTick % 2) return; // ~30 frames a second
    const f = new Float32Array(this.racers.length * 5);
    this.racers.forEach((r, i) => { const s = r.state; f.set([s.position.x, s.position.y, s.position.z, s.rotation.y + (s.slideAngle || 0) * 0.6, s.rotation.roll], i * 5); });
    this.frames.push(f);
  }
  private hideHud(hide: boolean) {
    for (const r of this.humans) { r.human!.hud.style.display = r.human!.map.style.display = r.human!.banner.style.display = hide ? 'none' : ''; }
  }
  private startReplay() {
    if (this.disposed || this.winnerFrame < 0) return;
    this.phase = 'replay';
    this.replayAt = Math.max(0, this.winnerFrame - 120);
    this.hideHud(true);
    this.banner.innerHTML = '<span style="font-size:.35em;letter-spacing:.1em;color:#ff5d5d">● REPLAY</span>';
    this.banner.style.top = '8%';
    this.banner.style.left = '10%';
  }
  private replayFrame() {
    const end = Math.min(this.frames.length - 1, this.winnerFrame + 45);
    const i = Math.min(end, Math.floor(this.replayAt));
    const f = this.frames[i];
    if (!f) return;
    this.racers.forEach((r, k) => {
      const g = r.handles.rootGroup;
      g.position.set(f[k * 5], f[k * 5 + 1], f[k * 5 + 2]);
      g.rotation.y = f[k * 5 + 3];
      g.rotation.z = f[k * 5 + 4];
      const sh = this.shadows.get(r.state.config.id);
      if (sh) { sh.position.set(f[k * 5], f[k * 5 + 1] + 0.06, f[k * 5 + 2]); sh.rotation.z = f[k * 5 + 3]; }
    });
    const wi = this.racers.findIndex((r) => r.state.config.id === this.winnerId);
    const wx = f[wi * 5], wy = f[wi * 5 + 1], wz = f[wi * 5 + 2], wh = f[wi * 5 + 3];
    const t = (i - (this.winnerFrame - 120)) / 165;
    if (t < 0.5) {
      // low tracking shot from the side
      const side = 7, back = 3 - t * 6;
      this.cine.position.set(wx + Math.cos(wh) * side - Math.sin(wh) * back, wy + 1.4, wz - Math.sin(wh) * side - Math.cos(wh) * back);
    } else {
      // fixed camera beside the finish gantry
      const P = this.track.trackPoints, p0 = P[P.length - 6];
      this.cine.position.set(p0.x - p0.normalX * 15, p0.y + 3.5, p0.z - p0.normalZ * 15);
    }
    this.cine.lookAt(wx, wy + 0.8, wz);
    this.replayAt += 0.75; // slight slow motion
  }
  private startPodium() {
    if (this.disposed) return;
    this.phase = 'podium';
    soundEngine.playFinishFanfare();
    const top = this.finalOrder.slice(0, 3);
    const p0 = this.track.trackPoints[Math.floor(this.track.trackPoints.length * 0.06)];
    const base = new THREE.Vector3(p0.x, p0.y, p0.z);
    const hd = Math.atan2(p0.tangentX, p0.tangentZ) + Math.PI; // podium faces back down the straight
    const fx = Math.sin(hd), fz = Math.cos(hd), rx = Math.cos(hd), rz = -Math.sin(hd);
    this.racers.forEach((r) => { if (!top.includes(r)) { r.handles.rootGroup.visible = false; const sh = this.shadows.get(r.state.config.id); if (sh) sh.visible = false; } });
    const blocks = [[0, 2.4, '#ffc83d'], [-4.6, 1.6, '#c9d3e6'], [4.6, 1.0, '#e08a4c']] as const;
    this.podiumKarts = [];
    top.forEach((r, i) => {
      const [off, h, col] = blocks[i];
      const block = new THREE.Mesh(new THREE.BoxGeometry(4.2, h, 4.2), new THREE.MeshStandardMaterial({ color: col as string, roughness: 0.4 }));
      block.position.set(base.x + rx * off, base.y + h / 2, base.z + rz * off);
      block.rotation.y = hd;
      const num = document.createElement('canvas'); num.width = num.height = 128;
      const g = num.getContext('2d')!; g.fillStyle = '#1b1b3a'; g.font = 'italic 900 96px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(String(i + 1), 64, 70);
      const plate = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(num), transparent: true }));
      plate.position.set(block.position.x + fx * 2.12, base.y + h / 2, block.position.z + fz * 2.12);
      plate.rotation.y = hd;
      this.scene.add(block, plate);
      const kg = r.handles.rootGroup;
      kg.visible = true;
      kg.position.set(block.position.x, base.y + h, block.position.z);
      kg.rotation.set(0, hd, 0);
      this.podiumKarts.push({ r, y: base.y + h, i });
      const lab = document.createElement('div');
      lab.style.cssText = 'position:absolute;transform:translate(-50%,-100%);text-align:center;font:italic 900 34px "Space Grotesk",Inter,sans-serif;color:#fff;-webkit-text-stroke:4px #1b1b3a;paint-order:stroke fill;white-space:nowrap';
      lab.innerHTML = '<span style="color:' + (['#ffc83d', '#dfe7ff', '#f0a46b'][i]) + '">' + ['1ST', '2ND', '3RD'][i] + '</span> ' + escapeHtml(r.state.config.name);
      this.overlay.appendChild(lab);
      this.labels.push(lab);
    });
    this.cine.position.set(base.x + fx * 12, base.y + 4.5, base.z + fz * 12);
    this.cine.lookAt(base.x, base.y + 2, base.z);
    this.podiumCenter = base;
    this.podiumDir = { fx, fz };
    // confetti
    const cols = [0xff5d8f, 0xffc83d, 0x4cc9f0, 0x5ee6c8, 0x9b6bff, 0xffffff];
    for (let i = 0; i < 160; i++) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(0.25, 0.4), new THREE.MeshBasicMaterial({ color: cols[i % cols.length], side: THREE.DoubleSide }));
      m.position.set(base.x + (Math.random() - 0.5) * 18, base.y + 6 + Math.random() * 10, base.z + (Math.random() - 0.5) * 18);
      m.userData.v = 1.5 + Math.random() * 2;
      this.scene.add(m);
      this.confetti.push(m);
    }
    const w = top[0];
    this.banner.innerHTML = escapeHtml(w.state.config.name) + ' WINS!';
    this.banner.style.color = '#ffc83d';
    this.banner.style.top = '9%';
    this.banner.style.left = '50%';
    this.banner.style.fontSize = '72px';
  }
  private podiumKarts: Array<{ r: Racer; y: number; i: number }> = [];
  private podiumCenter = new THREE.Vector3();
  private podiumDir = { fx: 0, fz: 1 };
  private podiumFrame(delta: number) {
    const t = this.elapsed;
    for (const k of this.podiumKarts) {
      const g = k.r.handles.rootGroup;
      const hop = k.i === 0 ? Math.abs(Math.sin(t * 5)) * 0.9 : Math.abs(Math.sin(t * 4 + k.i)) * 0.4;
      g.position.y = k.y + hop;
      if (k.i === 0) g.rotation.y += delta * (Math.sin(t * 0.7) > 0.6 ? 6 : 0);
      k.r.handles.driverHead.rotation.z = Math.sin(t * 8 + k.i) * 0.25;
      const v = g.position.clone(); v.y += 3.2; v.project(this.cine);
      const W = this.container.clientWidth, H = this.container.clientHeight;
      const lab = this.labels[k.i];
      if (lab) { lab.style.left = (v.x * 0.5 + 0.5) * W + 'px'; lab.style.top = (-v.y * 0.5 + 0.5) * H + 'px'; }
    }
    for (const m of this.confetti) {
      m.position.y -= m.userData.v * delta;
      m.rotation.x += delta * 4; m.rotation.y += delta * 3;
      if (m.position.y < this.podiumCenter.y) m.position.y += 16;
    }
    // slow orbit
    const a = Math.sin(t * 0.3) * 0.35;
    const { fx, fz } = this.podiumDir;
    const cx = fx * Math.cos(a) - fz * Math.sin(a), cz = fx * Math.sin(a) + fz * Math.cos(a);
    this.cine.position.set(this.podiumCenter.x + cx * 12, this.podiumCenter.y + 4.5, this.podiumCenter.z + cz * 12);
    this.cine.lookAt(this.podiumCenter.x, this.podiumCenter.y + 2.2, this.podiumCenter.z);
  }

  private onItemEvent(e: ItemEvent) {
    this.opts.onEvent?.(e);
    const me = this.humans.find((r) => r.state.config.id === e.racer);
    const by = e.by ? this.humans.find((r) => r.state.config.id === e.by) : undefined;
    if (e.type === 'hit') {
      if (me) this.say(me, e.item === 'blue' ? 'ZAPPED!' : 'HIT!', '#ff5d5d');
      if (by && by !== me) this.say(by, 'NICE HIT!', '#5ee6c8');
    } else if (e.type === 'block' && me) this.say(me, 'BLOCKED!', '#8fb4ff', 900);
    else if (e.type === 'bolt') { for (const r of this.humans) if (r !== me && !((r.state.starTimer || 0) > 0)) this.say(r, 'SHRUNK!', '#fff15a'); }
    else if (e.type === 'use' && me && e.item === 'star') this.say(me, 'STAR POWER!', '#ffd34d');
    else if (e.type === 'use' && me && e.item === 'ride') this.say(me, 'ROCKET RIDE!', '#ff7a00');
    else if (e.type === 'use' && me && e.item === 'ghost') this.say(me, 'GHOST!', '#e8ecff');
    else if (e.type === 'use' && me && e.item === 'coin') this.say(me, '+2 COINS', '#ffc83d', 700);
    else if (e.type === 'use' && me && e.item === 'golden') this.say(me, 'GOLDEN TURBO!', '#ffc83d', 700);
    else if (e.type === 'ink' && me) this.say(me, 'SPLAT!', '#c9a8ff');
    else if (e.type === 'steal') { if (me) this.say(me, 'STOLEN!', '#ff5d5d'); if (by && by !== me) this.say(by, 'GOT IT!', '#5ee6c8'); }
    else if (e.type === 'horn' && me) this.say(me, 'HONK!', '#ffffff', 700);
  }

  // ---------- drawing ----------
  private render() {
    if (this.phase === 'replay' || this.phase === 'podium') {
      const W = this.container.clientWidth, H = this.container.clientHeight;
      this.cine.aspect = W / H; this.cine.updateProjectionMatrix();
      this.renderer.setViewport(0, 0, W, H);
      this.renderer.setScissor(0, 0, W, H);
      this.renderer.render(this.scene, this.cine);
      return;
    }
    const vs = this.views();
    this.humans.forEach((r, i) => {
      const v = vs[i];
      this.renderer.setViewport(v.x, v.y, v.w, v.h);
      this.renderer.setScissor(v.x, v.y, v.w, v.h);
      this.renderer.render(this.scene, r.human!.cam.camera);
    });
    if (this.humans.length === 3) {
      const v = vs[3];
      this.renderer.setViewport(v.x, v.y, v.w, v.h);
      this.renderer.setScissor(v.x, v.y, v.w, v.h);
      this.renderer.render(this.scene, this.overview.camera);
    }
  }


  // ---------- announcer banners + phone moments ----------
  private say(r: Racer, text: string, color = '#ffffff', ms = 1100) {
    const b = r.human!.banner;
    b.textContent = text;
    b.style.color = color;
    b.animate([
      { opacity: 0, transform: 'scale(2.2) rotate(-6deg)' },
      { opacity: 1, transform: 'scale(1) rotate(-4deg)', offset: 0.15 },
      { opacity: 1, transform: 'scale(1.05) rotate(-4deg)', offset: 0.75 },
      { opacity: 0, transform: 'scale(0.9) translateY(-20px) rotate(-4deg)' },
    ], { duration: ms, easing: 'cubic-bezier(.2,.9,.3,1.2)', fill: 'forwards' });
  }
  private emit(e: any) { this.opts.onEvent?.(e); }
  private detectMoments() {
    for (const r of this.humans) {
      const h = r.human!, s = r.state, id = s.config.id;
      if (s.isFinished) continue;
      // overtakes (debounced so jostling doesn't spam)
      h.rankCalm = (h.rankCalm || 0) - 1;
      if (h.lastRank !== undefined && s.rank < h.lastRank && h.rankCalm <= 0) { this.say(r, s.rank === 1 ? 'TAKE THE LEAD!' : 'OVERTAKE!', '#5ee6c8'); this.emit({ type: 'overtake', racer: id, rank: s.rank }); h.rankCalm = 45; }
      h.lastRank = s.rank;
      // bumps
      if (s.bumpedAt && s.bumpedAt !== h.lastBump) { h.lastBump = s.bumpedAt; this.emit({ type: 'bump', racer: id }); }
      // drift boost level released
      if (s.isDrifting) h.driftLvl = s.driftLevel;
      if (h.wasDrifting && !s.isDrifting && (h.driftLvl || 0) > 0) {
        const lv = h.driftLvl || 1;
        this.say(r, lv === 3 ? 'ULTRA BOOST!' : lv === 2 ? 'SUPER BOOST!' : 'BOOST!', lv === 3 ? '#c084fc' : lv === 2 ? '#fb923c' : '#38bdf8', 800);
        this.emit({ type: 'mtboost', racer: id, level: lv });
        h.driftLvl = 0;
      }
      if (s.isDrifting && s.driftLevel > (h.driftLvl === undefined ? 0 : -1)) { /* level tracked above */ }
      h.wasDrifting = s.isDrifting;
      // shortcut entry
      const onDirt = this.track.onShortcut(s.position.x, s.position.z) !== null && this.track.getClosestTrackPoint(s.position.x, s.position.z).distanceToCenter > this.track.roadWidth / 2 + 0.5;
      if (onDirt && !h.onDirt) this.say(r, s.boostTimer > 0 ? 'SHORTCUT!' : 'DIRT! BOOST THROUGH', '#ffc83d', 900);
      h.onDirt = onDirt;
    }
  }

  // ---------- mini map ----------
  private mapBase: HTMLCanvasElement | null = null;
  private mapXf = { cx: 0, cz: 0, k: 1 };
  private toMap(x: number, z: number): [number, number] { return [128 + (x - this.mapXf.cx) * this.mapXf.k, 128 + (z - this.mapXf.cz) * this.mapXf.k]; }
  private buildMapBase() {
    const pts = this.track.trackPoints;
    let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9;
    for (const p of pts) { x0 = Math.min(x0, p.x); x1 = Math.max(x1, p.x); z0 = Math.min(z0, p.z); z1 = Math.max(z1, p.z); }
    this.mapXf = { cx: (x0 + x1) / 2, cz: (z0 + z1) / 2, k: 220 / Math.max(x1 - x0, z1 - z0) };
    const c = document.createElement('canvas');
    c.width = c.height = 256;
    const g = c.getContext('2d')!;
    const path = () => { g.beginPath(); pts.forEach((p, i) => { const [x, y] = this.toMap(p.x, p.z); if (i) g.lineTo(x, y); else g.moveTo(x, y); }); g.closePath(); };
    g.lineJoin = 'round'; g.lineCap = 'round';
    path(); g.strokeStyle = '#1b1b3a'; g.lineWidth = 22; g.stroke();
    path(); g.strokeStyle = '#ffffff'; g.lineWidth = 15; g.stroke();
    path(); g.strokeStyle = '#c9d3e6'; g.lineWidth = 9; g.stroke();
    // checkered start line
    const p0 = pts[0], [sx, sy] = this.toMap(p0.x, p0.z);
    const ang = Math.atan2(p0.normalZ, p0.normalX);
    g.save(); g.translate(sx, sy); g.rotate(ang);
    for (let i = -3; i < 3; i++) for (let j = 0; j < 2; j++) { g.fillStyle = (i + j) % 2 ? '#1b1b3a' : '#ffffff'; g.fillRect(i * 3, j * 3 - 3, 3, 3); }
    g.restore();
    this.mapBase = c;
  }
  private drawMaps() {
    if (!this.mapBase) this.buildMapBase();
    const pulse = 0.5 + 0.5 * Math.sin(this.elapsed * 6);
    // back to front: CPUs, then other players, then the leader on top
    const order = [...this.racers].sort((a, b) => (a.human ? 1 : 0) - (b.human ? 1 : 0) || b.state.rank - a.state.rank);
    for (const me of this.humans) {
      const g = me.human!.map.getContext('2d')!;
      g.clearRect(0, 0, 256, 256);
      g.drawImage(this.mapBase!, 0, 0);
      for (const r of order) {
        if (r === me) continue;
        const [x, y] = this.toMap(r.state.position.x, r.state.position.z);
        const rad = r.human ? 9 : 6.5;
        g.beginPath(); g.arc(x, y, rad, 0, Math.PI * 2);
        g.fillStyle = r.state.config.color; g.fill();
        g.lineWidth = r.human ? 3.5 : 2.5; g.strokeStyle = r.human ? '#ffffff' : '#1b1b3a'; g.stroke();
      }
      // you: biggest dot, pulsing ring, pointer for your heading
      const [x, y] = this.toMap(me.state.position.x, me.state.position.z);
      const h = me.state.rotation.y;
      g.beginPath(); g.arc(x, y, 15 + pulse * 5, 0, Math.PI * 2); g.strokeStyle = 'rgba(255,200,61,' + (0.9 - pulse * 0.6) + ')'; g.lineWidth = 4; g.stroke();
      g.save(); g.translate(x, y); g.rotate(Math.atan2(Math.cos(h), Math.sin(h)));
      g.beginPath(); g.moveTo(21, 0); g.lineTo(9, -8); g.lineTo(9, 8); g.closePath(); g.fillStyle = '#ffc83d'; g.fill(); g.lineWidth = 2.5; g.strokeStyle = '#1b1b3a'; g.stroke();
      g.restore();
      g.beginPath(); g.arc(x, y, 11, 0, Math.PI * 2); g.fillStyle = me.state.config.color; g.fill(); g.lineWidth = 4; g.strokeStyle = '#ffffff'; g.stroke();
      g.beginPath(); g.arc(x, y, 13.5, 0, Math.PI * 2); g.lineWidth = 2; g.strokeStyle = '#1b1b3a'; g.stroke();
    }
  }

  private drawHud() {
    const small = this.humans.length > 1;
    for (const r of this.humans) {
      const s = r.state;
      const h = this.items ? this.items.held.get(s.config.id) : undefined;
      const item = h ? ICONS[h.shown] : '';
      const lap = Math.min(s.currentLap, this.laps);
      const finalLap = lap === this.laps && !s.isFinished && this.phase === 'racing';
      const spark = s.isDrifting ? ['#ffffff', '#38bdf8', '#fb923c', '#c084fc'][s.driftLevel] : 'transparent';
      const big = small ? 64 : 104;
      const placeFill = s.rank === 1 ? 'linear-gradient(#fff6a8,#ffc21a 55%,#e88a00)' : s.rank === 2 ? 'linear-gradient(#ffffff,#c9d3e6 60%,#8e9bb5)' : s.rank === 3 ? 'linear-gradient(#ffd9b3,#e08a4c 60%,#a85a2a)' : 'linear-gradient(#ffffff,#dfe7ff)';
      const html =
        '<div style="display:flex;justify-content:space-between;align-items:flex-start">' +
          '<div style="width:' + (small ? 70 : 100) + 'px;height:' + (small ? 70 : 100) + 'px;border-radius:22px;background:radial-gradient(circle at 50% 40%,#3a4a8a,#141a3a);border:5px solid #fff;box-shadow:0 0 0 4px ' + (h && !h.kind ? '#ffc83d' : '#1b1b3a') + ',0 6px 14px rgba(0,0,0,.45);padding:10px;box-sizing:border-box;position:relative">' + item + (h && h.kind && h.count > 1 ? '<span style="position:absolute;right:-12px;bottom:-12px;font:italic 900 ' + (small ? 20 : 28) + 'px \'Space Grotesk\',Inter,sans-serif;color:#fff;-webkit-text-stroke:3px #1b1b3a;paint-order:stroke fill">×' + h.count + '</span>' : '') + '</div>' +
          '<div style="text-align:right;text-shadow:0 2px 6px rgba(0,0,0,.6)">' +
            '<div style="font:italic 900 ' + (small ? 24 : 36) + 'px \'Space Grotesk\',Inter,sans-serif;color:' + (finalLap ? '#ffc83d' : '#fff') + ';-webkit-text-stroke:' + (small ? 2 : 3) + 'px #1b1b3a;paint-order:stroke fill;letter-spacing:1px">' + (s.isFinished ? 'FINISH!' : finalLap ? 'FINAL LAP!' : 'LAP ' + lap + '/' + this.laps) + '</div>' +
            '<div style="font:600 ' + (small ? 14 : 18) + 'px Inter,sans-serif;opacity:.9">' + fmtTime(s.totalRaceTime) + '</div>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;justify-content:space-between;align-items:flex-end">' +
          '<div style="display:flex;align-items:center;gap:10px;background:rgba(14,16,32,.6);border-radius:999px;padding:6px 14px 6px 6px">' +
            '<span style="width:' + (small ? 22 : 30) + 'px;height:' + (small ? 22 : 30) + 'px;border-radius:50%;background:' + s.config.color + ';box-shadow:0 0 0 3px ' + spark + '"></span>' +
            '<span style="font:700 ' + (small ? 16 : 22) + 'px Inter,sans-serif">' + escapeHtml(s.config.name) + '</span>' +
            '<span style="display:inline-flex;align-items:center;gap:4px;font:800 ' + (small ? 15 : 20) + 'px Inter,sans-serif;color:#ffc83d"><span style="width:' + (small ? 14 : 18) + 'px;height:' + (small ? 14 : 18) + 'px;border-radius:50%;background:#ffc83d;border:2px solid #1b1b3a;box-sizing:border-box"></span>' + (s.coins || 0) + '</span>' +
          '</div>' +
          '<div style="position:relative;font:italic 900 ' + big + 'px/0.9 \'Space Grotesk\',Inter,sans-serif;transform:skewX(-6deg)">' +
            '<span style="position:absolute;inset:0;-webkit-text-stroke:' + (small ? 8 : 12) + 'px #1b1b3a;color:#1b1b3a">' + ordinal(s.rank) + '</span>' +
            '<span style="position:relative;background:' + placeFill + ';-webkit-background-clip:text;background-clip:text;color:transparent">' + ordinal(s.rank) + '</span>' +
          '</div>' +
        '</div>';
      if (r.human!.hud.innerHTML !== html) r.human!.hud.innerHTML = html;
    }
  }
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
}
