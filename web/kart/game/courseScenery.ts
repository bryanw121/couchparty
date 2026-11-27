import * as THREE from 'three';
import { TrackSystem } from './track';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export function courseTree(id:string,scale:number){
  const g=new THREE.Group();g.scale.setScalar(scale);
  const material=(color:number,glow=false)=>new THREE.MeshStandardMaterial({color,roughness:.7,emissive:glow?color:0,emissiveIntensity:.5});
  const add=(geo:THREE.BufferGeometry,m:THREE.Material,x:number,y:number,z:number)=>{const o=new THREE.Mesh(geo,m);o.position.set(x,y,z);g.add(o);return o;};
  if(id==='sunset'){
    add(new THREE.CylinderGeometry(.35,.6,7,8),material(0x9b643e),0,3.5,0).rotation.z=.1;
    const leaves=material(0x28ac7d);
    for(let i=0;i<6;i++){const a=i*Math.PI/3,o=add(new THREE.SphereGeometry(1,10,6),leaves,Math.sin(a)*2,7,Math.cos(a)*2);o.scale.set(.75,.25,3);o.rotation.y=a;}
  }else if(id==='frosty'){
    add(new THREE.CylinderGeometry(.3,.5,3,7),material(0x715748),0,1.5,0);
    const green=material(0x408d83),snow=material(0xf1fbff);
    for(let i=0;i<3;i++){add(new THREE.ConeGeometry(2.7-i*.6,4,10),green,0,3.8+i*1.5,0);add(new THREE.ConeGeometry(2.5-i*.6,2.5,10),snow,0,4.8+i*1.5,0);}
  }else{
    add(new THREE.CylinderGeometry(.2,.28,8,8),material(0x29385d),0,4,0);
    const ring=add(new THREE.TorusGeometry(1.1,.16,6,14),material(0x39dfe9,true),0,7.6,0);ring.rotation.x=Math.PI/2;
    add(new THREE.SphereGeometry(.5,10,8),material(0xff6bd8,true),0,8,0);
  }
  return g;
}

// Fixed landmarks give each course its own identity. No collision geometry touches the road.
export function addCourseScenery(track: TrackSystem) {
  const root=new THREE.Group();root.name='course-landmarks-'+track.course.id;track.sceneryGroup.add(root);
  const mat=(color:number,glow=false)=>{const m=new THREE.MeshStandardMaterial({color,roughness:.65,emissive:glow?color:0,emissiveIntensity:glow?.55:0});m.userData.preserveShading=true;return m;};
  const cream=mat(0xffefd6),gold=mat(0xffcd56),wood=mat(0x9b5c37),red=mat(0xf26a77),snow=mat(0xf3fbff),navy=mat(0x192c53);
  function add(p:THREE.Group,geo:THREE.BufferGeometry,m:THREE.Material,x:number,y:number,z:number){const o=new THREE.Mesh(geo,m);o.position.set(x,y,z);o.castShadow=o.receiveShadow=true;p.add(o);return o;}
  const box=(p:THREE.Group,m:THREE.Material,x:number,y:number,z:number,w:number,h:number,d:number)=>add(p,new THREE.BoxGeometry(w,h,d),m,x,y,z);
  const ball=(p:THREE.Group,m:THREE.Material,x:number,y:number,z:number,r:number)=>add(p,new THREE.SphereGeometry(r,14,10),m,x,y,z);
  function clear(x:number,z:number,r:number){
    if(track.trackPoints.some(p=>Math.hypot(p.x-x,p.z-z)<track.roadWidth/2+r+4))return false;
    const s=track.shortcut;
    if(s){const dx=s.bx-s.ax,dz=s.bz-s.az,t=Math.max(0,Math.min(1,((x-s.ax)*dx+(z-s.az)*dz)/(dx*dx+dz*dz)));if(Math.hypot(x-s.ax-dx*t,z-s.az-dz*t)<s.w/2+r+4)return false;}
    return true;
  }
  function site(name:string,x:number,z:number,r:number){
    if(!clear(x,z,r))return null;
    const g=new THREE.Group();g.name=name;g.position.set(x,track.getTerrainElevation(x,z),z);g.userData.clearanceRadius=r;root.add(g);return g;
  }
  function flag(p:THREE.Group,x:number,y:number,z:number,color:THREE.Material){
    add(p,new THREE.CylinderGeometry(.12,.12,5,6),gold,x,y+2.5,z);
    const shape=new THREE.Shape();shape.moveTo(0,0);shape.lineTo(2.4,-.6);shape.lineTo(0,-1.2);shape.closePath();
    const m=color.clone();m.side=THREE.DoubleSide;add(p,new THREE.ShapeGeometry(shape),m,x,y+4.8,z);
  }
  function tower(p:THREE.Group,x:number,z:number,height:number){
    add(p,new THREE.CylinderGeometry(3.2,3.5,height,16),cream,x,height/2,z);
    add(p,new THREE.ConeGeometry(4.2,6.2,16),red,x,height+3,z);
    add(p,new THREE.TorusGeometry(3.4,.25,6,16),gold,x,height-.6,z).rotation.x=Math.PI/2;
    for(let i=0;i<3;i++)box(p,navy,x-1.5+i*1.5,height*.6,z+3.16,.7,1.8,.12);
    flag(p,x,height+5.8,z,red);
  }
  function palm(p:THREE.Group,x:number,z:number,scale=1){
    const g=new THREE.Group();g.position.set(x,0,z);g.scale.setScalar(scale);p.add(g);
    const stem=add(g,new THREE.CylinderGeometry(.4,.7,9,9),wood,0,4.5,0);stem.rotation.z=-.12;
    const leaves=mat(0x26a87f);
    for(let i=0;i<7;i++){const a=i*Math.PI*2/7;const leaf=ball(g,leaves,Math.sin(a)*2.6,8.5,Math.cos(a)*2.6,1);leaf.scale.set(.9,.3,3.8);leaf.rotation.y=a;leaf.rotation.x=.18;}
    for(let i=0;i<3;i++)ball(g,wood,Math.sin(i*2)*.6,7.9,Math.cos(i*2)*.6,.4);
  }
  function fir(p:THREE.Group,x:number,z:number,scale=1){
    const g=new THREE.Group();g.position.set(x,0,z);g.scale.setScalar(scale);p.add(g);add(g,new THREE.CylinderGeometry(.35,.55,3,8),wood,0,1.5,0);
    for(let i=0;i<3;i++){add(g,new THREE.ConeGeometry(3-i*.65,4.5,10),mat(0x367d78),0,4+i*1.6,0);add(g,new THREE.ConeGeometry(2.8-i*.65,2.7,10),snow,0,5.1+i*1.6,0);}
  }
  const id=track.course.id;
  // A continuous village district follows the road, so houses read from the kart camera.
  // Rotating each facade toward the road makes shops visible from either racing direction.
  const towns: THREE.Group[] = [];
  function shop(p:THREE.Group, index:number, mushroom=false) {
    const walls=mat([0xffe5a8,0xf9b6c8,0xa3e4d2,0xa9c9f3][index%4]);
    const roof=mat(id==='frosty'?0xe9f8ff:[0xe95064,0x51a2cd,0xf4ab42,0x9162c5][index%4]);
    const window=mat(id==='neon'?0x61ebf4:0xffd77d,id==='neon'||id==='frosty');
    const dark=mat(0x3c536b),leaf=mat(0x299e67);
    box(p,cream,0,.4,0,10,.8,9);
    if(mushroom) {
      add(p,new THREE.CylinderGeometry(3.8,4,6.5,20),walls,0,3.8,0);
      const cap=add(p,new THREE.SphereGeometry(5.4,24,12,0,Math.PI*2,0,Math.PI/2),roof,0,7,0);cap.scale.y=.6;
      add(p,new THREE.CylinderGeometry(5.4,5.3,.35,24),cream,0,7,0);
      for(let n=0;n<7;n++){const a=n*Math.PI*2/7;const spot=ball(p,snow,Math.sin(a)*4.05,8.98,Math.cos(a)*4.05,.92);spot.scale.y=.2;spot.rotation.z=-Math.sin(a)*.35;spot.rotation.x=Math.cos(a)*.35;}
      ball(p,snow,0,10.22,0,1.1).scale.y=.18;
      for(const side of [-1,1]){const pane=add(p,new THREE.CircleGeometry(.85,20),window,side*2.2,4.6,3.5);pane.rotation.y=side*.25;
        const frame=add(p,new THREE.TorusGeometry(.85,.11,6,20),cream,side*2.2,4.6,3.55);frame.rotation.y=side*.25;}
      box(p,dark,0,2,4,1.7,3,.2);
    } else {
      box(p,walls,0,4,0,8,7,7);
      box(p,cream,0,3.8,3.6,8.3,.35,.3);
      const shape=new THREE.Shape();shape.moveTo(-4.8,0);shape.lineTo(0,3);shape.lineTo(4.8,0);shape.closePath();
      add(p,new THREE.ExtrudeGeometry(shape,{depth:8.5,bevelEnabled:false}),roof,0,7.4,-4.25);
      box(p,wood,2.3,9,-1,1.1,2.6,1.1);box(p,cream,2.3,10.3,-1,1.4,.3,1.4);
      for(const x of [-2.3,2.3]) for(const y of [2.2,5.6]) {
        box(p,cream,x,y,3.6,1.8,2,.25);box(p,window,x,y,3.75,1.4,1.55,.08);
        box(p,cream,x,y,3.81,.1,1.6,.08);box(p,cream,x,y,3.82,1.4,.1,.08);
      }
      box(p,dark,0,1.95,3.65,1.6,2.9,.2);ball(p,gold,.5,1.7,3.8,.1);
      // Striped shop awning, balcony rails, flower boxes and a paved doorstep.
      for(let stripe=0;stripe<8;stripe++) {const a=box(p,stripe%2?cream:roof,-3.5+stripe,3.3,4.3,1,.16,1.8);a.rotation.x=.15;box(p,stripe%2?cream:roof,-3.5+stripe,3.05,5.15,1,.45,.12);}
      box(p,wood,0,4.5,4.05,7.3,.22,1);box(p,cream,0,5.15,4.6,7.4,.12,.12);
      for(let b=0;b<10;b++)box(p,cream,-3.5+b*.78,4.8,4.6,.1,.7,.1);
    }
    box(p,cream,0,.2,5.8,3,.4,2);
    box(p,mat(id==='frosty'?0xd5e8f4:0xd9ceba),0,.06,7.5,14,.12,4);
    for(const side of [-1,1]) {
      box(p,cream,side*6.6,1.5,0,.14,.16,7);
      for(let post=0;post<5;post++)box(p,cream,side*6.6,.9,-3+post*1.5,.16,1.8,.16);
    }
    for(const x of [-4.2,4.2]){box(p,wood,x,.85,4,1.1,.9,1.1);ball(p,leaf,x,1.5,4,.8);for(let f=0;f<3;f++)ball(p,roof,x+(f-1)*.4,1.9,4,.23);}
    // Mushroom residents make the shopping streets feel like a place, even from split-screen.
    for(const side of [-1,1]) {
      const x=side*4.8,z=8.4,cap=mat(side<0?0xe8474e:0x3486d3);
      ball(p,cream,x,1.25,z,.42,.45,.38);ball(p,cap,x,1.7,z,.72,.38,.6);
      ball(p,snow,x,1.9,z+.46,.23).scale.z=.12;
      box(p,side<0?red:navy,x,.65,z,.65,.65,.5);
      for(const s of [-1,1]){ball(p,wood,x+s*.22,.23,z+.12,.25).scale.y=.5;ball(p,navy,x+s*.13,1.3,z+.36,.055).scale.y=1.7;}
    }
  }
  const fractions=[.075,.095,.115,.135,.155,.175,.195,.215,.55,.575,.6,.625,.65,.675];
  for(const [index,f]of fractions.entries())for(const side of [-1,1]) {
    const p=track.trackPoints[Math.floor(f*track.trackPoints.length)];
    const x=p.x+p.normalX*31*side,z=p.z+p.normalZ*31*side;
    const town=site(id+'-village-house',x,z,12);if(!town)continue;
    town.rotation.y=Math.atan2(p.x-x,p.z-z);towns.push(town);
    shop(town,index,id==='meadow'&&index%3!==0);
    if(index===8&&side===1) {
      town.name=id+'-clock-tower';
      box(town,cream,0,12,0,4.5,8,4.5);
      add(town,new THREE.ConeGeometry(3.8,4.5,4),red,0,18,0).rotation.y=Math.PI/4;
      add(town,new THREE.CircleGeometry(1.45,24),navy,0,13.6,2.3);
      add(town,new THREE.CircleGeometry(1.25,24),snow,0,13.6,2.32);
      box(town,navy,0,14,2.35,.12,.85,.1);const hand=box(town,navy,.3,13.6,2.36,.7,.12,.1);hand.rotation.z=-.25;
    }
    if(id==='frosty')fir(town,7,-4,.8);
  }
  // Street lamps, flower planters and pennants fill the gap between road and town.
  for(let i=12;i<track.trackPoints.length;i+=13)for(const side of [-1,1]) {
    const p=track.trackPoints[i],x=p.x+p.normalX*17*side,z=p.z+p.normalZ*17*side;
    const lamp=site('village-street-lamp',x,z,1.8);if(!lamp)continue;
    add(lamp,new THREE.CylinderGeometry(.16,.25,6.7,8),wood,0,3.35,0);
    ball(lamp,mat(id==='neon'?0x5fedff:0xffe8a6,true),0,6.7,0,.62);
    add(lamp,new THREE.ConeGeometry(.85,.55,10),id==='neon'?navy:red,0,7.45,0);
    const pennant=new THREE.Shape();pennant.moveTo(0,0);pennant.lineTo(2,-.8);pennant.lineTo(0,-1.6);pennant.closePath();
    const banner=mat(id==='neon'?0xf45bce:0xef748b);banner.side=THREE.DoubleSide;add(lamp,new THREE.ShapeGeometry(pennant),banner,0,5.8,0);
  }
  root.userData.townBuildings=towns.length;
  for(let i=0;i<14;i++) {
    const a=i*Math.PI*2/14,x=Math.sin(a)*260,z=Math.cos(a)*260;
    const horizon=site('course-skyline',x,z,26);if(!horizon)continue;
    const h=30+i%4*12;
    if(id==='neon') {
      box(horizon,navy,0,h/2,0,20,h,18);
      for(let floor=5;floor<h;floor+=5)for(let col=-1;col<=1;col++)box(horizon,mat(0x55ddeb,true),col*5,floor,9.1,2.5,1.5,.15);
      box(horizon,mat(0xff66db,true),0,h,0,21,.6,19);
    } else if(id==='frosty') {
      add(horizon,new THREE.ConeGeometry(25,h,7),mat(0x94b5d6),0,h/2,0);
      add(horizon,new THREE.ConeGeometry(15,h*.6,7),snow,0,h*.7,0);
    } else {
      const hill=ball(horizon,mat(id==='sunset'?0xd9b67c:[0x45b85b,0x77cb61,0x319e62][i%3]),0,h*.25,0,1);hill.scale.set(25,h,22);
      if(id==='meadow')for(const side of [-1,1]){const eye=ball(horizon,navy,side*4,h*.7,20,.9);eye.scale.y=3;}
    }
  }
  if(id==='meadow'){
    const castle=site('garden-castle',55,-48,21);
    if(castle){
      box(castle,cream,0,5,0,24,10,14);box(castle,red,0,11,0,21,2,13);
      for(const x of [-11,11])for(const z of [-6,6])tower(castle,x,z,13+(z<0?3:0));
      const door=add(castle,new THREE.CylinderGeometry(2.3,2.3,.3,20,1,false,0,Math.PI),navy,0,4,7.2);door.rotation.z=Math.PI/2;
      box(castle,navy,0,2.3,7.25,4.6,4.6,.3);
      const bridge=box(castle,gold,0,.15,11,7,.3,8);bridge.name='castle-steps';
      for(const s of [-1,1])for(let i=0;i<5;i++){const hedge=ball(castle,mat(0x239d5d),s*9,1.2,10+i*2,1.4);hedge.scale.y=.8;}
    }
    // Flower beds, green pipes and lamp globes frame the drive without blocking corners.
    for(let i=0;i<track.trackPoints.length;i+=24){const p=track.trackPoints[i],side=i%48?-1:1;const x=p.x+p.normalX*28*side,z=p.z+p.normalZ*28*side,g=site('garden-bed',x,z,5);if(!g)continue;
      if(i%72===0){add(g,new THREE.CylinderGeometry(2.1,2.1,4.2,16),mat(0x27b55d),0,2.1,0);add(g,new THREE.TorusGeometry(2.15,.32,8,20),mat(0x42db7c),0,4.2,0).rotation.x=Math.PI/2;}
      else for(let j=0;j<7;j++){const a=j*2.4,flower=ball(g,mat([0xffca52,0xff82b4,0xe9e9ff][j%3]),Math.sin(a)*3,1.3,Math.cos(a)*3,.62);flower.scale.y=.45;add(g,new THREE.CylinderGeometry(.08,.08,1.1,5),mat(0x238d46),flower.position.x,.55,flower.position.z);}
    }
  }else if(id==='sunset'){
    const harbor=site('harbor-lagoon',62,-42,26);
    if(harbor){
      const water=mat(0x24b9ce);water.roughness=.2;water.emissive.setHex(0x137e91);water.emissiveIntensity=.18;
      // Lift the inset basin above the existing rolling terrain, with a stone rim.
      const basin=add(harbor,new THREE.CylinderGeometry(24,26,4,40),mat(0xe7c78d),0,0,0);basin.scale.z=.7;
      const lagoon=add(harbor,new THREE.CircleGeometry(23.8,48),water,0,2.05,0);lagoon.rotation.x=-Math.PI/2;lagoon.scale.y=.7;
      for(let i=0;i<10;i++){const ripple=add(harbor,new THREE.TorusGeometry(3+i*1.7,.035,4,40,Math.PI*1.2),cream,0,2.1,0);ripple.rotation.x=Math.PI/2;ripple.scale.y=.7;}
      for(let i=0;i<7;i++)box(harbor,wood,-16+i*2.2,2.3,9,2.1,.35,7);
      const sail=new THREE.Shape();sail.moveTo(0,0);sail.lineTo(0,10);sail.lineTo(7,0);sail.closePath();
      add(harbor,new THREE.CylinderGeometry(.14,.14,11,6),wood,4,7,1);add(harbor,new THREE.ShapeGeometry(sail),cream,4,2.8,1);const hull=ball(harbor,red,5,2.5,1,1);hull.scale.set(5,.6,1.6);
    }
    for(let i=0;i<track.trackPoints.length;i+=28){const p=track.trackPoints[i],s=i%56?-1:1,g=site('beach-stop',p.x+p.normalX*29*s,p.z+p.normalZ*29*s,7);if(!g)continue;palm(g,0,0,.9);palm(g,4,-3,.6);
      const umbrella=add(g,new THREE.ConeGeometry(3.2,1.4,12),mat(i%56?0xff6583:0x48dbdc),-3,4,3);add(g,new THREE.CylinderGeometry(.1,.1,4,6),cream,-3,2,3);umbrella.name='beach-umbrella';
    }
    const lighthouse=site('lighthouse',-42,-45,9);if(lighthouse){add(lighthouse,new THREE.CylinderGeometry(2.6,4,21,16),cream,0,10.5,0);for(const y of [7,15])add(lighthouse,new THREE.CylinderGeometry(3.5-y*.035,3.5-y*.035,2.5,16),red,0,y,0);add(lighthouse,new THREE.CylinderGeometry(3.6,3.6,3,16),gold,0,22,0);add(lighthouse,new THREE.ConeGeometry(4.5,3,16),red,0,25,0);}
  }else if(id==='frosty'){
    for(const [x,z,h]of [[-12,-42,23],[35,-95,33],[-58,65,29]]){const g=site('ice-peak',x,z,12);if(!g)continue;
      const ice=mat(0x99e0f4);ice.roughness=.25;for(let i=0;i<4;i++){const shard=add(g,new THREE.ConeGeometry(3.7-i*.4,h-i*3,5),ice,Math.sin(i*2)*4,(h-i*3)/2,Math.cos(i*2)*4);shard.rotation.z=(i-1.5)*.08;}
    }
    for(let i=0;i<track.trackPoints.length;i+=28){const p=track.trackPoints[i],s=i%56?-1:1,g=site('alpine-cabin',p.x+p.normalX*33*s,p.z+p.normalZ*33*s,8);if(!g)continue;
      box(g,wood,0,2.4,0,7,4.8,6);const roof=add(g,new THREE.ConeGeometry(6,3.2,4),snow,0,5.9,0);roof.rotation.y=Math.PI/4;
      box(g,gold,-1.5,2.8,3.05,1.2,1.3,.12);box(g,gold,1.5,2.8,3.05,1.2,1.3,.12);box(g,navy,0,1.3,3.07,1.2,2.5,.14);fir(g,6,-3,.85);fir(g,-5,-4,.65);
    }
  }else{
    const cyan=mat(0x38e6f4,true),pink=mat(0xfb66d4,true),glass=mat(0x283e70);
    const plaza=site('neon-city-center',55,-45,23);
    if(plaza)for(let i=0;i<5;i++){
      const x=(i%3-1)*11,z=Math.floor(i/3)*12-6,h=23+i*5;
      box(plaza,navy,x,h/2,z,7,h,7);
      for(const s of [-1,1])box(plaza,pink,x+s*3.55,h/2,z+3.6,.22,h,.2);
      for(let y=3;y<h;y+=3.5)for(let c=0;c<2;c++)box(plaza,cyan,x-1.7+c*3.4,y,z+3.58,1.6,.8,.15);
      box(plaza,pink,x,h+.2,z,8,.45,8);
    }
    for(let i=0;i<track.trackPoints.length;i+=20){const p=track.trackPoints[i],s=i%40?-1:1,g=site('neon-tower',p.x+p.normalX*36*s,p.z+p.normalZ*36*s,9);if(!g)continue;
      const height=14+(i%5)*6;box(g,navy,0,height/2,0,9,height,8);box(g,glass,0,height/2,4.03,7,height-2,.1);
      for(const x of [-4.6,4.6])box(g,i%40?cyan:pink,x,height/2,4.15,.22,height,.2);
      for(let y=3;y<height;y+=3.5)for(let c=0;c<3;c++)box(g,(y+c+i)%3?cyan:pink,-2.5+c*2.5,y,4.14,1.3,.75,.15);
      box(g,pink,0,height+.3,0,10,.45,9);add(g,new THREE.ConeGeometry(2,5,6),cyan,0,height+3,0);
    }
    for(const fraction of [.035,.31,.62]){const p=track.trackPoints[Math.floor(fraction*track.trackPoints.length)],g=new THREE.Group();g.name='neon-overhead-gate';g.position.set(p.x,p.y,p.z);g.rotation.y=Math.atan2(p.tangentX,p.tangentZ);root.add(g);
      for(const s of [-1,1]){box(g,navy,s*(track.roadWidth/2+2.5),6,0,1.3,12,1.6);box(g,cyan,s*(track.roadWidth/2+2.5),6,.9,.3,11,.15);}
      box(g,navy,0,12,0,track.roadWidth+6,1.5,1.6);box(g,pink,0,11.45,.9,track.roadWidth+5,.3,.15);
    }
  }
  // Batch static art by material so detailed cities/gardens stay affordable in split-screen.
  root.updateMatrixWorld(true);
  const inverse=root.matrixWorld.clone().invert(),batches=new Map<string,{material:THREE.MeshStandardMaterial;geometry:THREE.BufferGeometry[]}>(),original:THREE.Mesh[]=[];
  root.traverse(o=>{
    const mesh=o as THREE.Mesh;if(!mesh.isMesh)return;
    const m=mesh.material as THREE.MeshStandardMaterial;
    const key=[m.color.getHex(),m.emissive.getHex(),m.emissiveIntensity,m.roughness,m.metalness,m.side].join(':');
    if(!batches.has(key))batches.set(key,{material:m,geometry:[]});
    const geo=mesh.geometry.index?mesh.geometry.toNonIndexed():mesh.geometry.clone();
    geo.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse,mesh.matrixWorld));batches.get(key)!.geometry.push(geo);original.push(mesh);
  });
  for(const mesh of original)mesh.removeFromParent();
  for(const {material,geometry}of batches.values()){
    const merged=mergeGeometries(geometry);if(!merged)throw new Error('Unable to batch course scenery');
    const mesh=new THREE.Mesh(merged,material);mesh.name='batched-course-art';mesh.castShadow=mesh.receiveShadow=true;root.add(mesh);geometry.forEach(g=>g.dispose());
  }
  root.userData.drawCalls=batches.size;
  return root;
}
