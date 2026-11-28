export type GameState = 'title' | 'countdown' | 'racing' | 'finished';

export type CameraView = 'chase' | 'cockpit' | 'topdown' | 'action';

export interface RacerConfig {
  id: string;
  name: string;
  isPlayer: boolean;
  color: string;
  accentColor: string;
  helmetColor: string;
  visorColor: string;
  number: number;
  topSpeed: number;
  acceleration: number;
  handling: number;
  driftMultiplier: number;
  aiAggression?: number;
  audioLead?: boolean; // the one racer whose engine hum plays (couch mode has several humans)
  topper?: string;
  weight?: number; // 1 light .. 3 heavy: heavier karts shove lighter ones // character headwear: ears, crown, cap, horns, bow
}

export interface RacerState {
  config: RacerConfig;
  position: { x: number; y: number; z: number };
  rotation: { y: number; pitch: number; roll: number };
  speed: number;
  angularVelocity: number;
  steerAngle: number;
  steerSmooth?: number;
  slideAngle?: number;
  bumpX?: number; bumpZ?: number; // sideways shove from a bump, decays quickly
  bumpedAt?: number;
  hopT?: number;
  airHeight?: number;
  isGliding?: boolean;
  trickRoll?: number;
  coins?: number; // 0..10, each one a little more top speed
  rideTimer?: number; // rocket ride: auto-drive at high speed
  ghostTimer?: number; // invisible and untouchable
  inkTimer?: number; // splattered: hard to see // > 0 while hopping into a drift
  driftHeld?: boolean; // drift button state last frame (to catch the press)
  isDrifting: boolean;
  driftDirection: number; // -1 left, 1 right, 0 none
  driftTime: number;
  driftLevel: number; // 0, 1 (blue), 2 (orange), 3 (purple)
  boostTimer: number;
  boostMultiplier: number;
  
  // Race progression
  currentLap: number;
  lapDistance: number; // progress distance on current lap
  totalDistance: number; // total distance traveled along spline
  splineProgress: number; // 0.0 to 1.0 along track
  checkpointIndex: number;
  lapTimes: number[];
  currentLapTime: number;
  bestLapTime: number | null;
  totalRaceTime: number;
  rank: number;
  isFinished: boolean;
  finishRank?: number;
  
  // Collision
  invulnerableTimer: number;
  spinOutTimer: number;
  shrinkTimer?: number;
  starTimer?: number;
}

export interface InputState {
  throttle: boolean;
  brake: boolean;
  steerLeft: boolean;
  steerRight: boolean;
  drift: boolean;
  respawn: boolean;
  cameraToggle: boolean;
  steer?: number;
  // analog steering from phone tilt, -1 (right) .. 1 (left)
}

export interface TrackPoint {
  x: number;
  y: number;
  z: number;
  tangentX: number;
  tangentY: number;
  tangentZ: number;
  normalX: number;
  normalY: number;
  normalZ: number;
  width: number;
  bank: number;
  distance: number;
}

export interface RaceResults {
  racers: Array<{
    id: string;
    name: string;
    isPlayer: boolean;
    color: string;
    rank: number;
    totalTime: number;
    bestLap: number | null;
    lapTimes: number[];
  }>;
}
