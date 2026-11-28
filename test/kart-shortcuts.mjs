import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {createCanvas} from '@napi-rs/canvas';
import * as THREE from 'three';
await build({stdin:{contents:`export {TrackSystem} from './web/kart/game/track';export {KartPhysicsEngine} from './web/kart/game/kartPhysics';export {ItemSystem} from './web/kart/game/items';export {createKartMesh} from './web/kart/game/kartModel';`,resolveDir:process.cwd(),loader:'ts'},bundle:true,platform:'node',format:'esm',packages:'external',outfile:'dist/shortcut-tests.mjs'});
const {TrackSystem,KartPhysicsEngine,ItemSystem,createKartMesh}=await import('../dist/shortcut-tests.mjs');
globalThis.document={createElement:()=>createCanvas(256,256)};
let serial=0;const config={name:'Tester',isPlayer:false,color:'#e22c30',accentColor:'#fff',helmetColor:'#f00',visorColor:'#222',topper:'cap',number:1,topSpeed:43,acceleration:30,handling:3.4,driftMultiplier:1.35,weight:2};
function racer(track,t=0,side=0){const p=track.adventure.point(t,side),sc=track.shortcut;return{config:{...config,id:'shortcut-'+serial++},position:{x:p.x,y:p.y+.1,z:p.z},rotation:{y:Math.atan2(sc.bx-sc.ax,sc.bz-sc.az),pitch:0,roll:0},speed:43,angularVelocity:0,isDrifting:false,driftDirection:0,driftTime:0,driftLevel:0,boostTimer:0,boostMultiplier:1,currentLap:1,checkpointIndex:sc.ia,splineProgress:sc.ia/300,totalDistance:0,lapTimes:[],currentLapTime:0,bestLapTime:null,totalRaceTime:0,rank:1,isFinished:false,invulnerableTimer:0,spinOutTimer:0};}
const input={throttle:true,brake:false,steerLeft:false,steerRight:false,drift:false,respawn:false,cameraToggle:false},particles={emitTireSmoke(){},emitBoostFlames(){},emitDriftSparks(){}};
for(const id of ['meadow','sunset','frosty','neon']){
 const track=new TrackSystem(new THREE.Scene(),id),route=track.adventure;track.features.active=true;
 const sc=track.shortcut,surface=route.group.getObjectByName('shortcut-surface'),normal=surface.geometry.attributes.normal;let up=0;for(let i=0;i<normal.count;i++)up+=normal.getY(i);assert.ok(up/normal.count>.9,'sloped route faces upward');
 for(const t of [0,.25,.5,.75,1]){const p=route.point(t);assert.ok(Math.abs(track.onShortcut(p.x,p.z)-route.sample(p.x,p.z).height)<1e-6);}
 if(id==='meadow'||id==='neon')for(const side of [-sc.w/2,0,sc.w/2]){const p=route.point(route.entryT,side);assert.ok(track.getClosestTrackPoint(p.x,p.z).distanceToCenter>track.roadWidth/2+1,'gate leaves the main road clear');}
 // Drive the real physics and consume an actual Mushroom item through the complete cut.
 const state=racer(track),physics=new KartPhysicsEngine(track,particles),mesh=createKartMesh(state.config),items=new ItemSystem(new THREE.Scene(),track,false);
 assert.equal(items.boxes.length,0);assert.equal(items.coinsOnTrack.length,0);
 items.grantMushrooms(state.config.id,3);items.press(state.config.id,[state]);assert.equal(items.held.get(state.config.id).count,2);assert.equal(state.boostMultiplier,1.5);
 route.time=id==='neon'?6:id==='sunset'?3:0;
 const events=[];route.onEvent=(_,e)=>events.push(e);
 let elapsed=0;
 while(route.sample(state.position.x,state.position.z).t<.98&&elapsed<12){track.update(elapsed,1/120);physics.updateRacer(state,input,mesh,1/120,[state]);elapsed+=1/120;assert.ok(Number.isFinite(state.position.y));}
 assert.ok(route.sample(state.position.x,state.position.z).t>=.98,id+' shortcut is traversable');
 const roadTime=(track.trackPoints[sc.ib].distance-track.trackPoints[sc.ia].distance)/state.config.topSpeed;
 assert.ok(elapsed<roadTime,id+' mushroom cut saves time against even ideal top-speed road travel: '+elapsed+' vs '+roadTime);
 assert.ok(state.checkpointIndex>=sc.ib-3,'shortcut credits progress through the bypass');
 if(id==='meadow'||id==='neon')assert.ok(events.includes('open'),'boost opens the closed gate');
 assert.ok(events.includes('exit'),'rejoining road produces one success event');
 // A closed gate also blocks reverse traversal; boost opens for following racers.
 if(id==='meadow'||id==='neon'){
  route.time=6;route.openUntil=0;const blocked=racer(track,route.entryT);route.step(blocked);assert.ok(Math.abs(blocked.speed)<=4);assert.equal(route.gateOpen,false);
  const reverse=racer(track,route.entryT);reverse.speed=-30;route.step(reverse);assert.ok(Math.abs(reverse.speed)<=4);assert.ok(route.sample(reverse.position.x,reverse.position.z).t>route.entryT);
  const boost=racer(track,route.entryT);boost.boostTimer=1;route.step(boost);assert.ok(route.gateOpen);const following=racer(track,route.entryT);route.step(following);assert.equal(following.speed,43,'other racers can follow through an open gate');route.update(6.1,true);if(id==='meadow')assert.equal(route.gateOpen,false);
 }
 if(id==='sunset'){route.time=3;assert.ok(route.highTide);const wet=route.step(racer(track,.5)).speedRatio;route.time=10;assert.equal(route.highTide,false);const dry=route.step(racer(track,.5)).speedRatio;assert.ok(wet<dry);}
 if(id==='frosty'){route.update(3,true);const unboosted=route.step(racer(track,.34));assert.equal(unboosted.speedRatio,.3);const boosted=racer(track,.34);boosted.boostTimer=1;const effect=route.step(boosted);assert.ok(unboosted.speedRatio<effect.speedRatio&&unboosted.grip<effect.grip);assert.equal(route.step(racer(track,.34)).speedRatio,.75,'snow is cleared for following racers');route.update(3,true);assert.equal(route.step(racer(track,.34)).speedRatio,.3,'snow drifts reform');}
 const airborne=racer(track,.5);airborne.airHeight=5;assert.equal(route.step(airborne),null,'surface does not slow airborne karts');
 // All three Time Trial mushrooms fire once; no fourth use and no random pickups.
 items.press(state.config.id,[state]);items.release(state.config.id,[state]);assert.equal(items.held.get(state.config.id).count,1);items.press(state.config.id,[state]);assert.equal(items.held.has(state.config.id),false);state.boostTimer=0;items.press(state.config.id,[state]);assert.equal(state.boostTimer,0);
 console.log('PASS',id,route.theme.name,'one-mushroom cut',elapsed.toFixed(2)+'s vs road minimum '+roadTime.toFixed(2)+'s; gates/surfaces/progression/3 charges');
}
delete globalThis.document;
