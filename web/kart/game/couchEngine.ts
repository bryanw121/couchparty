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
  autopilot?: boolean; // demo / attract mode: the computer drives the player karts too
  onFinish?: (results: CouchResult[]) => void;
  onEvent?: (e: ItemEvent | { type: 'lap' | 'finish'; racer: string; lap?: number; rank?: number }) => void;
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
  return { topSpeed: (41.5 + (spd - 3) * 1.1) * mult, acceleration: (30 + (acc - 3) * 2.6) * mult, handling: (3.2 + (hnd - 3) * 0.18) * (mult > 1 ? 1.08 : 1) };
}
const TOPPERS = ['cap', 'cat', 'bunny', 'crown', 'horns', 'bow', 'antenna'];
const GRID = 6;

const ICONS: Record<ItemKind, string> = {
  banana: '<svg viewBox="0 0 40 40"><path d="M7 12 C8 30 28 36 35 22 C25 25 15 22 12 9 Z" fill="#ffd93b" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><path d="M12 9 L10 4" stroke="#5a3a12" stroke-width="3" stroke-linecap="round"/><path d="M14 20 C18 26 24 28 30 26" fill="none" stroke="#fff6b0" stroke-width="2" stroke-linecap="round"/></svg>',
  green: '<svg viewBox="0 0 40 40"><ellipse cx="20" cy="36" rx="10" ry="2.5" fill="rgba(0,0,0,.35)"/><circle cx="20" cy="20" r="14" fill="#3ddc84" stroke="#1b1b3a" stroke-width="2.5"/><circle cx="14" cy="14" r="4" fill="#fff" opacity=".85"/><circle cx="16" cy="21" r="2.2" fill="#1b1b3a"/><circle cx="24" cy="21" r="2.2" fill="#1b1b3a"/><path d="M16 26 Q20 29 24 26" fill="none" stroke="#1b1b3a" stroke-width="2" stroke-linecap="round"/></svg>',
  red: '<svg viewBox="0 0 40 40"><g transform="rotate(45 20 20)"><path d="M20 3 C26 9 26 22 25 28 H15 C14 22 14 9 20 3 Z" fill="#ff3b3b" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><path d="M20 3 C23 6 24.5 9 25 12 H15 C15.5 9 17 6 20 3 Z" fill="#fff" stroke="#1b1b3a" stroke-width="2" stroke-linejoin="round"/><rect x="15" y="17" width="10" height="3" fill="#ffc83d"/><path d="M15 22 L10 30 L15 28 Z M25 22 L30 30 L25 28 Z" fill="#fff" stroke="#1b1b3a" stroke-width="2" stroke-linejoin="round"/><path d="M17 29 L20 37 L23 29 Z" fill="#ffa31a"/></g></svg>',
  blue: '<svg viewBox="0 0 40 40"><path d="M10 24 A6 6 0 0 1 11 13 A8 8 0 0 1 26 10 A7 7 0 0 1 31 24 Z" fill="#5b6bd6" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><path d="M15 17 L18 18.5 M25 17 L22 18.5" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><path d="M21 24 L16 31 H20 L17 38 L25 28 H21 L23 24 Z" fill="#fff15a" stroke="#1b1b3a" stroke-width="1.5" stroke-linejoin="round"/></svg>',
  boost: '<svg viewBox="0 0 40 40"><rect x="12" y="8" width="16" height="24" rx="5" fill="#ff7a00" stroke="#1b1b3a" stroke-width="2.5"/><rect x="15" y="4" width="10" height="5" rx="2" fill="#c9d3e6" stroke="#1b1b3a" stroke-width="2"/><path d="M21 12 L15 21 H19 L17 28 L25 18 H21 Z" fill="#ffe14d" stroke="#1b1b3a" stroke-width="1.5" stroke-linejoin="round"/><path d="M15 33 L20 39 L25 33 Z" fill="#ffd34d"/></svg>',
  star: '<svg viewBox="0 0 40 40"><defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff7ac6"/><stop offset=".5" stop-color="#ffd34d"/><stop offset="1" stop-color="#5ee6c8"/></linearGradient></defs><path d="M20 3 L25 14.5 L37.5 15.5 L28 23.5 L31 36 L20 29.5 L9 36 L12 23.5 L2.5 15.5 L15 14.5 Z" fill="url(#sg)" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="34" cy="6" r="2" fill="#fff"/><circle cx="6" cy="31" r="1.5" fill="#fff"/></svg>',
  bolt: '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="17" fill="#2b2f6b" stroke="#1b1b3a" stroke-width="2"/><path d="M24 4 L9 22 H18 L14 37 L31 16 H22 Z" fill="#fff15a" stroke="#1b1b3a" stroke-width="2" stroke-linejoin="round"/></svg>',
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
  human?: { idx: number; cam: CameraController; pad: PadInput; itemWas: boolean; gasAt: number; hud: HTMLElement; map: HTMLCanvasElement; finishedShown: boolean };
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
  private phase: 'countdown' | 'racing' | 'done' = 'countdown';
  private countdown = 0;
  private step = -1;
  private laps: number;
  private firstHumanFinishAt = -1;
  private elapsed = 0;
  private disposed = false;
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
        handling: t.handling, driftMultiplier: 1.3, aiAggression: 0.9 + Math.random() * 0.3, topper: c.topper,
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
        position: { x: idx % 2 ? 3.5 : -3.5, y: 0.1, z: -6 - idx * 7 },
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
        r.human = { idx: this.humans.length, cam: new CameraController(1), pad: { steer: 0, gas: false, brake: false, drift: false, item: false }, itemWas: false, gasAt: -1, hud, map, finishedShown: false };
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
    this.update(delta);
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
        if (r.human && this.opts.autopilot) {
          if (!r.ai) r.ai = new AIController(this.track, r.state);
          input = r.ai.update(delta, states);
        } else if (r.human) {
          const p = r.human.pad;
          if (r.state.isFinished) input = r.ai ? r.ai.update(delta, states) : { ...idle, throttle: true };
          else input = { throttle: p.gas, brake: p.brake, steerLeft: false, steerRight: false, steer: p.steer, drift: p.drift, respawn: false, cameraToggle: false };
          if (p.item && !r.human.itemWas) uses.add(r.state.config.id);
          r.human.itemWas = p.item;
        } else if (r.ai) {
          input = r.ai.update(delta, states);
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
        if (r.state.currentLap !== lapBefore && r.state.currentLap <= this.laps) this.opts.onEvent?.({ type: 'lap', racer: r.state.config.id, lap: r.state.currentLap });
        if (r.state.currentLap > this.laps) {
          r.state.isFinished = true;
          r.state.finishRank = this.racers.filter((o) => o.state.isFinished).length;
          if (r.human) {
            if (!r.ai) r.ai = new AIController(this.track, r.state);
            if (this.firstHumanFinishAt < 0) this.firstHumanFinishAt = this.elapsed;
            this.opts.onEvent?.({ type: 'finish', racer: r.state.config.id, rank: r.state.finishRank });
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

    if (this.items && this.phase !== 'countdown') {
      this.items.update(delta, this.elapsed, states, uses, (id, s) => {
        const r = this.racers.find((x) => x.state.config.id === id);
        if (r) r.handles.rootGroup.scale.setScalar(THREE.MathUtils.lerp(r.handles.rootGroup.scale.x, s, delta * 6));
      });
    }
    this.style.update(this.elapsed);
    for (const r of this.racers) {
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
    setTimeout(() => this.opts.onFinish?.(results), 2500);
  }

  private onItemEvent(e: ItemEvent) {
    this.opts.onEvent?.(e);
  }

  // ---------- drawing ----------
  private render() {
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
          '<div style="width:' + (small ? 70 : 100) + 'px;height:' + (small ? 70 : 100) + 'px;border-radius:22px;background:radial-gradient(circle at 50% 40%,#3a4a8a,#141a3a);border:5px solid #fff;box-shadow:0 0 0 4px ' + (h && !h.kind ? '#ffc83d' : '#1b1b3a') + ',0 6px 14px rgba(0,0,0,.45);padding:10px;box-sizing:border-box">' + item + '</div>' +
          '<div style="text-align:right;text-shadow:0 2px 6px rgba(0,0,0,.6)">' +
            '<div style="font:italic 900 ' + (small ? 24 : 36) + 'px \'Space Grotesk\',Inter,sans-serif;color:' + (finalLap ? '#ffc83d' : '#fff') + ';-webkit-text-stroke:' + (small ? 2 : 3) + 'px #1b1b3a;paint-order:stroke fill;letter-spacing:1px">' + (s.isFinished ? 'FINISH!' : finalLap ? 'FINAL LAP!' : 'LAP ' + lap + '/' + this.laps) + '</div>' +
            '<div style="font:600 ' + (small ? 14 : 18) + 'px Inter,sans-serif;opacity:.9">' + fmtTime(s.totalRaceTime) + '</div>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;justify-content:space-between;align-items:flex-end">' +
          '<div style="display:flex;align-items:center;gap:10px;background:rgba(14,16,32,.6);border-radius:999px;padding:6px 14px 6px 6px">' +
            '<span style="width:' + (small ? 22 : 30) + 'px;height:' + (small ? 22 : 30) + 'px;border-radius:50%;background:' + s.config.color + ';box-shadow:0 0 0 3px ' + spark + '"></span>' +
            '<span style="font:700 ' + (small ? 16 : 22) + 'px Inter,sans-serif">' + escapeHtml(s.config.name) + '</span>' +
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
