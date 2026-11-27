import { addCourseScenery, courseTree } from './courseScenery';
import * as THREE from 'three';
import { TrackSystem } from './track';
import { CourseTheme } from './tracks';

// Cartoon look for the whole scene: toon shading, a bright gradient sky with puffy clouds,
// round candy-colored trees, and glowing boost pads on the road.

function toonGradient(): THREE.Texture {
  const steps = new Uint8Array([115, 178, 222, 255]); // softer illustrated shadows
  const tex = new THREE.DataTexture(steps, steps.length, 1, THREE.RedFormat);
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}

// Swap every standard material for a toon one with the same color, texture and glow.
export function toonify(root: THREE.Object3D, gradient: THREE.Texture, cache = new Map<THREE.Material, THREE.Material>()) {
  root.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh || !mesh.material) return;
    const swap = (m: THREE.Material): THREE.Material => {
      if (m.userData.preserveShading) return m;
      const sm = m as THREE.MeshStandardMaterial;
      if (!(sm as any).isMeshStandardMaterial) return m;
      let t = cache.get(m);
      if (!t) {
        t = new THREE.MeshToonMaterial({
          color: sm.color.clone().offsetHSL(0, 0.12, 0.02), // a little more saturated
          map: sm.map,
          emissive: sm.emissive.clone(),
          emissiveIntensity: sm.emissiveIntensity,
          transparent: sm.transparent,
          opacity: sm.opacity,
          side: sm.side,
          polygonOffset: sm.polygonOffset,
          polygonOffsetFactor: sm.polygonOffsetFactor,
          gradientMap: gradient,
        });
        cache.set(m, t);
      }
      return t;
    };
    mesh.material = Array.isArray(mesh.material) ? mesh.material.map(swap) : swap(mesh.material);
  });
}

function skyDome(th: CourseTheme): THREE.Mesh {
  const geo = new THREE.SphereGeometry(520, 32, 16);
  const top = new THREE.Color(th.skyTop), mid = new THREE.Color(th.skyMid), low = new THREE.Color(th.skyLow);
  const colors: number[] = [];
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const h = pos.getY(i) / 520; // -1 .. 1
    const c = h > 0.25 ? mid.clone().lerp(top, Math.min(1, (h - 0.25) / 0.6)) : low.clone().lerp(mid, Math.max(0, (h + 0.05) / 0.3));
    colors.push(c.r, c.g, c.b);
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  const mat = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.renderOrder = -1;
  return mesh;
}

function cloud(color: number): THREE.Group {
  const g = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color, fog: false });
  const puffs = 4 + Math.floor(Math.random() * 3);
  for (let i = 0; i < puffs; i++) {
    const r = 6 + Math.random() * 6;
    const s = new THREE.Mesh(new THREE.SphereGeometry(r, 10, 8), mat);
    s.position.set((i - puffs / 2) * 8 + Math.random() * 4, Math.random() * 4, Math.random() * 6);
    s.scale.y = 0.7;
    g.add(s);
  }
  return g;
}

function roundTree(scale: number, th: CourseTheme): THREE.Group {
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.55, 3, 8), new THREE.MeshStandardMaterial({ color: th.trunk }));
  trunk.position.y = 1.5;
  g.add(trunk);
  const color = th.trees[Math.floor(Math.random() * th.trees.length)];
  const leafMat = new THREE.MeshStandardMaterial({ color, roughness: 0.8, emissive: th.glow ? color : 0x000000, emissiveIntensity: th.glow ? 0.55 : 0 });
  const blobs: Array<[number, number, number, number]> = [[0, 4.4, 0, 2.4], [1.3, 3.8, 0.3, 1.6], [-1.2, 3.9, -0.2, 1.7], [0.2, 5.6, 0.2, 1.6]];
  for (const [x, y, z, r] of blobs) {
    const s = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 10), leafMat);
    s.position.set(x, y, z);
    g.add(s);
  }
  g.scale.setScalar(scale);
  return g;
}

// Glowing chevrons painted on the road; driving over one gives a boost.
export interface BoostPad { x: number; z: number; heading: number; mesh: THREE.Mesh }

function padTexture(base: string): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 256;
  const g = c.getContext('2d')!;
  g.fillStyle = base;
  g.fillRect(0, 0, 128, 256);
  g.fillStyle = '#ffe14d';
  for (let i = 0; i < 3; i++) {
    const y = 40 + i * 70;
    g.beginPath();
    g.moveTo(14, y + 50); g.lineTo(64, y); g.lineTo(114, y + 50); g.lineTo(114, y + 74); g.lineTo(64, y + 24); g.lineTo(14, y + 74);
    g.closePath();
    g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function applyCartoonStyle(scene: THREE.Scene, track: TrackSystem): { pads: BoostPad[]; update: (t: number) => void } {
  const th = track.course.theme;
  scene.background = new THREE.Color(th.skyMid);
  scene.fog = new THREE.Fog(th.fog, 140, 480);
  scene.add(skyDome(th));

  const clouds: THREE.Group[] = [];
  for (let i = 0; i < 14; i++) {
    const c = cloud(th.clouds);
    const a = (i / 14) * Math.PI * 2;
    const r = 260 + Math.random() * 120;
    c.position.set(Math.cos(a) * r, 70 + Math.random() * 50, Math.sin(a) * r);
    c.lookAt(0, c.position.y, 0);
    scene.add(c);
    clouds.push(c);
  }

  // Swap the old pine trees for round, colorful ones
  const pines: THREE.Object3D[] = [];
  track.sceneryGroup.children.forEach((o) => {
    const g = o as THREE.Group;
    if (g.isGroup && g.children.length === 4 && (g.children[1] as THREE.Mesh).geometry instanceof THREE.ConeGeometry) pines.push(g);
  });
  const nearRoad = (x: number, z: number) => {
    let best = 1e9;
    for (let i = 0; i < track.trackPoints.length; i += 3) { const q = track.trackPoints[i]; const d = (q.x - x) ** 2 + (q.z - z) ** 2; if (d < best) best = d; }
    if (Math.sqrt(best) < track.roadWidth * 0.5 + 9) return true;
    const sc = track.shortcut;
    if (sc) {
      const vx = sc.bx - sc.ax, vz = sc.bz - sc.az, L = vx * vx + vz * vz || 1;
      const t = Math.max(0, Math.min(1, ((x - sc.ax) * vx + (z - sc.az) * vz) / L));
      if (Math.hypot(x - (sc.ax + vx * t), z - (sc.az + vz * t)) < sc.w / 2 + 6) return true;
    }
    return false;
  };
  for (const p of pines) {
    track.sceneryGroup.remove(p);
    if (nearRoad(p.position.x, p.position.z)) continue; // keep the racing line clear
    const scale=p.scale.x*(0.75+Math.random()*.35);
    const t = track.course.id === 'meadow' ? roundTree(scale, th) : courseTree(track.course.id,scale);
    t.position.copy(p.position);
    t.rotation.y = Math.random() * Math.PI;
    track.sceneryGroup.add(t);
  }

  // Brighter grass and road
  track.sceneryGroup.traverse((o) => {
    const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial;
    if (!m || !(m as any).isMeshStandardMaterial) return;
    if (m.color.getHex() === 0x4d7c0f) { m.color.setHex(th.ground); m.flatShading = false; m.needsUpdate = true; }
  });

  // Boost pads at a few straights
  const pads: BoostPad[] = [];
  const padMat = new THREE.MeshBasicMaterial({ map: padTexture(th.padColor), transparent: true, opacity: 0.95, polygonOffset: true, polygonOffsetFactor: -3 });
  const pts = track.trackPoints;
  for (const f of [0.06, 0.3, 0.55, 0.8]) {
    const i = Math.floor(f * pts.length) % pts.length;
    const p = pts[i];
    const heading = Math.atan2(p.tangentX, p.tangentZ);
    for (const lane of [-0.22, 0.22]) {
      const x = p.x + p.normalX * lane * track.roadWidth;
      const z = p.z + p.normalZ * lane * track.roadWidth;
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 6), padMat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.rotation.z = heading + Math.PI;
      mesh.position.set(x, p.y + 0.12, z);
      track.sceneryGroup.add(mesh);
      pads.push({ x, z, heading, mesh });
    }
  }

  addCourseLandmarks(track, nearRoad);
  addCourseScenery(track);
  toonify(scene, toonGradient());

  return {
    pads,
    update: (t: number) => {
      for (let i = 0; i < clouds.length; i++) clouds[i].position.y += Math.sin(t * 0.3 + i) * 0.01;
      padMat.opacity = 0.75 + Math.sin(t * 8) * 0.2;
    },
  };
}

// Broad silhouettes read well on split-screen TVs; all decorations stay off the racing line.
function addCourseLandmarks(track: TrackSystem, nearRoad: (x: number, z: number) => boolean) {
  const th = track.course.theme;
  const mat = (color: number) => new THREE.MeshStandardMaterial({ color, roughness: 0.7 });
  const cream = mat(0xfff4d9), cap = mat(th.glow ? 0xf45de1 : track.course.id === 'frosty' ? 0x65c9ec : 0xf85d65);
  const stemGeo = new THREE.CylinderGeometry(1.1, 1.5, 4, 12);
  const capGeo = new THREE.SphereGeometry(3.4, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2);
  const dotGeo = new THREE.SphereGeometry(0.55, 8, 6);
  const hillGeo = new THREE.SphereGeometry(1, 20, 12);
  // Distant rounded hills / snow peaks / neon towers frame the horizon.
  for (let i = 0; i < 12; i++) {
    const a = i * Math.PI / 6;
    const x = Math.cos(a) * 245, z = Math.sin(a) * 245;
    if (nearRoad(x, z)) continue;
    const h = 20 + (i % 4) * 9;
    const hill = new THREE.Mesh(hillGeo, mat(th.trees[i % th.trees.length]));
    hill.position.set(x, -5, z); hill.scale.set(28 + i % 3 * 9, h, 28); track.sceneryGroup.add(hill);
    if (track.course.id === 'frosty') {
      const snow = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 8, 0, Math.PI * 2, 0, 0.9), cream);
      snow.position.copy(hill.position); snow.scale.set(28.2 + i % 3 * 9, h + 0.3, 28.2); track.sceneryGroup.add(snow);
    }
  }
  for (let i = 0; track.course.id === 'meadow' && i < track.trackPoints.length; i += 24) {
    const p = track.trackPoints[i]; const side = i % 48 ? -1 : 1;
    const x = p.x + p.normalX * (track.roadWidth / 2 + 17) * side;
    const z = p.z + p.normalZ * (track.roadWidth / 2 + 17) * side;
    if (nearRoad(x, z)) continue;
    const g = new THREE.Group(); g.position.set(x, p.y - 0.5, z);
    const stem = new THREE.Mesh(stemGeo, cream); stem.position.y = 2; g.add(stem);
    const hat = new THREE.Mesh(capGeo, cap); hat.position.y = 3.7; g.add(hat);
    for (let d = 0; d < 5; d++) {
      const a = d * Math.PI * 2 / 5;
      const dot = new THREE.Mesh(dotGeo, cream); dot.position.set(Math.sin(a) * 2.35, 5.9, Math.cos(a) * 2.35); dot.scale.y = 0.4; g.add(dot);
    }
    g.scale.setScalar(0.8 + (i % 3) * 0.25); track.sceneryGroup.add(g);
  }
  // Pennants on the opening straight make the starting grid feel like a festival.
  for (const side of [-1, 1]) for (let i = 0; i < 6; i++) {
    const p = track.trackPoints[Math.floor(i * 0.007 * track.trackPoints.length)];
    const x = p.x + p.normalX * (track.roadWidth / 2 + 2.5) * side;
    const z = p.z + p.normalZ * (track.roadWidth / 2 + 2.5) * side;
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 5.5, 6), cream);
    pole.position.set(x, p.y + 2.75, z); track.sceneryGroup.add(pole);
    const shape = new THREE.Shape(); shape.moveTo(0, 0); shape.lineTo(2.3 * side, -0.5); shape.lineTo(0, -1.2); shape.closePath();
    const flag = new THREE.Mesh(new THREE.ShapeGeometry(shape), new THREE.MeshBasicMaterial({ color: th.trees[i % th.trees.length], side: THREE.DoubleSide }));
    flag.position.set(x, p.y + 5.3, z); track.sceneryGroup.add(flag);
  }
}

// Soft round shadow under each kart: grounds them even with real shadows off.
export function blobShadow(): THREE.Mesh {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d')!;
  const grad = g.createRadialGradient(32, 32, 4, 32, 32, 32);
  grad.addColorStop(0, 'rgba(0,0,0,0.55)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(2.6, 3.4),
    new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4 })
  );
  mesh.rotation.x = -Math.PI / 2;
  return mesh;
}

export { toonGradient };
