import * as THREE from 'three';
import { RacerConfig } from '../types';
import { applySculptAssets, markSculptSources } from './sculptAssets';
import {surfaceTexture} from './artDirection';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

export const CHARACTER_FOR_TOPPER: Record<string, string> = { cap: 'mario', cat: 'luigi', bow: 'peach', bunny: 'daisy', horns: 'yoshi', antenna: 'toad', crown: 'bowser', bear: 'donkeykong' };

// Shared by the race and offline portrait renderer. Stable toppers preserve existing rooms.
export function createDriver(body: THREE.Group, config: RacerConfig, quality: 'race' | 'portrait' = 'race', sculpted=true): THREE.Group {
  const existingParts=new Set(body.children);
  const materials=new Map<string,THREE.MeshPhysicalMaterial>();
  const who = CHARACTER_FOR_TOPPER[config.topper || 'cap'] || 'mario';
  const mat = (color: THREE.ColorRepresentation, roughness = .48, metalness = 0) => {
    const key=[color,roughness,metalness].join(':');if(materials.has(key))return materials.get(key)!;
    const m = new THREE.MeshPhysicalMaterial({ color, roughness, metalness,clearcoat:metalness>.3?.45:.08,clearcoatRoughness:.4 }); m.userData.preserveShading = true;materials.set(key,m);return m;
  };
  const skin = mat(0xffc59a), white = mat(0xfff9eb,.3), ink = mat(0x171c28,.3), brown = mat(0x4a2416);
  const gold = mat(0xffc52e,.25,.55), red = mat(0xe22c30), green = mat(0x1caa46), blue = mat(0x2452c9);
  for(const cloth of [red,green,blue]){cloth.roughness=.7;cloth.sheen=.22;cloth.sheenColor.copy(cloth.color);cloth.roughnessMap=surfaceTexture('fabric');}
  const sphere = new THREE.SphereGeometry(1,32,24);
  const add = (p: THREE.Group, m: THREE.Material, x: number, y: number, z: number, sx: number, sy: number, sz: number) => {
    const o = new THREE.Mesh(sphere,m); o.position.set(x,y,z); o.scale.set(sx,sy,sz); o.castShadow = o.receiveShadow = true; p.add(o); return o;
  };
  const tube = (p: THREE.Group, m: THREE.Material, pts: number[][], r: number) => {
    const curve = new THREE.CatmullRomCurve3(pts.map(v => new THREE.Vector3(v[0],v[1],v[2])));
    const o = new THREE.Mesh(new THREE.TubeGeometry(curve,quality === 'portrait' ? 20 : 12,r,quality === 'portrait' ? 8 : 6,false),m); o.castShadow = true; p.add(o); return o;
  };
  const shape = (p: THREE.Group, m: THREE.Material, pts: number[][], z: number, depth = .025) => {
    const path = new THREE.Shape(); path.moveTo(pts[0][0],pts[0][1]); pts.slice(1).forEach(v=>path.lineTo(v[0],v[1])); path.closePath();
    const o = new THREE.Mesh(new THREE.ExtrudeGeometry(path,{depth,steps:1,bevelEnabled:true,bevelSegments:3,bevelSize:.008,bevelThickness:.008}),m); o.position.z=z; o.castShadow=true; p.add(o); return o;
  };
  const cone = (p: THREE.Group,m: THREE.Material,x:number,y:number,z:number,r:number,h:number,tilt=0) => {
    const o=new THREE.Mesh(new THREE.ConeGeometry(r,h,16),m); o.position.set(x,y,z); o.rotation.z=tilt; o.castShadow=true; p.add(o); return o;
  };
  const head=new THREE.Group(); head.name=who+'-head'; head.position.set(0,1.05,-.14); body.add(head);
  const eye=(p:THREE.Group,x:number,y:number,z:number,sx=.074,sy=.103,color=0x246dc9)=>{
    add(p,white,x,y,z,sx,sy,.047); add(p,mat(color,.22),x+.005,y,z+.043,sx*.47,sy*.65,.015);
    add(p,ink,x+.006,y,z+.057,sx*.25,sy*.46,.009); add(p,white,x-.005,y+sy*.3,z+.066,sx*.14,sy*.16,.005);
  };
  const smile=(p:THREE.Group,y:number,z:number,w:number)=>tube(p,mat(0x9b3c2d),[[-w,y+.018,z],[-w*.5,y-.015,z+.018],[0,y-.028,z+.024],[w*.6,y-.01,z+.014],[w,y+.025,z]],.009);
  const limbs=(cloth:THREE.Material,glove=white)=>{
    for(const s of [-1,1]){
      add(body,cloth,s*.29,.73,-.02,.13,.19,.14).rotation.z=s*.35;
      add(body,cloth,s*.3,.61,.13,.1,.18,.1).rotation.x=-.85;
      add(body,glove,s*.23,.63,.26,.115,.105,.095); add(body,glove,s*.17,.65,.29,.05,.065,.065);
      add(body,brown,s*.19,.36,.34,.145,.115,.22);
    }
  };
  if(who==='mario'||who==='luigi'){
    const luigi=who==='luigi',shirt=luigi?green:red;
    add(body,shirt,0,.7,-.13,.3,luigi?.34:.29,.24); add(body,blue,0,.5,-.05,.29,.2,.26); add(body,blue,0,.65,.075,.2,.19,.08);
    for(const s of [-1,1]){add(body,blue,s*.17,.77,.055,.05,.18,.055);add(body,gold,s*.17,.7,.125,.039,.041,.016);} limbs(shirt);
    add(head,skin,0,.015,.005,luigi?.29:.32,luigi?.37:.32,.27); add(head,brown,0,.045,-.12,.31,.3,.21);
    for(const s of [-1,1]){
      add(head,skin,s*.14,-.105,.13,.18,.16,.16); add(head,skin,s*.31,-.01,-.005,.085,.115,.068);
      add(head,mat(0xe99573),s*.327,-.012,.038,.04,.065,.022);add(head,brown,s*.248,.035,.095,.045,.1,.065);
      eye(head,s*.105,.09,.235,.074,luigi?.12:.105);
      tube(head,brown,[[s*.045,.218,.245],[s*.105,.245,.23],[s*.17,.215,.215]],.025);
    }
    add(head,skin,0,-.01,.29,luigi?.105:.13,.115,.15);
    const moustache = new THREE.Shape();
    moustache.moveTo(-.21,-.07); moustache.quadraticCurveTo(-.12,-.105,0,-.085); moustache.quadraticCurveTo(.12,-.105,.21,-.07);
    moustache.quadraticCurveTo(.215,-.165,.145,-.145); moustache.quadraticCurveTo(.11,-.195,.07,-.16);
    moustache.quadraticCurveTo(.035,-.195,0,-.16); moustache.quadraticCurveTo(-.035,-.195,-.07,-.16);
    moustache.quadraticCurveTo(-.11,-.195,-.145,-.145); moustache.quadraticCurveTo(-.215,-.165,-.21,-.07);
    const whiskers = new THREE.Mesh(new THREE.ExtrudeGeometry(moustache,{depth:.03,bevelEnabled:true,bevelSegments:3,bevelSize:.009,bevelThickness:.009,curveSegments:12}),brown);
    whiskers.position.z=.267; head.add(whiskers);
    smile(head,-.194,.235,.092);
    add(head,shirt,0,luigi?.34:.31,-.015,.35,.2,.31);add(head,shirt,0,.245,.16,.35,.035,.26);add(head,shirt,0,.23,.21,.34,.017,.23);
    add(head,white,0,.355,.279,.09,.079,.018);
    const emblem=shape(head,shirt,luigi?[[-.031,.348],[-.031,.262],[.034,.262],[.034,.28],[-.01,.28],[-.01,.348]]:[[-.052,.267],[-.052,.342],[-.03,.342],[0,.303],[.03,.342],[.052,.342],[.052,.267],[.032,.267],[.032,.311],[0,.279],[-.032,.311],[-.032,.267]],.3,.006);emblem.position.y=.05;
  }else if(who==='peach'||who==='daisy'){
    const daisy=who==='daisy',hair=mat(daisy?0x9b3f15:0xf6c443),dress=mat(daisy?0xffbb21:0xf27bb4),trim=mat(daisy?0xf37a16:0xd83e86),jewel=mat(daisy?0x26b69a:0x228be4,.12,.2);
    add(body,dress,0,.65,-.13,.3,.34,.25);limbs(dress);for(const s of [-1,1])add(body,dress,s*.27,.82,-.09,.16,.15,.15);
    add(body,trim,0,.57,.08,.25,.13,.11);add(body,gold,0,.70,.13,.074,.095,.035);add(body,jewel,0,.70,.163,.047,.068,.02);
    add(head,hair,0,.015,-.13,.33,.37,.23);
    // One continuous facial surface avoids the protruding separate jaw and nose lobes.
    const faceGeometry = new THREE.SphereGeometry(1,quality === 'portrait' ? 56 : 32,quality === 'portrait' ? 40 : 24);
    const facePositions = faceGeometry.attributes.position;
    for(let i=0;i<facePositions.count;i++){
      const ux=facePositions.getX(i),uy=facePositions.getY(i),uz=facePositions.getZ(i);
      const jawTaper=uy<-.15?1-(-uy-.15)*.18:1;
      const x=ux*.245*jawTaper,y=uy*.255+.02;
      // Small rounded nose, smoothly blended into the bridge and upper cheeks.
      const nose=uz>0?.033*Math.exp(-((x/.035)**2)-(((y+.012)/.045)**2)):0;
      facePositions.setXYZ(i,x,y,uz*.22+.035+nose);
    }
    faceGeometry.computeVertexNormals();
    const face=new THREE.Mesh(faceGeometry,skin);face.name='princess-face';face.castShadow=face.receiveShadow=true;head.add(face);
    for(const s of [-1,1]){
      add(head,hair,s*.257,-.12,-.06,.105,daisy?.23:.36,.14).rotation.z=s*.15;add(head,hair,s*.265,-.31,-.045,.115,.13,.16);
      eye(head,s*.092,.04,.226,.069,.096,daisy?0x20a6b0:0x278dcc);
      tube(head,ink,[[s*.04,.108,.248],[s*.09,.141,.247],[s*.15,.113,.236],[s*.18,.135,.218]],.011);
      tube(head,hair,[[s*.045,.19,.205],[s*.1,.207,.194],[s*.16,.183,.17]],.012);
      add(head,mat(0xf39d9a),s*.156,-.09,.213,.049,.025,.008);add(head,gold,s*.257,-.105,.087,.047,.06,.035);add(head,jewel,s*.257,-.105,.116,.032,.043,.016);
    }
    const lips=mat(0xda4e74);
    add(head,lips,-.012,-.11,.24,.019,.009,.007);add(head,lips,.012,-.11,.24,.019,.009,.007);
    add(head,lips,0,-.123,.238,.026,.007,.006);
    add(head,hair,-.11,.22,.14,.16,.063,.07).rotation.z=-.35;add(head,hair,.115,.215,.13,.15,.073,.07).rotation.z=.45;add(head,hair,.025,.145,.225,.062,.1,.042);
    const crown=new THREE.Mesh(new THREE.CylinderGeometry(.18,.15,.13,16),gold);crown.position.set(0,.34,-.025);head.add(crown);
    for(let i=0;i<5;i++){const a=i*Math.PI*2/5;cone(head,gold,Math.sin(a)*.155,.465,Math.cos(a)*.155-.025,.052,.16);add(head,gold,Math.sin(a)*.155,.547,Math.cos(a)*.155-.025,.024,.024,.024);}
    add(head,mat(0xf13e69,.15,.1),0,.356,.159,.045,.055,.018);
  }else if(who==='toad'){
    add(body,white,0,.64,-.13,.26,.29,.22);for(const s of [-1,1]){add(body,blue,s*.185,.74,-.04,.1,.22,.22);tube(body,gold,[[s*.13,.89,.12],[s*.12,.73,.17],[s*.13,.57,.12]],.016);}limbs(skin,skin);
    add(head,skin,0,-.07,.015,.28,.27,.24);for(const s of [-1,1]){add(head,ink,s*.092,-.045,.243,.026,.066,.012);add(head,white,s*.092-.006,-.02,.255,.008,.015,.005);}smile(head,-.18,.226,.072);
    add(head,white,0,.24,-.025,.48,.34,.41);
    for(const [a,e]of [[0,.2],[Math.PI/2,.45],[-Math.PI/2,.45],[Math.PI,.3],[0,1.2]]){
      const n=new THREE.Vector3(Math.sin(a)*Math.cos(e),Math.sin(e),Math.cos(a)*Math.cos(e));
      const spot=add(head,red,n.x*.474,.24+n.y*.336,-.025+n.z*.406,.145,.145,.018);spot.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),n);
    }
  }else if(who==='yoshi'){
    add(body,green,0,.68,-.15,.31,.33,.27);add(body,white,0,.67,.066,.225,.28,.1);limbs(green,green);
    add(head,green,0,.045,-.045,.28,.34,.24);for(const s of [-1,1]){add(head,green,s*.135,.2,.03,.15,.22,.15);eye(head,s*.124,.21,.151,.082,.129,0x202329);}
    add(head,white,0,-.155,.2,.29,.115,.24);add(head,green,0,-.03,.235,.345,.245,.315);
    for(const s of [-1,1])add(head,mat(0x187b35),s*.12,.045,.513,.026,.018,.009);smile(head,-.2,.34,.2);
    const orange=mat(0xf35d26);for(let i=0;i<3;i++)cone(head,orange,0,.3-i*.17,-.22,.075,.17);
    add(body,red,0,.77,-.365,.23,.1,.16);add(body,green,0,.48,-.42,.17,.14,.32);for(const s of [-1,1])add(body,orange,s*.19,.37,.34,.15,.12,.23);
  }else if(who==='bowser'){
    const yellow=mat(0xe9a52d),muzzle=mat(0xffdb8e),shell=mat(0x238849),orange=mat(0xb83419);
    add(body,yellow,0,.69,-.13,.39,.36,.29);add(body,muzzle,0,.63,.11,.28,.29,.12);limbs(yellow,yellow);add(body,shell,0,.78,-.38,.4,.4,.18);
    for(const s of [-1,1])for(let i=0;i<2;i++)cone(body,white,s*.23,.88-i*.22,-.51,.055,.18,s*.4);
    add(head,yellow,0,0,-.035,.36,.32,.27);add(head,muzzle,0,-.14,.25,.36,.19,.22);add(head,mat(0x69241f),0,-.16,.434,.24,.067,.017);
    for(const s of [-1,1]){
      eye(head,s*.148,.09,.209,.086,.1,0xcd3c21);add(head,orange,s*.15,.184,.225,.14,.049,.055).rotation.z=s*.28;
      cone(head,white,s*.3,.29,-.015,.08,.29,-s*.4);add(head,mat(0x99702f),s*.16,-.045,.424,.026,.019,.012);cone(head,white,s*.175,-.13,.451,.037,.095,Math.PI);
      add(body,ink,s*.32,.58,.13,.135,.075,.12);for(let i=0;i<3;i++)add(body,white,s*.32+Math.sin(i*2)*.09,.61+Math.cos(i*2)*.06,.22,.025,.028,.03);
    }
    for(let i=0;i<5;i++)cone(head,orange,(i-2)*.067,.44-Math.abs(i-2)*.035,-.07,.073,.25,-(i-2)*.15).rotation.x=-.3;
  }else{
    const fur=mat(0x74391c),muzzle=mat(0xe8b780);add(body,fur,0,.67,-.12,.4,.38,.3);add(body,muzzle,0,.67,.13,.27,.29,.1);limbs(fur,fur);
    add(head,fur,0,.03,-.03,.38,.38,.28);
    for(const s of [-1,1]){add(head,fur,s*.34,-.005,-.04,.1,.13,.07);add(head,muzzle,s*.35,0,.012,.05,.07,.025);add(head,muzzle,s*.115,.06,.199,.145,.185,.079);eye(head,s*.12,.08,.26,.066,.082,0x78441f);}
    for(const s of [-1,1])add(head,muzzle,s*.125,.165,.244,.17,.07,.06).rotation.z=s*.16;
    add(head,muzzle,0,-.15,.24,.31,.2,.19);add(head,fur,0,-.045,.4,.105,.059,.035);for(const s of [-1,1])add(head,ink,s*.035,-.053,.431,.016,.012,.008);smile(head,-.22,.38,.18);
    for(let i=0;i<3;i++)cone(head,fur,(i-1)*.085,.415-Math.abs(i-1)*.025,-.06,.09,.21,-(i-1)*.3);
    tube(body,red,[[-.19,.86,.03],[0,.78,.2],[.19,.86,.03]],.034);shape(body,red,[[0,.78],[-.085,.62],[0,.4],[.085,.62]],.225,.018);
  }
  markSculptSources(body,head,who,existingParts);
  if(sculpted)applySculptAssets(body,head,who);
  if(sculpted)for(const parent of [body,head]){
    const batches=new Map<THREE.Material,THREE.BufferGeometry[]>();
    for(const child of [...parent.children]){
      const mesh=child as THREE.Mesh;if(!mesh.isMesh||mesh.name==='princess-face'||existingParts.has(child))continue;
      mesh.updateMatrix();const geo=mesh.geometry.index?mesh.geometry.toNonIndexed():mesh.geometry.clone();geo.applyMatrix4(mesh.matrix);
      const normal=geo.attributes.normal,position=geo.attributes.position,uv=new Float32Array(position.count*2),normals=new Float32Array(position.count*3);
      for(let i=0;i<position.count;i++){normals.set([normal.getX(i),normal.getY(i),normal.getZ(i)],i*3);uv[i*2]=position.getX(i)*2;uv[i*2+1]=position.getY(i)*2;}
      geo.setAttribute('normal',new THREE.BufferAttribute(normals,3));geo.setAttribute('uv',new THREE.BufferAttribute(uv,2));
      const material=mesh.material as THREE.Material;if(!batches.has(material))batches.set(material,[]);batches.get(material)!.push(geo);mesh.removeFromParent();
    }
    for(const [material,parts] of batches){const geo=mergeGeometries(parts);if(!geo)throw new Error('Unable to batch driver sculpt');const mesh=new THREE.Mesh(geo,material);mesh.name=who+'-sculpted-'+(parent===head?'head':'body');mesh.castShadow=mesh.receiveShadow=true;parent.add(mesh);parts.forEach(p=>p.dispose());}
  }
  return head;
}
