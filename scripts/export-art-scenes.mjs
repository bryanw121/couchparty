// Export the actual runtime meshes for an independent Blender asset inspection.
import fs from 'node:fs';
import {build} from 'esbuild';
import * as THREE from 'three';
import {createCanvas} from '@napi-rs/canvas';
import {DRIVERS} from '../src/games/kart.js';
globalThis.document={createElement:()=>createCanvas(128,128)};
await build({stdin:{contents:"export {createKartMesh} from './web/kart/game/kartModel'; export {createDriver} from './web/kart/game/characterSculpt'; export {createItemModel,ITEM_NAMES} from './web/kart/game/itemModels';",resolveDir:process.cwd(),loader:'ts'},bundle:true,platform:'node',format:'esm',packages:'external',outfile:'dist/export-art.mjs'});
const {createKartMesh,createDriver,createItemModel,ITEM_NAMES}=await import('../dist/export-art.mjs');
const encode=a=>Buffer.from(a.buffer,a.byteOffset,a.byteLength).toString('base64');
const objects=[];
function pack(group,name,kind,id){
 group.updateMatrixWorld(true);const meshes=[];
 group.traverse(o=>{
  if(!o.isMesh||!o.visible)return;for(let p=o.parent;p;p=p.parent)if(!p.visible)return;
  const geo=o.geometry.clone();geo.applyMatrix4(o.matrixWorld);const pos=geo.attributes.position,norm=geo.attributes.normal;
  const normals=new Float32Array(norm.count*3);for(let i=0;i<norm.count;i++)normals.set([norm.getX(i),norm.getY(i),norm.getZ(i)],i*3);
  const m=o.material;if(Array.isArray(m))throw new Error('Review export requires single-material parts');
  const index=geo.index?Uint32Array.from(geo.index.array):Uint32Array.from({length:pos.count},(_,i)=>i);
  meshes.push({position:encode(pos.array),normal:encode(normals),index:encode(index),color:[m.color.r,m.color.g,m.color.b],roughness:m.roughness??.5,metalness:m.metalness??0,opacity:m.opacity??1});
 });objects.push({name,kind,id,meshes});
}
for(const d of DRIVERS){pack(createKartMesh({...d,number:1}).rootGroup,d.name,'kart',d.id);const group=new THREE.Group();const head=createDriver(group,{...d,number:1});head.scale.setScalar(1.18);pack(group,d.name,'character',d.id);}
for(const [id,name] of [...Object.entries(ITEM_NAMES),['box','Item Box']])pack(createItemModel(id),name,'item',id);
fs.writeFileSync('dist/art-scenes.json',JSON.stringify(objects));console.log('Exported',objects.length,'runtime models');
