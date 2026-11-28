import * as THREE from 'three';
import assets from './sculpt-assets.json';

type Part={space:string;color:number;position:string;normal:string;index:string};
const geometries=new Map<string,THREE.BufferGeometry>();
function bytes(encoded:string){
  return Uint8Array.from(atob(encoded),c=>c.charCodeAt(0)).buffer;
}
// Sculpted offline in Blender, then bundled so a race never waits on model downloads.
export function applySculptAssets(body:THREE.Group,head:THREE.Group,who:string){
  const parts=(assets as Record<string,Part[]>)[who];if(!parts)return;
  for(const [index,part] of parts.entries()){
    const parent=part.space==='head'?head:body;
    const sources=parent.children.filter(o=>o.userData.sculptColor===part.color);
    if(!sources.length)continue;
    const material=(sources[0] as THREE.Mesh).material as THREE.Material;
    sources.forEach(o=>o.removeFromParent());
    const key=who+':'+index;let geo=geometries.get(key);
    if(!geo){geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(Float32Array.from(new Int16Array(bytes(part.position)),v=>v/16384),3));geo.setAttribute('normal',new THREE.BufferAttribute(new Int8Array(bytes(part.normal)),3,true));geo.setIndex(new THREE.BufferAttribute(new Uint16Array(bytes(part.index)),1));const p=geo.attributes.position,uv=new Float32Array(p.count*2);for(let i=0;i<p.count;i++){uv[i*2]=p.getX(i)*2;uv[i*2+1]=p.getY(i)*2;}geo.setAttribute('uv',new THREE.BufferAttribute(uv,2));geometries.set(key,geo);}
    const mesh=new THREE.Mesh(geo,material);mesh.name=who+'-sculpt-'+part.space+'-'+part.color.toString(16);mesh.castShadow=mesh.receiveShadow=true;parent.add(mesh);
  }
}

export function markSculptSources(body:THREE.Group,head:THREE.Group,who:string,existing=new Set<THREE.Object3D>()){
  for(const parent of [body,head])for(const o of parent.children){
    if(parent===body&&existing.has(o))continue;
    if(!(o as THREE.Mesh).isMesh||o.name==='princess-face')continue;
    const mesh=o as THREE.Mesh,m=mesh.material as THREE.MeshStandardMaterial;
    if(!m.color||m.metalness>.3)continue;
    if(parent===head&&(who==='peach'||who==='daisy'))continue;
    mesh.geometry.computeBoundingBox();const size=mesh.geometry.boundingBox!.getSize(new THREE.Vector3()).multiply(mesh.scale);
    // Keep pupils, embroidery, spots and facial features independent and crisp.
    if(Math.max(size.x,size.y,size.z)<.28)continue;
    if(parent===head&&m.color.getHex()===0xfff9eb&&Math.max(size.x,size.y,size.z)<.65)continue;
    o.userData.sculptColor=m.color.getHex();
  }
}
