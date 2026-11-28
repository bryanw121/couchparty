import fs from 'node:fs';
import {build} from 'esbuild';
import * as THREE from 'three';
import {DRIVERS} from '../src/games/kart.js';
import {createCanvas} from '@napi-rs/canvas';
globalThis.document={createElement:()=>createCanvas(128,128)};
await build({stdin:{contents:"export {createDriver} from './web/kart/game/characterSculpt';",resolveDir:process.cwd(),loader:'ts'},bundle:true,platform:'node',format:'esm',packages:'external',outfile:'dist/sculpt-source.mjs'});
const {createDriver}=await import('../dist/sculpt-source.mjs');
const data={};
for(const driver of DRIVERS){
 const body=new THREE.Group(),head=createDriver(body,{...driver,number:1},'race',false),who=body.children.find(c=>c===head).name.replace('-head','');
 data[who]=[];
 for(const [space,parent] of [['body',body],['head',head]]){
  const groups=new Map();parent.updateMatrixWorld(true);
  for(const mesh of parent.children){const color=mesh.userData.sculptColor;if(color===undefined)continue;
   const geo=mesh.geometry.index?mesh.geometry.toNonIndexed():mesh.geometry.clone();geo.applyMatrix4(mesh.matrix);
   if(!groups.has(color))groups.set(color,[]);groups.get(color).push(...geo.attributes.position.array);
  }
  for(const [color,position] of groups)data[who].push({space,color,position});
 }
}
fs.writeFileSync('dist/sculpt-source.json',JSON.stringify(data));console.log('Prepared',Object.keys(data).length,'character sculpts');
