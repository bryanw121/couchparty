import * as THREE from 'three';
import { Course, courseById } from './tracks';
import { TrackPoint } from '../types';
import {
  createRoadTexture,
  createCurbTexture,
  createCheckeredTexture,
  createSponsorBannerTexture,
} from './proceduralTextures';

export class TrackSystem {
  public scene: THREE.Scene;
  public spline: THREE.CatmullRomCurve3;
  public totalLength: number = 0;
  public trackPoints: TrackPoint[] = [];
  public trackMesh: THREE.Mesh | null = null;
  public sceneryGroup: THREE.Group;
  public startingLightsGroup: THREE.Group;
  public lightMeshes: THREE.Mesh[] = [];
  public animatedProps: Array<{ mesh: THREE.Object3D; update: (time: number, delta: number) => void }> = [];

  public roadWidth = 18;

  public course: Course;
  // Dirt cut-through where the road doubles back near itself: slow unless you're boosting.
  public shortcut: { ax: number; ay: number; az: number; bx: number; by: number; bz: number; w: number; ia: number; ib: number } | null = null;

  constructor(scene: THREE.Scene, courseId?: string) {
    this.scene = scene;
    this.course = courseById(courseId);
    this.sceneryGroup = new THREE.Group();
    this.startingLightsGroup = new THREE.Group();
    this.scene.add(this.sceneryGroup);
    this.scene.add(this.startingLightsGroup);

    // 1. Define closed 3D circuit curve
    const controlPoints = this.course.points.map(([x, y, z]) => new THREE.Vector3(x, y, z));

    this.spline = new THREE.CatmullRomCurve3(controlPoints, true, 'centripetal', 0.4);
    this.totalLength = this.spline.getLength();

    // 2. Precompute dense track samples
    this.sampleTrackPoints(300);

    // 3. Build geometry & scenery
    this.buildRoadMesh();
    this.findShortcut();
    this.buildTerrainAndHills();
    this.buildStartGantry();
    this.buildScenery();
    this.buildBarriers();
    this.buildShortcut();
  }

  private sampleTrackPoints(samples: number) {
    this.trackPoints = [];
    let accumDist = 0;
    let prevPos = this.spline.getPointAt(0);

    for (let i = 0; i < samples; i++) {
      const u = i / samples;
      const pos = this.spline.getPointAt(u);
      const tangent = this.spline.getTangentAt(u).normalize();
      const up = new THREE.Vector3(0, 1, 0);
      const normal = new THREE.Vector3().crossVectors(tangent, up).normalize();

      if (i > 0) {
        accumDist += prevPos.distanceTo(pos);
      }
      prevPos = pos;

      this.trackPoints.push({
        x: pos.x,
        y: pos.y,
        z: pos.z,
        tangentX: tangent.x,
        tangentY: tangent.y,
        tangentZ: tangent.z,
        normalX: normal.x,
        normalY: normal.y,
        normalZ: normal.z,
        width: this.roadWidth,
        bank: 0,
        distance: accumDist,
      });
    }
  }

  private buildRoadMesh() {
    const segments = 300;
    const halfW = this.roadWidth / 2;

    const roadGeo = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const uvs: number[] = [];
    const indices: number[] = [];

    // Curbs geometries
    const leftCurbVertices: number[] = [];
    const leftCurbUvs: number[] = [];
    const leftCurbIndices: number[] = [];

    const rightCurbVertices: number[] = [];
    const rightCurbUvs: number[] = [];
    const rightCurbIndices: number[] = [];

    const curbWidth = 2.2;

    for (let i = 0; i <= segments; i++) {
      const u = (i % segments) / segments;
      const pos = this.spline.getPointAt(u);
      const tangent = this.spline.getTangentAt(u).normalize();
      const normal = new THREE.Vector3(-tangent.z, 0, tangent.x).normalize();

      // Road Left and Right
      const leftPt = pos.clone().addScaledVector(normal, -halfW);
      const rightPt = pos.clone().addScaledVector(normal, halfW);

      vertices.push(leftPt.x, leftPt.y + 0.05, leftPt.z);
      vertices.push(rightPt.x, rightPt.y + 0.05, rightPt.z);

      const vProg = (i / segments) * 60; // 60 repeats along loop
      uvs.push(0, vProg);
      uvs.push(1, vProg);

      // Curbs
      const outerLeft = leftPt.clone().addScaledVector(normal, -curbWidth);
      leftCurbVertices.push(outerLeft.x, outerLeft.y + 0.12, outerLeft.z);
      leftCurbVertices.push(leftPt.x, leftPt.y + 0.06, leftPt.z);
      leftCurbUvs.push(0, vProg * 2);
      leftCurbUvs.push(1, vProg * 2);

      const outerRight = rightPt.clone().addScaledVector(normal, curbWidth);
      rightCurbVertices.push(rightPt.x, rightPt.y + 0.06, rightPt.z);
      rightCurbVertices.push(outerRight.x, outerRight.y + 0.12, outerRight.z);
      rightCurbUvs.push(0, vProg * 2);
      rightCurbUvs.push(1, vProg * 2);

      if (i < segments) {
        const row1 = i * 2;
        const row2 = (i + 1) * 2;

        indices.push(row1, row1 + 1, row2);
        indices.push(row1 + 1, row2 + 1, row2);

        leftCurbIndices.push(row1, row1 + 1, row2);
        leftCurbIndices.push(row1 + 1, row2 + 1, row2);

        rightCurbIndices.push(row1, row1 + 1, row2);
        rightCurbIndices.push(row1 + 1, row2 + 1, row2);
      }
    }

    roadGeo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    roadGeo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    roadGeo.setIndex(indices);
    roadGeo.computeVertexNormals();

    const roadTex = createRoadTexture();
    const roadMat = new THREE.MeshStandardMaterial({
      map: roadTex,
      roughness: 0.85,
      metalness: 0.1,
    });
    this.trackMesh = new THREE.Mesh(roadGeo, roadMat);
    this.trackMesh.receiveShadow = true;
    this.sceneryGroup.add(this.trackMesh);

    // Build Curbs
    const curbTex = createCurbTexture(this.course.theme.curbA, this.course.theme.curbB);
    const curbMat = new THREE.MeshStandardMaterial({
      map: curbTex,
      roughness: 0.7,
    });

    const leftCurbGeo = new THREE.BufferGeometry();
    leftCurbGeo.setAttribute('position', new THREE.Float32BufferAttribute(leftCurbVertices, 3));
    leftCurbGeo.setAttribute('uv', new THREE.Float32BufferAttribute(leftCurbUvs, 2));
    leftCurbGeo.setIndex(leftCurbIndices);
    leftCurbGeo.computeVertexNormals();
    const leftCurbMesh = new THREE.Mesh(leftCurbGeo, curbMat);
    leftCurbMesh.receiveShadow = true;
    this.sceneryGroup.add(leftCurbMesh);

    const rightCurbGeo = new THREE.BufferGeometry();
    rightCurbGeo.setAttribute('position', new THREE.Float32BufferAttribute(rightCurbVertices, 3));
    rightCurbGeo.setAttribute('uv', new THREE.Float32BufferAttribute(rightCurbUvs, 2));
    rightCurbGeo.setIndex(rightCurbIndices);
    rightCurbGeo.computeVertexNormals();
    const rightCurbMesh = new THREE.Mesh(rightCurbGeo, curbMat);
    rightCurbMesh.receiveShadow = true;
    this.sceneryGroup.add(rightCurbMesh);

    // Checkered Finish Line Strip
    const checkGeo = new THREE.PlaneGeometry(this.roadWidth, 4);
    const checkTex = createCheckeredTexture();
    const checkMat = new THREE.MeshStandardMaterial({
      map: checkTex,
      roughness: 0.6,
      polygonOffset: true,
      polygonOffsetFactor: -2,
    });
    const checkMesh = new THREE.Mesh(checkGeo, checkMat);
    checkMesh.rotation.x = -Math.PI / 2;
    checkMesh.position.set(0, 0.08, 0);
    this.sceneryGroup.add(checkMesh);
  }

  private buildTerrainAndHills() {
    // Large low-poly island/ground plane
    const groundGeo = new THREE.PlaneGeometry(600, 600, 128, 128);
    groundGeo.rotateX(-Math.PI / 2);

    const pos = groundGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const vx = pos.getX(i);
      const vz = pos.getZ(i);

      let y = this.getTerrainElevation(vx, vz);
      // Keep the grass a little under the road so hills never poke through the asphalt
      const near = this.getClosestTrackPointInfo(vx, vz);
      if (near.dist < this.roadWidth * 0.5 + 6) y = Math.min(y, near.y - 0.35);
      const scY = this.shortcut ? this.segDist(vx, vz, this.shortcut.ax, this.shortcut.az, this.shortcut.bx, this.shortcut.bz) : null;
      if (scY && scY.d < this.shortcut!.w / 2 + 6) y = Math.min(y, this.shortcut!.ay + (this.shortcut!.by - this.shortcut!.ay) * scY.t - 0.3);
      pos.setY(i, y);
    }
    groundGeo.computeVertexNormals();

    const grassMat = new THREE.MeshStandardMaterial({
      color: 0x4d7c0f, // Lush natural green
      roughness: 0.9,
      flatShading: true,
    });
    const groundMesh = new THREE.Mesh(groundGeo, grassMat);
    groundMesh.receiveShadow = true;
    this.sceneryGroup.add(groundMesh);
  }


  // Each course has one hand-picked cut-through (indices into the 300 sampled track points)
  private findShortcut() {
    const pair = this.course.shortcut;
    if (!pair) return;
    const a = this.trackPoints[pair[0]], b = this.trackPoints[pair[1]];
    if (!a || !b) return;
    this.shortcut = { ax: a.x, ay: a.y, az: a.z, bx: b.x, by: b.y, bz: b.z, w: 11, ia: pair[0], ib: pair[1] };
  }
  private segDist(px: number, pz: number, ax: number, az: number, bx: number, bz: number) {
    const vx = bx - ax, vz = bz - az, L = vx * vx + vz * vz || 1;
    const t = Math.max(0, Math.min(1, ((px - ax) * vx + (pz - az) * vz) / L));
    const qx = ax + vx * t, qz = az + vz * t;
    return { d: Math.hypot(px - qx, pz - qz), t };
  }
  // Is (x, z) on the shortcut strip? Returns its ground height if so.
  public onShortcut(x: number, z: number): number | null {
    const sc = this.shortcut;
    if (!sc) return null;
    const r = this.segDist(x, z, sc.ax, sc.az, sc.bx, sc.bz);
    if (r.d > sc.w / 2 + 0.8) return null;
    return sc.ay + (sc.by - sc.ay) * r.t;
  }
  private buildShortcut() {
    const sc = this.shortcut;
    if (!sc) return;
    const c = document.createElement('canvas');
    c.width = 64; c.height = 256;
    const g = c.getContext('2d')!;
    g.fillStyle = '#c98b4f'; g.fillRect(0, 0, 64, 256);
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, 4, 256); g.fillRect(60, 0, 4, 256); // bright edges
    for (let i = 0; i < 260; i++) { g.fillStyle = Math.random() < 0.5 ? 'rgba(90,55,25,.35)' : 'rgba(230,190,140,.35)'; g.fillRect(Math.random() * 64, Math.random() * 256, 3, 3); }
    g.fillStyle = 'rgba(70,40,20,.35)'; g.fillRect(14, 0, 6, 256); g.fillRect(44, 0, 6, 256); // tire ruts
    const tex = new THREE.CanvasTexture(c);
    tex.wrapT = THREE.RepeatWrapping;
    const len = Math.hypot(sc.bx - sc.ax, sc.bz - sc.az);
    tex.repeat.set(1, len / 10);
    const geo = new THREE.PlaneGeometry(sc.w, len, 1, 8);
    const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: tex, roughness: 1, polygonOffset: true, polygonOffsetFactor: 1 }));
    mesh.rotation.x = -Math.PI / 2;
    mesh.rotation.z = -Math.atan2(sc.bx - sc.ax, sc.bz - sc.az) + Math.PI;
    mesh.position.set((sc.ax + sc.bx) / 2, (sc.ay + sc.by) / 2 - 0.05, (sc.az + sc.bz) / 2);
    this.sceneryGroup.add(mesh);
    const coneMat = new THREE.MeshStandardMaterial({ color: 0xff7a00 });
    const ux = (sc.bx - sc.ax) / len, uz = (sc.bz - sc.az) / len;
    for (let d = 12; d < len - 12; d += 9) for (const sd of [-1, 1]) {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.45, 1.2, 8), coneMat);
      cone.position.set(sc.ax + ux * d + -uz * sd * (sc.w / 2 + 0.6), sc.ay + (sc.by - sc.ay) * (d / len) + 0.5, sc.az + uz * d + ux * sd * (sc.w / 2 + 0.6));
      this.sceneryGroup.add(cone);
    }
    // Signs at both ends, facing the way in
    for (const [x, y, z, tx, tz] of [[sc.ax, sc.ay, sc.az, sc.bx, sc.bz], [sc.bx, sc.by, sc.bz, sc.ax, sc.az]] as const) {
      const sign = document.createElement('canvas'); sign.width = 256; sign.height = 96;
      const sg = sign.getContext('2d')!;
      sg.fillStyle = '#ffc83d'; sg.fillRect(0, 0, 256, 96);
      sg.fillStyle = '#1b1b3a'; sg.font = 'bold 44px sans-serif'; sg.textAlign = 'center'; sg.textBaseline = 'middle'; sg.fillText('SHORTCUT', 128, 50);
      const st = new THREE.CanvasTexture(sign); st.colorSpace = THREE.SRGBColorSpace;
      const board = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 1.6), new THREE.MeshStandardMaterial({ map: st, side: THREE.DoubleSide }));
      const dx = tx - x, dz = tz - z, dl = Math.hypot(dx, dz) || 1;
      const into = this.roadWidth / 2 + 7, side = sc.w / 2 + 2.2;
      const sx = x + (dx / dl) * into + (-dz / dl) * side, sz = z + (dz / dl) * into + (dx / dl) * side;
      board.position.set(sx, y + 2.6, sz);
      board.lookAt(x, y + 2.6, z);
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.6, 6), new THREE.MeshStandardMaterial({ color: 0x6b4a2b }));
      post.position.set(sx, y + 1.3, sz);
      this.sceneryGroup.add(board, post);
    }
  }

  private getClosestTrackPointInfo(x: number, z: number): { dist: number, y: number } {
    let minDist = 9999;
    let closestY = 0;
    for (let i = 0; i < this.trackPoints.length; i += 4) {
      const tp = this.trackPoints[i];
      const dx = tp.x - x;
      const dz = tp.z - z;
      const d = Math.sqrt(dx * dx + dz * dz);
      if (d < minDist) {
        minDist = d;
        closestY = tp.y;
      }
    }
    return { dist: minDist, y: closestY };
  }

  public getTerrainElevation(x: number, z: number): number {
    const { dist, y } = this.getClosestTrackPointInfo(x, z);

    if (dist > 25) {
      // Rolling hills outside track bounds
      const hillElevation = Math.sin(x * 0.02) * Math.cos(z * 0.02) * 14 + Math.sin(x * 0.05 + z * 0.04) * 6;
      
      const blendDist = 60;
      const t = Math.max(0, Math.min(1, (dist - 25) / (blendDist - 25)));
      
      const baseElev = y - 0.05;
      const naturalHill = Math.max(-2, hillElevation - 2);
      
      return baseElev * (1 - t) + naturalHill * t;
    } else {
      // Flat grass adjacent to road, following track elevation
      return y - 0.05;
    }
  }

  private buildStartGantry() {
    // Overhead steel arch over start/finish line
    const archGroup = new THREE.Group();
    archGroup.position.set(0, 0, 0);

    const metalMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.4, metalness: 0.7 });
    const bannerMat = new THREE.MeshStandardMaterial({
      map: createSponsorBannerTexture('KARIO MART', '#dc2626', '#ffffff'),
    });

    const halfW = this.roadWidth / 2 + 2.5;
    const height = 9;

    // Pillars
    const pillarGeo = new THREE.BoxGeometry(0.8, height, 0.8);
    const leftPillar = new THREE.Mesh(pillarGeo, metalMat);
    leftPillar.position.set(-halfW, height / 2, 0);
    leftPillar.castShadow = true;
    archGroup.add(leftPillar);

    const rightPillar = new THREE.Mesh(pillarGeo, metalMat);
    rightPillar.position.set(halfW, height / 2, 0);
    rightPillar.castShadow = true;
    archGroup.add(rightPillar);

    // Crossbar
    const barGeo = new THREE.BoxGeometry(this.roadWidth + 6, 1.4, 1.2);
    const bar = new THREE.Mesh(barGeo, metalMat);
    bar.position.set(0, height, 0);
    bar.castShadow = true;
    archGroup.add(bar);

    // Sign banner
    const bannerGeo = new THREE.PlaneGeometry(this.roadWidth - 2, 2.2);
    const bannerFront = new THREE.Mesh(bannerGeo, bannerMat);
    bannerFront.position.set(0, height + 0.3, -0.62);
    bannerFront.rotation.y = Math.PI;
    archGroup.add(bannerFront);

    const bannerBack = new THREE.Mesh(bannerGeo, bannerMat);
    bannerBack.position.set(0, height + 0.3, 0.62);
    archGroup.add(bannerBack);

    // Starting Lights (Traffic Light Cluster)
    this.lightMeshes = [];
    const lightHousingGeo = new THREE.BoxGeometry(4.8, 1.6, 0.6);
    const lightHousing = new THREE.Mesh(lightHousingGeo, new THREE.MeshStandardMaterial({ color: 0x18181b }));
    lightHousing.position.set(0, height - 1.2, -0.2);
    archGroup.add(lightHousing);

    const lightColors = [0xef4444, 0xef4444, 0xef4444]; // 3 Red lights turning green
    for (let i = 0; i < 3; i++) {
      const bulbGeo = new THREE.SphereGeometry(0.4, 16, 16);
      const bulbMat = new THREE.MeshStandardMaterial({
        color: 0x27272a,
        emissive: 0x000000,
        roughness: 0.2,
      });
      const bulb = new THREE.Mesh(bulbGeo, bulbMat);
      bulb.position.set((i - 1) * 1.4, height - 1.2, -0.5);
      archGroup.add(bulb);
      this.lightMeshes.push(bulb);
    }

    this.startingLightsGroup.add(archGroup);
  }

  public setStartingLights(state: number) {
    // state: 0 (Off), 1 (1 red), 2 (2 reds), 3 (3 reds), 4 (All Green / GO!)
    for (let i = 0; i < 3; i++) {
      const bulb = this.lightMeshes[i];
      if (!bulb) continue;
      const mat = bulb.material as THREE.MeshStandardMaterial;

      if (state >= 1 && state <= 3) {
        if (i < state) {
          mat.color.setHex(0xef4444);
          mat.emissive.setHex(0xef4444);
        } else {
          mat.color.setHex(0x27272a);
          mat.emissive.setHex(0x000000);
        }
      } else if (state === 4) {
        // All green
        mat.color.setHex(0x22c55e);
        mat.emissive.setHex(0x22c55e);
      } else {
        // Off
        mat.color.setHex(0x27272a);
        mat.emissive.setHex(0x000000);
      }
    }
  }

  private buildScenery() {
    // 1. Low Poly Pine Trees
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
    const foliageMat1 = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.8, flatShading: true });
    const foliageMat2 = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.8, flatShading: true });

    const createTree = (x: number, y: number, z: number, scale: number) => {
      const tree = new THREE.Group();
      tree.position.set(x, y, z);
      tree.scale.set(scale, scale, scale);

      // Trunk
      const trunkGeo = new THREE.CylinderGeometry(0.3, 0.45, 2.5, 6);
      const trunk = new THREE.Mesh(trunkGeo, trunkMat);
      trunk.position.y = 1.25;
      trunk.castShadow = true;
      tree.add(trunk);

      // Cones
      const cone1 = new THREE.Mesh(new THREE.ConeGeometry(2.2, 3.2, 6), foliageMat1);
      cone1.position.y = 3.5;
      cone1.castShadow = true;
      tree.add(cone1);

      const cone2 = new THREE.Mesh(new THREE.ConeGeometry(1.7, 2.8, 6), foliageMat2);
      cone2.position.y = 5.2;
      cone2.castShadow = true;
      tree.add(cone2);

      const cone3 = new THREE.Mesh(new THREE.ConeGeometry(1.2, 2.2, 6), foliageMat1);
      cone3.position.y = 6.6;
      cone3.castShadow = true;
      tree.add(cone3);

      return tree;
    };

    // Plant trees around the track ensuring they are off the road
    for (let i = 0; i < 90; i++) {
      const angle = (i / 90) * Math.PI * 2;
      const radius = 60 + (i % 7) * 22;
      const x = Math.cos(angle) * radius + (Math.random() - 0.5) * 30;
      const z = Math.sin(angle) * radius + (Math.random() - 0.5) * 30;

      const { dist } = this.getClosestTrackPointInfo(x, z);
      if (dist > this.roadWidth / 2 + 6) {
        const scale = 0.8 + Math.random() * 0.7;
        const y = this.getTerrainElevation(x, z);
        const tree = createTree(x, y, z, scale);
        this.sceneryGroup.add(tree);
      }
    }

    // 2. Grandstands on main straight
    this.buildGrandstand(-22, this.getTerrainElevation(-22, -45), -45, Math.PI / 2);
    this.buildGrandstand(22, this.getTerrainElevation(22, -45), -45, -Math.PI / 2);

    // 3. Floating Hot Air Balloons
    this.buildHotAirBalloon(60, 45, -50, 0xef4444, 0xfacc15);
    this.buildHotAirBalloon(-80, 55, 60, 0x3b82f6, 0xffffff);

    // 4. Wind Turbines with spinning blades, wherever they're clear of the road
    for (const [x, z] of [[120, 60], [-110, -100], [200, -150], [-200, 120], [60, -240]]) {
      if (this.getClosestTrackPointInfo(x, z).dist > this.roadWidth / 2 + 14) this.buildWindTurbine(x, this.getTerrainElevation(x, z), z);
    }
  }

  private buildGrandstand(x: number, y: number, z: number, rotationY: number) {
    const stand = new THREE.Group();
    stand.position.set(x, y, z);
    stand.rotation.y = rotationY;

    const baseMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.5 });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.4 });
    const seatMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.6 });

    // Tiered seating steps
    const tiers = 5;
    for (let t = 0; t < tiers; t++) {
      const stepGeo = new THREE.BoxGeometry(24, 0.8, 1.6);
      const step = new THREE.Mesh(stepGeo, baseMat);
      step.position.set(0, (t + 1) * 0.8, t * 1.4);
      step.castShadow = true;
      stand.add(step);

      // Low-poly crowd cubes
      for (let c = 0; c < 12; c++) {
        const crowdGeo = new THREE.BoxGeometry(0.7, 0.9, 0.6);
        const crowdColors = [0xef4444, 0x3b82f6, 0xeab308, 0x10b981, 0xa855f7, 0xffffff];
        const crowdMat = new THREE.MeshStandardMaterial({
          color: crowdColors[Math.floor(Math.random() * crowdColors.length)],
        });
        const person = new THREE.Mesh(crowdGeo, crowdMat);
        person.position.set(-10 + c * 1.8 + (Math.random() - 0.5) * 0.3, (t + 1) * 0.8 + 0.7, t * 1.4);
        stand.add(person);
      }
    }

    // Roof
    const roofGeo = new THREE.BoxGeometry(26, 0.4, 9);
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.set(0, 8, 3);
    roof.rotation.x = 0.15;
    roof.castShadow = true;
    stand.add(roof);

    // Support pillars
    const pillarGeo = new THREE.CylinderGeometry(0.2, 0.2, 8, 8);
    const p1 = new THREE.Mesh(pillarGeo, baseMat);
    p1.position.set(-11, 4, -1);
    stand.add(p1);

    const p2 = new THREE.Mesh(pillarGeo, baseMat);
    p2.position.set(11, 4, -1);
    stand.add(p2);

    this.sceneryGroup.add(stand);
  }

  private buildHotAirBalloon(x: number, y: number, z: number, col1: number, col2: number) {
    const balloonGroup = new THREE.Group();
    balloonGroup.position.set(x, y, z);

    // Balloon envelope
    const balloonGeo = new THREE.SphereGeometry(7, 14, 14);
    balloonGeo.scale(1.0, 1.4, 1.0);
    const balloonMat = new THREE.MeshStandardMaterial({
      color: col1,
      roughness: 0.4,
    });
    const balloon = new THREE.Mesh(balloonGeo, balloonMat);
    balloon.castShadow = true;
    balloonGroup.add(balloon);

    // Basket
    const basketGeo = new THREE.BoxGeometry(2.0, 1.6, 2.0);
    const basketMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
    const basket = new THREE.Mesh(basketGeo, basketMat);
    basket.position.set(0, -11, 0);
    balloonGroup.add(basket);

    this.sceneryGroup.add(balloonGroup);

    // Floating bob animation
    const initY = y;
    this.animatedProps.push({
      mesh: balloonGroup,
      update: (time) => {
        balloonGroup.position.y = initY + Math.sin(time * 0.8 + x) * 2.5;
        balloonGroup.rotation.y = time * 0.1;
      },
    });
  }

  private buildWindTurbine(x: number, y: number, z: number) {
    const turbine = new THREE.Group();
    turbine.position.set(x, y, z);

    const towerMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.3 });
    const towerGeo = new THREE.CylinderGeometry(0.6, 1.4, 28, 10);
    const tower = new THREE.Mesh(towerGeo, towerMat);
    tower.position.y = 14;
    tower.castShadow = true;
    turbine.add(tower);

    // Rotor Hub
    const hubGeo = new THREE.SphereGeometry(0.9, 10, 10);
    const hub = new THREE.Mesh(hubGeo, towerMat);
    hub.position.set(0, 28, 0.8);
    turbine.add(hub);

    // 3 Rotor Blades
    const rotorGroup = new THREE.Group();
    rotorGroup.position.set(0, 28, 1.2);

    for (let i = 0; i < 3; i++) {
      const bladeGeo = new THREE.BoxGeometry(0.5, 11, 0.1);
      const blade = new THREE.Mesh(bladeGeo, towerMat);
      blade.position.y = 5.5;
      const bladeHolder = new THREE.Group();
      bladeHolder.rotation.z = (i * Math.PI * 2) / 3;
      bladeHolder.add(blade);
      rotorGroup.add(bladeHolder);
    }
    turbine.add(rotorGroup);

    this.sceneryGroup.add(turbine);

    this.animatedProps.push({
      mesh: rotorGroup,
      update: (_, delta) => {
        rotorGroup.rotation.z += delta * 1.8;
      },
    });
  }

  private buildBarriers() {
    // Add sponsor safety barriers along selected track turns
    const bannerTextures = [
      createSponsorBannerTexture('⚡ TURBO CHARGE ⚡', '#1d4ed8', '#ffffff'),
      createSponsorBannerTexture('🔥 APEX DRIFT 🔥', '#ea580c', '#ffffff'),
      createSponsorBannerTexture('🏆 CHAMPIONSHIP 🏆', '#eab308', '#000000'),
    ];

    const turnIndices = [25, 45, 80, 120, 160, 210, 260];
    const halfW = this.roadWidth / 2 + 1.2;

    turnIndices.forEach((idx, tIdx) => {
      if (idx >= this.trackPoints.length) return;
      const tp = this.trackPoints[idx];
      const tex = bannerTextures[tIdx % bannerTextures.length];
      const barrierMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5 });

      const barrierGeo = new THREE.BoxGeometry(0.4, 1.8, 8);
      const barrier = new THREE.Mesh(barrierGeo, barrierMat);

      // Position to outer edge
      barrier.position.set(tp.x + tp.normalX * halfW, tp.y + 0.9, tp.z + tp.normalZ * halfW);
      if (this.shortcut && this.segDist(barrier.position.x, barrier.position.z, this.shortcut.ax, this.shortcut.az, this.shortcut.bx, this.shortcut.bz).d < this.shortcut.w + 4) return;
      barrier.lookAt(barrier.position.x + tp.tangentX, barrier.position.y, barrier.position.z + tp.tangentZ);
      barrier.castShadow = true;
      this.sceneryGroup.add(barrier);
    });
  }

  /**
   * Finds closest track point to given world coordinate.
   */
  public getClosestTrackPoint(x: number, z: number): { point: TrackPoint; index: number; distanceToCenter: number } {
    let bestDist = Infinity;
    let bestIndex = 0;

    for (let i = 0; i < this.trackPoints.length; i++) {
      const tp = this.trackPoints[i];
      const dx = tp.x - x;
      const dz = tp.z - z;
      const distSq = dx * dx + dz * dz;
      if (distSq < bestDist) {
        bestDist = distSq;
        bestIndex = i;
      }
    }

    const point = this.trackPoints[bestIndex];
    return {
      point,
      index: bestIndex,
      distanceToCenter: Math.sqrt(bestDist),
    };
  }

  public update(time: number, delta: number) {
    for (const prop of this.animatedProps) {
      prop.update(time, delta);
    }
  }
}
