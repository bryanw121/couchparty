import * as THREE from 'three';
type Base={opacity:number;transparent:boolean;depthWrite:boolean;emissive?:THREE.Color;emissiveIntensity?:number};
type EffectMaterial={material:THREE.MeshStandardMaterial;base:Base;body:boolean};
const state=new WeakMap<THREE.Object3D,{materials:Map<THREE.Material,EffectMaterial>;seen:Set<THREE.Object3D>;active:boolean}>();
// Clone only when an effect first needs to alter a kart. Shared asset materials stay pristine.
export function updateKartEffects(root:THREE.Group,body:THREE.Group,star:boolean,ghost:boolean,time:number){
  let effects=state.get(root);
  if(!effects&&!star&&!ghost)return;
  if(!effects){effects={materials:new Map(),seen:new Set(),active:false};state.set(root,effects);}
  if(star||ghost)root.traverse(object=>{
    const mesh=object as THREE.Mesh;if(!mesh.isMesh||effects!.seen.has(mesh))return;effects!.seen.add(mesh);
    let inBody=false;for(let p:THREE.Object3D|null=mesh;p;p=p.parent)if(p===body)inBody=true;
    const convert=(original:THREE.Material)=>{
      let entry=effects!.materials.get(original);
      if(!entry){const material=original.clone() as THREE.MeshStandardMaterial;entry={material,body:inBody,base:{opacity:original.opacity,transparent:original.transparent,depthWrite:original.depthWrite,emissive:material.emissive?.clone(),emissiveIntensity:material.emissiveIntensity}};effects!.materials.set(original,entry);}else entry.body ||= inBody;
      return entry.material;
    };mesh.material=Array.isArray(mesh.material)?mesh.material.map(convert):convert(mesh.material);
  });
  if(!star&&!ghost&&!effects.active)return;
  for(const {material,base,body:inBody} of effects.materials.values()){
    const transparent=ghost||base.transparent;if(material.transparent!==transparent){material.transparent=transparent;material.needsUpdate=true;}
    material.opacity=ghost?Math.min(.25,base.opacity):base.opacity;material.depthWrite=ghost?false:base.depthWrite;
    if(material.emissive&&base.emissive){if(star&&inBody){material.emissive.setHSL((time*2)%1,1,.35);material.emissiveIntensity=.7;}else{material.emissive.copy(base.emissive);material.emissiveIntensity=base.emissiveIntensity!;}}
  }
  effects.active=star||ghost;
}
