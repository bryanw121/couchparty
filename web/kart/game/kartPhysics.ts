import * as THREE from 'three';
import { RacerState, InputState } from '../types';
import { TrackSystem } from './track';
import { ParticleSystem } from './particles';
import { soundEngine } from './audio';
import { sfx } from './sfx';
import { KartMeshHandles } from './kartModel';
import {animateHeroDriver} from './heroAssets';
import {response} from './motion';
import {animateKartMotion} from './kartMotion';
import {animateDriverReaction} from './driverAnimation';

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
    this.track.features?.step(state, input, delta);
    // Keep the hit penalty, then settle facing the track's forward direction.
    if (state.spinOutTimer > 0) {
      const remaining = state.spinOutTimer;
      state.spinOutTimer = Math.max(0, remaining - delta);
      state.speed *= Math.max(0, 1 - delta * 2);
      const closest = this.track.getClosestTrackPoint(state.position.x,state.position.z);
      state.rotation.y += Math.min(delta, remaining) * 12 * Math.min(1, state.spinOutTimer / .3);
      if (state.spinOutTimer < .3) {
        const forward = Math.atan2(closest.point.tangentX, closest.point.tangentZ);
        const difference = Math.atan2(Math.sin(forward-state.rotation.y), Math.cos(forward-state.rotation.y));
        state.rotation.y += difference * Math.min(1, delta / Math.min(.3, remaining));
      }
      // A pre-hit drift or steering impulse must not turn us back around on recovery.
      state.angularVelocity = 0;
      state.steerSmooth = 0;
      state.slideAngle = 0;
      state.isDrifting = false;
      state.driftDirection = state.driftTime = state.driftLevel = 0;
      state.driftHeld = input.drift;
      state.hopT = 0;
      state.rotation.roll *= Math.max(0, 1 - delta * 10);
      if (state.spinOutTimer === 0) {
        state.speed = Math.max(0, state.speed);
        state.rotation.roll = 0;
      }
      state.position.y = closest.point.y + .1 + (state.airHeight || 0);
      if(state.config.isPlayer&&state.config.audioLead!==false){soundEngine.updateEngine(state.speed/state.config.topSpeed,false,false);soundEngine.updateDriftScreech(false,0,0);soundEngine.updateRoadSound(0,'road');}
      this.syncMesh(state, meshHandles, delta);
      return;
    }

    if (state.invulnerableTimer > 0) {
      state.invulnerableTimer -= delta;
    }

    // Respawn / Reset requested
    if (input.respawn) {
      this.track.features?.reset(state);
      this.track.adventure?.reset(state);
      this.respawnOnTrack(state);
      return;
    }

    const { config } = state;
    const shortcutEffect=this.track.adventure?.step(state);
    const isGrounded = (state.airHeight || 0) < .15;

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
    // coins: each one adds a little top speed
    effectiveTopSpeed *= 1 + 0.012 * (state.coins || 0);
    if (state.rideTimer && state.rideTimer > 0) { state.rideTimer -= delta; effectiveTopSpeed *= 1.35; state.speed = Math.max(state.speed, config.topSpeed * 1.45); }
    if (state.ghostTimer && state.ghostTimer > 0) state.ghostTimer -= delta;
    if (state.inkTimer && state.inkTimer > 0) state.inkTimer -= delta;
    let accelRate = config.acceleration;
    // Shortcut dirt: slow, unless you're boosting through it
    if (onDirt && isGrounded && state.boostTimer <= 0 && !(state.starTimer && state.starTimer > 0) && !(state.rideTimer && state.rideTimer>0)) {
      effectiveTopSpeed = Math.min(effectiveTopSpeed, config.topSpeed * (shortcutEffect?.speedRatio??.66));
      // Rough routes scrub speed promptly; coasting in at road speed is not a free shortcut.
      if(state.speed>effectiveTopSpeed)state.speed=THREE.MathUtils.lerp(state.speed,effectiveTopSpeed,Math.min(1,delta*4));
    }

    if (isOffTrack && isGrounded) {
      // grass slows you down, but never to a crawl (boosts power through it)
      if (state.boostTimer <= 0) effectiveTopSpeed = Math.min(effectiveTopSpeed, config.topSpeed * 0.66);
      accelRate *= 0.8;
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
        // quick pickup that eases off near top speed
        const near = Math.max(0, Math.min(1, state.speed / effectiveTopSpeed));
        state.speed += accelRate * (1.35 - 0.85 * near) * delta * (state.boostTimer > 0 ? 1.4 : 1.0);
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
      const drag = isOffTrack ? 13 : 9;
      if (state.speed > 0) {
        state.speed = Math.max(0, state.speed - drag * delta);
      } else if (state.speed < 0) {
        state.speed = Math.min(0, state.speed + drag * delta);
      }
    }

    // 5. Steering & Drift Mechanics
    const speedRatio = Math.abs(state.speed) / config.topSpeed;
    // Karts can't pivot in place: turning fades in with speed, then holds steady
    const baseSteerSpeed = config.handling * 0.68 * Math.min(1, speedRatio / 0.3)*(shortcutEffect?.grip??1);

    let rawSteer = typeof input.steer === 'number' ? input.steer : 0;
    if (input.steerLeft) rawSteer += 1;
    if (input.steerRight) rawSteer -= 1;
    rawSteer = Math.max(-1, Math.min(1, rawSteer));
    // Continuous dead zone: crossing its edge must not introduce a steering step.
    rawSteer = Math.sign(rawSteer) * Math.max(0, (Math.abs(rawSteer) - .05) / .95);
    // Softer near center, full lock at the ends: small corrections stay small
    rawSteer = Math.sign(rawSteer) * (0.4 * Math.abs(rawSteer) + 0.6 * rawSteer * rawSteer);
    // Calm small high-speed corrections while preserving full steering lock.
    rawSteer *= 1 - .18 * THREE.MathUtils.clamp((speedRatio-.6)/.6,0,1) * (1-Math.abs(rawSteer));
    // Smooth the wheel: phone input arrives in bursts, so ease toward it instead of snapping
    const prev = state.steerSmooth || 0;
    const rate = (Math.abs(rawSteer) < Math.abs(prev) || Math.sign(rawSteer) !== Math.sign(prev)) ? 18 : 14;
    state.steerSmooth = prev + (rawSteer - prev) * response(rate, delta);
    if (Math.abs(state.steerSmooth) < 0.002 && rawSteer === 0) state.steerSmooth = 0;
    const steerIn = rawSteer;
    rawSteer = state.steerSmooth;

    // Hop: pressing drift makes the kart hop; steer while airborne and you land in a drift that way
    const pressed = input.drift && !state.driftHeld;
    state.driftHeld = input.drift;
    if (isGrounded && pressed && !state.isDrifting && (state.hopT || 0) <= 0 && Math.abs(state.speed) > 6) {
      state.hopT = 0.26;
      if (state.config.isPlayer && state.config.audioLead !== false) soundEngine.playCollisionSound(0.15);
    }
    if ((state.hopT || 0) > 0) {
      state.hopT! -= delta;
      if (state.hopT! <= 0 && input.drift && !state.isDrifting && Math.abs(state.speed) > 10 && Math.abs(steerIn) > 0.15) {
        state.isDrifting = true;
        state.driftDirection = Math.sign(steerIn);
        state.driftTime = 0;
        state.driftLevel = 0;
      }
    }

    // Continue or Cancel Drift
    if (state.isDrifting && isGrounded) {
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
        // Charge builds faster the harder you steer into the drift
        const into = Math.max(-1, Math.min(1, rawSteer * state.driftDirection));
        state.driftTime += delta * (0.6 + 0.9 * Math.max(0, into));

        // Boost levels: blue, orange, purple
        if (state.driftTime > 2.4) {
          state.driftLevel = 3;
        } else if (state.driftTime > 1.5) {
          state.driftLevel = 2;
        } else if (state.driftTime > 0.7) {
          state.driftLevel = 1;
        }

        // Steer dynamics inside drift: player can counter-steer to adjust radius
        // Into the drift tightens the line, away from it widens it; you can't straighten out mid-drift
        const driftSteerMod = Math.max(-1, Math.min(1, rawSteer * state.driftDirection));
        const driftAngularSpeed = config.handling * 0.5 * (1.05 + driftSteerMod * 0.4) * state.driftDirection;
        state.angularVelocity = THREE.MathUtils.lerp(state.angularVelocity, driftAngularSpeed, response(8, delta));

        // Visual roll & slide angle
        state.rotation.roll = THREE.MathUtils.lerp(
          state.rotation.roll,
          -state.driftDirection * 0.18,
          response(10, delta)
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
    }
    if (!state.isDrifting || !isGrounded) {
      // Normal standard steering
      const settlingDrift = Math.abs(state.slideAngle || 0) > .01;
      const turnResponse = response(settlingDrift ? 8 : 12, delta);
      if (rawSteer !== 0 && Math.abs(state.speed) > 0.5) {
        const reverseFactor = state.speed < 0 ? -1 : 1;
        state.angularVelocity = THREE.MathUtils.lerp(state.angularVelocity, rawSteer * baseSteerSpeed * reverseFactor, turnResponse);
      } else {
        state.angularVelocity = THREE.MathUtils.lerp(state.angularVelocity, 0, settlingDrift ? turnResponse : response(14, delta));
      }

      state.rotation.roll = THREE.MathUtils.lerp(
        state.rotation.roll,
        -rawSteer * 0.08 * speedRatio,
        response(8, delta)
      );
    }

    // Apply angular velocity to kart heading
    state.rotation.y += state.angularVelocity * delta;

    // 6. Forward Velocity & Slide Vector
    // Ease into and out of the drift slide instead of jumping sideways
    state.slideAngle = THREE.MathUtils.lerp(state.slideAngle || 0, state.isDrifting ? state.driftDirection * 0.26 : 0, response(state.isDrifting ? 6 : 8, delta));
    const heading = state.rotation.y + state.slideAngle;

    const vx = Math.sin(heading) * state.speed;
    const vz = Math.cos(heading) * state.speed;

    if (state.isGliding) {
      const roadHeading = Math.atan2(closest.point.tangentX, closest.point.tangentZ);
      const difference = Math.atan2(Math.sin(roadHeading-state.rotation.y),Math.cos(roadHeading-state.rotation.y));
      state.rotation.y += difference * Math.min(1, delta * .7);
    }
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
    state.position.y = (state.airHeight || 0) > 0 ? closest.point.y + 0.1 + state.airHeight! : THREE.MathUtils.lerp(state.position.y, (onDirt ? scY! : closest.point.y) + 0.1, delta * 12);

    // 7. Track Wall / Outer Boundary Soft Barrier Physics
    const maxBound = halfW + 10;
    if (closest.distanceToCenter > maxBound && !onDirt) {
      // Push back towards track center
      const toTrackX = closest.point.x - state.position.x;
      const toTrackZ = closest.point.z - state.position.z;
      const dist = Math.sqrt(toTrackX * toTrackX + toTrackZ * toTrackZ);
      if (dist > 0.01) {
        state.position.x += (toTrackX / dist) * (closest.distanceToCenter - maxBound);
        state.position.z += (toTrackZ / dist) * (closest.distanceToCenter - maxBound);
        // brush along the edge: a gentle scrub instead of a dead stop
        state.speed *= Math.pow(0.6, delta);
        const now = performance.now();
        if (state.config.isPlayer && !state.isFinished && (!state.bumpedAt || now - state.bumpedAt > 400)) {
          sfx.wall(); state.bumpedAt = now;
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
    if (state.config.isPlayer && !state.isFinished && state.speed < -2) sfx.reverse();
    if (state.config.isPlayer && state.config.audioLead !== false) {
      if (state.isFinished) { soundEngine.stopEngine(); return; }
      soundEngine.updateEngine(
        state.speed / config.topSpeed,
        input.throttle,
        state.boostTimer > 0
      );
      soundEngine.updateDriftScreech(state.isDrifting, state.driftLevel, state.speed);
      soundEngine.updateRoadSound(state.speed,!isGrounded?'air':isOffTrack||onDirt?'rough':'road');
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
      if (other.config.id === state.config.id || Math.abs((state.airHeight || 0) - (other.airHeight || 0)) > 2) continue;
      if ((state.ghostTimer || 0) > 0 || (other.ghostTimer || 0) > 0) continue;

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
          if ((state.config.isPlayer && !state.isFinished) || (other.config.isPlayer && !other.isFinished)) sfx.bump();
        }

        // Exchange some speed (light karts lose more)
        const avgSpeed = (state.speed * wa + other.speed * wb) / (wa + wb);
        state.speed = THREE.MathUtils.lerp(state.speed, avgSpeed, 0.5 * shareA);
        other.speed = THREE.MathUtils.lerp(other.speed, avgSpeed, 0.5 * shareB);
      }
    }
  }

  private updateProgression(state: RacerState) {
    if(state.isFinished)return;
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
    state.spinOutTimer=0;state.steerSmooth=0;state.slideAngle=0;state.driftDirection=state.driftTime=0;state.hopT=0;
    state.bumpX=state.bumpZ=0;state.boostMultiplier=1;
  }
  public recoverRacer(state:RacerState){this.track.features?.reset(state);this.track.adventure?.reset(state);this.respawnOnTrack(state);}

  private syncMesh(state: RacerState, meshHandles: KartMeshHandles, delta: number) {
    const { rootGroup, bodyGroup, frontLeftWheel, frontRightWheel, rearLeftWheel, rearRightWheel, steeringWheel, driverHead } = meshHandles;

    // Root position & main yaw rotation
    const hop = (state.hopT || 0) > 0 ? Math.sin((1 - state.hopT! / 0.26) * Math.PI) * 0.45 : 0;
    rootGroup.position.set(state.position.x, state.position.y + hop, state.position.z);
    rootGroup.rotation.y = state.rotation.y;

    // Body roll (drift lean) and pitch
    bodyGroup.rotation.z = state.rotation.roll + (state.trickRoll || 0);
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
    animateHeroDriver(driverHead,delta,targetSteer,Math.abs(state.speed),state.isDrifting,state.isFinished);
    animateKartMotion(state,meshHandles,delta);
    animateDriverReaction(driverHead,delta,{hit:state.spinOutTimer>0,boost:state.boostTimer>0,air:(state.airHeight||0)>.3,steer:state.angularVelocity});
  }
}
