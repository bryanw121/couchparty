import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {createCanvas} from '@napi-rs/canvas';
import * as THREE from 'three';
await build({stdin:{contents:`export {CameraController} from './web/kart/game/camera';export {KartPhysicsEngine} from './web/kart/game/kartPhysics';export {createKartMesh} from './web/kart/game/kartModel';`,resolveDir:process.cwd(),loader:'ts'},bundle:true,platform:'node',format:'esm',packages:'external',outfile:'dist/driving-tests.mjs'});
const {CameraController,KartPhysicsEngine,createKartMesh}=await import('../dist/driving-tests.mjs');
globalThis.document={createElement:()=>createCanvas(256,256)};
const config={id:'driving-test',name:'Tester',isPlayer:false,color:'#e22c30',accentColor:'#fff',helmetColor:'#f00',visorColor:'#222',number:1,topSpeed:43,acceleration:30,handling:3.4,driftMultiplier:1.35,weight:2};
const makeState=()=>({config,position:{x:0,y:.1,z:0},rotation:{y:0,pitch:0,roll:0},speed:43,angularVelocity:0,isDrifting:false,driftDirection:0,driftTime:0,driftLevel:0,boostTimer:0,boostMultiplier:1,currentLap:1,checkpointIndex:0,splineProgress:0,totalDistance:0,lapTimes:[],currentLapTime:0,bestLapTime:null,totalRaceTime:0,rank:1,isFinished:false,invulnerableTimer:0,spinOutTimer:0});
// Isolate steering on an unbounded flat surface; actual course laps are covered separately.
const track={roadWidth:18,totalLength:10000,trackPoints:Array(300),onShortcut:()=>null,getClosestTrackPoint:(x,z)=>({index:0,distanceToCenter:0,point:{x,y:0,z,distance:z,tangentX:0,tangentZ:1}})};
const physics=new KartPhysicsEngine(track,{emitTireSmoke(){},emitBoostFlames(){},emitDriftSparks(){}}),mesh=createKartMesh(config);
const input={throttle:true,brake:false,steerLeft:false,steerRight:false,drift:false,respawn:false,cameraToggle:false,steer:0};
const step=(s,dt,steer=0,drift=false)=>physics.updateRacer(s,{...input,steer,drift},mesh,dt,[s]);
const steering=[];
for(const dt of [1/30,1/60,1/120]){
  const s=makeState();for(let i=0;i<.5/dt;i++)step(s,dt,.5);
  steering.push(s.angularVelocity);
  for(let i=0;i<.15/dt;i++)step(s,dt,-.5);
  assert.ok(s.angularVelocity<0,'quick opposite input takes control within 150 ms');
  for(let i=0;i<.4/dt;i++)step(s,dt,0);
  assert.ok(Math.abs(s.angularVelocity)<.025,'letting go recenters the steering');
  const drift=makeState();Object.assign(drift,{isDrifting:true,driftDirection:1,driftTime:2,driftLevel:2,slideAngle:.26,angularVelocity:2});drift.rotation.roll=-.18;
  step(drift,dt);
  assert.equal(drift.isDrifting,false);assert.ok(drift.boostTimer>0,'charged mini turbo survives release');
  assert.ok(drift.angularVelocity>1&&drift.angularVelocity<2,'drift rotation eases away on the release frame');
  assert.ok(drift.slideAngle>0&&drift.slideAngle<.26,'slide begins settling without snapping');
  const boost=drift.boostTimer;
  for(let i=0;i<.6/dt;i++)step(drift,dt);
  assert.ok(Math.abs(drift.slideAngle)<.003&&Math.abs(drift.angularVelocity)<.025,'drift settles promptly');
  assert.ok(drift.boostTimer<boost,'release does not retrigger the mini turbo');
}
assert.ok(Math.max(...steering)-Math.min(...steering)<.015,'30/60/120 FPS steering response agrees');
for(const value of [0,.049,.05,.0501]){const s=makeState();step(s,1/60,value);assert.ok(Math.abs(s.angularVelocity)<.0001,'no dead zone jump');}
function heldSteer(speed,steer){const s=makeState();s.config={...config,acceleration:0};s.speed=speed;for(let i=0;i<90;i++)step(s,1/60,steer);return s.angularVelocity;}
assert.ok(heldSteer(60,.3)<heldSteer(26,.3),'high speed small corrections are calmer');
assert.ok(Math.abs(heldSteer(60,1)-heldSteer(26,1))<.001,'full lock retained for tight corners');
console.log('PASS steering precision, fast corrections, dead zone, frame-rate consistency and drift release/mini turbo');
const settled=[];
for(const dt of [1/30,1/60,1/120]){
  const state=makeState(),cam=new CameraController(16/9);cam.update(state,dt);
  const position=cam.camera.position.clone(),orientation=cam.camera.quaternion.clone();
  state.spinOutTimer=1.1;
  for(let i=0;i<1/dt;i++){state.rotation.y+=12*dt;cam.update(state,dt);}
  assert.ok(cam.camera.position.distanceTo(position)<1e-8,'spin never orbits the camera');
  assert.ok(cam.camera.quaternion.angleTo(orientation)<1e-7,'spin keeps view direction stable');
  state.spinOutTimer=0;state.rotation.y=.6;
  cam.update(state,dt);
  assert.ok(cam.camera.quaternion.angleTo(orientation)<.12,'recovery does not snap the aim');
  for(let i=0;i<1/dt;i++)cam.update(state,dt);
  settled.push(cam.camera.position.clone());
  state.rotation.y=Math.PI-.01;for(let i=0;i<2/dt;i++)cam.update(state,dt);
  const beforeWrap=cam.camera.quaternion.clone();state.rotation.y=-Math.PI+.01;cam.update(state,dt);
  assert.ok(cam.camera.quaternion.angleTo(beforeWrap)<.02,'heading wrap uses the short turn');
  const beforeGlide=cam.camera.position.clone();state.isGliding=true;cam.update(state,dt);
  assert.ok(cam.camera.position.distanceTo(beforeGlide)<.2,'glider framing eases out');
  for(const view of ['cockpit','action','topdown','chase']){cam.setView(view);cam.update(state,.5);assert.ok(cam.camera.position.toArray().every(Number.isFinite));assert.ok(Number.isFinite(cam.camera.fov));}
}
assert.ok(settled[0].distanceTo(settled[2])<.03,'camera settles consistently across frame rates');
console.log('PASS stable spin camera, smooth recovery/look direction, heading wrap, glider/view changes and frame-rate consistency');
delete globalThis.document;
