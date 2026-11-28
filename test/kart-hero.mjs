import assert from 'node:assert/strict';
import fs from 'node:fs';
import {build} from 'esbuild';
import * as THREE from 'three';
import {createCanvas} from '@napi-rs/canvas';
globalThis.document={createElement:()=>createCanvas(128,128)};
const assets=JSON.parse(fs.readFileSync('web/kart/game/hero-assets.json','utf8'));
assert.deepEqual(Object.keys(assets).sort(),['kart','mario','mushroom','shell','village']);
for(const [id,asset]of Object.entries(assets)){
 for(const channel of ['color','ao','roughness']){const image=asset[channel],png=Buffer.from(image.png.split(',')[1],'base64');assert.equal(png.readUInt32BE(0),0x89504e47);assert.equal(Buffer.from(image.pixels,'base64').length,image.size*image.size*4);assert.ok(png.equals(fs.readFileSync('public/hero-assets/'+id+'-'+channel+'.png')),'baked image matches runtime atlas');}
 for(const part of asset.parts){const p=Buffer.from(part.p,'base64'),n=Buffer.from(part.n,'base64'),uv=Buffer.from(part.uv,'base64'),i=Buffer.from(part.i,'base64');assert.equal(n.length,p.length/2);assert.equal(uv.length,p.length/3*2);for(let k=0;k<i.length;k+=2)assert.ok(i.readUInt16LE(k)<p.length/6,'valid topology indices');}
 if(id==='mario')for(const part of asset.parts.filter(p=>p.name==='cap-white-patch'||p.name==='cap-M')){const p=Buffer.from(part.p,'base64');for(let k=0;k<p.length;k+=6){const x=p.readInt16LE(k)/asset.positionScale,y=p.readInt16LE(k+2)/asset.positionScale,z=p.readInt16LE(k+4)/asset.positionScale;const crown=-.02+.302*Math.sqrt(Math.max(.002,1-(x/.342)**2-((y-.23)/.185)**2));assert.ok(Math.abs(z-crown)<.012,'cap badge follows its surface, including from the rear');}}
 const glb=fs.readFileSync('public/hero-assets/'+id+'.glb');assert.equal(glb.readUInt32LE(0),0x46546c67);assert.equal(glb.readUInt32LE(4),2);const length=glb.readUInt32LE(12),json=JSON.parse(glb.subarray(20,20+length).toString());assert.ok(json.textures?.length>=2,'portable GLB includes baked textures');
 console.log('PASS',id,'UV topology, 3 baked atlases and textured GLB');
}
await build({stdin:{contents:"export {createKartMesh} from './web/kart/game/kartModel';export {animateHeroDriver} from './web/kart/game/heroAssets';export {createItemModel} from './web/kart/game/itemModels';",resolveDir:process.cwd(),loader:'ts'},bundle:true,platform:'node',format:'esm',packages:'external',outfile:'dist/hero-test.mjs'});
const {createKartMesh,animateHeroDriver,createItemModel}=await import('../dist/hero-test.mjs');
const kart=createKartMesh({id:'hero',name:'Mario',topper:'cap',color:'#e22c30',number:1}),head=kart.driverHead,rig=head.userData.heroRig;assert.ok(rig?.armL&&rig.eyeL);assert.ok(kart.rootGroup.getObjectByName('sculpted-body-shell'));
for(let i=0;i<275;i++)animateHeroDriver(head,1/60,.3,30,true);assert.ok(rig.eyeL.scale.y<.4,'blink closes at the authored timing');animateHeroDriver(head,.2,0,0,false);assert.equal(rig.eyeL.scale.y,1,'blink reopens');animateHeroDriver(head,.2,0,0,false,true);assert.ok(Math.abs(rig.armL.rotation.z)>.2&&Math.abs(rig.armR.rotation.z)>.2,'podium pose moves both arms');
for(const kind of ['green','boost']){const model=createItemModel(kind);assert.equal(model.name,'item-'+kind);let atlases=0;model.traverse(o=>{if(o.isMesh){assert.ok(o.material.map&&o.material.aoMap&&o.material.roughnessMap);atlases++;}});assert.ok(atlases>0&&atlases<=3);}
console.log('PASS live mesh assembly, face/arm animation and shared textured item models');
delete globalThis.document;
