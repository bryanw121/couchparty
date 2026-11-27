import * as THREE from 'three';
import { GameState, RacerConfig, RacerState, InputState, RaceResults, CameraView } from '../types';
import { TrackSystem } from './track';
import { createKartMesh, KartMeshHandles } from './kartModel';
import { ParticleSystem } from './particles';
import { KartPhysicsEngine } from './kartPhysics';
import { AIController } from './aiController';
import { CameraController } from './camera';
import { soundEngine } from './audio';

export interface HUDData {
  speed: number;
  maxSpeed: number;
  rank: number;
  totalRacers: number;
  lap: number;
  totalLaps: number;
  currentLapTime: number;
  bestLapTime: number | null;
  driftLevel: number;
  isDrifting: boolean;
  boostRatio: number;
  countdownText: string;
  countdownStep: number;
  isFinished: boolean;
  cameraView: CameraView;
  allRacerPositions: Array<{
    id: string;
    isPlayer: boolean;
    color: string;
    x: number;
    z: number;
    heading: number;
    rank: number;
  }>;
}

export class GameEngine {
  private container: HTMLElement;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private cameraCtrl: CameraController;
  private track: TrackSystem;
  private particles: ParticleSystem;
  private physics: KartPhysicsEngine;

  private racers: Array<{
    state: RacerState;
    handles: KartMeshHandles;
    ai?: AIController;
  }> = [];

  private playerRacerIdx = 0;
  private gameState: GameState = 'title';
  private totalLaps = 3;

  private countdownTimer = 0;
  private countdownStep = 0; // 0: ready, 1: 3, 2: 2, 3: 1, 4: GO!
  private countdownText = '';
  private startBoostWindow = false;

  private clock: THREE.Clock;
  private isRunning = false;
  private animFrameId: number | null = null;

  // React Callbacks
  public onHUDUpdate?: (data: HUDData) => void;
  public onStateChange?: (state: GameState) => void;
  public onFinish?: (results: RaceResults) => void;

  // Input tracking
  private playerInput: InputState = {
    throttle: false,
    brake: false,
    steerLeft: false,
    steerRight: false,
    drift: false,
    respawn: false,
    cameraToggle: false,
  };

  constructor(container: HTMLElement) {
    this.container = container;
    this.clock = new THREE.Clock();

    // 1. WebGL Renderer Setup
    this.renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: true,
      alpha: false,
    });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    container.appendChild(this.renderer.domElement);

    // 2. Scene & Atmosphere
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x7dd3fc); // Bright vibrant blue sky
    this.scene.fog = new THREE.FogExp2(0xbae6fd, 0.0025);

    // 3. Lighting (Warm sunny race day)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    this.scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffedd5, 1.25);
    sunLight.position.set(100, 150, 80);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 10;
    sunLight.shadow.camera.far = 400;
    const d = 160;
    sunLight.shadow.camera.left = -d;
    sunLight.shadow.camera.right = d;
    sunLight.shadow.camera.top = d;
    sunLight.shadow.camera.bottom = -d;
    sunLight.shadow.bias = -0.0004;
    this.scene.add(sunLight);

    const hemiLight = new THREE.HemisphereLight(0x93c5fd, 0x166534, 0.4);
    this.scene.add(hemiLight);

    // 4. Camera & Track & Particles & Physics
    this.cameraCtrl = new CameraController(container.clientWidth / container.clientHeight);
    this.track = new TrackSystem(this.scene);
    this.particles = new ParticleSystem();
    this.scene.add(this.particles.group);
    this.physics = new KartPhysicsEngine(this.track, this.particles);

    // 5. Initialize Racers
    this.initRacers();

    // 6. Setup Listeners
    this.setupEventListeners();
  }

  public getTrackPoints() {
    return this.track.trackPoints;
  }

  private initRacers() {
    // Clear existing meshes
    for (const r of this.racers) {
      this.scene.remove(r.handles.rootGroup);
    }
    this.racers = [];

    const configs: RacerConfig[] = [
      {
        id: 'player',
        name: 'Player 1',
        isPlayer: true,
        color: '#dc2626', // Crimson Red
        accentColor: '#facc15', // Yellow stripe
        helmetColor: '#facc15',
        visorColor: '#0284c7',
        number: 1,
        topSpeed: 42,
        acceleration: 30,
        handling: 3.2,
        driftMultiplier: 1.35,
      },
      {
        id: 'ai-1',
        name: 'Thunder Blue',
        isPlayer: false,
        color: '#2563eb', // Royal Blue
        accentColor: '#f97316', // Orange
        helmetColor: '#ea580c',
        visorColor: '#10b981',
        number: 7,
        topSpeed: 40.5,
        acceleration: 28.5,
        handling: 3.0,
        driftMultiplier: 1.25,
        aiAggression: 1.1,
      },
      {
        id: 'ai-2',
        name: 'Toxic Emerald',
        isPlayer: false,
        color: '#16a34a', // Emerald Green
        accentColor: '#9333ea', // Purple
        helmetColor: '#9333ea',
        visorColor: '#f59e0b',
        number: 4,
        topSpeed: 41.2,
        acceleration: 29.0,
        handling: 3.1,
        driftMultiplier: 1.3,
        aiAggression: 0.95,
      },
      {
        id: 'ai-3',
        name: 'Turbo Sunshine',
        isPlayer: false,
        color: '#eab308', // Gold Yellow
        accentColor: '#0f172a', // Dark slate
        helmetColor: '#0f172a',
        visorColor: '#ef4444',
        number: 9,
        topSpeed: 39.8,
        acceleration: 31.0,
        handling: 3.4,
        driftMultiplier: 1.4,
        aiAggression: 1.0,
      },
    ];

    // Grid slots behind start line: 2x2 staggered
    const startGridOffsets = [
      { x: -3.5, z: -6 }, // Player: Grid 1 (Front Left)
      { x: 3.5, z: -14 },  // AI 1: Grid 2 (Front Right)
      { x: -3.5, z: -22 }, // AI 2: Grid 3 (Back Left)
      { x: 3.5, z: -30 },  // AI 3: Grid 4 (Back Right)
    ];

    configs.forEach((cfg, idx) => {
      const handles = createKartMesh(cfg);
      this.scene.add(handles.rootGroup);

      const offset = startGridOffsets[idx];
      const state: RacerState = {
        config: cfg,
        position: { x: offset.x, y: 0.1, z: offset.z },
        rotation: { y: Math.PI, pitch: 0, roll: 0 }, // Face forward (-Z down track)
        speed: 0,
        angularVelocity: 0,
        steerAngle: 0,
        isDrifting: false,
        driftDirection: 0,
        driftTime: 0,
        driftLevel: 0,
        boostTimer: 0,
        boostMultiplier: 1.0,
        currentLap: 1,
        lapDistance: 0,
        totalDistance: 0,
        splineProgress: 0,
        checkpointIndex: 0,
        lapTimes: [],
        currentLapTime: 0,
        bestLapTime: null,
        totalRaceTime: 0,
        rank: idx + 1,
        isFinished: false,
        invulnerableTimer: 0,
        spinOutTimer: 0,
      };

      const ai = cfg.isPlayer ? undefined : new AIController(this.track, state);

      this.racers.push({
        state,
        handles,
        ai,
      });

      if (cfg.isPlayer) {
        this.playerRacerIdx = idx;
      }
    });
  }

  public startCountdown() {
    soundEngine.init();
    this.gameState = 'countdown';
    this.onStateChange?.('countdown');
    this.countdownTimer = 0;
    this.countdownStep = 0;
    this.countdownText = 'READY...';
    this.track.setStartingLights(0);
  }

  public restartRace() {
    this.initRacers();
    this.particles.clear();
    this.startCountdown();
  }

  public setInput(input: Partial<InputState>) {
    Object.assign(this.playerInput, input);
  }

  public cycleCamera(): CameraView {
    const view = this.cameraCtrl.cycleView();
    return view;
  }

  private setupEventListeners() {
    const handleKeyDown = (e: KeyboardEvent) => {
      soundEngine.init();
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          this.playerInput.throttle = true;
          // Start Boost timing check when hitting gas on 'GO!'
          if (this.startBoostWindow && this.gameState === 'racing') {
            this.physics.triggerStartBoost(this.racers[this.playerRacerIdx].state);
            this.startBoostWindow = false;
          }
          break;
        case 'KeyS':
        case 'ArrowDown':
          this.playerInput.brake = true;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          this.playerInput.steerLeft = true;
          break;
        case 'KeyD':
        case 'ArrowRight':
          this.playerInput.steerRight = true;
          break;
        case 'Space':
        case 'ShiftLeft':
        case 'ShiftRight':
          this.playerInput.drift = true;
          e.preventDefault();
          break;
        case 'KeyR':
          this.playerInput.respawn = true;
          break;
        case 'KeyC':
          this.cycleCamera();
          break;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          this.playerInput.throttle = false;
          break;
        case 'KeyS':
        case 'ArrowDown':
          this.playerInput.brake = false;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          this.playerInput.steerLeft = false;
          break;
        case 'KeyD':
        case 'ArrowRight':
          this.playerInput.steerRight = false;
          break;
        case 'Space':
        case 'ShiftLeft':
        case 'ShiftRight':
          this.playerInput.drift = false;
          break;
        case 'KeyR':
          this.playerInput.respawn = false;
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const handleResize = () => {
      if (!this.container) return;
      const w = this.container.clientWidth;
      const h = this.container.clientHeight;
      this.renderer.setSize(w, h);
      this.cameraCtrl.onResize(w, h);
    };

    window.addEventListener('resize', handleResize);
  }

  public start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.clock.start();
    this.loop();
  }

  public stop() {
    this.isRunning = false;
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    soundEngine.stopEngine();
  }

  private loop = () => {
    if (!this.isRunning) return;
    this.animFrameId = requestAnimationFrame(this.loop);

    const delta = Math.min(this.clock.getDelta(), 0.05); // Cap to 50ms to prevent physics glitches
    const elapsedTime = this.clock.getElapsedTime();

    this.update(delta, elapsedTime);
    this.render();
  };

  private update(delta: number, elapsedTime: number) {
    // 1. Scenery and animated props
    this.track.update(elapsedTime, delta);

    // 2. Countdown State Machine
    if (this.gameState === 'countdown' || (this.gameState === 'racing' && this.countdownTimer < 5.0)) {
      this.updateCountdown(delta);
    }

    // 3. Racers Physics & Controls
    const allStates = this.racers.map((r) => r.state);

    for (const r of this.racers) {
      let input: InputState;

      if (this.gameState === 'racing' || (this.gameState === 'finished' && !r.state.config.isPlayer)) {
        if (r.state.config.isPlayer) {
          input = this.playerInput;
        } else if (r.ai) {
          input = r.ai.update(delta, allStates);
        } else {
          input = { ...this.playerInput, throttle: true };
        }
      } else {
        // Locked during countdown
        input = {
          throttle: false,
          brake: false,
          steerLeft: false,
          steerRight: false,
          drift: false,
          respawn: false,
          cameraToggle: false,
        };
      }

      this.physics.updateRacer(r.state, input, r.handles, delta, allStates);

      // Timers when racing
      if (this.gameState === 'racing' && !r.state.isFinished) {
        r.state.currentLapTime += delta;
        r.state.totalRaceTime += delta;

        // Check if finished 3 laps
        if (r.state.currentLap > this.totalLaps) {
          r.state.isFinished = true;
          const finishRank = this.racers.filter((other) => other.state.isFinished).length;
          r.state.finishRank = finishRank;

          if (r.state.config.isPlayer) {
            this.handlePlayerFinish();
          }
        }
      }
    }

    // 4. Update Live Standings (Sort by total distance traveled)
    const sortedRacers = [...this.racers].sort((a, b) => b.state.totalDistance - a.state.totalDistance);
    sortedRacers.forEach((r, idx) => {
      r.state.rank = idx + 1;
    });

    // 5. Update Particles
    this.particles.update(delta);

    // 6. Update Camera
    const player = this.racers[this.playerRacerIdx];
    this.cameraCtrl.update(player.state, delta);

    // 7. Emit HUD data to React
    this.emitHUD();
  }

  private updateCountdown(delta: number) {
    this.countdownTimer += delta;

    if (this.countdownTimer < 1.0) {
      if (this.countdownStep !== 1) {
        this.countdownStep = 1;
        this.countdownText = '3';
        this.track.setStartingLights(1);
        soundEngine.playCountdownBeep(false);
      }
    } else if (this.countdownTimer < 2.0) {
      if (this.countdownStep !== 2) {
        this.countdownStep = 2;
        this.countdownText = '2';
        this.track.setStartingLights(2);
        soundEngine.playCountdownBeep(false);
      }
    } else if (this.countdownTimer < 3.0) {
      if (this.countdownStep !== 3) {
        this.countdownStep = 3;
        this.countdownText = '1';
        this.track.setStartingLights(3);
        soundEngine.playCountdownBeep(false);
        this.startBoostWindow = true; // Open start boost timing
      }
    } else if (this.countdownTimer < 4.2) {
      if (this.countdownStep !== 4) {
        this.countdownStep = 4;
        this.countdownText = 'GO!';
        this.track.setStartingLights(4);
        soundEngine.playCountdownBeep(true);
        this.gameState = 'racing';
        this.onStateChange?.('racing');
      }
    } else if (this.countdownTimer >= 4.2 && this.countdownText !== '') {
      this.countdownText = '';
      this.track.setStartingLights(0);
    }
  }

  private handlePlayerFinish() {
    this.gameState = 'finished';
    this.onStateChange?.('finished');
    soundEngine.playFinishFanfare();

    const results: RaceResults = {
      racers: this.racers.map((r) => ({
        id: r.state.config.id,
        name: r.state.config.name,
        isPlayer: r.state.config.isPlayer,
        color: r.state.config.color,
        rank: r.state.finishRank || r.state.rank,
        totalTime: r.state.totalRaceTime,
        bestLap: r.state.bestLapTime,
        lapTimes: r.state.lapTimes,
      })).sort((a, b) => a.rank - b.rank),
    };

    setTimeout(() => {
      this.onFinish?.(results);
    }, 1500);
  }

  private emitHUD() {
    if (!this.onHUDUpdate) return;

    const player = this.racers[this.playerRacerIdx];
    const pState = player.state;

    const hud: HUDData = {
      speed: Math.round(Math.abs(pState.speed) * 3.6), // Convert to km/h
      maxSpeed: Math.round(pState.config.topSpeed * 3.6),
      rank: pState.rank,
      totalRacers: this.racers.length,
      lap: Math.min(pState.currentLap, this.totalLaps),
      totalLaps: this.totalLaps,
      currentLapTime: pState.currentLapTime,
      bestLapTime: pState.bestLapTime,
      driftLevel: pState.driftLevel,
      isDrifting: pState.isDrifting,
      boostRatio: Math.min(1.0, pState.boostTimer / 1.5),
      countdownText: this.countdownText,
      countdownStep: this.countdownStep,
      isFinished: pState.isFinished,
      cameraView: this.cameraCtrl.currentView,
      allRacerPositions: this.racers.map((r) => ({
        id: r.state.config.id,
        isPlayer: r.state.config.isPlayer,
        color: r.state.config.color,
        x: r.state.position.x,
        z: r.state.position.z,
        heading: r.state.rotation.y,
        rank: r.state.rank,
      })),
    };

    this.onHUDUpdate(hud);
  }

  private render() {
    this.renderer.render(this.scene, this.cameraCtrl.camera);
  }

  public dispose() {
    this.stop();
    if (this.renderer.domElement.parentElement) {
      this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
    }
    this.renderer.dispose();
  }
}
