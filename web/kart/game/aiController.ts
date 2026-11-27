import * as THREE from 'three';
import { RacerState, InputState } from '../types';
import { TrackSystem } from './track';

export class AIController {
  private track: TrackSystem;
  private racerState: RacerState;
  private targetOffset: number = 0; // Lateral racing line offset (-1.0 to 1.0)
  private personalityAggression: number = 1.0;
  private offsetChangeTimer: number = 0;

  constructor(track: TrackSystem, racerState: RacerState) {
    this.track = track;
    this.racerState = racerState;
    this.personalityAggression = racerState.config.aiAggression || 1.0;
    this.targetOffset = (Math.random() - 0.5) * 0.6;
  }

  public update(delta: number, allRacers: RacerState[]): InputState {
    const input: InputState = {
      throttle: true,
      brake: false,
      steerLeft: false,
      steerRight: false,
      drift: false,
      respawn: false,
      cameraToggle: false,
    };

    const trackPoints = this.track.trackPoints;
    const totalPoints = trackPoints.length;

    // Periodic dynamic racing line variation
    this.offsetChangeTimer += delta;
    if (this.offsetChangeTimer > 3.0) {
      this.offsetChangeTimer = 0;
      this.targetOffset = (Math.random() - 0.5) * 0.8;
    }

    // 1. Lookahead target point along spline
    const lookaheadSteps = Math.max(8, Math.min(22, Math.floor(Math.abs(this.racerState.speed) * 0.45)));
    const targetIdx = (this.racerState.checkpointIndex + lookaheadSteps) % totalPoints;
    const targetPoint = trackPoints[targetIdx];

    // Compute target world position with lateral racing line offset
    const lateralShift = (this.track.roadWidth * 0.35) * this.targetOffset;
    const targetX = targetPoint.x + targetPoint.normalX * lateralShift;
    const targetZ = targetPoint.z + targetPoint.normalZ * lateralShift;

    // 2. Compute angle to target
    const dx = targetX - this.racerState.position.x;
    const dz = targetZ - this.racerState.position.z;
    const desiredHeading = Math.atan2(dx, dz);

    // Normalize angle difference to [-PI, PI]
    let angleDiff = desiredHeading - this.racerState.rotation.y;
    while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
    while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;

    // 3. Kart Avoidance: check for karts immediately in front
    let avoidanceSteer = 0;
    const kartPos = new THREE.Vector3(this.racerState.position.x, 0, this.racerState.position.z);

    for (const other of allRacers) {
      if (other.config.id === this.racerState.config.id) continue;

      const otherPos = new THREE.Vector3(other.position.x, 0, other.position.z);
      const toOther = otherPos.clone().sub(kartPos);
      const dist = toOther.length();

      // If another kart is directly in front within 10 units
      if (dist < 10 && dist > 0.5) {
        const forward = new THREE.Vector3(Math.sin(this.racerState.rotation.y), 0, Math.cos(this.racerState.rotation.y));
        const dot = forward.dot(toOther.normalize());

        if (dot > 0.7) {
          // Kart is ahead: steer around
          const cross = forward.x * toOther.z - forward.z * toOther.x;
          avoidanceSteer = cross > 0 ? -1 : 1;
        }
      }
    }

    // 4. Steering Decisions
    const effectiveAngle = angleDiff + avoidanceSteer * 0.4;
    const steerThreshold = 0.08;

    if (effectiveAngle > steerThreshold) {
      input.steerLeft = true;
    } else if (effectiveAngle < -steerThreshold) {
      input.steerRight = true;
    }

    // 5. Corner sharpness & Drift Decisions
    const sharpTurnThreshold = 0.48;
    const isSharpTurn = Math.abs(angleDiff) > sharpTurnThreshold;

    if (isSharpTurn && Math.abs(this.racerState.speed) > 18) {
      // AI initiates drift on sharp corners
      input.drift = true;
      // Slight brake tap for hairpin entry if too fast
      if (Math.abs(this.racerState.speed) > 34) {
        input.brake = true;
        input.throttle = false;
      }
    }

    return input;
  }
}
