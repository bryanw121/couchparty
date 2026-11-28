import assert from 'node:assert/strict';
import fs from 'node:fs';
import { build } from 'esbuild';
import { createCanvas } from '@napi-rs/canvas';
import * as THREE from 'three';
await build({stdin:{contents:`
export { TrackSystem } from './web/kart/game/track';
export { KartPhysicsEngine } from './web/kart/game/kartPhysics';
export { AIController } from './web/kart/game/aiController';
export { createKartMesh } from './web/kart/game/kartModel';
export { TimeTrial, trialKey, readTrial, ghostPose } from './web/kart/game/timeTrial';
`,resolveDir:process.cwd(),loader:'ts'},bundle:true,platform:'node',format:'esm',packages:'external',outfile:'dist/race-features-test.mjs'});
const {TrackSystem,KartPhysicsEngine,AIController,createKartMesh,TimeTrial,trialKey,readTrial,ghostPose}=await import('../dist/race-features-test.mjs');
globalThis.document={createElement:()=>createCanvas(256,256)};
const config={id:'tester',name:'Racer',isPlayer:false,color:'#E22C30',accentColor:'#fff',helmetColor:'#f00',visorColor:'#222',number:1,topSpeed:43,acceleration:30,handling:3.4,driftMultiplier:1.35,topper:'cap',weight:2};
let serial=0;
function racer(){return {config:{...config,id:'racer-'+serial++},position:{x:0,y:.1,z:-6},rotation:{y:Math.PI,pitch:0,roll:0},speed:0,angularVelocity:0,steerAngle:0,isDrifting:false,driftDirection:0,driftTime:0,driftLevel:0,boostTimer:0,boostMultiplier:1,currentLap:1,lapDistance:0,totalDistance:0,splineProgress:0,checkpointIndex:0,lapTimes:[],currentLapTime:0,bestLapTime:null,totalRaceTime:0,rank:1,isFinished:false,invulnerableTimer:0,spinOutTimer:0};}
const idle={throttle:false,brake:false,steerLeft:false,steerRight:false,drift:false,respawn:false,cameraToggle:false};
const particles={emitTireSmoke(){},emitBoostFlames(){},emitDriftSparks(){}};
let recorded;
for(const [course,mult,dt]of [['meadow',1,1/60],['sunset',1,1/60],['frosty',1,1/60],['neon',1,1/60],['meadow',.8,1/30],['meadow',1.2,1/120]]){
  const scene=new THREE.Scene(),track=new TrackSystem(scene,course),state=racer();state.config.topSpeed*=mult;state.config.acceleration*=mult;
  const physics=new KartPhysicsEngine(track,particles),mesh=createKartMesh(state.config),ai=new AIController(track,state);physics.totalLaps=1;
  ai.lane=ai.laneGoal=0;ai.laneTimer=1e9;track.features.active=true;
  const events=[];track.features.onEvent=(_,e)=>events.push(e);
  const storage={value:null,getItem(){return this.value;},setItem(k,v){this.value=v;}};
  const trial=new TimeTrial(storage,trialKey(course,'fast',1),scene,state.config);trial.capture(state,true);
  let peak=0;
  for(let i=0;i<180/dt&&state.currentLap<=1;i++){
    track.update(i*dt,dt);physics.updateRacer(state,ai.update(dt,[state]),mesh,dt,[state]);state.totalRaceTime+=dt;state.currentLapTime+=dt;trial.capture(state);
    peak=Math.max(peak,state.airHeight||0);
    assert.ok(Object.values(state.position).every(Number.isFinite));
  }
  assert.ok(state.currentLap>1,course+' can complete a lap with ramps and hazards');
  assert.ok(peak>2,course+' real airborne elevation');
  assert.ok(events.includes('landing'),course+' trick rewards land');
  assert.equal(track.features.ramps.length,3);assert.equal(track.features.hazards.length,2);
  assert.ok(trial.finish(state));assert.ok(trial.saved);
  assert.ok(readTrial(storage,trialKey(course,'fast',1)));
  if(course==='meadow'&&mult===1)recorded={storage,config:state.config,time:state.totalRaceTime};
  console.log('PASS',course,mult,'lap in',state.totalRaceTime.toFixed(1)+'s; peak',peak.toFixed(1)+'m;',events.filter(e=>e==='landing').length,'trick landings;',events.includes('glide')?'glider deployed':'optional glider bypassed');
}

// Human trick edge, landing reward, slow-speed and reverse takeoff prevention.
const track=new TrackSystem(new THREE.Scene(),'meadow'),features=track.features;features.active=true;
const launch=(ramp,state)=>{const p=ramp.point;state.position={x:p.x+p.tangentX*2.5,y:p.y+.1,z:p.z+p.tangentZ*2.5};state.rotation.y=Math.atan2(p.tangentX,p.tangentZ);};
const state=racer();state.config.isPlayer=true;state.speed=30;launch(features.ramps[0],state);
features.step(state,idle,1/60);for(let i=0;i<7;i++)features.step(state,idle,1/60);
features.step(state,{...idle,drift:true},1/60);
assert.ok(state.airHeight>0);
for(let i=0;i<90;i++)features.step(state,idle,1/60);
assert.equal(state.airHeight,0);assert.ok(state.boostTimer>=1.3);
const slow=racer();slow.speed=10;launch(features.ramps[0],slow);features.step(slow,idle,1/60);assert.equal(slow.isGliding,false);assert.equal(slow.airHeight,0);
const reverse=racer();reverse.speed=30;launch(features.ramps[0],reverse);reverse.rotation.y+=Math.PI;features.step(reverse,idle,1/60);for(let i=0;i<30;i++)features.step(reverse,idle,1/60);assert.ok((reverse.airHeight||0)<2);

// Hazards telegraph, leave clear lanes, protect airborne and invulnerable karts, and don't stun-lock.
const crusher=features.hazards[0];features.time=2.5;features.update(0);assert.ok(crusher.dangerous);
const victim=racer();victim.position={x:crusher.point.x,y:crusher.point.y,z:crusher.point.z};victim.speed=30;features.step(victim,idle,.016);assert.ok(victim.spinOutTimer>0);const speed=victim.speed;features.step(victim,idle,.016);assert.equal(victim.speed,speed);
const safe=racer();safe.position={...victim.position};safe.invulnerableTimer=1;safe.speed=30;features.step(safe,idle,.016);assert.equal(safe.speed,30);
const side=racer();side.position={x:crusher.point.x+crusher.point.normalX*6,y:0,z:crusher.point.z+crusher.point.normalZ*6};side.speed=30;features.step(side,idle,.016);assert.equal(side.speed,30);
const cart=features.hazards[1],start=cart.lateral;features.update(1);assert.notEqual(cart.lateral,start);
console.log('PASS human trick/landing boost, guarded takeoffs, moving/telegraphed hazards, safe lanes and hit cooldown');

// Records survive reload; interpolation crosses yaw wrap correctly; slow attempts keep the fast ghost.
const scene=new THREE.Scene(),key=trialKey('meadow','fast',1),loaded=new TimeTrial(recorded.storage,key,scene,recorded.config);
assert.ok(loaded.ghost);loaded.updateGhost(recorded.time/2);assert.ok(loaded.ghost.visible);loaded.updateGhost(recorded.time+1);assert.equal(loaded.ghost.visible,false);
assert.notEqual(key,trialKey('meadow','turbo',1));assert.notEqual(key,trialKey('meadow','fast',3));
const pose=ghostPose([[0,0,0,0,Math.PI-.1,0],[1,10,2,20,-Math.PI+.1,1]],.5);assert.equal(pose[1],5);assert.ok(Math.abs(pose[4]-Math.PI)<.01);
const prior=recorded.storage.value,slower=racer();slower.totalRaceTime=recorded.time+10;loaded.capture({...slower,totalRaceTime:0},true);loaded.capture(slower,true);assert.equal(loaded.finish(slower),false);assert.equal(recorded.storage.value,prior);
slower.bestLapTime=loaded.best.bestLap*.9;assert.equal(loaded.finish(slower),true);assert.equal(loaded.best.time,recorded.time,'a new lap record keeps the fastest full-race ghost');assert.equal(JSON.parse(recorded.storage.value).bestLap,slower.bestLapTime);
assert.equal(readTrial({getItem:()=>'{broken'},key),null);assert.equal(readTrial({getItem:()=>JSON.stringify({...loaded.best,samples:[[0,NaN,0,0,0,0]]})},key),null);
const unavailable=new TimeTrial({getItem(){throw Error('blocked');},setItem(){throw Error('full');}},key,new THREE.Scene(),config);const finish=racer();unavailable.capture(finish,true);finish.totalRaceTime=1;unavailable.capture(finish,true);assert.equal(unavailable.finish(finish),true);assert.equal(unavailable.saved,false);
loaded.dispose();assert.equal(scene.getObjectByName('time-trial-ghost'),undefined);
console.log('PASS persistent records, ruleset separation, non-colliding ghost interpolation, safe corrupt/full storage and cleanup');
delete globalThis.document;
