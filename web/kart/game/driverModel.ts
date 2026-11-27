import * as THREE from 'three';
import { RacerConfig } from '../types';

// Hand-built mascot cast. Headwear remains the stable identity used by the menu protocol.
export function createDriver(body: THREE.Group, config: RacerConfig): THREE.Group {
  const kind = config.topper || 'cap';
  const human = ['cap', 'crown', 'bow'].includes(kind);
  const fur = kind === 'bear' ? 0x91512e : kind === 'horns' ? 0x48c85c : kind === 'bunny' ? 0xfff2eb : config.color;
  const mat = (color: THREE.ColorRepresentation) => new THREE.MeshStandardMaterial({ color, roughness: 0.48 });
  const skin = mat(human ? 0xffcf9e : fur), suit = mat(config.color), white = mat(0xfff8e9);
  const ink = mat(0x20233d), hair = mat(kind === 'cap' ? 0x63321d : 0xf5bb44), gold = mat(0xffcf38);
  const add = (parent: THREE.Group, material: THREE.Material, x: number, y: number, z: number, sx: number, sy: number, sz: number) => {
    const m = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 12), material);
    m.position.set(x, y, z); m.scale.set(sx, sy, sz); m.castShadow = true; parent.add(m); return m;
  };
  // Pear-shaped torso, sleeves, gloves and boots are visible from the chase camera.
  add(body, suit, 0, 0.65, -0.16, 0.29, 0.34, 0.22);
  if (kind === 'cap') {
    const denim = mat(0x285be0);
    add(body, denim, 0, 0.53, -0.04, 0.26, 0.2, 0.23);
    for (const s of [-1, 1]) { add(body, denim, s * 0.14, 0.76, 0.035, 0.045, 0.16, 0.04); add(body, gold, s * 0.14, 0.68, 0.09, 0.035, 0.035, 0.025); }
  }
  for (const s of [-1, 1]) {
    const arm = add(body, suit, s * 0.28, 0.68, 0.02, 0.11, 0.19, 0.12); arm.rotation.x = -0.65;
    add(body, white, s * 0.22, 0.63, 0.21, 0.105, 0.1, 0.095);
    add(body, kind === 'bear' ? skin : mat(0x633b30), s * 0.17, 0.38, 0.3, 0.12, 0.1, 0.19);
  }
  const head = new THREE.Group(); head.position.set(0, 1.03, -0.16); body.add(head);
  add(head, skin, 0, 0, 0, 0.27, kind === 'bear' ? 0.28 : 0.3, 0.255);
  if (human) {
    add(head, hair, 0, 0.04, -0.14, 0.28, 0.28, 0.17);
    for (const s of [-1, 1]) add(head, skin, s * 0.26, -0.01, 0, 0.065, 0.09, 0.065);
  }
  if (kind === 'crown' || kind === 'bow') {
    for (const s of [-1, 1]) {
      add(head, hair, s * 0.24, -0.13, -0.08, 0.09, 0.29, 0.13);
      add(head, gold, s * 0.27, -0.1, 0.06, 0.04, 0.045, 0.035);
    }
  }
  // Snouts and muzzles give the creatures a different profile, not just different hats.
  if (['horns', 'bear', 'cat', 'bunny'].includes(kind)) {
    add(head, kind === 'horns' ? skin : white, 0, -0.09, 0.2, kind === 'horns' ? 0.25 : 0.18, 0.14, 0.17);
    for (const s of [-1, 1]) add(head, ink, s * 0.08, -0.055, 0.35, 0.022, 0.018, 0.015);
  } else add(head, skin, 0, -0.025, 0.25, 0.085, 0.09, 0.1);
  for (const s of [-1, 1]) {
    add(head, white, s * 0.105, 0.065, 0.215, 0.073, 0.1, 0.04);
    add(head, mat(kind === 'horns' ? 0x7d3129 : 0x2651a0), s * 0.105, 0.06, 0.249, 0.037, 0.061, 0.02);
    add(head, ink, s * 0.105, 0.06, 0.265, 0.021, 0.045, 0.012);
    add(head, white, s * 0.105 - 0.012, 0.085, 0.277, 0.012, 0.017, 0.008);
    if (kind === 'cap') { const m = add(head, hair, s * 0.075, -0.11, 0.265, 0.095, 0.035, 0.035); m.rotation.z = s * 0.25; }
  }
  if (kind === 'cap') {
    add(head, suit, 0, 0.22, -0.025, 0.29, 0.15, 0.27);
    add(head, suit, 0, 0.16, 0.23, 0.29, 0.035, 0.19);
    add(head, white, 0, 0.25, 0.22, 0.085, 0.075, 0.025);
    add(head, gold, 0, 0.25, 0.246, 0.04, 0.042, 0.012);
  } else if (kind === 'antenna') {
    // Mushroom pilot: broad spotted cap and cream face.
    (head.children[0] as THREE.Mesh).material = white;
    add(head, suit, 0, 0.24, -0.02, 0.4, 0.24, 0.34);
    for (const s of [-1, 0, 1]) add(head, white, s * 0.23, 0.3, s === 0 ? 0.29 : 0.23, 0.085, 0.09, 0.03);
  } else if (kind === 'crown') {
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.16, 0.13, 10), gold); crown.position.y = 0.3; head.add(crown);
    for (let i = 0; i < 5; i++) { const a = i * Math.PI * 2 / 5; const tip = new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.14, 6), gold); tip.position.set(Math.sin(a) * 0.17, 0.42, Math.cos(a) * 0.17); head.add(tip); }
    add(head, mat(0xf34f87), 0, 0.32, 0.19, 0.055, 0.06, 0.025);
  } else if (kind === 'bow') {
    for (const s of [-1, 1]) add(head, suit, s * 0.1, 0.3, 0, 0.14, 0.1, 0.07);
    add(head, gold, 0, 0.3, 0.07, 0.045, 0.05, 0.035);
  } else {
    for (const s of [-1, 1]) {
      if (kind === 'horns' || kind === 'cat') {
        const ear = new THREE.Mesh(new THREE.ConeGeometry(kind === 'horns' ? 0.075 : 0.12, 0.25, 8), kind === 'horns' ? white : suit);
        ear.position.set(s * 0.21, 0.29, 0); ear.rotation.z = -s * 0.4; head.add(ear);
      } else {
        add(head, skin, s * 0.2, kind === 'bunny' ? 0.38 : 0.22, -0.03, 0.085, kind === 'bunny' ? 0.27 : 0.1, 0.065);
        add(head, mat(0xf9a8ac), s * 0.2, kind === 'bunny' ? 0.39 : 0.22, 0.025, 0.045, kind === 'bunny' ? 0.19 : 0.055, 0.025);
      }
    }
    if (kind === 'horns') {
      for (let i = 0; i < 3; i++) add(head, mat(0xf37846), 0, 0.26 - i * 0.14, -0.22, 0.055, 0.1, 0.08);
      add(body, skin, 0, 0.58, -0.45, 0.16, 0.16, 0.32);
    }
  }
  return head;
}
