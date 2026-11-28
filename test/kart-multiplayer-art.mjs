import assert from 'node:assert/strict';
import {build} from 'esbuild';
import * as THREE from 'three';
import {createCanvas} from '@napi-rs/canvas';
await build({stdin:{contents:`export {configureArtRenderer,createArtLightRig} from './web/kart/game/artDirection';export {TrackSystem} from './web/kart/game/track';export {COURSES} from './web/kart/game/tracks';export {applyCartoonStyle,toonGradient} from './web/kart/game/style';export {CouchEngine} from './web/kart/game/couchEngine';export {previewPlayers} from './web/kart/game/previewPlayers';`,resolveDir:process.cwd(),loader:'ts'},bundle:true,platform:'node',format:'esm',packages:'external',outfile:'dist/multiplayer-art-tests.mjs'});
const {configureArtRenderer,createArtLightRig,TrackSystem,COURSES,applyCartoonStyle,toonGradient,CouchEngine,previewPlayers}=await import('../dist/multiplayer-art-tests.mjs');
globalThis.document={createElement:()=>Object.assign(createCanvas(128,128),{style:{}})};
const renderer={shadowMap:{}};configureArtRenderer(renderer);
assert.equal(renderer.toneMapping,THREE.NeutralToneMapping);assert.equal(renderer.outputColorSpace,THREE.SRGBColorSpace);
for(const id of ['meadow','sunset','frosty','neon']){
  const scene=new THREE.Scene(),track=new TrackSystem(scene,id);applyCartoonStyle(scene,track);
  const contacts=scene.getObjectByName('scenery-contact-shadows');assert.ok(contacts&&contacts.userData.contactCount>=20,'persistent village contact shading');
  assert.equal(contacts.material.depthWrite,false);assert.equal(contacts.castShadow,false);
  const p=contacts.geometry.attributes.position;for(let i=0;i<p.count;i++)assert.ok(Math.abs(p.getY(i)-track.getTerrainElevation(p.getX(i),p.getZ(i))-.045)<.001,'contact shadows follow terrain');
  const rig=createArtLightRig(COURSES[id].theme,true);scene.add(...Object.values(rig));scene.updateMatrixWorld(true);rig.sun.shadow.updateMatrices(rig.sun);
  assert.ok(rig.sun.castShadow);assert.equal(rig.sun.shadow.mapSize.x,2048);assert.ok(rig.sun.intensity>rig.fill.intensity+rig.ambient.intensity,'directional lighting has readable contrast');
  for(const point of track.trackPoints){const projected=new THREE.Vector3(point.x,point.y+1,point.z).applyMatrix4(rig.sun.shadow.matrix);assert.ok(projected.x>=0&&projected.x<=1&&projected.y>=0&&projected.y<=1&&projected.z>=0&&projected.z<=1,id+' racing surface inside shadow coverage');}
  assert.equal(createArtLightRig(COURSES[id].theme,false).sun.castShadow,false,'low-quality dynamic shadow fallback');
  console.log('PASS',id,'terrain contact shading, shadow coverage and directional light contrast');
}
for(const count of [2,3,4]){
  const players=previewPlayers(count),race=Object.assign(Object.create(CouchEngine.prototype),{opts:{players,cpus:false,autopilot:true},scene:new THREE.Scene(),gradient:toonGradient(),overlay:{appendChild(){}},shadows:new Map(),racers:[],humans:[],track:{},onResize(){},container:{clientWidth:1920,clientHeight:1080},phase:'racing'});
  race.build();assert.equal(race.humans.length,count);assert.equal(race.racers.length,count);assert.equal(new Set(race.racers.map(r=>r.state.config.topper)).size,count);
  assert.equal(race.humans[0].state.config.name,'Mario');assert.equal(race.humans[1].state.config.name,'Luigi');
  const viewports=race.views();assert.equal(viewports.length,count===2?2:4);
  assert.equal(viewports.reduce((a,v)=>a+v.w*v.h,0),1920*1080,'viewports fill the screen');
  let shadowRequests=0,renders=0;
  const shadowMap={enabled:true,autoUpdate:false,_update:false,set needsUpdate(value){this._update=value;if(value)shadowRequests++;},get needsUpdate(){return this._update;}};
  race.renderer={shadowMap,setViewport(){},setScissor(){},render(){renders++;if(shadowMap.needsUpdate)shadowMap.needsUpdate=false;}};
  race.overview={camera:new THREE.PerspectiveCamera()};race.render();
  assert.equal(shadowRequests,1,'one shared world-shadow update per frame');assert.equal(renders,count===3?4:count,'every split view rendered');
  race.render();assert.equal(shadowRequests,2,'shared shadows refresh on the following frame');
  console.log('PASS',count,'player preview roster, full-screen layout and shared shadow pass');
}
delete globalThis.document;
