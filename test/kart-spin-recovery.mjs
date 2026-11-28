import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {createCanvas} from '@napi-rs/canvas';
import * as THREE from 'three';
await build({stdin:{contents:`export {TrackSystem} from './web/kart/game/track';export {KartPhysicsEngine} from './web/kart/game/kartPhysics';export {ItemSystem} from './web/kart/game/items';export {createKartMesh} from './web/kart/game/kartModel';`,resolveDir:process.cwd(),loader:'ts'},bundle:true,platform:'node',format:'esm',packages:'external',outfile:'dist/spin-tests.mjs'});
const {TrackSystem,KartPhysicsEngine,ItemSystem,createKartMesh}=await import('../dist/spin-tests.mjs');
globalThis.document={createElement:()=>createCanvas(256,256)};
const config={id:'spin-test',name:'Tester',isPlayer:false,color:'#e22c30',accentColor:'#fff',helmetColor:'#f00',visorColor:'#222',number:1,topSpeed:43,acceleration:30,handling:3.4,driftMultiplier:1.35,weight:2};
const input={throttle:true,brake:false,steerLeft:false,steerRight:false,drift:false,respawn:false,cameraToggle:false};
const particles={emitTireSmoke(){},emitBoostFlames(){},emitDriftSparks(){}};
const angleError=(a,b)=>Math.abs(Math.atan2(Math.sin(a-b),Math.cos(a-b)));
let cases=0;
for(const course of ['meadow','sunset','frosty','neon']){
  const scene=new THREE.Scene(),track=new TrackSystem(scene,course),physics=new KartPhysicsEngine(track,particles),items=new ItemSystem(scene,track,false),mesh=createKartMesh(config);
  for(const index of [0,78,150,230,299])for(const dt of [1/30,1/60,1/120])for(const kind of ['banana','green','red','blue','bomb','horn','hazard','bolt']){
    const p=track.trackPoints[index],forward=Math.atan2(p.tangentX,p.tangentZ);
    const r={config,position:{x:p.x,y:p.y+.1,z:p.z},rotation:{y:forward+Math.PI,pitch:0,roll:.18},speed:kind==='hazard'?-8:35,angularVelocity:2,isDrifting:true,driftDirection:1,driftTime:2,driftLevel:3,steerSmooth:1,slideAngle:.26,hopT:.2,boostTimer:0,boostMultiplier:1,currentLap:1,checkpointIndex:index,splineProgress:index/300,totalDistance:0,lapTimes:[],currentLapTime:0,bestLapTime:null,totalRaceTime:0,rank:1,isFinished:false,invulnerableTimer:0,spinOutTimer:0};
    if(kind==='hazard'||kind==='bolt')r.spinOutTimer=kind==='hazard'?.8:.5;
    else items.hit(r,'attacker',kind);
    const duration=r.spinOutTimer,initialHeading=r.rotation.y;
    let elapsed=0,moved=false;
    while(r.spinOutTimer>0&&elapsed<3){
      physics.updateRacer(r,input,mesh,dt,[r]);elapsed+=dt;
      if(angleError(r.rotation.y,initialHeading)>.2)moved=true;
      assert.equal(r.position.x,p.x,'spin does not teleport or advance the kart');
      assert.equal(r.position.z,p.z);
    }
    assert.ok(moved,'hit still visibly rotates the kart');
    assert.equal(r.spinOutTimer,0);assert.ok(elapsed>=duration-1e-8&&elapsed<duration+dt+1e-8,'original hit duration preserved');
    assert.ok(angleError(r.rotation.y,forward)<1e-9,course+' '+kind+' recovers facing forward');
    assert.ok(angleError(mesh.rootGroup.rotation.y,forward)<1e-9,'visible kart matches recovery');
    assert.equal(r.angularVelocity,0);assert.equal(r.isDrifting,false);assert.equal(r.driftLevel,0);assert.equal(r.slideAngle,0);assert.ok(r.speed>=0);
    const before={...r.position};physics.updateRacer(r,input,mesh,dt,[r]);
    const advance=(r.position.x-before.x)*p.tangentX+(r.position.z-before.z)*p.tangentZ;
    assert.ok(advance>0,'throttle immediately drives forward after recovery');
    assert.ok(angleError(r.rotation.y,forward)<1e-9,'stale steering does not turn the kart on the next frame');
    cases++;
  }
  console.log('PASS',course,'spin recovery: weapons/hazards, curves, lap seam, 30/60/120 FPS');
}
console.log('PASS',cases,'physics recovery cases');
delete globalThis.document;
