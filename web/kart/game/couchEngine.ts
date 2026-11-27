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
import { applyCartoonStyle, blobShadow, toonify, toonGradient, BoostPad } from './style';

// One TV, up to four players on phones, split screen like a console kart racer.
// The race runs here on the TV; phones only send their controls.

export interface CouchPlayer { id: string; name: string; color: string; topper?: string }
export interface PadInput { steer: number; gas: boolean; brake: boolean; drift: boolean; item: boolean }
export interface CouchResult { id: string; name: string; color: string; human: boolean; rank: number; time: number | null; bestLap: number | null }
export interface CouchOptions {
  players: CouchPlayer[];
  laps?: number;
  items?: boolean;
  quality?: 'low' | 'high';
  autopilot?: boolean; // demo / attract mode: the computer drives the player karts too
  onFinish?: (results: CouchResult[]) => void;
  onEvent?: (e: ItemEvent | { type: 'lap' | 'finish'; racer: string; lap?: number; rank?: number }) => void;
}

const CPU: Array<{ name: string; color: string; accent: string; topper: string }> = [
  { name: 'Turbo Tabby', color: '#f97316', accent: '#fde68a', topper: 'cat' },
  { name: 'Bun Bun', color: '#f472b6', accent: '#fdf2f8', topper: 'bunny' },
  { name: 'Duke Dash', color: '#7c3aed', accent: '#fcd34d', topper: 'crown' },
  { name: 'Grizz', color: '#78350f', accent: '#f4f1e6', topper: 'horns' },
  { name: 'Zippy', color: '#06b6d4', accent: '#f0f9ff', topper: 'antenna' },
  { name: 'Lulu', color: '#ef4444', accent: '#fecaca', topper: 'bow' },
];
const TOPPERS = ['cap', 'cat', 'bunny', 'crown', 'horns', 'bow', 'antenna'];
const GRID = 6;

const ICONS: Record<ItemKind, string> = {
  banana: '<svg viewBox="0 0 40 40"><path d="M8 10 C10 30 30 34 34 22 C24 26 14 22 12 8 Z" fill="#ffe14d" stroke="#8a6b12" stroke-width="2"/></svg>',
  green: '<svg viewBox="0 0 40 40"><circle cx="20" cy="22" r="13" fill="#22c55e" stroke="#fff" stroke-width="4"/></svg>',
  red: '<svg viewBox="0 0 40 40"><circle cx="20" cy="22" r="13" fill="#ef4444" stroke="#fff" stroke-width="4"/></svg>',
  blue: '<svg viewBox="0 0 40 40"><circle cx="20" cy="22" r="11" fill="#3b82f6" stroke="#fff" stroke-width="4"/><path d="M2 16 L12 20 M38 16 L28 20" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>',
  boost: '<svg viewBox="0 0 40 40"><path d="M22 4 L8 24 H19 L16 36 L32 14 H21 Z" fill="#fb923c" stroke="#fff" stroke-width="2" stroke-linejoin="round"/></svg>',
  star: '<svg viewBox="0 0 40 40"><path d="M20 3 L25 15 L38 15 L27 23 L31 36 L20 28 L9 36 L13 23 L2 15 L15 15 Z" fill="#facc15" stroke="#fff" stroke-width="2" stroke-linejoin="round"/></svg>',
  bolt: '<svg viewBox="0 0 40 40"><path d="M24 2 L8 22 H18 L14 38 L32 16 H22 Z" fill="#fde047" stroke="#1e293b" stroke-width="2" stroke-linejoin="round"/></svg>',
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
  human?: { idx: number; cam: CameraController; pad: PadInput; itemWas: boolean; gasAt: number; hud: HTMLElement; finishedShown: boolean };
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

    this.scene.background = new THREE.Color(0x7dd3fc);
    this.scene.fog = new THREE.FogExp2(0xbae6fd, 0.0025);
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.85));
    const sun = new THREE.DirectionalLight(0xfff4e0, 1.7);
    sun.position.set(100, 150, 80);
    sun.castShadow = this.renderer.shadowMap.enabled;
    sun.shadow.mapSize.set(1024, 1024);
    const d = 160;
    Object.assign(sun.shadow.camera, { left: -d, right: d, top: d, bottom: -d, near: 10, far: 400 });
    this.scene.add(sun);
    this.scene.add(new THREE.HemisphereLight(0xbfe3ff, 0x5ccf45, 0.55));

    this.track = new TrackSystem(this.scene);
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
    players.forEach((p, i) => {
      configs.push({
        id: p.id, name: p.name, isPlayer: true, audioLead: i === 0,
        color: p.color, accentColor: '#ffffff', helmetColor: p.color, visorColor: '#0f172a',
        number: i + 1, topSpeed: 41.5, acceleration: 30, handling: 3.2, driftMultiplier: 1.35,
        topper: p.topper || TOPPERS[i % TOPPERS.length],
      });
    });
    const used = new Set(players.map((p) => p.color.toLowerCase()));
    for (const c of CPU) {
      if (configs.length >= GRID) break;
      if (used.has(c.color)) continue;
      configs.push({
        id: 'cpu-' + c.name, name: c.name, isPlayer: false,
        color: c.color, accentColor: c.accent, helmetColor: c.accent, visorColor: '#0f172a',
        number: configs.length + 1, topSpeed: 39.5 + Math.random() * 2, acceleration: 28 + Math.random() * 3,
        handling: 3 + Math.random() * 0.4, driftMultiplier: 1.3, aiAggression: 0.9 + Math.random() * 0.3, topper: c.topper,
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
        r.human = { idx: this.humans.length, cam: new CameraController(1), pad: { steer: 0, gas: false, brake: false, drift: false, item: false }, itemWas: false, gasAt: -1, hud, finishedShown: false };
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
