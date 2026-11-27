import * as THREE from 'three';

export interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  color: THREE.Color;
  size: number;
  maxLife: number;
  life: number;
  opacity: number;
}

export class ParticleSystem {
  public group: THREE.Group;
  private maxParticles = 600;
  private particles: Particle[] = [];

  private geometry: THREE.BufferGeometry;
  private material: THREE.PointsMaterial;
  private pointsMesh: THREE.Points;

  private positions: Float32Array;
  private colors: Float32Array;
  private sizes: Float32Array;

  constructor() {
    this.group = new THREE.Group();

    this.positions = new Float32Array(this.maxParticles * 3);
    this.colors = new Float32Array(this.maxParticles * 3);
    this.sizes = new Float32Array(this.maxParticles);

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(this.sizes, 1));

    // Create custom point sprite canvas
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
    gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);

    this.material = new THREE.PointsMaterial({
      size: 1.0,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      map: texture,
    });

    this.pointsMesh = new THREE.Points(this.geometry, this.material);
    this.pointsMesh.frustumCulled = false;
    this.group.add(this.pointsMesh);
  }

  public emitDriftSparks(origin: THREE.Vector3, driftLevel: number, direction: number) {
    const count = 2 + driftLevel;
    let baseColor = new THREE.Color(0x38bdf8); // Level 1: Cyan / Blue spark
    if (driftLevel === 2) baseColor = new THREE.Color(0xf97316); // Level 2: Orange spark
    if (driftLevel >= 3) baseColor = new THREE.Color(0xa855f7); // Level 3: Purple / Magenta spark

    for (let i = 0; i < count; i++) {
      if (this.particles.length >= this.maxParticles) break;

      const spread = (Math.random() - 0.5) * 0.4;
      const vel = new THREE.Vector3(
        -Math.sin(direction) * (1.5 + Math.random() * 2) + spread,
        0.8 + Math.random() * 1.5,
        -Math.cos(direction) * (1.5 + Math.random() * 2) + spread
      );

      this.particles.push({
        position: origin.clone().add(new THREE.Vector3(
          (Math.random() - 0.5) * 0.3,
          0.1 + Math.random() * 0.2,
          (Math.random() - 0.5) * 0.3
        )),
        velocity: vel,
        color: baseColor.clone(),
        size: 0.4 + Math.random() * 0.4,
        maxLife: 0.35 + Math.random() * 0.2,
        life: 0,
        opacity: 1.0,
      });
    }
  }

  public emitBoostFlames(origin: THREE.Vector3, kartHeading: number) {
    const count = 3;
    const colors = [new THREE.Color(0x3b82f6), new THREE.Color(0x06b6d4), new THREE.Color(0xffffff)];

    for (let i = 0; i < count; i++) {
      if (this.particles.length >= this.maxParticles) break;

      // Exhaust shoots backward opposite to heading
      const backAngle = kartHeading + Math.PI;
      const vel = new THREE.Vector3(
        Math.sin(backAngle) * (4.0 + Math.random() * 3.0),
        0.3 + Math.random() * 0.4,
        Math.cos(backAngle) * (4.0 + Math.random() * 3.0)
      );

      this.particles.push({
        position: origin.clone().add(new THREE.Vector3(
          (Math.random() - 0.5) * 0.2,
          0.1,
          (Math.random() - 0.5) * 0.2
        )),
        velocity: vel,
        color: colors[Math.floor(Math.random() * colors.length)].clone(),
        size: 0.6 + Math.random() * 0.5,
        maxLife: 0.25 + Math.random() * 0.15,
        life: 0,
        opacity: 1.0,
      });
    }
  }

  public emitTireSmoke(origin: THREE.Vector3, isGrass: boolean = false) {
    if (this.particles.length >= this.maxParticles) return;

    const color = isGrass ? new THREE.Color(0x84cc16) : new THREE.Color(0xd4d4d8);
    const vel = new THREE.Vector3(
      (Math.random() - 0.5) * 0.8,
      0.6 + Math.random() * 0.8,
      (Math.random() - 0.5) * 0.8
    );

    this.particles.push({
      position: origin.clone().add(new THREE.Vector3((Math.random() - 0.5) * 0.2, 0.1, (Math.random() - 0.5) * 0.2)),
      velocity: vel,
      color,
      size: 0.5 + Math.random() * 0.6,
      maxLife: 0.4 + Math.random() * 0.25,
      life: 0,
      opacity: 0.6,
    });
  }

  public update(delta: number) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life += delta;

      if (p.life >= p.maxLife) {
        this.particles.splice(i, 1);
        continue;
      }

      // Physics
      p.position.addScaledVector(p.velocity, delta);
      p.velocity.y -= 2.0 * delta; // Gravity
      p.size = Math.max(0.01, p.size * (1.0 + delta * 0.8)); // Expand over time
    }

    // Update GPU buffer attributes
    const posAttr = this.geometry.attributes.position as THREE.BufferAttribute;
    const colAttr = this.geometry.attributes.color as THREE.BufferAttribute;
    const sizeAttr = this.geometry.attributes.size as THREE.BufferAttribute;

    const count = this.particles.length;
    for (let i = 0; i < count; i++) {
      const p = this.particles[i];
      const alpha = 1.0 - p.life / p.maxLife;

      this.positions[i * 3] = p.position.x;
      this.positions[i * 3 + 1] = p.position.y;
      this.positions[i * 3 + 2] = p.position.z;

      this.colors[i * 3] = p.color.r * alpha;
      this.colors[i * 3 + 1] = p.color.g * alpha;
      this.colors[i * 3 + 2] = p.color.b * alpha;

      this.sizes[i] = p.size;
    }

    // Zero out unused slots
    for (let i = count; i < this.maxParticles; i++) {
      this.sizes[i] = 0;
      this.positions[i * 3] = 0;
      this.positions[i * 3 + 1] = -999;
      this.positions[i * 3 + 2] = 0;
    }

    posAttr.needsUpdate = true;
    colAttr.needsUpdate = true;
    sizeAttr.needsUpdate = true;
  }

  public clear() {
    this.particles = [];
  }
}
