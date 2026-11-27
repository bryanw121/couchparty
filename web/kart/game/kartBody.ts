import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { CHARACTER_FOR_TOPPER } from './driverModel';
import { RacerConfig } from '../types';

// Visual bodies use the same wheelbase and attachment points, keeping driving consistent.
export function createKartBody(body: THREE.Group, config: RacerConfig) {
  const character=CHARACTER_FOR_TOPPER[config.topper||'cap']||'mario';
  const royal=character==='peach'||character==='daisy',heavy=character==='bowser'||character==='donkeykong';
  const mat=(color:THREE.ColorRepresentation,roughness=.32,metalness=.15)=>{
    const m=new THREE.MeshStandardMaterial({color,roughness,metalness});m.userData.preserveShading=true;return m;
  };
  const paint=mat(config.color),cream=mat(0xfff4de),dark=mat(0x202634,.66,.05),chrome=mat(0xc7deeb,.2,.7),gold=mat(0xffc642,.25,.6);
  const secondary=mat(character==='mario'||character==='luigi'?0x2855ce:character==='toad'?0xf0443e:character==='yoshi'?0xfff3cf:character==='bowser'?0x288c4c:character==='donkeykong'?0x9d5d28:0xffd875);
  const trim=royal?gold:chrome;
  const sphere=new THREE.SphereGeometry(1,20,14);
  function mesh(geometry:THREE.BufferGeometry,m:THREE.Material,x:number,y:number,z:number){const o=new THREE.Mesh(geometry,m);o.position.set(x,y,z);o.castShadow=o.receiveShadow=true;body.add(o);return o;}
  function rounded(m:THREE.Material,x:number,y:number,z:number,w:number,h:number,d:number,r=.08){return mesh(new RoundedBoxGeometry(w,h,d,2,Math.min(r,h/2-.001,w/2-.001,d/2-.001)),m,x,y,z);}
  function ellipsoid(m:THREE.Material,x:number,y:number,z:number,sx:number,sy:number,sz:number){const o=mesh(sphere,m,x,y,z);o.scale.set(sx,sy,sz);return o;}
  const floor=rounded(dark,0,.23,0,1.25,.14,2.35,.06);floor.name='chassis';
  // A rounded cockpit with flared pods, a padded seat and a separate front fairing.
  rounded(paint,0,.38,-.24,1.12,.28,1.52,.13);
  const seat=rounded(dark,0,.67,-.39,.62,.64,.2,.085);seat.rotation.x=.12;
  rounded(secondary,0,.83,-.45,.5,.19,.12,.05);
  for(const s of [-1,1]){
    const pod=ellipsoid(secondary,s*.64,.4,-.12,.22,heavy?.25:.19,.71);pod.name='side-pod';
    rounded(trim,s*.68,.36,-.08,.075,.065,1.03,.03);
    // Rear fenders follow the wheel arc rather than covering it with rectangular blocks.
    const fender=mesh(new THREE.TorusGeometry(.37,.075,8,20,Math.PI),paint,s*.77,.34,-.85);fender.rotation.y=Math.PI/2;
  }
  const hood=ellipsoid(paint,0,.43,.77,heavy?.62:.55,royal?.23:.21,character==='luigi'?.68:.6);hood.name='hood';
  const hoodSpot=(m:THREE.Material,x:number,z:number,radius:number)=>{
    const n=new THREE.Vector3((x-hood.position.x)/hood.scale.x,0,(z-hood.position.z)/hood.scale.z);n.y=Math.sqrt(Math.max(0,1-n.x*n.x-n.z*n.z));
    const u=new THREE.Vector3(1,0,0).addScaledVector(n,-n.x).normalize(),v=n.clone().cross(u).normalize();
    const positions:number[]=[],indices:number[]=[];
    const put=(direction:THREE.Vector3)=>positions.push(hood.position.x+direction.x*(hood.scale.x+.003),hood.position.y+direction.y*(hood.scale.y+.003),hood.position.z+direction.z*(hood.scale.z+.003));
    put(n);
    for(let ring=1;ring<=3;ring++)for(let i=0;i<20;i++){const a=i*Math.PI/10,t=radius/Math.min(hood.scale.x,hood.scale.z)*ring/3;put(n.clone().multiplyScalar(Math.cos(t)).addScaledVector(u,Math.cos(a)*Math.sin(t)).addScaledVector(v,Math.sin(a)*Math.sin(t)));}
    for(let i=0;i<20;i++)indices.push(0,1+i,1+(i+1)%20);
    for(let ring=1;ring<3;ring++)for(let i=0;i<20;i++){const a=1+(ring-1)*20+i,b=1+(ring-1)*20+(i+1)%20,c=1+ring*20+i,d=1+ring*20+(i+1)%20;indices.push(a,c,d,a,d,b);}
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geo.setIndex(indices);geo.computeVertexNormals();mesh(geo,m,0,0,0);
  };
  if(character==='toad'){
    hood.material=cream;
    for(const [x,z,r]of [[0,.9,.16],[-.3,.64,.105],[.3,.64,.105]])hoodSpot(secondary,x,z,r);
  }else if(character==='yoshi'){
    hood.material=cream;hood.scale.set(.54,.32,.61);hood.position.y=.46;
    for(const [x,z,r]of [[0,.88,.16],[-.28,.64,.11],[.27,.61,.1]])hoodSpot(paint,x,z,r);
  }else if(character==='bowser'){
    hood.material=secondary;hood.scale.set(.62,.3,.59);
    for(const s of [-1,1])for(const z of [.6,1.03]){const spike=mesh(new THREE.ConeGeometry(.075,.22,12),cream,s*.39,.7,z);spike.rotation.z=-s*.3;}
    rounded(gold,0,.36,1.35,1.36,.16,.15,.07);
  }else if(character==='donkeykong'){
    hood.visible=false;
    const wood=mat(0x995328,.55,.02),hoop=mat(0x432919,.45,.15);
    const barrel=mesh(new THREE.CylinderGeometry(.49,.49,.91,16),wood,0,.43,.79);barrel.rotation.x=Math.PI/2;barrel.scale.z=.64;
    for(const z of [.39,.53,1.05,1.19]){const band=mesh(new THREE.TorusGeometry(.492,.029,6,24),hoop,0,.43,z);band.scale.y=.64;}
    for(let i=0;i<10;i++){const a=i*Math.PI*2/10;rounded(hoop,Math.sin(a)*.49,.43+Math.cos(a)*.49*.64,.8,.015,.018,.68,.006);}
  }
  // Chunky bumpers, small headlights, grille slats and a bright waist stripe.
  if(character!=='bowser')rounded(trim,0,.25,1.27,1.4,.16,.25,.07);
  rounded(dark,0,.39,1.3,.54,.15,.035,.015);
  for(let i=-2;i<=2;i++)rounded(chrome,i*.095,.39,1.324,.025,.1,.012,.005);
  for(const s of [-1,1]){
    const surround=ellipsoid(trim,s*.48,.49,1.17,.105,.09,.046);surround.rotation.y=s*.15;
    ellipsoid(cream,s*.48,.49,1.212,.073,.06,.025);
    ellipsoid(mat(0xf44945),s*.49,.51,-1.08,.085,.046,.033);
  }
  // Visible engine ribs and flared exhaust tips; the effect anchors remain fixed.
  rounded(dark,0,.44,-.88,.61,.34,.54,.07);
  for(let i=0;i<5;i++)rounded(chrome,0,.44+i*.052,-.9,.66,.018,.48,.007);
  for(const s of [-1,1]){
    const pipe=mesh(new THREE.CylinderGeometry(.08,.065,.41,12),chrome,s*.24,.38,-1.24);pipe.rotation.x=Math.PI/2;
    const opening=mesh(new THREE.CircleGeometry(.058,12),dark,s*.24,.38,-1.45);opening.rotation.y=Math.PI;
  }
  const wingY=royal?1.0:heavy?.88:.81;
  for(const s of [-1,1])rounded(trim,s*.39,wingY-.18,-1.04,.055,.34,.06,.02);
  const wing=rounded(royal?paint:secondary,0,wingY,-1.06,heavy?1.62:1.43,.095,.35,.04);wing.name='rear-wing';
  for(const s of [-1,1])rounded(paint,s*(heavy?.79:.69),wingY+.035,-1.06,.07,.22,.37,.025);
  if(character==='bowser')for(const x of [-.5,0,.5])mesh(new THREE.ConeGeometry(.065,.2,12),cream,x,wingY+.14,-1.06);
  if(character==='peach'||character==='daisy'){
    for(const s of [-1,1])ellipsoid(gold,s*.63,wingY+.14,-1.04,.047,.047,.047);
  }
  // Raised identity badges are meshes, so they stay crisp without canvas textures.
  const emblem=new THREE.Group();emblem.name=character+'-emblem';emblem.position.set(0,.61,1.02);emblem.rotation.x=-.7;body.add(emblem);
  if(character==='donkeykong'){emblem.position.set(0,.56,1.29);emblem.rotation.x=0;}
  const badge=(geo:THREE.BufferGeometry,m:THREE.Material,x=0,y=0,z=0)=>{const o=new THREE.Mesh(geo,m);o.position.set(x,y,z);o.castShadow=true;emblem.add(o);return o;};
  const disk=badge(new THREE.CylinderGeometry(.18,.18,.025,24),royal?gold:cream);disk.rotation.x=Math.PI/2;
  const glyph=(points:number[][],m=paint)=>{const p=new THREE.Shape();p.moveTo(points[0][0],points[0][1]);points.slice(1).forEach(v=>p.lineTo(v[0],v[1]));p.closePath();badge(new THREE.ExtrudeGeometry(p,{depth:.015,bevelEnabled:true,bevelSegments:2,bevelSize:.003,bevelThickness:.003}),m,0,0,.02);};
  if(character==='mario')glyph([[-.09,-.09],[-.09,.09],[-.05,.09],[0,.015],[.05,.09],[.09,.09],[.09,-.09],[.05,-.09],[.05,.02],[0,-.045],[-.05,.02],[-.05,-.09]]);
  else if(character==='luigi')glyph([[-.06,.1],[-.06,-.09],[.07,-.09],[.07,-.05],[-.015,-.05],[-.015,.1]]);
  else if(character==='peach')glyph([[-.12,-.06],[-.13,.07],[-.055,.015],[0,.12],[.055,.015],[.13,.07],[.12,-.06]],mat(0xdc468c));
  else if(character==='daisy'){
    for(let i=0;i<6;i++){const a=i*Math.PI/3;const petal=badge(new THREE.SphereGeometry(.052,10,8),cream,Math.sin(a)*.077,Math.cos(a)*.077,.035);petal.scale.z=.3;}
    const center=badge(new THREE.SphereGeometry(.047,10,8),paint,0,0,.055);center.scale.z=.3;
  }else if(character==='toad'){
    const mushroom=badge(new THREE.SphereGeometry(.113,16,10,0,Math.PI*2,0,Math.PI/2),secondary,0,-.015,.025);mushroom.rotation.x=Math.PI/2;
    const stalk=badge(new RoundedBoxGeometry(.075,.085,.025,1,.015),cream,0,-.07,.035);stalk.name='mushroom-stem';
  }else if(character==='yoshi'){
    const egg=badge(new THREE.SphereGeometry(.105,14,10),cream,0,0,.035);egg.scale.set(.8,1,.2);
    const spot=badge(new THREE.SphereGeometry(.035,10,8),paint,.025,.02,.06);spot.scale.z=.25;
  }else if(character==='bowser')glyph([[-.1,-.09],[-.12,.03],[-.055,.02],[-.04,.1],[0,.035],[.04,.1],[.055,.02],[.12,.03],[.1,-.09]],secondary);
  else glyph([[-.065,.105],[-.065,-.015],[-.115,-.105],[-.055,-.105],[0,-.05],[.055,-.105],[.115,-.105],[.065,-.015],[.065,.105]],mat(0xd52f28));
  // Race-number plate on the rear, separate from the character's identity badge.
  const plate=new THREE.Group();plate.position.set(0,.59,-1.185);plate.rotation.y=Math.PI;body.add(plate);
  const plateBase=new THREE.Mesh(new RoundedBoxGeometry(.25,.18,.024,1,.02),cream);plate.add(plateBase);
  const segments:Record<number,number[]>={1:[1,2],2:[0,1,6,4,3],3:[0,1,6,2,3],4:[5,6,1,2],5:[0,5,6,2,3],6:[0,5,6,4,2,3],7:[0,1,2],8:[0,1,2,3,4,5,6],9:[0,1,2,3,5,6],0:[0,1,2,3,4,5]};
  const positions=[[0,.06],[.04,.03],[.04,-.03],[0,-.06],[-.04,-.03],[-.04,.03],[0,0]];
  for(const i of segments[config.number%10]||segments[0]){const horiz=i===0||i===3||i===6;const o=new THREE.Mesh(new THREE.BoxGeometry(horiz?.055:.012,horiz?.012:.045,.008),dark);o.position.set(positions[i][0],positions[i][1],.018);plate.add(o);}
  body.userData.character=character;
  return { paint,secondary,dark,chrome,trim,character,heavy };
}
