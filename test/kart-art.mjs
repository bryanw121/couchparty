import assert from 'node:assert/strict';
import fs from 'node:fs';
import {build} from 'esbuild';
import * as THREE from 'three';
import {createCanvas} from '@napi-rs/canvas';
import {DRIVERS} from '../src/games/kart.js';
globalThis.document={createElement:()=>createCanvas(128,128)};
await build({stdin:{contents:"export {createKartMesh} from './web/kart/game/kartModel'; export {TrackSystem} from './web/kart/game/track'; export {applyCartoonStyle} from './web/kart/game/style';",resolveDir:process.cwd(),loader:'ts'},bundle:true,platform:'node',format:'esm',packages:'external',outfile:'dist/art-test.mjs'});
const {createKartMesh,TrackSystem,applyCartoonStyle}=await import('../dist/art-test.mjs');
const data=JSON.parse(fs.readFileSync('web/kart/game/sculpt-assets.json','utf8'));
assert.equal(Object.keys(data).length,8);
assert.ok(fs.statSync('web/kart/game/sculpt-assets.json').size<1_500_000,'bounded bundled sculpt payload');
for(const d of DRIVERS){const h=createKartMesh({...d,number:1}),shell=h.rootGroup.getObjectByName('sculpted-body-shell');assert.ok(shell,'driver sculpt must preserve kart body');
 let surfaces=0,draws=0,triangles=0;h.rootGroup.traverse(o=>{if(!o.isMesh)return;draws++;triangles+=(o.geometry.index?.count||o.geometry.attributes.position.count)/3;if(o.name.includes('-sculpted-'))surfaces++;assert.ok(o.material.isMeshStandardMaterial);});
 assert.ok(surfaces>=2,'baked surfaces are used on every driver');assert.ok(draws<150,'bounded per-kart draws');assert.ok(triangles<130_000,'bounded per-kart geometry');
 const p=shell.geometry.attributes.position,n=shell.geometry.attributes.normal;let side=0,count=0;for(let i=0;i<p.count;i++)if(p.getX(i)>.4){side+=n.getX(i);count++;}assert.ok(side/count>.3,'swept body shell faces outward');
 assert.equal(h.driverHead.scale.x,1.18,'review and race share head proportions');
 console.log('PASS',d.name,'baked sculpt + complete kart;',draws,'draws;',triangles,'triangles');
}
for(const course of ['meadow','sunset','frosty','neon']){const scene=new THREE.Scene(),track=new TrackSystem(scene,course);applyCartoonStyle(scene,track);
 const road=track.trackMesh.material;assert.ok(road.isMeshStandardMaterial&&!road.isMeshToonMaterial);assert.equal(road.map.repeat.y,1,'road UVs own the repetition count');
 const details=scene.getObjectByName('course-track-detail');assert.ok(details);
 for(const mesh of details.children.slice(0,2)){const n=mesh.geometry.attributes.normal;let up=0;for(let i=0;i<n.count;i++)up+=n.getY(i);assert.ok(up/n.count>.8,'paved verge faces upward');}
 assert.ok(scene.getObjectByName('mushroom-spectators'),'modeled crowd');console.log('PASS',course,'smooth world lighting, road density, paving and spectators');
}
delete globalThis.document;
