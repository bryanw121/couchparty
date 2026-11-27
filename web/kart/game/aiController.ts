import { RacerState, InputState } from '../types';
import { TrackSystem } from './track';

// Computer racer: chases a point a little way ahead on its own racing line with smooth,
// proportional steering, lifts off before tight corners, drifts the long ones, and
// steps out of the way of karts it's about to rear-end.
export class AIController {
  private track: TrackSystem;
  private me: RacerState;
  private lane = 0; // racing line offset, -1 .. 1 of half the road
  private laneGoal = 0;
  private laneTimer = 0;
  private skill: number;

  constructor(track: TrackSystem, racerState: RacerState) {
    this.track = track;
    this.me = racerState;
    this.skill = racerState.config.aiAggression || 1;
    this.lane = this.laneGoal = (Math.random() - 0.5) * 0.7;
  }

  private wrap(a: number) {
    while (a > Math.PI) a -= Math.PI * 2;
    while (a < -Math.PI) a += Math.PI * 2;
    return a;
  }

  // heading of the road at index i
  private roadHeading(i: number) {
    const P = this.track.trackPoints, p = P[((i % P.length) + P.length) % P.length];
    return Math.atan2(p.tangentX, p.tangentZ);
  }

  public update(delta: number, all: RacerState[]): InputState {
    const s = this.me;
    const P = this.track.trackPoints, n = P.length;
    const seg = this.track.totalLength / n;
    const halfW = this.track.roadWidth / 2;
    const speed = Math.abs(s.speed);
    const here = this.track.getClosestTrackPoint(s.position.x, s.position.z);
    const i0 = here.index;

    // drift lane choice every few seconds, and dodge karts right in front
    this.laneTimer -= delta;
    if (this.laneTimer <= 0) { this.laneTimer = 2 + Math.random() * 3; this.laneGoal = (Math.random() - 0.5) * 0.8; }
    for (const o of all) {
      if (o === s) continue;
      const dx = o.position.x - s.position.x, dz = o.position.z - s.position.z;
      const fwd = dx * Math.sin(s.rotation.y) + dz * Math.cos(s.rotation.y);
      const side = dx * Math.cos(s.rotation.y) - dz * Math.sin(s.rotation.y);
      if (fwd > 0 && fwd < 9 && Math.abs(side) < 2.6 && o.speed < s.speed) { this.laneGoal = side > 0 ? -0.55 : 0.55; this.laneTimer = 1.2; }
    }
    this.lane += (this.laneGoal - this.lane) * Math.min(1, delta * 1.5);

    // look further ahead the faster we go
    const ahead = Math.round((7 + speed * 0.32) / seg);
    const tp = P[(i0 + ahead) % n];
    // cut to the inside of the coming bend a little
    const bend = this.wrap(this.roadHeading(i0 + ahead + 6) - this.roadHeading(i0 + ahead - 2));
    const offset = Math.max(-0.8, Math.min(0.8, this.lane + Math.sign(bend) * Math.min(0.5, Math.abs(bend) * 1.2)));
    const tx = tp.x + tp.normalX * offset * halfW;
    const tz = tp.z + tp.normalZ * offset * halfW;

    const want = Math.atan2(tx - s.position.x, tz - s.position.z);
    const err = this.wrap(want - s.rotation.y);
    const steer = Math.max(-1, Math.min(1, err * 2.4));

    // how sharp is the road over the next stretch?
    const far = Math.round((22 + speed * 0.5) / seg);
    const turnAhead = Math.abs(this.wrap(this.roadHeading(i0 + far) - this.roadHeading(i0 + 2)));
    const offRoad = here.distanceToCenter > halfW + 0.5;

    // speed management: lift for tight corners, brake if way off line
    const top = s.config.topSpeed;
    let target = top * (0.92 + 0.08 * Math.min(1, this.skill));
    if (turnAhead > 1.1) target = top * 0.62;
    else if (turnAhead > 0.75) target = top * 0.78;
    if (Math.abs(err) > 0.9) target = Math.min(target, top * 0.5);
    const throttle = speed < target;
    const brake = speed > target + 8 || (Math.abs(err) > 1.3 && speed > 14);

    // drift the long, firm bends when there's room
    const driftOK = turnAhead > 0.55 && turnAhead < 1.6 && speed > 24 && !offRoad && Math.abs(steer) > 0.35;
    const drift = s.isDrifting ? (turnAhead > 0.3 && Math.sign(steer) === s.driftDirection) : driftOK;

    return {
      throttle, brake,
      steerLeft: false, steerRight: false,
      steer,
      drift,
      respawn: false, cameraToggle: false,
    };
  }
}
