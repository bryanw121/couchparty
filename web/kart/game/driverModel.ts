import * as THREE from 'three';
import { RacerConfig } from '../types';

// Original CouchParty drivers, sculpted from simple shapes. Shared by the race and the
// offline portrait renderer (scripts/render-kart-portraits.mjs). Toppers stay the stable ids.
export const CHARACTER_FOR_TOPPER: Record<string, string> = { cat: 'tabby', bunny: 'bunbun', crown: 'duke', horns: 'rex', bow: 'lulu', antenna: 'zippy', cap: 'ace', bear: 'grizz' };

export function createDriver(body: THREE.Group, config: RacerConfig, quality: 'race' | 'portrait' = 'race'): THREE.Group {
  const who = CHARACTER_FOR_TOPPER[config.topper || 'cap'] || 'ace';
  const hi = quality === 'portrait';
  const mat = (color: THREE.ColorRepresentation, roughness = .5, metalness = 0, emissive = 0) => {
    const m = new THREE.MeshStandardMaterial({ color, roughness, metalness, emissive, emissiveIntensity: emissive ? .8 : 0 });
    m.userData.preserveShading = true; return m;
  };
  const white = mat(0xfff9ef, .3), ink = mat(0x171c28, .3), pinkSkin = mat(0xff9fb8, .45), gold = mat(0xffc52e, .25, .55);
  const kartPaint = mat(config.color, .4);
  const sphere = new THREE.SphereGeometry(1, hi ? 28 : 18, hi ? 20 : 12);
  const add = (p: THREE.Group, m: THREE.Material, x: number, y: number, z: number, sx: number, sy: number, sz: number) => {
    const o = new THREE.Mesh(sphere, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); o.castShadow = o.receiveShadow = true; p.add(o); return o;
  };
  const tube = (p: THREE.Group, m: THREE.Material, pts: number[][], r: number) => {
    const curve = new THREE.CatmullRomCurve3(pts.map(v => new THREE.Vector3(v[0], v[1], v[2])));
    const o = new THREE.Mesh(new THREE.TubeGeometry(curve, hi ? 20 : 10, r, hi ? 8 : 5, false), m); o.castShadow = true; p.add(o); return o;
  };
  const cone = (p: THREE.Group, m: THREE.Material, x: number, y: number, z: number, r: number, h: number, tilt = 0, tiltX = 0) => {
    const o = new THREE.Mesh(new THREE.ConeGeometry(r, h, hi ? 20 : 12), m); o.position.set(x, y, z); o.rotation.set(tiltX, 0, tilt); o.castShadow = true; p.add(o); return o;
  };
  const head = new THREE.Group(); head.name = who + '-head'; head.position.set(0, 1.05, -.14); body.add(head);
  const eye = (x: number, y: number, z: number, sx = .07, sy = .095, iris = 0x3a2a1e) => {
    add(head, white, x, y, z, sx, sy, .045); add(head, mat(iris, .22), x, y - sy * .08, z + .04, sx * .62, sy * .7, .015);
    add(head, ink, x, y - sy * .08, z + .052, sx * .32, sy * .4, .009); add(head, white, x - sx * .22, y + sy * .22, z + .06, sx * .18, sy * .17, .005);
  };
  const smile = (y: number, z: number, w: number, color = 0x6b2a22) => tube(head, mat(color), [[-w, y + .02, z - .01], [-w * .5, y - .012, z + .008], [0, y - .022, z + .012], [w * .5, y - .012, z + .008], [w, y + .02, z - .01]], .009);
  const cheeks = (y: number, z: number, x: number) => { for (const s of [-1, 1]) add(head, mat(0xff8fa3, .6), s * x, y, z, .05, .03, .01); };
  // Torso, arms and gloved hands on the steering wheel, feet in the footwell.
  const torso = (top: THREE.Material, belly?: THREE.Material, paw?: THREE.Material, shoe?: THREE.Material) => {
    add(body, top, 0, .68, -.14, .29, .31, .24);
    if (belly) add(body, belly, 0, .64, .06, .2, .24, .09);
    for (const s of [-1, 1]) {
      add(body, top, s * .29, .73, -.02, .12, .18, .13).rotation.z = s * .35;
      add(body, top, s * .3, .61, .13, .095, .17, .095).rotation.x = -.85;
      add(body, paw || white, s * .23, .63, .26, .11, .1, .09);
      add(body, shoe || ink, s * .19, .36, .34, .14, .11, .21);
    }
  };

  if (who === 'tabby') {
    const fur = mat(0xf59a3c), cream = mat(0xfff0d8), stripe = mat(0xc4611c), scarf = mat(0x2f6fe0);
    torso(fur, cream, cream);
    tube(body, scarf, [[-.24, .9, -.05], [0, .86, .14], [.24, .9, -.05]], .05);
    add(head, fur, 0, 0, 0, .33, .29, .27);
    add(head, cream, 0, -.09, .19, .2, .13, .12);
    for (const s of [-1, 1]) {
      const ear = cone(head, fur, s * .2, .28, -.03, .1, .2, -s * .35); ear.scale.z = .7;
      const inner = cone(head, pinkSkin, s * .195, .265, .005, .055, .13, -s * .35); inner.scale.z = .5;
      eye(s * .11, .05, .22, .07, .09, 0x4caf50);
      for (const k of [-1, 1]) tube(head, white, [[s * .1, -.1 + k * .012, .27], [s * .22, -.09 + k * .035, .25], [s * .32, -.08 + k * .055, .2]], .005);
    }
    for (let i = -1; i <= 1; i++) add(head, stripe, i * .07, .24, .14 - Math.abs(i) * .03, .022, .055, .02).rotation.z = i * .25;
    cone(head, pinkSkin, 0, -.05, .3, .03, .04, Math.PI); cheeks(-.07, .24, .2); smile(-.15, .28, .06);
    tube(body, fur, [[0, .5, -.38], [.18, .55, -.55], [.26, .8, -.6], [.18, 1, -.55]], .045);
  } else if (who === 'bunbun') {
    const fur = mat(0xfdf6fb), overall = kartPaint, inner = pinkSkin;
    torso(overall, fur, fur);
    for (const s of [-1, 1]) add(body, gold, s * .13, .8, .08, .03, .03, .015);
    add(head, fur, 0, 0, 0, .3, .29, .27); add(head, fur, 0, -.1, .17, .19, .12, .13);
    for (const s of [-1, 1]) {
      const ear = add(head, fur, s * .11, .42, -.05, .075, .24, .055); ear.rotation.z = -s * .18;
      const in2 = add(head, inner, s * .113, .42, -.006, .04, .18, .02); in2.rotation.z = -s * .18;
      eye(s * .11, .06, .22, .068, .095, 0xa0485e);
    }
    add(head, inner, 0, -.04, .29, .035, .025, .02);
    for (const s of [-1, 1]) add(head, white, s * .018, -.16, .28, .016, .03, .01);
    cheeks(-.06, .23, .19); smile(-.12, .285, .05);
    add(body, fur, 0, .5, -.4, .09, .09, .09);
  } else if (who === 'duke') {
    // A royal penguin in a purple cape.
    const navy = mat(0x262a52), front = mat(0xfbfbff), beak = mat(0xff9b26), cape = mat(0x8b5cf6, .55);
    torso(navy, front, navy, beak);
    add(body, cape, 0, .78, -.3, .36, .36, .1); tube(body, gold, [[-.25, .95, -.05], [0, .92, .08], [.25, .95, -.05]], .02);
    add(head, navy, 0, 0, 0, .31, .3, .28); add(head, front, 0, -.04, .14, .23, .22, .16);
    for (const s of [-1, 1]) eye(s * .1, .05, .23, .065, .085, 0x2b3a8a);
    const b = cone(head, beak, 0, -.06, .35, .075, .19, 0, Math.PI / 2); b.scale.set(1.4, 1, .6);
    cheeks(-.07, .22, .17);
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(.15, .13, .1, 16), gold); crown.position.set(0, .31, -.02); head.add(crown);
    for (let i = 0; i < 5; i++) { const a = i * Math.PI * 2 / 5; cone(head, gold, Math.sin(a) * .13, .4, Math.cos(a) * .13 - .02, .04, .1); }
    add(head, mat(0x2ec4b6, .15, .2), 0, .31, .13, .03, .035, .015);
  } else if (who === 'rex') {
    // A friendly little horned dino with a frill.
    const scales = mat(0x3fbf74), belly = mat(0xf4e7a1), frill = mat(0x1f8f56), horn = mat(0xfff1d6, .35);
    torso(scales, belly, scales, scales);
    add(head, scales, 0, 0, .02, .3, .27, .29); add(head, scales, 0, -.07, .22, .2, .14, .14);
    const fs = new THREE.Shape(); fs.moveTo(-.4, -.05); fs.absarc(0, -.05, .4, Math.PI, 0, true); fs.lineTo(-.4, -.05);
    const fr = new THREE.Mesh(new THREE.ExtrudeGeometry(fs, { depth: .04, bevelEnabled: true, bevelSize: .015, bevelThickness: .015, bevelSegments: 2, curveSegments: hi ? 32 : 16 }), frill);
    fr.position.set(0, .05, -.2); fr.rotation.x = -.35; fr.castShadow = true; head.add(fr);
    for (let i = 0; i < 7; i++) { const a = Math.PI - i * Math.PI / 6; const d = add(head, belly, Math.cos(a) * .37, .05 + Math.sin(a) * .37 * Math.cos(.35), -.17 + Math.sin(a) * .37 * Math.sin(.35), .04, .04, .03); d.userData.frill = 1; }
    for (const s of [-1, 1]) { cone(head, horn, s * .12, .27, .1, .04, .2, -s * .15, -.5); eye(s * .12, .08, .22, .065, .085, 0xd9822b); add(head, ink, s * .05, -.04, .35, .012, .01, .006); }
    cone(head, horn, 0, .06, .35, .035, .11, 0, .9); smile(-.15, .3, .1, 0x1d5e39);
    tube(body, scales, [[0, .48, -.38], [0, .45, -.62], [.12, .44, -.82]], .07);
  } else if (who === 'lulu') {
    const skin = mat(0xffa8c4), snout = mat(0xff8fb1), bow = mat(0xe83f6f), dress = mat(0xfff1f5);
    torso(dress, undefined, skin, bow);
    for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3; add(body, mat(0xff5d8f), Math.sin(a) * .2, .62 + Math.cos(a) * .13, .04 + Math.cos(a) * .02, .03, .03, .02); }
    add(head, skin, 0, 0, 0, .32, .29, .28);
    const sn = new THREE.Mesh(new THREE.CylinderGeometry(.085, .09, .07, hi ? 24 : 14), snout); sn.rotation.x = Math.PI / 2; sn.position.set(0, -.07, .29); head.add(sn);
    for (const s of [-1, 1]) {
      add(head, mat(0xc4577a), s * .03, -.07, .328, .016, .024, .006);
      const ear = cone(head, skin, s * .2, .24, .05, .08, .17, -s * 1.1, .35); ear.scale.z = .5;
      eye(s * .12, .07, .22, .062, .085, 0x5b3b8c);
      add(head, bow, s * .09, .3, -.02, .09, .06, .04).rotation.z = s * .3;
    }
    add(head, mat(0xb82552), 0, .3, .0, .035, .04, .035); cheeks(-.05, .25, .2); smile(-.16, .27, .055);
    tube(body, skin, [[0, .5, -.38], [.08, .54, -.5], [-.02, .6, -.52], [.06, .66, -.5]], .02);
  } else if (who === 'zippy') {
    // A round little robot with a screen face.
    const shell = mat(0x9fd8f2, .25, .4), metal = mat(0xc9d6e3, .2, .75), screen = mat(0x0f1626, .2), glow = mat(0x6ff0ff, .2, 0, 0x2fd6ff);
    torso(shell, metal, metal);
    add(body, glow, 0, .72, .1, .05, .05, .02);
    add(head, shell, 0, 0, 0, .31, .28, .28);
    add(head, screen, 0, -.01, .17, .23, .17, .13);
    for (const s of [-1, 1]) {
      add(head, glow, s * .085, .02, .29, .04, .055, .01);
      const bolt = new THREE.Mesh(new THREE.CylinderGeometry(.06, .06, .08, 16), metal); bolt.rotation.z = Math.PI / 2; bolt.position.set(s * .31, 0, 0); head.add(bolt);
    }
    tube(head, glow, [[-.07, -.06, .29], [0, -.09, .3], [.07, -.06, .29]], .012);
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(.012, .012, .18, 8), metal); ant.position.set(0, .35, 0); head.add(ant);
    add(head, mat(0xfff15a, .2, 0, 0xffd400), 0, .46, 0, .05, .05, .05);
  } else if (who === 'ace') {
    // A speedy duck in a racing cap.
    const feathers = mat(0xffd23f), bill = mat(0xff8a1f), cap = mat(0x2f5fe0), jacket = mat(0xffffff, .5);
    torso(jacket, feathers, feathers, bill);
    tube(body, mat(0xe23b3b), [[-.28, .7, .05], [0, .66, .2], [.28, .7, .05]], .025);
    add(head, feathers, 0, 0, 0, .3, .29, .27);
    for (const s of [-1, 1]) eye(s * .1, .06, .22, .065, .09, 0x2b2b2b);
    const top = add(head, bill, 0, -.07, .29, .13, .04, .1); top.rotation.x = -.1;
    add(head, mat(0xe56d10), 0, -.11, .28, .11, .03, .085); cheeks(-.05, .23, .19);
    add(head, cap, 0, .16, -.01, .31, .17, .28);
    const brim = add(head, cap, 0, .14, .22, .22, .025, .15); brim.rotation.x = -.15;
    const star = new THREE.Shape(); for (let i = 0; i < 10; i++) { const r = i % 2 ? .022 : .05, a = i * Math.PI / 5; star[i ? 'lineTo' : 'moveTo'](Math.sin(a) * r, Math.cos(a) * r); }
    const st = new THREE.Mesh(new THREE.ExtrudeGeometry(star, { depth: .01, bevelEnabled: false }), white); st.position.set(0, .24, .25); st.rotation.x = -.45; head.add(st);
    add(head, feathers, 0, .3, -.05, .03, .06, .03).rotation.z = .4;
  } else {
    // Grizz: a big friendly bear with a red bandana.
    const fur = mat(0x9a6236), muzzle = mat(0xe8c79b), nose = mat(0x2a1a12, .25), band = mat(0xd93a3a);
    torso(fur, muzzle, fur, fur);
    add(body, fur, 0, .7, -.14, .34, .33, .27);
    add(head, fur, 0, 0, 0, .34, .31, .29); add(head, muzzle, 0, -.09, .2, .17, .12, .12);
    for (const s of [-1, 1]) { add(head, fur, s * .25, .23, -.03, .1, .1, .06); add(head, muzzle, s * .25, .23, .01, .055, .055, .03); eye(s * .12, .06, .23, .06, .075, 0x4a2c14); }
    add(head, nose, 0, -.04, .31, .06, .04, .04); smile(-.14, .3, .06, 0x3a2216); cheeks(-.06, .24, .21);
    tube(head, band, [[-.33, .1, -.02], [-.2, .2, .2], [0, .24, .26], [.2, .2, .2], [.33, .1, -.02]], .03);
    add(head, band, .18, .12, -.28, .06, .08, .03).rotation.z = .6;
  }
  return head;
}
