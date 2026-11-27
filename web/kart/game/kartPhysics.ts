import * as THREE from 'three';
import { RacerState, InputState } from '../types';
import { TrackSystem } from './track';
import { ParticleSystem } from './particles';
import { soundEngine } from './audio';
import { KartMeshHandles } from './kartModel';

export class KartPhysicsEngine {
  public totalLaps = 3;
  private track: TrackSystem;
  private particles: ParticleSystem;

  constructor(track: TrackSystem, particles: ParticleSystem) {
    this.track = track;
    this.particles = particles;
  }

  public updateRacer(
    state: RacerState,
    input: InputState,
    meshHandles: KartMeshHandles,
    delta: number,
    allRacers: RacerState[]
  ) {
    // Spin-out recovery timer
    if (state.spinOutTimer > 0) {
      state.spinOutTimer -= delta;
      state.speed *= Math.max(0, 1 - delta * 2);
      state.rotation.y += delta * 12;
      this.syncMesh(state, meshHandles, delta);
      return;
    }

    if (state.invulnerableTimer > 0) {
      state.invulnerableTimer -= delta;
    }

    // Respawn / Reset requested
    if (input.respawn) {
      this.respawnOnTrack(state);
      return;
    }

    const { config } = state;
    const isGrounded = true;

    // 1. Check if on road surface or grass
    const closest = this.track.getClosestTrackPoint(state.position.x, state.position.z);
    const halfW = this.track.roadWidth / 2;
    const scY = this.track.onShortcut(state.position.x, state.position.z);
    const onDirt = scY !== null && closest.distanceToCenter > halfW + 0.5;
    const isOffTrack = closest.distanceToCenter > halfW + 0.5 && !onDirt;

    // 2. Handle Boost Timers
    if (state.boostTimer > 0) {
      state.boostTimer -= delta;
      if (state.boostTimer <= 0) {
        state.boostMultiplier = 1.0;
      }
    }

    // 3. Calculate Effective Max Speed & Acceleration
    let effectiveTopSpeed = config.topSpeed * state.boostMultiplier;
    if (state.shrinkTimer && state.shrinkTimer > 0) { state.shrinkTimer -= delta; effectiveTopSpeed *= 0.72; }
    if (state.starTimer && state.starTimer > 0) { state.starTimer -= delta; effectiveTopSpeed *= 1.18; }
    let accelRate = config.acceleration;
    // Shortcut dirt: slow, unless you're boosting through it
    if (onDirt && state.boostTimer <= 0 && !(state.starTimer && state.starTimer > 0)) { effectiveTopSpeed = Math.min(effectiveTopSpeed, config.topSpeed * 0.66); }

    if (isOffTrack) {
      effectiveTopSpeed = Math.min(effectiveTopSpeed, config.topSpeed * 0.45);
      accelRate *= 0.6;
      // Emit grass dust
      if (Math.abs(state.speed) > 5 && Math.random() < 0.4) {
        this.particles.emitTireSmoke(
          new THREE.Vector3(state.position.x, state.position.y, state.position.z),
          true
        );
      }
    }

    // 4. Throttle & Braking
    if (input.throttle) {
      if (state.speed < effectiveTopSpeed) {
        state.speed += accelRate * delta * (state.boostTimer > 0 ? 1.4 : 1.0);
      } else {
        // Natural deceleration towards top speed if boosted ended
        state.speed -= 10 * delta;
      }
    } else if (input.brake) {
      if (state.speed > 0) {
        state.speed -= 35 * delta; // Strong braking
      } else if (state.speed > -12) {
        state.speed -= 14 * delta; // Reverse
      }
    } else {
      // Natural rolling drag
      const drag = isOffTrack ? 22 : 9;
      if (state.speed > 0) {
        state.speed = Math.max(0, state.speed - drag * delta);
      } else if (state.speed < 0) {
        state.speed = Math.min(0, state.speed + drag * delta);
      }
    }

    // 5. Steering & Drift Mechanics
    const speedRatio = Math.abs(state.speed) / config.topSpeed;
    const baseSteerSpeed = config.handling * (0.8 + speedRatio * 0.4);

    let rawSteer = typeof input.steer === 'number' ? input.steer : 0;
    if (input.steerLeft) rawSteer += 1;
    if (input.steerRight) rawSteer -= 1;
    rawSteer = Math.max(-1, Math.min(1, rawSteer));
    if (Math.abs(rawSteer) < 0.05) rawSteer = 0; // dead zone
    // Softer near center, full lock at the ends: small corrections stay small
    rawSteer = Math.sign(rawSteer) * (0.35 * Math.abs(rawSteer) + 0.65 * rawSteer * rawSteer);
    // Smooth the wheel: phone input arrives in bursts, so ease toward it instead of snapping
    const prev = state.steerSmooth || 0;
    const rate = (Math.abs(rawSteer) < Math.abs(prev) || Math.sign(rawSteer) !== Math.sign(prev)) ? 14 : 9;
    state.steerSmooth = prev + (rawSteer - prev) * Math.min(1, delta * rate);
    if (Math.abs(state.steerSmooth) < 0.002 && rawSteer === 0) state.steerSmooth = 0;
    const steerIn = rawSteer;
    rawSteer = state.steerSmooth;

    // Initiate Drift
    if (input.drift && !state.isDrifting && Math.abs(state.speed) > 12 && Math.abs(steerIn) > 0.2) {
      state.isDrifting = true;
      state.driftDirection = Math.sign(steerIn);
      state.driftTime = 0;
      state.driftLevel = 0;
    }

    // Continue or Cancel Drift
    if (state.isDrifting) {
      if (!input.drift || Math.abs(state.speed) < 8) {
        // Release Drift -> TRIGGER MINI TURBO BOOST!
        if (state.driftLevel > 0) {
          this.triggerDriftBoost(state);
        }
        state.isDrifting = false;
        state.driftDirection = 0;
        state.driftTime = 0;
        state.driftLevel = 0;
      } else {
        // Active drifting
        state.driftTime += delta;

        // Upgrade drift charge stages
        if (state.driftTime > 2.2) {
          state.driftLevel = 3; // Purple Ultra Mini-Turbo
        } else if (state.driftTime > 1.2) {
          state.driftLevel = 2; // Orange Super Mini-Turbo
        } else if (state.driftTime > 0.5) {
          state.driftLevel = 1; // Blue Mini-Turbo
        }

        // Steer dynamics inside drift: player can counter-steer to adjust radius
        const driftSteerMod = rawSteer * state.driftDirection;
        const driftAngularSpeed = (1.5 + driftSteerMod * 0.6) * baseSteerSpeed * state.driftDirection;
        state.angularVelocity = THREE.MathUtils.lerp(state.angularVelocity, driftAngularSpeed, Math.min(1, delta * 8));

        // Visual roll & slide angle
        state.rotation.roll = THREE.MathUtils.lerp(
          state.rotation.roll,
          -state.driftDirection * 0.18,
          delta * 10
        );

        // Emit drift sparks from rear tires
        if (state.driftLevel > 0) {
          const sparkWorldPos = new THREE.Vector3();
          if (state.driftDirection > 0) {
            meshHandles.rearRightWheel.getWorldPosition(sparkWorldPos);
          } else {
            meshHandles.rearLeftWheel.getWorldPosition(sparkWorldPos);
          }
          this.particles.emitDriftSparks(sparkWorldPos, state.driftLevel, state.rotation.y);
        }
      }
    } else {
      // Normal standard steering
      if (rawSteer !== 0 && Math.abs(state.speed) > 0.5) {
        const reverseFactor = state.speed < 0 ? -1 : 1;
        state.angularVelocity = THREE.MathUtils.lerp(state.angularVelocity, rawSteer * baseSteerSpeed * reverseFactor, Math.min(1, delta * 12));
      } else {
        state.angularVelocity = THREE.MathUtils.lerp(state.angularVelocity, 0, Math.min(1, delta * 14));
      }

      state.rotation.roll = THREE.MathUtils.lerp(
        state.rotation.roll,
        -rawSteer * 0.08 * speedRatio,
        delta * 8
      );
    }

    // Apply angular velocity to kart heading
    state.rotation.y += state.angularVelocity * delta;

    // 6. Forward Velocity & Slide Vector
    // Ease into and out of the drift slide instead of jumping sideways
    state.slideAngle = THREE.MathUtils.lerp(state.slideAngle || 0, state.isDrifting ? state.driftDirection * 0.38 : 0, Math.min(1, delta * 6));
    const heading = state.rotation.y + state.slideAngle;

    const vx = Math.sin(heading) * state.speed;
    const vz = Math.cos(heading) * state.speed;

    state.position.x += vx * delta;
    state.position.z += vz * delta;
    // Bump shove decays fast
    if (state.bumpX || state.bumpZ) {
      state.position.x += (state.bumpX || 0) * delta;
      state.position.z += (state.bumpZ || 0) * delta;
      const k = Math.exp(-delta * 6);
      state.bumpX = (state.bumpX || 0) * k; state.bumpZ = (state.bumpZ || 0) * k;
      if (Math.abs(state.bumpX) + Math.abs(state.bumpZ) < 0.05) state.bumpX = state.bumpZ = 0;
    }

    // Follow terrain elevation smoothly
    state.position.y = THREE.MathUtils.lerp(state.position.y, (onDirt ? scY! : closest.point.y) + 0.1, delta * 12);

    // 7. Track Wall / Outer Boundary Soft Barrier Physics
    const maxBound = halfW + 6;
    if (closest.distanceToCenter > maxBound && !onDirt) {
      // Push back towards track center
      const toTrackX = closest.point.x - state.position.x;
      const toTrackZ = closest.point.z - state.position.z;
      const dist = Math.sqrt(toTrackX * toTrackX + toTrackZ * toTrackZ);
      if (dist > 0.01) {
        state.position.x += (toTrackX / dist) * (closest.distanceToCenter - maxBound) * 0.8;
        state.position.z += (toTrackZ / dist) * (closest.distanceToCenter - maxBound) * 0.8;
        state.speed *= 0.6; // Bump slowdown
        if (state.config.isPlayer) {
          soundEngine.playCollisionSound(0.5);
        }
      }
    }

    // 8. Kart-to-Kart Collisions
    this.handleKartCollisions(state, allRacers);

    // 9. Particle emissions for boost & exhaust
    if (state.boostTimer > 0) {
      const exhaustWorldPos = new THREE.Vector3();
      meshHandles.rootGroup.getWorldPosition(exhaustWorldPos);
      this.particles.emitBoostFlames(exhaustWorldPos, state.rotation.y);
    }

    // 10. Update Lap & Track Progress
    this.updateProgression(state);

    // 11. Sync Visual 3D Mesh
    this.syncMesh(state, meshHandles, delta);

    // 12. Audio Updates (for the lead player only, so several humans don't fight over the engine sound)
    if (state.config.isPlayer && state.config.audioLead !== false) {
      soundEngine.updateEngine(
        state.speed / config.topSpeed,
        input.throttle,
        state.boostTimer > 0
      );
      soundEngine.updateDriftScreech(state.isDrifting, state.driftLevel, state.speed);
    }
  }

  private triggerDriftBoost(state: RacerState) {
    let boostDuration = 0.7;
    let multiplier = 1.35;

    if (state.driftLevel === 2) {
      boostDuration = 1.2;
      multiplier = 1.48;
    } else if (state.driftLevel === 3) {
      boostDuration = 1.7;
      multiplier = 1.62;
    }

    state.boostTimer = boostDuration;
    state.boostMultiplier = multiplier;
    state.speed = Math.max(state.speed, state.config.topSpeed * 1.15);

    if (state.config.isPlayer) {
      soundEngine.playBoostSound();
    }
  }

  public triggerStartBoost(state: RacerState) {
    state.boostTimer = 1.8;
    state.boostMultiplier = 1.45;
    state.speed = state.config.topSpeed * 1.2;
    if (state.config.isPlayer) {
      soundEngine.playBoostSound();
    }
  }

  private handleKartCollisions(state: RacerState, allRacers: RacerState[]) {
    const kartRadius = 1.35;

    for (const other of allRacers) {
      if (other.config.id === state.config.id) continue;

      const dx = state.position.x - other.position.x;
      const dz = state.position.z - other.position.z;
      const dist = Math.sqrt(dx * dx + dz * dz);

      if (dist < kartRadius * 2 && dist > 0.001) {
        // Collision overlap resolution
        const overlap = kartRadius * 2 - dist;
        const nx = dx / dist;
        const nz = dz / dist;

        // Heavier karts move less and shove harder
        const wa = state.config.weight || 2, wb = other.config.weight || 2;
        const shareA = wb / (wa + wb), shareB = wa / (wa + wb);
        state.position.x += nx * overlap * shareA;
        state.position.z += nz * overlap * shareA;
        other.position.x -= nx * overlap * shareB;
        other.position.z -= nz * overlap * shareB;

        // Sideways shove, stronger the harder they hit
        const closing = Math.min(30, Math.abs(state.speed - other.speed) + 6);
        const now = performance.now();
        if (!state.bumpedAt || now - state.bumpedAt > 250) {
          const star = (r: RacerState) => (r.starTimer && r.starTimer > 0 ? 3 : 1);
          state.bumpX = (state.bumpX || 0) + nx * closing * 0.55 * shareA * star(other) / star(state);
          state.bumpZ = (state.bumpZ || 0) + nz * closing * 0.55 * shareA * star(other) / star(state);
          other.bumpX = (other.bumpX || 0) - nx * closing * 0.55 * shareB * star(state) / star(other);
          other.bumpZ = (other.bumpZ || 0) - nz * closing * 0.55 * shareB * star(state) / star(other);
          state.bumpedAt = other.bumpedAt = now;
          if (state.config.isPlayer || other.config.isPlayer) soundEngine.playCollisionSound(0.7);
        }

        // Exchange some speed (light karts lose more)
        const avgSpeed = (state.speed * wa + other.speed * wb) / (wa + wb);
        state.speed = THREE.MathUtils.lerp(state.speed, avgSpeed, 0.5 * shareA);
        other.speed = THREE.MathUtils.lerp(other.speed, avgSpeed, 0.5 * shareB);
      }
    }
  }

  private updateProgression(state: RacerState) {
    const closest = this.track.getClosestTrackPoint(state.position.x, state.position.z);
    const totalPoints = this.track.trackPoints.length;
    const currentIndex = closest.index;

    // Checkpoint navigation
    const prevIndex = state.checkpointIndex;
    const forwardDiff = (currentIndex - prevIndex + totalPoints) % totalPoints;

    // Ensure forward progression
    if (forwardDiff > 0 && forwardDiff < totalPoints / 3) {
      state.checkpointIndex = currentIndex;
      state.splineProgress = currentIndex / totalPoints;

      // Lap completion detection (passing from near end of track to near start)
      if (prevIndex > totalPoints * 0.85 && currentIndex < totalPoints * 0.15) {
        state.currentLap += 1;
        state.lapTimes.push(state.currentLapTime);

        if (state.bestLapTime === null || state.currentLapTime < state.bestLapTime) {
          state.bestLapTime = state.currentLapTime;
        }

        if (state.config.isPlayer) {
          soundEngine.playLapChime(state.currentLap === (this.totalLaps || 3));
        }

        state.currentLapTime = 0;
      }
    }

    // Total distance traveled metric for live ranking
    state.totalDistance = (state.currentLap - 1) * this.track.totalLength + closest.point.distance;
  }

  private respawnOnTrack(state: RacerState) {
    const closest = this.track.getClosestTrackPoint(state.position.x, state.position.z);
    state.position.x = closest.point.x;
    state.position.y = closest.point.y + 0.1;
    state.position.z = closest.point.z;

    // Face track tangent forward
    state.rotation.y = Math.atan2(closest.point.tangentX, closest.point.tangentZ);
    state.rotation.roll = 0;
    state.rotation.pitch = 0;
    state.speed = 0;
    state.angularVelocity = 0;
    state.isDrifting = false;
    state.driftLevel = 0;
    state.boostTimer = 0;
    state.invulnerableTimer = 1.5;
  }

  private syncMesh(state: RacerState, meshHandles: KartMeshHandles, delta: number) {
    const { rootGroup, bodyGroup, frontLeftWheel, frontRightWheel, rearLeftWheel, rearRightWheel, steeringWheel, driverHead } = meshHandles;

    // Root position & main yaw rotation
    rootGroup.position.set(state.position.x, state.position.y, state.position.z);
    rootGroup.rotation.y = state.rotation.y;

    // Body roll (drift lean) and pitch
    bodyGroup.rotation.z = state.rotation.roll;
    bodyGroup.rotation.x = state.rotation.pitch;

    // Wheels rotation (rolling with speed)
    const wheelRotSpeed = (state.speed / 0.3) * delta;
    frontLeftWheel.children[0].rotation.x += wheelRotSpeed;
    frontRightWheel.children[0].rotation.x += wheelRotSpeed;
    rearLeftWheel.children[0].rotation.x += wheelRotSpeed;
    rearRightWheel.children[0].rotation.x += wheelRotSpeed;

    // Front wheels steering angle
    const targetSteer = state.isDrifting
      ? state.driftDirection * 0.45
      : (state.angularVelocity / 2.5);
    frontLeftWheel.rotation.y = THREE.MathUtils.lerp(frontLeftWheel.rotation.y, targetSteer, delta * 15);
    frontRightWheel.rotation.y = THREE.MathUtils.lerp(frontRightWheel.rotation.y, targetSteer, delta * 15);

    // Steering wheel turning
    steeringWheel.rotation.z = -targetSteer * 1.8;

    // Driver head looks into turn
    driverHead.rotation.y = THREE.MathUtils.lerp(driverHead.rotation.y, targetSteer * 0.8, delta * 10);
  }
}
