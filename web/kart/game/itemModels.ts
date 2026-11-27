import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import type { ItemKind } from './items';

// Shared geometry for thrown/held items, power-up effects and rendered HUD icons.
export const ITEM_NAMES: Record<ItemKind, string> = {
  banana: 'Banana', green: 'Green Shell', red: 'Red Shell', blue: 'Spiny Shell',
  boost: 'Mushroom', star: 'Super Star', bolt: 'Lightning', fake: 'Fake Item Box',
  coin: 'Coin', horn: 'Super Horn', bomb: 'Bob-omb', ink: 'Blooper',
  golden: 'Golden Mushroom', ride: 'Bullet Bill', ghost: 'Boo',
};
function material(color: number, metalness = .05) {
  const m = new THREE.MeshStandardMaterial({ color, roughness: .32, metalness });
  m.userData.preserveShading = true; return m;
}
export function createItemModel(kind: ItemKind | 'box'): THREE.Group {
  const g = new THREE.Group(); g.name = 'item-' + kind;
  const white = material(0xfff7e8), ink = material(0x151c2d), yellow = material(0xffd429, .28);
  const add = (geo: THREE.BufferGeometry, m: THREE.Material, x = 0, y = 0, z = 0, parent: THREE.Object3D = g) => {
    const mesh = new THREE.Mesh(geo, m); mesh.position.set(x, y, z); mesh.castShadow = mesh.receiveShadow = true; parent.add(mesh); return mesh;
  };
  const ball = (m: THREE.Material, x: number, y: number, z: number, sx: number, sy = sx, sz = sx, p: THREE.Object3D = g) => {
    const mesh = add(new THREE.SphereGeometry(1, 20, 14), m, x, y, z, p); mesh.scale.set(sx, sy, sz); return mesh;
  };
  const tube = (m: THREE.Material, points: number[][], radius: number, p: THREE.Object3D = g) => add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(v => new THREE.Vector3(...v as [number, number, number]))), 18, radius, 8, false), m, 0, 0, 0, p);
  const eyes = (y: number, z: number, spacing = .15, height = .13, p: THREE.Object3D = g) => {
    for (const s of [-1, 1]) ball(ink, s * spacing, y, z, .055, height, .035, p);
  };
  const extrude = (points: number[][], m: THREE.Material, depth: number, p: THREE.Object3D = g) => {
    const shape = new THREE.Shape(points.map(v => new THREE.Vector2(v[0], v[1])));
    return add(new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelSize: .035, bevelThickness: .035, bevelSegments: 3, steps: 1 }), m, 0, 0, -depth / 2, p);
  };
  if (kind === 'green' || kind === 'red' || kind === 'blue') {
    const shell = material(kind === 'green' ? 0x20b94b : kind === 'red' ? 0xec343b : 0x2e6de8);
    const seam = material(kind === 'green' ? 0x08772d : kind === 'red' ? 0x9c1e32 : 0x163f9b);
    const body = new THREE.Group(); body.name = 'shell'; g.add(body);
    ball(yellow, 0, .25, 0, .57, .18, .63, body);
    ball(shell, 0, .45, 0, .57, .43, .63, body);
    const rim = add(new THREE.TorusGeometry(.57, .085, 10, 32), white, 0, .3, 0, body); rim.rotation.x = Math.PI / 2; rim.scale.y = 1.1;
    for (let i = 0; i < 6; i++) {
      const a = i * Math.PI / 3;
      tube(seam, [[Math.sin(a)*.14,.86,Math.cos(a)*.14],[Math.sin(a)*.43,.71,Math.cos(a)*.47],[Math.sin(a)*.56,.37,Math.cos(a)*.62]], .018, body);
    }
    const hex = Array.from({length:7},(_,i)=>[Math.sin(i*Math.PI/3)*.18,.86,Math.cos(i*Math.PI/3)*.18]); tube(seam,hex,.018,body);
    ball(ink,0,.28,.59,.22,.11,.055,body);
    if (kind === 'blue') {
      for (let i=0;i<7;i++) { const a=i*Math.PI*2/7; add(new THREE.ConeGeometry(.095,.36,10),white,Math.sin(a)*.37,.87,Math.cos(a)*.4,body); }
      add(new THREE.ConeGeometry(.11,.38,10),white,0,1,0,body);
      for(const s of [-1,1]) for(let i=0;i<4;i++) {
        const feather=ball(white,s*(.68+i*.12),.55+i*.14,-i*.06,.13,.4-i*.045,.07,body);feather.rotation.z=-s*.65;
      }
    }
  } else if (kind === 'boost' || kind === 'golden') {
    ball(white,0,.36,0,.38,.37,.33);
    const cap=ball(kind==='golden'?yellow:material(0xef3039),0,.78,0,.69,.45,.6);cap.name='mushroom-cap';
    const brim=add(new THREE.TorusGeometry(.52,.075,8,28),white,0,.52,0);brim.rotation.x=Math.PI/2;
    for(const [x,y,z,s]of [[0,1.2,.04,.2],[-.4,.94,.38,.18],[.38,.94,.4,.18],[0,.76,.59,.21],[-.58,.78,-.05,.17],[.58,.78,-.05,.17]])ball(white,x,y,z,s,s*.85,.04).lookAt(x*3,(y-.78)*3+.78,z*3);
    eyes(.36,.3,.13,.12);
    if(kind==='golden') for(const s of [-1,1])add(new THREE.ConeGeometry(.1,.3,8),yellow,s*.36,1.26,0);
  } else if (kind === 'banana') {
    const peel=material(0xffd832),inner=material(0xfff0a1);
    tube(peel,[[0,.18,0],[0,.65,0],[.03,1.05,0]],.105);
    ball(material(0x6d4929),.025,1.08,0,.09,.08,.07);
    for(let i=0;i<3;i++) {const a=i*Math.PI*2/3,x=Math.sin(a),z=Math.cos(a);
      tube(peel,[[0,.65,0],[x*.3,.34,z*.3],[x*.72,.1,z*.72],[x*.88,.2,z*.88]],.13);
      tube(inner,[[x*.1,.61,z*.1],[x*.36,.4,z*.36],[x*.72,.2,z*.72]],.065);
    }
    eyes(.73,.105,.06,.065);
  } else if (kind === 'star' || kind === 'bolt') {
    if(kind==='star') {
      const points=Array.from({length:10},(_,i)=>{const a=i*Math.PI/5,r=i%2?.33:.72;return [Math.sin(a)*r,.73+Math.cos(a)*r];});
      extrude(points,yellow,.22);eyes(.78,.155,.13,.16);
    } else extrude([[.12,1.5],[-.47,.65],[-.06,.65],[-.3,.03],[.54,.92],[.13,.92],[.39,1.5]],yellow,.2);
  } else if (kind === 'bomb') {
    ball(ink,0,.62,0,.52);eyes(.7,.5,.14,.15);
    // White eyes on the dark body, with a brass wind-up key and yellow shoes.
    for(const s of [-1,1]) {ball(white,s*.15,.7,.55,.07,.14,.035);ball(yellow,s*.28,.15,.2,.27,.14,.34);}
    add(new THREE.CylinderGeometry(.14,.18,.15,12),material(0x657087),0,1.15,0);
    tube(material(0xd3a66b),[[0,1.22,0],[.05,1.48,0],[.25,1.5,0]],.035);
    const flame=ball(material(0xff9d26),.26,1.5,0,.12);flame.name='flame';
    for(const s of [-1,1]){const key=add(new THREE.TorusGeometry(.12,.045,6,14),yellow,s*.15,.66,-.57);key.rotation.y=.2;}
  } else if (kind === 'ghost') {
    ball(white,0,.72,0,.62,.62,.5);
    for(const s of [-1,1]){const arm=ball(white,s*.58,.65,.04,.21,.13,.14);arm.rotation.z=s*.5;}
    const tail=add(new THREE.ConeGeometry(.3,.55,16),white,0,.14,-.2);tail.rotation.x=Math.PI;
    const mouth=ball(material(0x651b32),0,.56,.48,.28,.18,.05);mouth.name='boo-mouth';
    ball(material(0xf06e93),.04,.42,.54,.16,.13,.08);
    for(const s of [-1,1]){ball(ink,s*.2,.9,.46,.055,.13,.035);const fang=add(new THREE.ConeGeometry(.06,.16,10),white,s*.17,.61,.54);fang.rotation.z=Math.PI;}
  } else if (kind === 'ink') {
    ball(white,0,.84,0,.45,.55,.33);add(new THREE.ConeGeometry(.42,.55,20),white,0,1.25,0);
    ball(ink,0,.8,.3,.34,.15,.04);for(const s of [-1,1])ball(white,s*.13,.81,.34,.075,.11,.025);
    for(let i=0;i<6;i++){const a=i*Math.PI/3;tube(white,[[Math.sin(a)*.23,.55,Math.cos(a)*.19],[Math.sin(a)*.36,.2,Math.cos(a)*.3],[Math.sin(a)*.5,.25,Math.cos(a)*.42]],.085);}
  } else if (kind === 'ride') {
    ball(ink,0,.66,0,.58,.58,1.02);const cuff=add(new THREE.TorusGeometry(.5,.08,8,24),material(0x526071),0,.66,-.72);
    for(const s of [-1,1]){ball(white,s*.3,.86,.85,.19,.18,.055).rotation.y=s*.3;ball(ink,s*.29,.87,.9,.06,.11,.03);ball(white,s*.65,.45,.05,.24,.22,.24);}
    const brow=material(0x0a101a);for(const s of [-1,1]){const b=add(new THREE.BoxGeometry(.35,.09,.08),brow,s*.3,1.02,.88);b.rotation.z=-s*.3;}
    const flame=ball(material(0xffad28),0,.66,-1,.35,.35,.5);flame.name='flame';
  } else if (kind === 'coin') {
    const coin=add(new THREE.CylinderGeometry(.55,.55,.17,32),yellow,0,.65,0);coin.rotation.x=Math.PI/2;
    for(const s of [-1,1]){add(new THREE.TorusGeometry(.44,.035,8,28),material(0xffef8d),0,.65,s*.1);add(new RoundedBoxGeometry(.1,.54,.05,2,.025),material(0xc4820b),0,.65,s*.12);}
  } else if (kind === 'horn') {
    const red=material(0xf04745),brass=material(0xffc832,.5);
    add(new RoundedBoxGeometry(.6,.5,.5,2,.06),red,0,.35,-.1);
    const bell=add(new THREE.CylinderGeometry(.5,.14,.65,24,1,true),brass,0,.68,.3);bell.rotation.x=Math.PI/2;
    ball(ink,0,.68,.64,.36,.36,.035);add(new THREE.TorusGeometry(.5,.055,8,24),brass,0,.68,.64);
    ball(red,0,.65,-.3,.18,.14,.18);
  } else {
    const fake=kind==='fake';
    const frame=material(fake?0xff668b:0xd9fcff,.3);
    const glass=material(fake?0xed4775:0x7cdaf5,.18);glass.transparent=true;glass.opacity=.72;
    add(new RoundedBoxGeometry(1.1,1.1,1.1,2,.09),glass,0,.6,0);
    const edge=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(1.14,1.14,1.14)),new THREE.LineBasicMaterial({color:fake?0xffb8ce:0xb8faff}));edge.position.y=.6;g.add(edge);
    for(let side=0;side<4;side++){
      const face=new THREE.Group();face.position.y=.6;face.rotation.y=side*Math.PI/2;g.add(face);
      tube(frame,[[-.18,.18,.585],[-.15,.34,.585],[.12,.36,.585],[.24,.21,.585],[.13,.05,.585],[0,-.04,.585],[0,-.13,.585]],.065,face);
      ball(frame,0,-.32,.585,.075,.075,.035,face);
    }
    g.name=fake?'item-fake':'item-box';
  }
  // Merge the static pieces by material: 20 question boxes should not cost hundreds of draws.
  g.updateMatrixWorld(true);
  const batches = new Map<THREE.Material, THREE.BufferGeometry[]>(), originals: THREE.Mesh[] = [];
  g.traverse(o => {
    if (!(o as THREE.Mesh).isMesh || o.name === 'flame') return;
    const mesh = o as THREE.Mesh, m = mesh.material as THREE.Material;
    if (!batches.has(m)) batches.set(m, []);
    const geo = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone();
    geo.applyMatrix4(mesh.matrixWorld);batches.get(m)!.push(geo);originals.push(mesh);
  });
  for (const mesh of originals) {mesh.removeFromParent();mesh.geometry.dispose();}
  for (const [m, pieces] of batches) {
    const geo = mergeGeometries(pieces);if(!geo)throw new Error('Item geometry could not be merged');
    const mesh = new THREE.Mesh(geo, m);mesh.castShadow = mesh.receiveShadow = true;g.add(mesh);
    pieces.forEach(p => p.dispose());
  }
  return g;
}
