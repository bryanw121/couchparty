import * as THREE from 'three';
import assets from './hero-assets.json';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
type Part={name:string;role:string;p:string;n:string;uv:string;i:string;material:string};
type Image={png:string;pixels:string;size:number};
type Asset={parts:Part[];color:Image;ao:Image;roughness:Image;positionScale:number;materials:Record<string,{roughness:number;metalness:number}>};
const library=assets as Record<string,Asset>,geometries=new Map<string,THREE.BufferGeometry>(),materials=new Map<string,THREE.MeshStandardMaterial>();
const bytes=(s:string)=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
function texture(image:Image,color=false){
  // Small embedded fallback also makes Node asset renders deterministic. Browsers
  // replace it with the full painted atlas before the race intro finishes.
  let fallback:THREE.Texture=new THREE.DataTexture(bytes(image.pixels),image.size,image.size);
  if(typeof Image!=='undefined'&&typeof document.createElementNS==='function'){
    const canvas=document.createElement('canvas');canvas.width=canvas.height=image.size;const g=canvas.getContext('2d')!,pixels=g.createImageData(image.size,image.size);pixels.data.set(bytes(image.pixels));g.putImageData(pixels,0,0);fallback=new THREE.CanvasTexture(canvas);
    const full=new globalThis.Image();full.onload=()=>{fallback.image=full as any;fallback.flipY=true;fallback.needsUpdate=true;};full.src=image.png;
  }
  fallback.colorSpace=color?THREE.SRGBColorSpace:THREE.NoColorSpace;fallback.needsUpdate=true;
  fallback.flipY=false;fallback.minFilter=THREE.LinearMipmapLinearFilter;fallback.magFilter=THREE.LinearFilter;fallback.generateMipmaps=true;return fallback;
}
const textures=new Map<string,{color:THREE.Texture;ao:THREE.Texture;roughness:THREE.Texture}>();
export function hasHeroAsset(id:string){return !!library[id]?.parts.length;}
export function addHeroAsset(parent:THREE.Object3D,id:string,role?:string){
  const asset=library[id];if(!asset)return [];
  if(!textures.has(id))textures.set(id,{color:texture(asset.color,true),ao:texture(asset.ao),roughness:texture(asset.roughness)});
  const maps=textures.get(id)!;const meshes:THREE.Mesh[]=[];
  for(const [index,part]of asset.parts.entries()){
    if(role&&part.role!==role)continue;
    const key=id+':'+index;let geometry=geometries.get(key);
    if(!geometry){geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(Float32Array.from(new Int16Array(bytes(part.p).buffer),v=>v/asset.positionScale),3));geometry.setAttribute('normal',new THREE.BufferAttribute(Float32Array.from(new Int8Array(bytes(part.n).buffer),v=>v/127),3));geometry.setAttribute('uv',new THREE.BufferAttribute(Float32Array.from(new Uint16Array(bytes(part.uv).buffer),v=>v/65535),2));geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(bytes(part.i).buffer),1));geometries.set(key,geometry);}
    const properties=asset.materials[part.material],coated=part.material.endsWith('paint');
    const materialKey=id+':'+properties.metalness+':'+coated;let material=materials.get(materialKey);
    if(!material){material=new THREE.MeshPhysicalMaterial({color:0xffffff,map:maps.color,aoMap:maps.ao,aoMapIntensity:.55,roughnessMap:maps.roughness,roughness:1,metalness:properties.metalness,clearcoat:coated?.32:.03,clearcoatRoughness:.35});material.userData.preserveShading=true;material.userData.heroAtlas=id;materials.set(materialKey,material);}
    const mesh=new THREE.Mesh(geometry,material);mesh.name=part.name;mesh.castShadow=mesh.receiveShadow=true;mesh.userData.heroRole=part.role;parent.add(mesh);meshes.push(mesh);
  }
  const batches=new Map<THREE.Material,THREE.Mesh[]>();
  for(const mesh of meshes){if(mesh.name==='sculpted-body-shell')continue;const mat=mesh.material as THREE.Material;if(!batches.has(mat))batches.set(mat,[]);batches.get(mat)!.push(mesh);}
  const result=meshes.filter(m=>m.name==='sculpted-body-shell');
  for(const [material,parts] of batches){const pieces=parts.map(p=>p.geometry.index?p.geometry.toNonIndexed():p.geometry.clone()),geometry=mergeGeometries(pieces);if(!geometry)throw new Error('Unable to batch hero asset');const mesh=new THREE.Mesh(geometry,material);mesh.name=id+'-sculpted-'+(role||'model');mesh.castShadow=mesh.receiveShadow=true;parent.add(mesh);parts.forEach(p=>p.removeFromParent());pieces.forEach(p=>p.dispose());result.push(mesh);}
  return result;
}
export function createHeroDriver(body:THREE.Group){
  const head=new THREE.Group();head.name='mario-head';head.position.set(0,1.05,-.14);body.add(head);
  addHeroAsset(body,'mario','body');addHeroAsset(head,'mario','head');
  const rig:Record<string,THREE.Group>={};
  for(const [role,pivot] of Object.entries({armL:[-.25,.8,-.05],armR:[.25,.8,-.05],eyeL:[-.102,.09,.23],eyeR:[.102,.09,.23]})){
    const parent=role.startsWith('eye')?head:body,g=new THREE.Group();g.name='mario-'+role;g.position.set(...pivot as [number,number,number]);parent.add(g);
    const pieces=addHeroAsset(g,'mario',role);for(const p of pieces)p.position.set(-pivot[0],-pivot[1],-pivot[2]);rig[role]=g;
  }
  head.userData.heroRig=rig;head.userData.heroTime=0;return head;
}
export function animateHeroDriver(head:THREE.Group,delta:number,steer:number,speed:number,drifting:boolean,celebrating=false){
  const rig=head.userData.heroRig as Record<string,THREE.Group>|undefined;if(!rig)return;
  const time=(head.userData.heroTime||0)+delta;head.userData.heroTime=time;
  const blinkPhase=time%4.7,blink=blinkPhase>4.48?Math.abs((blinkPhase-4.59)/.11):1;
  rig.eyeL.scale.y=rig.eyeR.scale.y=Math.max(.04,Math.min(1,blink));
  head.rotation.z=THREE.MathUtils.damp(head.rotation.z,-steer*(drifting?.12:.05),9,delta);
  head.rotation.x=Math.sin(time*2.8)*.012*Math.min(1,speed/30);
  for(const [name,side]of [['armL',-1],['armR',1]] as const){const arm=rig[name];arm.rotation.z=THREE.MathUtils.damp(arm.rotation.z,celebrating?side*(.8+Math.sin(time*7)*.18):steer*.14,10,delta);arm.rotation.x=celebrating?-.45:Math.sin(time*12)*.008*Math.min(1,speed/30);}
}
