import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { CHARACTER_FOR_TOPPER } from './driverModel';
import { RacerConfig } from '../types';

// Visual bodies use the same wheelbase and attachment points, keeping driving consistent.
export function createKartBody(body: THREE.Group, config: RacerConfig) {
  const character=CHARACTER_FOR_TOPPER[config.topper||'cap']||'ace';
  const royal=character==='duke'||character==='lulu',heavy=character==='grizz'||character==='rex';
  const mat=(color:THREE.ColorRepresentation,roughness=.32,metalness=.15)=>{
    const m=new THREE.MeshStandardMaterial({color,roughness,metalness});m.userData.preserveShading=true;return m;
  };
  const paint=mat(config.color),cream=mat(0xfff4de),dark=mat(0x202634,.66,.05),chrome=mat(0xc7deeb,.2,.7),gold=mat(0xffc642,.25,.6);
  const secondary=mat(({tabby:0xfff0d8,bunbun:0xffffff,duke:0xffd34d,rex:0xf4e7a1,lulu:0xffffff,zippy:0x2b3448,ace:0x2f5fe0,grizz:0xe8c79b} as Record<string,number>)[character]??0xffffff);
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
  const hood=ellipsoid(paint,0,.43,.77,heavy?.62:.55,royal?.23:.21,character==='zippy'?.66:.6);hood.name='hood';
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
  if(character==='tabby'||character==='grizz'){
    // Paw print on the hood.
    hoodSpot(secondary,0,.74,.13);for(const [x,z]of [[-.17,.96],[0,1.02],[.17,.96]])hoodSpot(secondary,x,z,.065);
  }else if(character==='bunbun'||character==='lulu'){
    for(const [x,z]of [[-.3,.62],[.3,.62],[0,.95],[-.22,1.0],[.22,1.0],[0,.6]])hoodSpot(secondary,x,z,.06);
  }else if(character==='rex'){
    hood.material=secondary;
    for(let i=0;i<4;i++){const fin=mesh(new THREE.ConeGeometry(.09,.22,4),paint,0,.66-i*.02,.42+i*.2);fin.scale.z=.35;}
  }else if(character==='zippy'){
    for(const s of [-1,1])for(const z of [.45,.75,1.05])hoodSpot(chrome,s*.32,z,.035);
  }else if(character==='ace'){
    for(const z of [.5,.72,.94])for(const s of [-1,1])hoodSpot(secondary,s*.13,z,.08);
  }else if(character==='duke'){
    for(const [x,z]of [[-.3,.6],[.3,.6],[0,.98]])hoodSpot(gold,x,z,.07);
  }
  // Chunky bumpers, small headlights, grille slats and a bright waist stripe.
  rounded(trim,0,.25,1.27,1.4,.16,.25,.07);
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
  if(character==='rex')for(const x of [-.5,0,.5])mesh(new THREE.ConeGeometry(.065,.2,12),cream,x,wingY+.14,-1.06);
  if(royal){
    for(const s of [-1,1])ellipsoid(gold,s*.63,wingY+.14,-1.04,.047,.047,.047);
  }
  // Raised identity badges are meshes, so they stay crisp without canvas textures.
  const emblem=new THREE.Group();emblem.name=character+'-emblem';emblem.position.set(0,.61,1.02);emblem.rotation.x=-.7;body.add(emblem);
  const badge=(geo:THREE.BufferGeometry,m:THREE.Material,x=0,y=0,z=0)=>{const o=new THREE.Mesh(geo,m);o.position.set(x,y,z);o.castShadow=true;emblem.add(o);return o;};
  const disk=badge(new THREE.CylinderGeometry(.18,.18,.025,24),royal?gold:cream);disk.rotation.x=Math.PI/2;
  const glyph=(points:number[][],m=paint)=>{const p=new THREE.Shape();p.moveTo(points[0][0],points[0][1]);points.slice(1).forEach(v=>p.lineTo(v[0],v[1]));p.closePath();badge(new THREE.ExtrudeGeometry(p,{depth:.015,bevelEnabled:true,bevelSegments:2,bevelSize:.003,bevelThickness:.003}),m,0,0,.02);};
  const dot=(x:number,y:number,r:number,m:THREE.Material=paint)=>{const o=badge(new THREE.SphereGeometry(r,12,8),m,x,y,.03);o.scale.z=.3;};
  if(character==='tabby'||character==='grizz'){dot(0,-.03,.06);for(const [x,y]of [[-.075,.055],[0,.085],[.075,.055]])dot(x,y,.03);}
  else if(character==='bunbun'){glyph([[0,-.11],[-.04,.04],[.04,.04]],mat(0xff8a1f));for(const s of [-1,0,1])glyph([[s*.03,.04],[s*.05+.0,.11],[s*.03+.012,.04]],mat(0x3fbf74));}
  else if(character==='duke')glyph([[-.11,-.07],[-.11,.06],[-.055,.0],[0,.09],[.055,.0],[.11,.06],[.11,-.07]],mat(0x8b5cf6));
  else if(character==='rex'){dot(0,-.035,.055);for(const [x,y]of [[-.065,.05],[0,.075],[.065,.05]]){const c=badge(new THREE.ConeGeometry(.025,.07,8),paint,x,y,.03);c.rotation.z=-x*4;}}
  else if(character==='lulu'){const h=new THREE.Shape();h.moveTo(0,-.09);h.bezierCurveTo(-.13,-.01,-.09,.1,0,.045);h.bezierCurveTo(.09,.1,.13,-.01,0,-.09);badge(new THREE.ExtrudeGeometry(h,{depth:.015,bevelEnabled:true,bevelSegments:2,bevelSize:.003,bevelThickness:.003}),mat(0xe83f6f),0,0,.02);}
  else if(character==='zippy')glyph([[.03,.11],[-.07,-.01],[-.005,-.01],[-.03,-.11],[.07,.02],[.005,.02]],mat(0x2fb8e0));
  else{const st:number[][]=[];for(let i=0;i<10;i++){const r=i%2?.045:.1,a=i*Math.PI/5;st.push([Math.sin(a)*r,Math.cos(a)*r]);}glyph(st,secondary);}
  // Race-number plate on the rear, separate from the character's identity badge.
  const plate=new THREE.Group();plate.position.set(0,.59,-1.185);plate.rotation.y=Math.PI;body.add(plate);
  const plateBase=new THREE.Mesh(new RoundedBoxGeometry(.25,.18,.024,1,.02),cream);plate.add(plateBase);
  const segments:Record<number,number[]>={1:[1,2],2:[0,1,6,4,3],3:[0,1,6,2,3],4:[5,6,1,2],5:[0,5,6,2,3],6:[0,5,6,4,2,3],7:[0,1,2],8:[0,1,2,3,4,5,6],9:[0,1,2,3,5,6],0:[0,1,2,3,4,5]};
  const positions=[[0,.06],[.04,.03],[.04,-.03],[0,-.06],[-.04,-.03],[-.04,.03],[0,0]];
  for(const i of segments[config.number%10]||segments[0]){const horiz=i===0||i===3||i===6;const o=new THREE.Mesh(new THREE.BoxGeometry(horiz?.055:.012,horiz?.012:.045,.008),dark);o.position.set(positions[i][0],positions[i][1],.018);plate.add(o);}
  body.userData.character=character;
  return { paint,secondary,dark,chrome,trim,character,heavy };
}
