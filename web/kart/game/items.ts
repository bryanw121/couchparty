import * as THREE from 'three';
import { RacerState } from '../types';
import { TrackSystem } from './track';
import { soundEngine } from './audio';

// Item boxes, the roulette, and everything you can throw.
// Items: banana (drop behind), green shell (straight), red shell (homes on the racer ahead),
// blue shell (homes on first place), boost, star (invincible + faster) and bolt (shrinks everyone else).

export type ItemKind = 'banana' | 'green' | 'red' | 'blue' | 'boost' | 'star' | 'bolt' | 'fake' | 'coin' | 'horn' | 'bomb' | 'ink' | 'golden' | 'ride' | 'ghost';
export const ITEM_KINDS: ItemKind[] = ['banana', 'green', 'red', 'blue', 'boost', 'star', 'bolt', 'fake', 'coin', 'horn', 'bomb', 'ink', 'golden', 'ride', 'ghost'];

export interface HeldItem {
  kind: ItemKind | null; // null while the roulette spins
  rollLeft: number;
  shown: ItemKind; // what the roulette currently displays
  count: number; // 3 for triples
  trailing: boolean; // dragged behind the kart as a shield
  trail: THREE.Object3D[];
  justStarted?: boolean;
  left?: number; // golden turbo: seconds of unlimited boosts once first used
}
const TRAILABLE: ItemKind[] = ['banana', 'green', 'red', 'fake', 'bomb'];
const TRIPLES: ItemKind[] = ['banana', 'green', 'red', 'boost'];

export interface ItemEvent {
  type: 'pickup' | 'use' | 'hit' | 'bolt' | 'block' | 'ink' | 'steal' | 'boom' | 'horn' | 'coin';
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
// Equalizing odds: the further back you are, the stronger the item. The leader mostly gets
// defensive items (bananas, decoys, coins, the horn) but can still get something useful.
function rollFor(rank: number, total: number): ItemKind {
  const t = total <= 1 ? 0 : (rank - 1) / (total - 1); // 0 = first place, 1 = last
  const w: Record<ItemKind, number> = {
    banana: 5 - 4 * t,
    green: 3.5 - 2 * t,
    fake: 2.2 * (1 - t),
    coin: 3 * (1 - t) + 0.3,
    horn: t < 0.25 ? 1.2 : 0.3,
    red: t < 0.1 ? 0.4 : 1 + 2.5 * t,
    bomb: 0.4 + 1.8 * t,
    ink: t > 0.3 ? 1.2 : 0,
    boost: 1 + 3 * t,
    golden: t > 0.5 ? 2.2 * t : 0,
    star: t > 0.45 ? 2 * t : 0,
    ride: t > 0.7 ? 2.6 * t : 0,
    ghost: t > 0.3 ? 0.8 : 0,
    blue: t > 0.5 ? 1 : 0,
    bolt: t > 0.8 ? 0.9 : 0,
  };
  let sum = 0;
  for (const k of ITEM_KINDS) sum += w[k];
  let r = Math.random() * sum;
  for (const k of ITEM_KINDS) { r -= w[k]; if (r <= 0) return k; }
  return 'banana';
}

const GIFT_COLORS = ['#ff5d8f', '#4cc9f0', '#ffc83d', '#7bd389', '#b388ff'];

// Wrapping paper with a ribbon cross and polka dots
function giftTexture(color: string): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d')!;
  g.fillStyle = color;
  g.fillRect(0, 0, 128, 128);
  g.fillStyle = 'rgba(255,255,255,0.35)';
  for (let y = 10; y < 128; y += 26) for (let x = (y / 26) % 2 ? 22 : 9; x < 128; x += 26) { g.beginPath(); g.arc(x, y, 4, 0, Math.PI * 2); g.fill(); }
  g.fillStyle = '#ffffff';
  g.fillRect(52, 0, 24, 128);
  g.fillRect(0, 52, 128, 24);
  g.fillStyle = 'rgba(0,0,0,0.12)';
  g.fillRect(52, 0, 4, 128); g.fillRect(0, 52, 128, 4);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function addBow(parent: THREE.Object3D) {
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.35 });
  for (const sx of [-1, 1]) {
    const loop = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.08, 8, 14), mat);
    loop.position.set(sx * 0.22, 0.82, 0);
    loop.rotation.set(0, Math.PI / 2, sx * 0.5);
    loop.scale.set(1, 1, 0.6);
    parent.add(loop);
  }
  const knot = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 8), mat);
  knot.position.y = 0.78;
  parent.add(knot);
}

function sparkleMat(color: number) {
  return new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.35, roughness: 0.25, metalness: 0.1 });
}

function makeProjectile(kind: ItemKind): THREE.Object3D {
  const g = new THREE.Group();
  if (kind === 'bomb') {
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.55, 16, 12), new THREE.MeshStandardMaterial({ color: 0x23233a, roughness: 0.35, metalness: 0.2 }));
    ball.position.y = 0.6; g.add(ball);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, 0.18, 10), new THREE.MeshStandardMaterial({ color: 0x8a8fa8 }));
    cap.position.y = 1.15; g.add(cap);
    const fuse = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.35, 6), new THREE.MeshStandardMaterial({ color: 0xc9a46a }));
    fuse.position.set(0.06, 1.38, 0); fuse.rotation.z = -0.4; g.add(fuse);
    const spark = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffd34d }));
    spark.position.set(0.14, 1.55, 0); spark.name = 'flame'; g.add(spark);
    const shine = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    shine.position.set(-0.22, 0.85, 0.35); g.add(shine);
    return g;
  }
  if (kind === 'fake') {
    const box = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.3, 1.3), new THREE.MeshStandardMaterial({ map: giftTexture('#ff5d8f'), roughness: 0.35 }));
    box.position.y = 0.75; g.add(box);
    const rib = new THREE.MeshStandardMaterial({ color: 0xd62839 });
    const bow = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.07, 8, 12), rib);
    bow.position.y = 1.5; bow.rotation.y = Math.PI / 2; g.add(bow);
    return g;
  }
  if (kind === 'banana') {
    // Curved peel with three flaps flopped open
    const peelMat = new THREE.MeshStandardMaterial({ color: 0xffd93b, roughness: 0.55 });
    const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(-0.45, 0.15, 0), new THREE.Vector3(0, 0.05, 0.25), new THREE.Vector3(0.45, 0.15, 0));
    const body = new THREE.Mesh(new THREE.TubeGeometry(curve, 12, 0.13, 8, false), peelMat);
    g.add(body);
    for (let i = 0; i < 3; i++) {
      const flap = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.6, 6), peelMat);
      const a = (i / 3) * Math.PI * 2;
      flap.position.set(0.45 + Math.cos(a) * 0.12, 0.18, Math.sin(a) * 0.18);
      flap.rotation.set(Math.sin(a) * 1.1, 0, -1.2 + Math.cos(a) * 0.3);
      g.add(flap);
    }
    const tip = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 5), new THREE.MeshStandardMaterial({ color: 0x5a3a12 }));
    tip.position.set(-0.5, 0.17, 0);
    g.add(tip);
  } else if (kind === 'green') {
    // Bouncer: a glossy jelly ball with a cheeky face
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.5, 18, 14), new THREE.MeshStandardMaterial({ color: 0x3ddc84, roughness: 0.15, transparent: true, opacity: 0.92, emissive: 0x1a7a44, emissiveIntensity: 0.25 }));
    ball.position.y = 0.5;
    ball.name = 'body';
    g.add(ball);
    const shine = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    shine.position.set(-0.18, 0.78, 0.3);
    g.add(shine);
    const eye = new THREE.MeshBasicMaterial({ color: 0x1b1b3a });
    for (const sx of [-1, 1]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), eye); e.position.set(sx * 0.15, 0.58, 0.45); g.add(e); }
  } else if (kind === 'red') {
    // Homing rocket: points along +z, its direction of travel
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 1.0, 12), sparkleMat(0xff3b3b));
    body.rotation.x = Math.PI / 2;
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.45, 12), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 }));
    nose.rotation.x = Math.PI / 2;
    nose.position.z = 0.72;
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.235, 0.235, 0.12, 12), new THREE.MeshStandardMaterial({ color: 0xffc83d }));
    band.rotation.x = Math.PI / 2;
    band.position.z = 0.25;
    g.add(body, nose, band);
    const finMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
    for (let i = 0; i < 3; i++) {
      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.32, 0.3), finMat);
      const a = (i / 3) * Math.PI * 2;
      fin.position.set(Math.sin(a) * 0.28, Math.cos(a) * 0.28, -0.4);
      fin.rotation.z = -a;
      g.add(fin);
    }
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.6, 10), new THREE.MeshBasicMaterial({ color: 0xffa31a, transparent: true, opacity: 0.85 }));
    flame.rotation.x = -Math.PI / 2;
    flame.position.z = -0.8;
    flame.name = 'flame';
    g.add(flame);
    g.children.forEach((c) => (c.position.y += 0.45));
  } else {
    // Leader zapper: a little storm cloud that hunts the race leader
    const cloudMat = new THREE.MeshStandardMaterial({ color: 0x5b6bd6, roughness: 0.6, emissive: 0x2a3a9a, emissiveIntensity: 0.4 });
    for (const [x, y, r] of [[0, 0, 0.45], [-0.42, -0.08, 0.32], [0.42, -0.06, 0.34], [0.12, 0.22, 0.32]] as const) {
      const puff = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 10), cloudMat);
      puff.position.set(x, y, 0);
      g.add(puff);
    }
    const boltShape = new THREE.Shape();
    boltShape.moveTo(0.05, 0); boltShape.lineTo(-0.15, -0.35); boltShape.lineTo(0, -0.35); boltShape.lineTo(-0.1, -0.7); boltShape.lineTo(0.2, -0.25); boltShape.lineTo(0.05, -0.25); boltShape.lineTo(0.2, 0);
    const bolt = new THREE.Mesh(new THREE.ExtrudeGeometry(boltShape, { depth: 0.06, bevelEnabled: false }), new THREE.MeshBasicMaterial({ color: 0xfff15a }));
    bolt.position.set(0, -0.3, 0);
    bolt.name = 'flame';
    g.add(bolt);
    const eye = new THREE.MeshBasicMaterial({ color: 0xffffff });
    for (const sx of [-1, 1]) { const e = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.06, 0.04), eye); e.position.set(sx * 0.15, 0.05, 0.44); e.rotation.z = sx * 0.35; g.add(e); }
  }
  return g;
}

export class ItemSystem {
  public held = new Map<string, HeldItem>();
  public onEvent?: (e: ItemEvent) => void;
  private boxes: Box[] = [];
  private coinsOnTrack: Array<{ mesh: THREE.Mesh; x: number; y: number; z: number; respawn: number }> = [];
  private thrown: Thrown[] = [];
  private group = new THREE.Group();
  private boxGeo = new THREE.BoxGeometry(1.4, 1.4, 1.4);
  private boxMats: THREE.MeshStandardMaterial[];
  private aiTimers = new Map<string, number>();

  constructor(private scene: THREE.Scene, private track: TrackSystem) {
    scene.add(this.group);
    this.boxMats = GIFT_COLORS.map((c) => new THREE.MeshStandardMaterial({ map: giftTexture(c), roughness: 0.35, emissive: 0xffffff, emissiveIntensity: 0.12 }));
    let n = 0;
    const pts = track.trackPoints;
    for (const f of [0.16, 0.42, 0.68, 0.88]) {
      const p = pts[Math.floor(f * pts.length) % pts.length];
      const w = track.roadWidth;
      for (const lane of [-0.4, -0.2, 0, 0.2, 0.4]) {
        const x = p.x + p.normalX * lane * w;
        const z = p.z + p.normalZ * lane * w;
        const mesh = new THREE.Mesh(this.boxGeo, this.boxMats[n++ % this.boxMats.length]);
        addBow(mesh);
        mesh.position.set(x, p.y + 1.2, z);
        this.group.add(mesh);
        this.boxes.push({ mesh, x, y: p.y, z, respawn: 0 });
      }
    }
    // Trails of coins between the item boxes
    const coinGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.14, 18);
    coinGeo.rotateX(Math.PI / 2);
    const coinMat = new THREE.MeshStandardMaterial({ color: 0xffc83d, emissive: 0xb07800, emissiveIntensity: 0.45, metalness: 0.6, roughness: 0.25 });
    const rimMat = new THREE.MeshStandardMaterial({ color: 0xe0a400, metalness: 0.6, roughness: 0.3 });
    for (const f of [0.07, 0.29, 0.53, 0.77]) {
      const lane = (Math.random() - 0.5) * 0.6;
      for (let k = 0; k < 5; k++) {
        const p = pts[(Math.floor(f * pts.length) + k * 2) % pts.length];
        const x = p.x + p.normalX * lane * track.roadWidth, z = p.z + p.normalZ * lane * track.roadWidth;
        const mesh = new THREE.Mesh(coinGeo, coinMat);
        const rim = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.06, 6, 18), rimMat);
        mesh.add(rim);
        mesh.position.set(x, p.y + 1, z);
        this.group.add(mesh);
        this.coinsOnTrack.push({ mesh, x, y: p.y, z, respawn: 0 });
      }
    }
  }

  public reset() {
    for (const t of this.thrown) this.group.remove(t.mesh);
    this.thrown = [];
    for (const h of this.held.values()) for (const m of h.trail) this.group.remove(m);
    this.held.clear();
    for (const b of this.boxes) { b.respawn = 0; b.mesh.visible = true; }
    for (const c of this.coinsOnTrack) { c.respawn = 0; c.mesh.visible = true; }
  }

  // useRequests: racer ids that pressed the item button this frame.
  public update(delta: number, time: number, racers: RacerState[], useRequests: Set<string>, scaleOf: (id: string, s: number) => void) {
    // Coins: spin, collect, respawn
    for (const c of this.coinsOnTrack) {
      if (c.respawn > 0) { c.respawn -= delta; if (c.respawn <= 0) c.mesh.visible = true; continue; }
      c.mesh.rotation.y += delta * 3;
      c.mesh.position.y = c.y + 1 + Math.sin(time * 3 + c.x) * 0.12;
      for (const r of racers) {
        const dx = r.position.x - c.x, dz = r.position.z - c.z;
        if (dx * dx + dz * dz < 4.5) {
          c.mesh.visible = false; c.respawn = 10;
          if ((r.coins || 0) < 10) { r.coins = (r.coins || 0) + 1; if (r.config.isPlayer && r.config.audioLead !== false) soundEngine.playCoin(); }
          this.onEvent?.({ type: 'coin', racer: r.config.id });
          break;
        }
      }
    }
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
            this.held.set(r.config.id, { kind: null, rollLeft: 1.3, shown: 'banana', count: 1, trailing: false, trail: [] });
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
        // Sometimes a triple: all three trail behind you, one per tap
        if (TRIPLES.includes(h.kind) && Math.random() < 0.22) { h.count = 3; if (TRAILABLE.includes(h.kind)) this.startTrail(h); }
        if (r && !r.config.isPlayer) this.aiTimers.set(id, 0.6 + Math.random() * 3.5);
      }
    }

    // Computer racers use their item after a short think
    for (const [id, t] of this.aiTimers) {
      const left = t - delta;
      if (left <= 0) { this.aiTimers.delete(id); useRequests.add(id); } else this.aiTimers.set(id, left);
    }

    for (const id of useRequests) this.fire(id, racers);
    for (const [id, h] of this.held) {
      if (h.kind === 'golden' && h.left !== undefined) {
        h.left -= delta;
        if (h.left <= 0) this.held.delete(id);
        else if (!racers.find((x) => x.config.id === id)?.config.isPlayer && Math.random() < delta * 3) useRequests.add(id);
      }
    }
    this.updateFx(delta);
    this.updateTrails(racers);

    this.updateThrown(delta, racers, time);

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

  // Item button pressed: bananas, bouncers and rockets start trailing behind you as a shield;
  // everything else fires right away.
  public press(id: string, racers: RacerState[]) {
    const h = this.held.get(id);
    if (!h || !h.kind) return;
    if (TRAILABLE.includes(h.kind)) { if (!h.trailing) this.startTrail(h); }
    else this.fire(id, racers);
  }
  // Item button released: throw the trailing item (one of a triple).
  public release(id: string, racers: RacerState[]) {
    const h = this.held.get(id);
    if (h && h.kind && h.trailing) this.fire(id, racers);
  }
  // Fire one item now (computer racers, or a release).
  private fire(id: string, racers: RacerState[]) {
    const h = this.held.get(id);
    const r = racers.find((x) => x.config.id === id);
    if (!h || !h.kind || !r) return;
    const kind = h.kind;
    if (kind === 'golden') {
      if (h.left === undefined) h.left = 7; // unlimited boosts for 7 seconds after the first
      this.use('boost', r, racers);
      return;
    }
    h.count--;
    const m = h.trail.pop();
    if (m) this.group.remove(m);
    if (h.count <= 0) { for (const t of h.trail) this.group.remove(t); this.held.delete(id); }
    else if (!r.config.isPlayer) this.aiTimers.set(id, 0.8 + Math.random() * 2);
    this.use(kind, r, racers);
  }
  private startTrail(h: HeldItem) {
    h.trailing = true;
    for (let i = h.trail.length; i < h.count; i++) {
      const m = makeProjectile(h.kind!);
      m.scale.setScalar(0.85);
      this.group.add(m);
      h.trail.push(m);
    }
  }
  private fx: Array<{ mesh: THREE.Mesh; life: number; max: number; grow: number }> = [];
  private ring(x: number, y: number, z: number, color: number, size: number) {
    const m = new THREE.Mesh(new THREE.TorusGeometry(1, 0.25, 8, 32), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9 }));
    m.rotation.x = Math.PI / 2; m.position.set(x, y + 0.6, z);
    this.group.add(m); this.fx.push({ mesh: m, life: 0.45, max: 0.45, grow: size });
  }
  private boom(x: number, y: number, z: number) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 12), new THREE.MeshBasicMaterial({ color: 0xff8a1f, transparent: true, opacity: 0.85 }));
    m.position.set(x, y + 1, z);
    this.group.add(m); this.fx.push({ mesh: m, life: 0.6, max: 0.6, grow: 8 });
  }
  private updateFx(delta: number) {
    for (let i = this.fx.length - 1; i >= 0; i--) {
      const f = this.fx[i]; f.life -= delta;
      const k = 1 - f.life / f.max;
      f.mesh.scale.setScalar(0.5 + k * f.grow);
      (f.mesh.material as THREE.MeshBasicMaterial).opacity = 0.9 * (1 - k);
      if (f.life <= 0) { this.group.remove(f.mesh); this.fx.splice(i, 1); }
    }
  }
  private explode(t: Thrown, racers: RacerState[]) {
    this.boom(t.x, t.y, t.z);
    for (const o of racers) {
      const dx = o.position.x - t.x, dz = o.position.z - t.z;
      if (dx * dx + dz * dz < 64) this.hit(o, t.owner, 'bomb');
    }
    this.onEvent?.({ type: 'boom', racer: t.owner });
  }
  private updateTrails(racers: RacerState[]) {
    for (const [id, h] of this.held) {
      if (!h.trailing) continue;
      const r = racers.find((x) => x.config.id === id);
      if (!r) continue;
      const hd = r.rotation.y;
      h.trail.forEach((m, i) => {
        const back = 1.9 + i * 1.1;
        const wob = Math.sin(performance.now() / 120 + i) * 0.15;
        m.position.set(r.position.x - Math.sin(hd) * back + Math.cos(hd) * wob, r.position.y, r.position.z - Math.cos(hd) * back - Math.sin(hd) * wob);
        m.rotation.y = hd;
      });
    }
  }
  // A trailing item blocks one hit
  private shield(r: RacerState): boolean {
    const h = this.held.get(r.config.id);
    if (!h || !h.trailing || h.count <= 0) return false;
    h.count--;
    const m = h.trail.pop();
    if (m) this.group.remove(m);
    if (h.count <= 0) { for (const t of h.trail) this.group.remove(t); this.held.delete(r.config.id); }
    this.onEvent?.({ type: 'block', racer: r.config.id });
    return true;
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
    if (kind === 'coin') {
      r.coins = Math.min(10, (r.coins || 0) + 2);
      r.boostTimer = Math.max(r.boostTimer, 0.35); r.boostMultiplier = Math.max(r.boostMultiplier, 1.15);
      return;
    }
    if (kind === 'horn') {
      // shockwave: knocks back anyone close and destroys anything flying at you
      for (const o of racers) {
        if (o === r) continue;
        const dx = o.position.x - r.position.x, dz = o.position.z - r.position.z;
        if (dx * dx + dz * dz < 90) this.hit(o, r.config.id, 'horn');
      }
      for (let i = this.thrown.length - 1; i >= 0; i--) {
        const t = this.thrown[i];
        const dx = t.x - r.position.x, dz = t.z - r.position.z;
        if (dx * dx + dz * dz < 180) { this.group.remove(t.mesh); this.thrown.splice(i, 1); }
      }
      this.ring(r.position.x, r.position.y, r.position.z, 0xffffff, 10);
      this.onEvent?.({ type: 'horn', racer: r.config.id });
      return;
    }
    if (kind === 'ink') {
      for (const o of racers) if (o.rank < r.rank && !((o.starTimer || 0) > 0)) { o.inkTimer = 4.5; this.onEvent?.({ type: 'ink', racer: o.config.id, by: r.config.id }); }
      return;
    }
    if (kind === 'ride') {
      r.rideTimer = 3.4; r.invulnerableTimer = Math.max(r.invulnerableTimer, 3.6);
      r.boostTimer = 3.4; r.boostMultiplier = 1.6;
      return;
    }
    if (kind === 'ghost') {
      r.ghostTimer = 5; r.invulnerableTimer = Math.max(r.invulnerableTimer, 5);
      // steal an item from someone ahead
      const marks = racers.filter((o) => o.rank < r.rank && this.held.get(o.config.id)?.kind);
      const victim = marks[Math.floor(Math.random() * marks.length)];
      if (victim) {
        const vh = this.held.get(victim.config.id)!;
        for (const m of vh.trail) this.group.remove(m);
        this.held.delete(victim.config.id);
        const got: HeldItem = { kind: vh.kind, rollLeft: 0, shown: vh.kind!, count: vh.count, trailing: false, trail: [] };
        this.held.set(r.config.id, got);
        if (TRAILABLE.includes(got.kind!) && got.count > 1) this.startTrail(got);
        if (!r.config.isPlayer) this.aiTimers.set(r.config.id, 1 + Math.random() * 2);
        this.onEvent?.({ type: 'steal', racer: victim.config.id, by: r.config.id, item: got.kind! });
      }
      return;
    }
    const mesh = makeProjectile(kind);
    this.group.add(mesh);
    const behind = kind === 'banana' || kind === 'fake';
    const off = behind ? -2.6 : 2.6;
    const t: Thrown = {
      kind,
      owner: r.config.id,
      mesh,
      x: r.position.x + Math.sin(h) * off,
      y: r.position.y,
      z: r.position.z + Math.cos(h) * off,
      heading: h,
      speed: behind ? 0 : kind === 'bomb' ? 42 : kind === 'green' ? 62 : 58,
      life: behind ? 60 : kind === 'bomb' ? 1.3 : kind === 'green' ? 3.5 : 8,
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

  private updateThrown(delta: number, racers: RacerState[], time: number) {
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
        if (t.kind === 'red') t.mesh.rotation.y = t.heading;
        else if (t.kind === 'green') { t.mesh.rotation.y = t.heading; const body = t.mesh.getObjectByName('body'); if (body) { const sq = Math.abs(Math.sin(time * 9)); body.position.y = 0.5 + sq * 0.35; body.scale.set(1 + (1 - sq) * 0.15, 1 - (1 - sq) * 0.15, 1 + (1 - sq) * 0.15); } }
        else t.mesh.rotation.y += delta * 3;
        const fl = t.mesh.getObjectByName('flame'); if (fl) fl.scale.setScalar(0.8 + Math.random() * 0.4);
      }
      const ground = this.track.getClosestTrackPoint(t.x, t.z).point.y;
      t.y = THREE.MathUtils.lerp(t.y, ground + (t.kind === 'blue' ? 1.4 : 0.1), delta * 10);
      t.mesh.position.set(t.x, t.y, t.z);

      if (t.kind === 'bomb' && t.speed > 0) t.speed = Math.max(0, t.speed - 30 * delta);
      let done = t.life <= 0;
      if (done && t.kind === 'bomb') this.explode(t, racers);
      if (!done) {
        for (const r of racers) {
          if (r.config.id === t.owner && t.armed > 0) continue;
          const dx = r.position.x - t.x, dz = r.position.z - t.z;
          const radius = t.kind === 'blue' && r.config.id === t.target ? 2.6 : 1.7;
          if (dx * dx + dz * dz < radius * radius) {
            if (t.kind === 'blue' && t.target && r.config.id !== t.target) continue; // flies over everyone else
            if (t.kind === 'bomb') { this.explode(t, racers); done = true; break; }
            if (t.kind !== 'blue' && r.config.id !== t.owner && this.shield(r)) { done = true; break; }
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
    if (r.invulnerableTimer > 0 || (r.starTimer || 0) > 0 || (r.ghostTimer || 0) > 0 || (r.rideTimer || 0) > 0) return;
    r.coins = Math.max(0, (r.coins || 0) - 3);
    r.spinOutTimer = kind === 'blue' ? 1.8 : 1.1;
    r.invulnerableTimer = 2.2;
    r.boostTimer = 0;
    r.boostMultiplier = 1;
    r.isDrifting = false;
    this.onEvent?.({ type: 'hit', racer: r.config.id, by, item: kind });
    if (r.config.isPlayer) soundEngine.playCollisionSound(1);
  }
}
