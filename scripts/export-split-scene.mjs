// Native offline preview of real game meshes/poses. Not a WebGL screenshot.
import fs from 'node:fs';
import {build} from 'esbuild';
import * as THREE from 'three';
import {createCanvas} from '@napi-rs/canvas';
fs.mkdirSync('dist/split-textures',{recursive:true});
globalThis.document={createElement:()=>createCanvas(128,128)};
await build({stdin:{contents:`export {TrackSystem} from './web/kart/game/track';export {applyCartoonStyle} from './web/kart/game/style';export {createKartMesh} from './web/kart/game/kartModel';export {CameraController} from './web/kart/game/camera';export {KartPhysicsEngine} from './web/kart/game/kartPhysics';export {AIController} from './web/kart/game/aiController';export {previewPlayers} from './web/kart/game/previewPlayers';`,resolveDir:process.cwd(),loader:'ts'},bundle:true,platform:'node',format:'esm',packages:'external',outfile:'dist/split-export.mjs'});
const {TrackSystem,applyCartoonStyle,createKartMesh,CameraController,KartPhysicsEngine,AIController,previewPlayers}=await import('../dist/split-export.mjs');
let seed=177;Math.random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
const scene=new THREE.Scene(),track=new TrackSystem(scene,'meadow');applyCartoonStyle(scene,track);
const physics=new KartPhysicsEngine(track,{emitTireSmoke(){},emitBoostFlames(){},emitDriftSparks(){}});
const racers=previewPlayers(4).map((p,i)=>{
  const config={...p,isPlayer:false,accentColor:'#fff',helmetColor:p.color,visorColor:'#222',number:i+1,topSpeed:43,acceleration:30,handling:3.4,driftMultiplier:1.35,weight:2};
  const state={config,position:{x:i%2?3.5:-3.5,y:.1,z:-6-i*5.5},rotation:{y:Math.PI,pitch:0,roll:0},speed:0,angularVelocity:0,isDrifting:false,driftDirection:0,driftTime:0,driftLevel:0,boostTimer:0,boostMultiplier:1,currentLap:1,checkpointIndex:0,splineProgress:0,totalDistance:0,lapTimes:[],currentLapTime:0,bestLapTime:null,totalRaceTime:0,rank:i+1,isFinished:false,invulnerableTimer:0,spinOutTimer:0};
  const mesh=createKartMesh(config);scene.add(mesh.rootGroup);
  return {state,mesh,ai:new AIController(track,state),camera:new CameraController(16/9)};
});
// The opening village section, driven through the real physics/camera controllers.
track.features.active=true;
for(let i=0;i<360;i++){track.update(i/60,1/60);for(const r of racers){physics.updateRacer(r.state,r.ai.update(1/60,racers.map(r=>r.state)),r.mesh,1/60,racers.map(r=>r.state));r.camera.update(r.state,1/60);}}
const encode=a=>Buffer.from(a.buffer,a.byteOffset,a.byteLength).toString('base64');
const textures=new Map(),materials=new Map(),geometries=new Map(),objects=[];
function texture(map){
  if(!map)return null;if(textures.has(map))return textures.get(map);
  const id='texture-'+textures.size,file='dist/split-textures/'+id+'.png';
  if(map.userData?.heroAtlas)return null;
  try{let canvas=map.image;
    if(ArrayBuffer.isView(canvas?.data)){const c=createCanvas(canvas.width,canvas.height),g=c.getContext('2d'),image=g.createImageData(canvas.width,canvas.height);image.data.set(canvas.data);g.putImageData(image,0,0);canvas=c;}
    if(!canvas?.toBuffer)return null;
    fs.writeFileSync(file,canvas.toBuffer('image/png'));const entry={file,repeat:map.repeat.toArray(),flipY:map.flipY,colorSpace:map.colorSpace};textures.set(map,entry);return entry;
  }catch{return null;}
}
function material(m){
  if(materials.has(m))return materials.get(m).id;
  const entry={id:materials.size,color:m.color?.toArray()||[1,1,1],emissive:m.emissive?.toArray()||[0,0,0],emit:m.emissiveIntensity||0,roughness:m.roughness??.8,metalness:m.metalness||0,clearcoat:m.clearcoat||0,opacity:m.opacity,vertexColors:m.vertexColors,basic:!!m.isMeshBasicMaterial,atlas:m.userData.heroAtlas,map:m.userData.heroAtlas?null:texture(m.map),normalMap:texture(m.normalMap),normalScale:m.normalScale?.toArray(),roughnessMap:m.userData.heroAtlas?null:texture(m.roughnessMap)};materials.set(m,entry);return entry.id;
}
scene.updateMatrixWorld(true);
scene.traverse(o=>{
  if(!o.isMesh||!o.visible||o.name==='scenery-contact-shadows')return;
  for(let p=o.parent;p;p=p.parent)if(!p.visible)return;
  const g=o.geometry;
  if(!geometries.has(g)){
    const entry={id:geometries.size,position:encode(Float32Array.from(g.attributes.position.array)),normal:encode(Float32Array.from(g.attributes.normal.array)),uv:g.attributes.uv?encode(Float32Array.from(g.attributes.uv.array)):null,color:g.attributes.color?encode(Float32Array.from(g.attributes.color.array)):null,index:encode(g.index?Uint32Array.from(g.index.array):Uint32Array.from({length:g.attributes.position.count},(_,i)=>i)),groups:g.groups};geometries.set(g,entry);
  }
  objects.push({name:o.renderOrder<0?"sky-dome":o.name,geometry:geometries.get(g).id,matrix:o.matrixWorld.toArray(),material:[o.material].flat().map(material)});
});
fs.writeFileSync('dist/split-scene.json',JSON.stringify({objects,geometries:[...geometries.values()],materials:[...materials.values()],cameras:racers.map(r=>({name:r.state.config.name,position:r.camera.camera.position.toArray(),quaternion:r.camera.camera.quaternion.toArray(),fov:r.camera.camera.fov})),theme:track.course.theme}));
console.log('Exported',objects.length,'objects,',geometries.size,'geometries and four real race-camera poses.');
