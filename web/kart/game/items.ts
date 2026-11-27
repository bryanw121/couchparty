import * as THREE from 'three';
import { RacerState } from '../types';
import { TrackSystem } from './track';
import { soundEngine } from './audio';

// Item boxes, the roulette, and everything you can throw.
// Items: banana (drop behind), green shell (straight), red shell (homes on the racer ahead),
// blue shell (homes on first place), boost, star (invincible + faster) and bolt (shrinks everyone else).

export type ItemKind = 'banana' | 'green' | 'red' | 'blue' | 'boost' | 'star' | 'bolt';
export const ITEM_KINDS: ItemKind[] = ['banana', 'green', 'red', 'blue', 'boost', 'star', 'bolt'];

export interface HeldItem {
  kind: ItemKind | null; // null while the roulette spins
  rollLeft: number;
  shown: ItemKind; // what the roulette currently displays
}

export interface ItemEvent {
  type: 'pickup' | 'use' | 'hit' | 'bolt';
  racer: string; // who it happened to
  by?: string; // who caused it
  item?: ItemKind;
}

interface Box { mesh: THREE.Mesh; x: number; y: number; z: number; respawn: number }
interface Thrown {
  kind: ItemKind;
  owner: string;
  mesh: THREE.Object3D;
  x: number; y: number; z: number;
  heading: number;
  speed: number;
  life: number;
  target?: string;
  armed: number; // can't hit its owner until this runs out
}

// Odds by race position: further back, better items. Rows are weights for ITEM_KINDS.
function rollFor(rank: number, total: number): ItemKind {
  const t = total <= 1 ? 0 : (rank - 1) / (total - 1); // 0 = first place, 1 = last
  const w = [
    6 - 4 * t, // banana
    5 - 2 * t, // green
    1 + 4 * t, // red
    t > 0.6 ? 1.2 : 0, // blue
    2 + 3 * t, // boost
    t > 0.4 ? 2 * t : 0, // star
    t > 0.75 ? 1 : 0, // bolt
  ];
  let sum = 0;
  for (const v of w) sum += v;
  let r = Math.random() * sum;
  for (let i = 0; i < w.length; i++) { r -= w[i]; if (r <= 0) return ITEM_KINDS[i]; }
  return 'banana';
}

function questionTexture(): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d')!;
  const grad = g.createLinearGradient(0, 0, 128, 128);
  grad.addColorStop(0, '#ffd34d');
  grad.addColorStop(0.5, '#ff7ac6');
  grad.addColorStop(1, '#5ee6c8');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  g.strokeStyle = 'rgba(255,255,255,0.9)';
  g.lineWidth = 8;
  g.strokeRect(6, 6, 116, 116);
  g.fillStyle = '#ffffff';
  g.font = 'bold 90px sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText('?', 64, 70);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeProjectile(kind: ItemKind): THREE.Object3D {
  const g = new THREE.Group();
  if (kind === 'banana') {
    const peel = new THREE.Mesh(
      new THREE.TorusGeometry(0.45, 0.16, 8, 16, Math.PI * 1.1),
      new THREE.MeshStandardMaterial({ color: 0xffe14d, roughness: 0.5 })
    );
    peel.rotation.x = Math.PI / 2;
    peel.position.y = 0.2;
    g.add(peel);
  } else {
    const color = kind === 'green' ? 0x22c55e : kind === 'red' ? 0xef4444 : 0x3b82f6;
    const shell = new THREE.Mesh(
      new THREE.SphereGeometry(0.55, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2),
      new THREE.MeshStandardMaterial({ color, roughness: 0.3, metalness: 0.2, emissive: color, emissiveIntensity: kind === 'blue' ? 0.5 : 0.15 })
    );
    const rim = new THREE.Mesh(
      new THREE.TorusGeometry(0.55, 0.1, 6, 18),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 })
    );
    rim.rotation.x = Math.PI / 2;
    shell.position.y = 0.25;
    rim.position.y = 0.25;
    g.add(shell, rim);
    if (kind === 'blue') {
      const wing = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
      const wl = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.05, 0.3), wing);
      wl.position.set(-0.7, 0.5, 0);
      const wr = wl.clone();
      wr.position.x = 0.7;
      g.add(wl, wr);
    }
  }
  return g;
}

export class ItemSystem {
  public held = new Map<string, HeldItem>();
  public onEvent?: (e: ItemEvent) => void;
  private boxes: Box[] = [];
  private thrown: Thrown[] = [];
  private group = new THREE.Group();
  private boxGeo = new THREE.BoxGeometry(1.4, 1.4, 1.4);
  private boxMat: THREE.MeshStandardMaterial;
  private aiTimers = new Map<string, number>();

  constructor(private scene: THREE.Scene, private track: TrackSystem) {
    scene.add(this.group);
    this.boxMat = new THREE.MeshStandardMaterial({
      map: questionTexture(),
      transparent: true,
      opacity: 0.92,
      roughness: 0.2,
      emissive: 0xffffff,
      emissiveIntensity: 0.15,
    });
    const pts = track.trackPoints;
    for (const f of [0.16, 0.42, 0.68, 0.88]) {
      const p = pts[Math.floor(f * pts.length) % pts.length];
      const w = track.roadWidth;
      for (const lane of [-0.4, -0.2, 0, 0.2, 0.4]) {
        const x = p.x + p.normalX * lane * w;
        const z = p.z + p.normalZ * lane * w;
        const mesh = new THREE.Mesh(this.boxGeo, this.boxMat);
        mesh.position.set(x, p.y + 1.2, z);
        this.group.add(mesh);
        this.boxes.push({ mesh, x, y: p.y, z, respawn: 0 });
      }
    }
  }

  public reset() {
    for (const t of this.thrown) this.group.remove(t.mesh);
    this.thrown = [];
    this.held.clear();
    for (const b of this.boxes) { b.respawn = 0; b.mesh.visible = true; }
  }

  // useRequests: racer ids that pressed the item button this frame.
  public update(delta: number, time: number, racers: RacerState[], useRequests: Set<string>, scaleOf: (id: string, s: number) => void) {
    // Boxes: spin, bob, respawn, pickup
    for (const b of this.boxes) {
      if (b.respawn > 0) {
        b.respawn -= delta;
        if (b.respawn <= 0) b.mesh.visible = true;
        continue;
      }
      b.mesh.rotation.y += delta * 1.6;
      b.mesh.rotation.x = Math.sin(time * 1.3 + b.x) * 0.3;
      b.mesh.position.y = b.y + 1.2 + Math.sin(time * 2.2 + b.z) * 0.15;
      for (const r of racers) {
        const dx = r.position.x - b.x, dz = r.position.z - b.z;
        if (dx * dx + dz * dz < 6.5) {
          b.mesh.visible = false;
          b.respawn = 2.5;
          if (!this.held.has(r.config.id)) {
            this.held.set(r.config.id, { kind: null, rollLeft: 1.3, shown: 'banana' });
            this.onEvent?.({ type: 'pickup', racer: r.config.id });
            if (r.config.isPlayer) soundEngine.playLapChime(false);
          }
          break;
        }
      }
    }

    // Roulette
    for (const [id, h] of this.held) {
      if (h.kind) continue;
      h.rollLeft -= delta;
      h.shown = ITEM_KINDS[Math.floor(time * 14) % ITEM_KINDS.length];
      if (h.rollLeft <= 0) {
        const r = racers.find((x) => x.config.id === id);
        h.kind = rollFor(r ? r.rank : racers.length, racers.length);
        h.shown = h.kind;
        if (r && !r.config.isPlayer) this.aiTimers.set(id, 0.6 + Math.random() * 3.5);
      }
    }

    // Computer racers use their item after a short think
    for (const [id, t] of this.aiTimers) {
      const left = t - delta;
      if (left <= 0) { this.aiTimers.delete(id); useRequests.add(id); } else this.aiTimers.set(id, left);
    }

    for (const id of useRequests) {
      const h = this.held.get(id);
      const r = racers.find((x) => x.config.id === id);
      if (!h || !h.kind || !r) continue;
      this.held.delete(id);
      this.use(h.kind, r, racers);
    }

    this.updateThrown(delta, racers);

    // Star: bump anyone you touch; shrink visuals
    for (const r of racers) {
      if ((r.starTimer || 0) > 0) {
        for (const o of racers) {
          if (o === r || o.spinOutTimer > 0 || (o.starTimer || 0) > 0) continue;
          const dx = o.position.x - r.position.x, dz = o.position.z - r.position.z;
          if (dx * dx + dz * dz < 5) this.hit(o, r.config.id, 'star');
        }
      }
      scaleOf(r.config.id, (r.shrinkTimer || 0) > 0 ? 0.6 : 1);
    }
  }

  private use(kind: ItemKind, r: RacerState, racers: RacerState[]) {
    this.onEvent?.({ type: 'use', racer: r.config.id, item: kind });
    const h = r.rotation.y;
    if (kind === 'boost') {
      r.boostTimer = 1.4;
      r.boostMultiplier = 1.5;
      r.speed = Math.max(r.speed, r.config.topSpeed * 1.2);
      if (r.config.isPlayer) soundEngine.playBoostSound();
      return;
    }
    if (kind === 'star') {
      r.starTimer = 7;
      r.invulnerableTimer = 7;
      r.boostTimer = 7;
      r.boostMultiplier = 1.15;
      if (r.config.isPlayer) soundEngine.playBoostSound();
      return;
    }
    if (kind === 'bolt') {
      for (const o of racers) {
        if (o === r || (o.starTimer || 0) > 0) continue;
        o.shrinkTimer = 5;
        o.spinOutTimer = Math.max(o.spinOutTimer, 0.5);
        o.speed *= 0.5;
      }
      this.onEvent?.({ type: 'bolt', racer: r.config.id });
      return;
    }
    const mesh = makeProjectile(kind);
    this.group.add(mesh);
    const behind = kind === 'banana';
    const off = behind ? -2.6 : 2.6;
    const t: Thrown = {
      kind,
      owner: r.config.id,
      mesh,
      x: r.position.x + Math.sin(h) * off,
      y: r.position.y,
      z: r.position.z + Math.cos(h) * off,
      heading: h,
      speed: behind ? 0 : kind === 'green' ? 62 : 58,
      life: behind ? 60 : kind === 'green' ? 3.5 : 8,
      armed: 0.4,
    };
    if (kind === 'red') {
      const ahead = racers.filter((o) => o.rank === r.rank - 1)[0];
      t.target = ahead ? ahead.config.id : undefined;
      if (!ahead) t.kind = 'green'; // nobody ahead: flies straight
    }
    if (kind === 'blue') {
      const leader = racers.filter((o) => o.rank === 1 && o !== r)[0];
      t.target = leader ? leader.config.id : undefined;
    }
    this.thrown.push(t);
  }

  private updateThrown(delta: number, racers: RacerState[]) {
    const halfW = this.track.roadWidth / 2;
    for (let i = this.thrown.length - 1; i >= 0; i--) {
      const t = this.thrown[i];
      t.life -= delta;
      t.armed -= delta;
      if (t.speed > 0) {
        if (t.target) {
          const tgt = racers.find((o) => o.config.id === t.target);
          if (tgt) {
            const want = Math.atan2(tgt.position.x - t.x, tgt.position.z - t.z);
            let d = want - t.heading;
            while (d > Math.PI) d -= Math.PI * 2;
            while (d < -Math.PI) d += Math.PI * 2;
            const turn = (t.kind === 'blue' ? 5 : 3.2) * delta;
            t.heading += Math.max(-turn, Math.min(turn, d));
          }
        } else {
          // Green shells follow the road loosely so they don't fly off into the scenery
          const c = this.track.getClosestTrackPoint(t.x, t.z);
          if (c.distanceToCenter > halfW + 2) {
            const p = c.point;
            const toward = Math.atan2(p.x - t.x, p.z - t.z);
            t.heading += Math.sign(Math.sin(toward - t.heading)) * 3 * delta;
          }
        }
        t.x += Math.sin(t.heading) * t.speed * delta;
        t.z += Math.cos(t.heading) * t.speed * delta;
        t.mesh.rotation.y += delta * 10;
      }
      const ground = this.track.getClosestTrackPoint(t.x, t.z).point.y;
      t.y = THREE.MathUtils.lerp(t.y, ground + (t.kind === 'blue' ? 1.4 : 0.1), delta * 10);
      t.mesh.position.set(t.x, t.y, t.z);

      let done = t.life <= 0;
      if (!done) {
        for (const r of racers) {
          if (r.config.id === t.owner && t.armed > 0) continue;
          const dx = r.position.x - t.x, dz = r.position.z - t.z;
          const radius = t.kind === 'blue' && r.config.id === t.target ? 2.6 : 1.7;
          if (dx * dx + dz * dz < radius * radius) {
            if (t.kind === 'blue' && t.target && r.config.id !== t.target) continue; // flies over everyone else
            this.hit(r, t.owner, t.kind);
            done = true;
            break;
          }
        }
      }
      if (done) {
        this.group.remove(t.mesh);
        this.thrown.splice(i, 1);
      }
    }
  }

  private hit(r: RacerState, by: string, kind: ItemKind) {
    if (r.invulnerableTimer > 0 || (r.starTimer || 0) > 0) return;
    r.spinOutTimer = kind === 'blue' ? 1.8 : 1.1;
    r.invulnerableTimer = 2.2;
    r.boostTimer = 0;
    r.boostMultiplier = 1;
    r.isDrifting = false;
    this.onEvent?.({ type: 'hit', racer: r.config.id, by, item: kind });
    if (r.config.isPlayer) soundEngine.playCollisionSound(1);
  }
}
