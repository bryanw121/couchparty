import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import type {TrackSystem} from './track';

export function addTrackDress(track:TrackSystem){
  const group=new THREE.Group();group.name='course-track-detail';track.sceneryGroup.add(group);
  const canvas=document.createElement('canvas');canvas.width=256;canvas.height=256;const g=canvas.getContext('2d')!;
  const night=track.course.id==='neon',snow=track.course.id==='frosty';
  g.fillStyle=night?'#454a75':snow?'#dbe9f2':'#ddcfb4';g.fillRect(0,0,256,256);
  g.strokeStyle=night?'#6672a0':snow?'#b9cbd9':'#bdaf97';g.lineWidth=3;
  for(let row=0;row<4;row++){g.beginPath();g.moveTo(0,row*64);g.lineTo(256,row*64);g.stroke();for(let col=-1;col<4;col++){const x=col*86+(row%2)*43;g.beginPath();g.moveTo(x,row*64);g.lineTo(x,(row+1)*64);g.stroke();}}
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;
  const stone=new THREE.MeshStandardMaterial({map:texture,roughness:.8});stone.userData.preserveShading=true;
  for(const side of [-1,1]){
    const positions:number[]=[],uv:number[]=[],indices:number[]=[];
    for(let i=0;i<=300;i++){
      const p=track.trackPoints[i%300];for(const width of [11.8,15.2]){positions.push(p.x+p.normalX*width*side,p.y-.02,p.z+p.normalZ*width*side);uv.push((width-11.8)/3.4,i/300*track.totalLength/4);}
      if(i<300){const k=i*2;if(side===1)indices.push(k,k+1,k+2,k+1,k+3,k+2);else indices.push(k,k+2,k+1,k+1,k+2,k+3);}
    }
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(indices);geo.computeVertexNormals();
    const mesh=new THREE.Mesh(geo,stone);mesh.receiveShadow=true;group.add(mesh);
  }
  // Small low-cost flower beds and soft grass tufts give the verges a readable scale.
  const colors=night?[0x5fe7ff,0xfda0ed,0x856cf0]:snow?[0xc0dae6,0xf7f9ff,0x87b4b2]:[0x62b56c,0xffe18a,0xff91b1];
  const parts:THREE.BufferGeometry[][]=[[],[],[]];
  for(let i=7;i<300;i+=5)for(const side of [-1,1]){
    const p=track.trackPoints[i],x=p.x+p.normalX*17.2*side,z=p.z+p.normalZ*17.2*side;
    if(track.trackPoints.some(q=>Math.hypot(q.x-x,q.z-z)<12))continue;
    const y=track.getTerrainElevation(x,z);
    const geo=new THREE.SphereGeometry(.32,10,8);geo.scale(.8,.5,1.2);geo.translate(x,y+.15,z);parts[0].push(geo);
    if(i%3===0){const flower=new THREE.SphereGeometry(.17,10,8);flower.scale(1,.4,1);flower.translate(x,y+.5,z);parts[i%2+1].push(flower);}
  }
  parts.forEach((pieces,i)=>{if(!pieces.length)return;const geo=mergeGeometries(pieces)!;const mat=new THREE.MeshStandardMaterial({color:colors[i],roughness:.65,emissive:night?colors[i]:0,emissiveIntensity:.15});const mesh=new THREE.Mesh(geo,mat);mesh.castShadow=true;group.add(mesh);pieces.forEach(p=>p.dispose());});
  return group;
}
