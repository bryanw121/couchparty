import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import type { ItemKind } from './items';
import {hasHeroAsset,addHeroAsset} from './heroAssets';

// Shared geometry for thrown/held items, power-up effects and rendered HUD icons.
export const ITEM_NAMES: Record<ItemKind, string> = {
  banana: 'Banana', green: 'Green Shell', red: 'Red Shell', blue: 'Spiny Shell',
  boost: 'Mushroom', star: 'Super Star', bolt: 'Lightning', fake: 'Fake Item Box',
  coin: 'Coin', horn: 'Super Horn', bomb: 'Bob-omb', ink: 'Blooper',
  golden: 'Golden Mushroom', ride: 'Bullet Bill', ghost: 'Boo',
};
function material(color: number, metalness = .02) {
  const m = new THREE.MeshPhysicalMaterial({ color, roughness: .46, metalness,clearcoat:.22,clearcoatRoughness:.42 });
  m.userData.preserveShading = true; return m;
}
export function createItemModel(kind: ItemKind | 'box'): THREE.Group {
  const g = new THREE.Group(); g.name = 'item-' + kind;
  const asset=kind==='boost'?'mushroom':kind==='green'?'shell':null;
  if(asset&&hasHeroAsset(asset)){addHeroAsset(g,asset);return g;}
  const white = material(0xfff7e8), ink = material(0x182238), yellow = material(0xffd429, .12);
  const add = (geo: THREE.BufferGeometry, m: THREE.Material, x = 0, y = 0, z = 0, parent: THREE.Object3D = g) => {
    const mesh = new THREE.Mesh(geo, m); mesh.position.set(x, y, z); mesh.castShadow = mesh.receiveShadow = true; parent.add(mesh); return mesh;
  };
  const ball = (m: THREE.Material, x: number, y: number, z: number, sx: number, sy = sx, sz = sx, p: THREE.Object3D = g) => {
    const mesh = add(new THREE.SphereGeometry(1, 28, 20), m, x, y, z, p); mesh.scale.set(sx, sy, sz); return mesh;
  };
  const tube = (m: THREE.Material, points: number[][], radius: number, p: THREE.Object3D = g) => add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(v => new THREE.Vector3(...v as [number, number, number]))), 18, radius, 8, false), m, 0, 0, 0, p);
  const eyes = (y: number, z: number, spacing = .15, height = .13, p: THREE.Object3D = g) => {
    for (const s of [-1, 1]) ball(ink, s * spacing, y, z, .055, height, .035, p);
  };
  const extrude = (points: number[][], m: THREE.Material, depth: number, p: THREE.Object3D = g) => {
    const shape = new THREE.Shape();
    const corner = .16;
    points.forEach((v, i) => {
      const prev = points[(i + points.length - 1) % points.length], next = points[(i + 1) % points.length];
      const a = [v[0] + (prev[0] - v[0]) * corner, v[1] + (prev[1] - v[1]) * corner];
      const b = [v[0] + (next[0] - v[0]) * corner, v[1] + (next[1] - v[1]) * corner];
      if (!i) shape.moveTo(a[0], a[1]); else shape.lineTo(a[0], a[1]);
      shape.quadraticCurveTo(v[0], v[1], b[0], b[1]);
    });
    shape.closePath();
    if (kind === 'star') {
      // Inflated front/back surfaces, rather than a flat extruded badge.
      const contour=shape.getPoints(8);contour.pop();
      const vertices:number[]=[],indices:number[]=[],count=contour.length,rings=14;
      for(const side of [1,-1])for(let ring=0;ring<=rings;ring++)for(const p of contour) {
        const t=ring/rings,x=p.x*t,y=(p.y-.73)*t;
        vertices.push(x,.73+y,side*(.12+.17*Math.max(0,1-(x*x+y*y)/(.72*.72))));
      }
      const faceSize=(rings+1)*count;
      for(let side=0;side<2;side++)for(let ring=0;ring<rings;ring++)for(let j=0;j<count;j++) {
        const a=side*faceSize+ring*count+j,b=side*faceSize+ring*count+(j+1)%count,c=a+count,d=b+count;
        if(!side)indices.push(a,c,b,b,c,d);else indices.push(a,b,c,b,d,c);
      }
      for(let j=0;j<count;j++){const a=rings*count+j,b=rings*count+(j+1)%count;indices.push(a,b,a+faceSize,b,b+faceSize,a+faceSize);}
      for(let i=0;i<indices.length;i+=3){const b=indices[i+1];indices[i+1]=indices[i+2];indices[i+2]=b;}
      const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geo.setIndex(indices);geo.computeVertexNormals();
      return add(geo,m,0,0,0,p);
    }
    return add(new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelSize: .075, bevelThickness: .09, bevelSegments: 5, curveSegments: 8, steps: 1 }), m, 0, 0, -depth / 2, p);
  };
  if (kind === 'green' || kind === 'red' || kind === 'blue') {
    const shell = material(kind === 'green' ? 0x20b94b : kind === 'red' ? 0xec343b : 0x2e6de8);
    const seam = material(kind === 'green' ? 0x08772d : kind === 'red' ? 0x9c1e32 : 0x163f9b);
    const body = new THREE.Group(); body.name = 'shell'; g.add(body);
    ball(yellow, 0, .25, 0, .56, .22, .62, body);
    const undersideSeam=material(0xe9ad2c);
    for (let i=0;i<8;i++) { const a=i*Math.PI/4;ball(undersideSeam,Math.sin(a)*.43,.22,Math.cos(a)*.48,.025,.12,.025,body); }
    const dome=add(new THREE.SphereGeometry(1,32,20,0,Math.PI*2,0,Math.PI/2),seam,0,.4,0,body);dome.scale.set(.59,.51,.65);
    const rim = add(new THREE.TorusGeometry(.58, .12, 16, 48), white, 0, .33, 0, body); rim.rotation.x = Math.PI / 2; rim.scale.y = 1.1;
    // Seven separately modeled convex plates over a recessed dark shell.
    const plate=(start:number,end:number,center=false)=>{
      const vertices:number[]=[],indices:number[]=[],n=24,rings=10;
      for(let j=0;j<=rings;j++)for(let k=0;k<=n;k++){
        const t=j/rings,a=start+(end-start)*k/n;
        const sector=((a+Math.PI/6)%(Math.PI/3)+Math.PI/3)%(Math.PI/3)-Math.PI/6;
        const boundary=.38*Math.cos(Math.PI/6)/Math.cos(sector);
        const r=center?t*(boundary-.012):(boundary+.012)*(1-t)+.985*t;
        const height=.4+.51*Math.sqrt(1-r*r)+.012+.014*Math.sin(Math.PI*t);
        vertices.push(Math.sin(a)*.59*r,height,Math.cos(a)*.65*r);
        if(j<rings&&k<n){const q=j*(n+1)+k;indices.push(q,q+n+1,q+1,q+1,q+n+1,q+n+2);}
      }
      const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geo.setIndex(indices);geo.computeVertexNormals();add(geo,shell,0,0,0,body);
    };
    plate(0,Math.PI*2,true);for(let i=0;i<6;i++)plate(i*Math.PI/3+.018,(i+1)*Math.PI/3-.018);
    if (kind === 'blue') {
      for (let i=0;i<5;i++) { const a=i*Math.PI*2/5; add(new THREE.ConeGeometry(.12,.36,24),white,Math.sin(a)*.37,.94,Math.cos(a)*.4,body); }
      add(new THREE.ConeGeometry(.14,.43,24),white,0,1.1,0,body);
      for(const s of [-1,1]) {
        const wing=ball(white,s*.73,.75,-.08,.24,.43,.1,body);wing.rotation.z=-s*.55;
        for(let i=0;i<4;i++) {
        const feather=ball(white,s*(.81+i*.135),.84+i*.095,-.1+i*.035,.105,.47-i*.065,.075,body);feather.rotation.z=-s*.62;
        }
      }
    }
  } else if (kind === 'boost' || kind === 'golden') {
    const stem=material(0xffedcf),capMaterial=kind==='golden'?yellow:material(0xed3d50);
    ball(stem,0,.32,.02,.35,.31,.32);
    const profile=[new THREE.Vector2(0,.57),new THREE.Vector2(.48,.57),new THREE.Vector2(.65,.59),new THREE.Vector2(.7,.65)];
    for(let j=1;j<=20;j++){const a=Math.PI/2*(1-j/20);profile.push(new THREE.Vector2(Math.sin(a)*.7,.65+Math.cos(a)*.65));}
    const cap=add(new THREE.LatheGeometry(profile,48),capMaterial);cap.scale.z=.62/.7;cap.name='mushroom-cap';
    // Surface patches sit flush on the ellipsoid instead of floating white discs.
    for(const [theta,phi,r] of [[.18,0,.22],[1,-.85,.23],[1,.85,.23],[1.45,0,.2],[1.4,1.9,.19],[1.4,-1.9,.19]]) {
      const positions:number[]=[],normals:number[]=[],indices:number[]=[];
      const center=new THREE.Vector3(Math.sin(theta)*Math.sin(phi),Math.cos(theta),Math.sin(theta)*Math.cos(phi));
      const u=new THREE.Vector3(Math.cos(phi),0,-Math.sin(phi)),v=new THREE.Vector3().crossVectors(center,u);
      for(let ring=0;ring<=5;ring++)for(let j=0;j<=28;j++) {const a=j/28*Math.PI*2,t=ring/5*r;
        const q=center.clone().addScaledVector(u,Math.cos(a)*t/.66).addScaledVector(v,Math.sin(a)*t/.55).normalize();
        positions.push(q.x*.704,.65+q.y*.654,q.z*.624);const n=new THREE.Vector3(q.x/.7,q.y/.65,q.z/.62).normalize();normals.push(n.x,n.y,n.z);
        if(ring<5&&j<28){const k=ring*29+j;indices.push(k,k+29,k+1,k+1,k+29,k+30);}
      }
      const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geo.setAttribute('normal',new THREE.Float32BufferAttribute(normals,3));geo.setIndex(indices);add(geo,white);
    }
    eyes(.31,.325,.12,.115);
    if(kind==='golden') {for(const s of [-1,0,1]){tube(yellow,[[s*.2,1.22,0],[s*.25,1.43+(s===0?.1:0),0]],.055);ball(yellow,s*.25,1.44+(s===0?.1:0),0,.085);}}
  } else if (kind === 'banana') {
    const peel=material(0xffd832);
    ball(peel,0,.64,0,.18,.49,.17);
    add(new THREE.CylinderGeometry(.095,.12,.14,24),material(0x9c6b35),0,1.14,0);
    for(let i=0;i<3;i++) {const a=i*Math.PI*2/3,x=Math.sin(a),z=Math.cos(a);
      const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(0,.68,0),new THREE.Vector3(x*.3,.28,z*.3),new THREE.Vector3(x*.66,.17,z*.66),new THREE.Vector3(x*.86,.33,z*.86)]);
      const vertices:number[]=[],indices:number[]=[];
      for(let j=0;j<=24;j++){const t=j/24,p=curve.getPoint(t),width=.04+.18*Math.sin(Math.PI*(.06+t*.92));
        const tangent=curve.getTangent(t),side=new THREE.Vector3(z,0,-x),up=new THREE.Vector3().crossVectors(tangent,side).normalize();
        for(let k=0;k<=12;k++){const a=k/12*Math.PI*2;const q=p.clone().addScaledVector(side,Math.cos(a)*width).addScaledVector(up,Math.sin(a)*.055);vertices.push(q.x,q.y,q.z);
          if(j<24&&k<12){const n=j*13+k;indices.push(n,n+1,n+13,n+1,n+14,n+13);}}
      }
      const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geo.setIndex(indices);geo.computeVertexNormals();add(geo,peel);
      const tip=curve.getPoint(1);ball(peel,tip.x,tip.y,tip.z,.045,.055,.045);
    }
    eyes(.77,.163,.065,.085);
  } else if (kind === 'star' || kind === 'bolt') {
    if(kind==='star') {
      const points=Array.from({length:10},(_,i)=>{const a=i*Math.PI/5,r=i%2?.33:.72;return [Math.sin(a)*r,.73+Math.cos(a)*r];});
      extrude(points,yellow,.28);eyes(.78,.31,.13,.16);
    } else extrude([[.12,1.5],[-.47,.65],[-.06,.65],[-.3,.03],[.54,.92],[.13,.92],[.39,1.5]],yellow,.2);
  } else if (kind === 'bomb') {
    ball(ink,0,.62,0,.55);eyes(.7,.5,.14,.15);
    // White eyes on the dark body, with a brass wind-up key and yellow shoes.
    for(const s of [-1,1]) {ball(white,s*.15,.7,.56,.075,.16,.035);ball(yellow,s*.28,.15,.2,.28,.18,.35);}
    add(new THREE.CylinderGeometry(.14,.18,.15,12),material(0x657087),0,1.15,0);
    tube(material(0xd3a66b),[[0,1.22,0],[.05,1.48,0],[.25,1.5,0]],.045);
    const flame=ball(material(0xff9d26),.26,1.5,0,.12);flame.name='flame';
    // Side-mounted key remains legible in both the race and three-quarter HUD view.
    const keyStem=add(new THREE.CylinderGeometry(.05,.05,.3,16),yellow,.59,.72,-.1);keyStem.rotation.z=Math.PI/2;
    for(const h of [-1,1]){const key=add(new THREE.TorusGeometry(.12,.055,12,24),yellow,.78,.72+h*.13,-.1);key.rotation.y=Math.PI/2;}
  } else if (kind === 'ghost') {
    ball(white,0,.72,0,.62,.62,.5);
    for(const s of [-1,1]){const arm=ball(white,s*.59,.7,.04,.25,.15,.14);arm.rotation.z=s*.65;}
    const tail=ball(white,0,.23,-.29,.26,.2,.32);tail.rotation.x=-.4;
    const mouth=ball(material(0x651b32),0,.55,.475,.29,.23,.075);mouth.name='boo-mouth';
    const tongue=ball(material(0xf06e93),.02,.36,.565,.16,.21,.1);tongue.rotation.x=-.3;
    for(const s of [-1,1]){ball(ink,s*.19,.94,.46,.065,.12,.04);const fang=add(new THREE.ConeGeometry(.055,.16,20),white,s*.17,.64,.56);fang.rotation.z=Math.PI;}
  } else if (kind === 'ink') {
    const mantle=add(new THREE.LatheGeometry([[0,.53],[.25,.55],[.4,.69],[.45,.88],[.4,1.08],[.27,1.3],[.12,1.49],[0,1.58]].map(([r,y])=>new THREE.Vector2(r,y)),40),white);mantle.scale.z=.78;
    ball(ink,0,.8,.3,.34,.15,.04);for(const s of [-1,1])ball(white,s*.13,.81,.34,.075,.11,.025);
    for(let i=0;i<6;i++){const a=i*Math.PI/3;tube(white,[[Math.sin(a)*.23,.55,Math.cos(a)*.19],[Math.sin(a)*.36,.2,Math.cos(a)*.3],[Math.sin(a)*.5,.25,Math.cos(a)*.42]],.085);}
  } else if (kind === 'ride') {
    ball(ink,0,.66,0,.58,.58,1.02);const cuff=add(new THREE.TorusGeometry(.5,.08,8,24),material(0x526071),0,.66,-.72);
    for(const s of [-1,1]){ball(white,s*.3,.86,.85,.19,.18,.055).rotation.y=s*.3;ball(ink,s*.29,.87,.9,.06,.11,.03);ball(white,s*.65,.45,.05,.24,.22,.24);}
    const brow=material(0x0a101a);for(const s of [-1,1]){const b=add(new RoundedBoxGeometry(.35,.09,.08,3,.025),brow,s*.3,1.02,.88);b.rotation.z=-s*.3;}
    const flame=ball(material(0xffad28),0,.66,-1,.35,.35,.5);flame.name='flame';
  } else if (kind === 'coin') {
    const profile=[[0,-.085],[.49,-.085],[.535,-.06],[.55,0],[.535,.06],[.49,.085],[0,.085]].map(([r,y])=>new THREE.Vector2(r,y));
    const coin=add(new THREE.LatheGeometry(profile,48),yellow,0,.65,0);coin.rotation.x=Math.PI/2;
    for(const s of [-1,1]){add(new THREE.TorusGeometry(.44,.035,8,28),material(0xffef8d),0,.65,s*.1);add(new RoundedBoxGeometry(.1,.54,.05,2,.025),material(0xc4820b),0,.65,s*.12);}
  } else if (kind === 'horn') {
    const red=material(0xf04745),brass=material(0xffc832,.22);
    add(new RoundedBoxGeometry(.72,.67,.55,4,.09),red,0,.48,-.12);
    const profile=[[.12,0],[.15,.2],[.23,.36],[.39,.53],[.5,.62],[.51,.66],[.47,.68],[.36,.56],[.2,.38],[.115,.2]].map(([r,y])=>new THREE.Vector2(r,y));
    const bell=add(new THREE.LatheGeometry(profile,40),brass,0,.68,-.03);bell.rotation.x=Math.PI/2;
    ball(ink,0,.68,.17,.12,.12,.025);add(new THREE.TorusGeometry(.49,.035,12,40),brass,0,.68,.63);
    for(const s of [-1,1])for(const t of [-1,1])ball(brass,s*.27,.48+t*.23,.165,.035,.035,.025);
    ball(red,0,.88,-.3,.17,.1,.17);
  } else {
    const fake=kind==='fake';
    const frame=white;
    const glass=material(fake?0xed7796:0x87deeb,.08);glass.transparent=true;glass.opacity=.56;glass.depthWrite=false;
    glass.iridescence=fake?.2:.6;glass.iridescenceIOR=1.25;glass.iridescenceThicknessRange=[100,350];glass.clearcoat=.65;
    add(new RoundedBoxGeometry(1.1,1.1,1.1,5,.14),glass,0,.6,0);
    const edgeMaterials=[material(fake?0xffa4b8:0xb8faff),material(fake?0xff7eab:0xc5b7ff),material(fake?0xffc0b1:0xa7f2d5)];
    for(let axis=0;axis<3;axis++)for(const s of [-1,1])for(const t of [-1,1]) {
      const coords=axis===0?[0,.6+s*.49,t*.49]:axis===1?[s*.49,.6,t*.49]:[s*.49,.6+t*.49,0];
      const dims=axis===0?[1.03,.055,.055]:axis===1?[.055,1.03,.055]:[.055,.055,1.03];
      add(new RoundedBoxGeometry(dims[0],dims[1],dims[2],3,.025),edgeMaterials[axis],coords[0],coords[1],coords[2]);
    }
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
    // All item materials are untextured; custom curved surfaces need no UVs.
    geo.deleteAttribute('uv');
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
