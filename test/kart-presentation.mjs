import assert from 'node:assert/strict';
import {build} from 'esbuild';
import * as THREE from 'three';
await build({stdin:{contents:`export {surfaceDetails,applySurfaceDetails} from './web/kart/game/surfaceDetails';export {updateRaceHud} from './web/kart/game/raceHud';export {animateKartMotion} from './web/kart/game/kartMotion';`,resolveDir:process.cwd(),loader:'ts'},bundle:true,platform:'node',format:'esm',packages:'external',outfile:'dist/presentation-tests.mjs'});
const {surfaceDetails,applySurfaceDetails,updateRaceHud,animateKartMotion}=await import('../dist/presentation-tests.mjs');
for(const kind of ['asphalt','grass','stucco','fabric','rubber']){
  const maps=surfaceDetails(kind),pixels=maps.normal.image.data,rough=maps.roughness.image.data;
  assert.equal(maps.normal.colorSpace,THREE.NoColorSpace);assert.ok(maps.normal.generateMipmaps);assert.equal(maps.normal.wrapS,THREE.RepeatWrapping);
  let min=255,max=0;for(let i=0;i<pixels.length;i+=4){const x=pixels[i]/255*2-1,y=pixels[i+1]/255*2-1,z=pixels[i+2]/255*2-1;assert.ok(Math.abs(Math.hypot(x,y,z)-1)<.015,'normal map carries normalized lighting vectors');min=Math.min(min,rough[i+1]);max=Math.max(max,rough[i+1]);}
  assert.ok(max-min>8,'roughness has surface variation');assert.equal(surfaceDetails(kind),maps,'maps cached');
}
const a=new THREE.MeshStandardMaterial(),b=new THREE.MeshStandardMaterial(),c=new THREE.MeshStandardMaterial();applySurfaceDetails(a,'asphalt',.2);applySurfaceDetails(b,'asphalt',.2);applySurfaceDetails(c,'asphalt',.2,28);
assert.equal(a.normalMap,b.normalMap,'identical surfaces share GPU textures');assert.equal(a.normalMap.repeat.x,1);assert.equal(c.normalMap.repeat.x,28);assert.notEqual(a.normalMap,c.normalMap,'terrain transform cannot change road detail');
console.log('PASS tileable normal/roughness data, normalized normals, bounded texture reuse and independent tiling');
const keys=['item','icon','count','itemLabel','lapBox','lap','time','player','name','coins','action','charge','rank','trial'];
const nodes=Object.fromEntries(keys.map(key=>[key,{dataset:{el:key},textContent:'',innerHTML:'',hidden:false,animations:0,animate(){this.animations++;}}]));
let rebuilds=0;const root={style:{setProperty(){}},querySelectorAll:()=>Object.values(nodes)};
const host={set innerHTML(value){rebuilds++;},querySelector:()=>root};
const data={player:2,name:'Luigi <script>unsafe</script>',color:'#24bd68',rank:4,lap:1,laps:3,finalLap:false,finished:false,time:'0:00.0',coins:3,drifting:false,driftTime:0,boosting:false,icon:'',itemLabel:'ITEM',count:0,rolling:false};
updateRaceHud(host,data,true);for(let i=0;i<100;i++)updateRaceHud(host,{...data,time:String(i)},true);
assert.equal(rebuilds,1,'timer never rebuilds the animated HUD');assert.equal(nodes.name.textContent,data.name,'player text remains inert');assert.equal(nodes.player.textContent,'P2');
updateRaceHud(host,{...data,rank:1,icon:'<img src="trusted-item">',count:3},true);
assert.equal(nodes.rank.textContent,'1st');assert.equal(nodes.rank.animations,1);assert.equal(nodes.item.animations,1);assert.equal(nodes.count.hidden,false);
updateRaceHud(host,{...data,rank:11,finalLap:true,finished:false,rolling:true},true);assert.equal(nodes.rank.textContent,'11th');assert.equal(nodes.lap.textContent,'FINAL LAP!');assert.equal(nodes.item.dataset.roll,'true');
globalThis.matchMedia=()=>({matches:true});updateRaceHud(host,{...data,rank:1,finished:true,trial:'BEST 0:42.1'},true);assert.equal(nodes.rank.animations,1,'reduced motion suppresses rank animation');assert.equal(nodes.lap.textContent,'FINISH!');assert.equal(nodes.trial.hidden,false);delete globalThis.matchMedia;
console.log('PASS persistent HUD nodes, safe names, counters, event animations, ordinal ranks, finish/trial and reduced motion');
for(const dt of [1/30,1/60,1/120]){
  const bodyGroup=new THREE.Group(),driverHead=new THREE.Group(),state={speed:0,spinOutTimer:0,rotation:{pitch:0},angularVelocity:1};const handles={bodyGroup,driverHead};
  animateKartMotion(state,handles,dt);state.speed=30;for(let i=0;i<.5/dt;i++)animateKartMotion(state,handles,dt);
  assert.ok(Math.abs(bodyGroup.position.y)<.015&&Math.abs(bodyGroup.rotation.x)<.05,'subtle suspension motion');assert.ok(driverHead.rotation.z<0,'all drivers lean into turns');
  state.spinOutTimer=1;for(let i=0;i<1/dt;i++)animateKartMotion(state,handles,dt);assert.ok(bodyGroup.position.y>0&&bodyGroup.position.y<.04,'bounded impact bounce');
  assert.equal(state.rotation.pitch,0,'visual animation leaves driving state unchanged');
}
console.log('PASS suspension, turn lean and hit reactions at 30/60/120 FPS without changing physics');
