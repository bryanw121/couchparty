import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import type {TrackSystem} from './track';

// Cheap static contact shading remains present even with dynamic shadows off.
// These are terrain-conforming decals, not a lightmap bake or collision objects.
export function addSceneryContactShadows(track: TrackSystem) {
  const canvas=document.createElement('canvas');canvas.width=canvas.height=64;
  const ctx=canvas.getContext('2d')!,gradient=ctx.createRadialGradient(32,32,8,32,32,32);
  gradient.addColorStop(0,'rgba(18,26,40,.38)');gradient.addColorStop(.6,'rgba(18,26,40,.23)');gradient.addColorStop(1,'rgba(18,26,40,0)');
  ctx.fillStyle=gradient;ctx.fillRect(0,0,64,64);
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
  const material=new THREE.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2});
  const pieces:THREE.BufferGeometry[]=[];
  const sites=track.sceneryGroup.getObjectByName('course-landmarks-'+track.course.id)?.children||[];
  for(const site of sites){
    const radius=site.userData.clearanceRadius;
    if(!radius)continue;
    const geometry=new THREE.PlaneGeometry(radius*2.2,radius*1.8,6,6);geometry.rotateX(-Math.PI/2);
    const p=geometry.attributes.position;
    for(let i=0;i<p.count;i++){
      const x=p.getX(i)+site.position.x,z=p.getZ(i)+site.position.z;
      p.setXYZ(i,x,track.getTerrainElevation(x,z)+.045,z);
    }
    geometry.computeVertexNormals();pieces.push(geometry);
  }
  if(!pieces.length){texture.dispose();material.dispose();return;}
  const mesh=new THREE.Mesh(mergeGeometries(pieces)!,material);mesh.name='scenery-contact-shadows';mesh.renderOrder=1;
  mesh.userData.contactCount=pieces.length;track.sceneryGroup.add(mesh);pieces.forEach(g=>g.dispose());
}
