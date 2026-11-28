// Offline renders of the real course meshes/textures. Not browser/gameplay screenshots.
import fs from 'node:fs';
import { build } from 'esbuild';
import { createCanvas, loadImage } from '@napi-rs/canvas';
import * as THREE from 'three';

globalThis.document={createElement:()=>createCanvas(256,256)};
await build({stdin:{contents:"export { TrackSystem } from './web/kart/game/track'; export { COURSES } from './web/kart/game/tracks'; export { applyCartoonStyle } from './web/kart/game/style';",resolveDir:process.cwd(),loader:'ts'},bundle:true,platform:'node',format:'esm',packages:'external',outfile:'dist/course-preview-module.mjs'});
const {TrackSystem,COURSES,applyCartoonStyle}=await import('../dist/course-preview-module.mjs');
const W=960,H=540,output='public/course-previews';fs.mkdirSync(output,{recursive:true});
const onlyCuts=process.argv.includes('--shortcuts');
const atlas=createCanvas(W*2,H*2),ag=atlas.getContext('2d'),embedded={};
const streets=createCanvas(W*2,H*2),sg=streets.getContext('2d');
const light=new THREE.Vector3(-.45,.8,.65).normalize();
const linear=x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4;
const srgb=x=>Math.round(255*(x<=.0031308?x*12.92:1.055*Math.pow(Math.min(1,x),1/2.4)-.055));
const textures=new Map();
function getTexture(map){
  if(!map?.image?.getContext)return null;
  if(!textures.has(map)){const image=map.image;try{
    const levels=[];for(let w=image.width,h=image.height;;w=Math.max(1,w>>1),h=Math.max(1,h>>1)){const c=createCanvas(w,h),g=c.getContext('2d');g.drawImage(image,0,0,w,h);levels.push({data:g.getImageData(0,0,w,h).data,w,h});if(w===1&&h===1)break;}
    textures.set(map,levels);
  }catch{textures.set(map,null);}}
  map.updateMatrix();return textures.get(map);
}
function render(scene,camera,theme){
  scene.updateMatrixWorld(true);camera.updateMatrixWorld();const vp=new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);
  const canvas=createCanvas(W,H),g=canvas.getContext('2d'),bg=g.createLinearGradient(0,0,0,H);bg.addColorStop(0,'#'+theme.skyTop.toString(16).padStart(6,'0'));bg.addColorStop(1,'#'+theme.skyLow.toString(16).padStart(6,'0'));g.fillStyle=bg;g.fillRect(0,0,W,H);
  const image=g.getImageData(0,0,W,H),pixels=image.data,depth=new Float32Array(W*H);depth.fill(Infinity);
  const triangles=[];
  scene.traverse(o=>{
    if(!o.isMesh||!o.visible||o.renderOrder<0)return;
    for(let p=o.parent;p;p=p.parent)if(!p.visible)return;
    const geo=o.geometry,pos=geo.attributes.position,normal=geo.attributes.normal,uv=geo.attributes.uv,color=geo.attributes.color,index=geo.index;
    if(!pos||!normal)return;
    const nm=new THREE.Matrix3().getNormalMatrix(o.matrixWorld),vertices=[];
    for(let i=0;i<pos.count;i++){
      const world=new THREE.Vector3().fromBufferAttribute(pos,i).applyMatrix4(o.matrixWorld),screen=world.clone().applyMatrix4(vp),n=new THREE.Vector3().fromBufferAttribute(normal,i).applyNormalMatrix(nm);
      vertices.push({x:(screen.x*.5+.5)*W,y:(.5-screen.y*.5)*H,z:screen.z,n,uv:uv?[uv.getX(i),uv.getY(i)]:[0,0],color:color?[color.getX(i),color.getY(i),color.getZ(i)]:[1,1,1]});
    }
    const count=index?index.count:pos.count;
    for(let i=0;i<count;i+=3){const a=vertices[index?index.getX(i):i],b=vertices[index?index.getX(i+1):i+1],c=vertices[index?index.getX(i+2):i+2];
      if(Math.max(a.x,b.x,c.x)<0||Math.min(a.x,b.x,c.x)>W||Math.max(a.y,b.y,c.y)<0||Math.min(a.y,b.y,c.y)>H)continue;
      let m=o.material;if(Array.isArray(m)){const group=geo.groups.find(g=>i>=g.start&&i<g.start+g.count);m=m[group?.materialIndex||0];}
      triangles.push({a,b,c,m,texture:getTexture(m.map),z:(a.z+b.z+c.z)/3});
    }
  });
  triangles.sort((a,b)=>a.z-b.z); // nearest first limits costly texture/shading overdraw
  const uvPoint=new THREE.Vector2();
  for(const {a,b,c,m,texture:levels} of triangles){
    const area=(b.y-c.y)*(a.x-c.x)+(c.x-b.x)*(a.y-c.y);if(Math.abs(area)<1e-6)continue;
    if(m.side===THREE.FrontSide&&area>=0)continue;
    let texture=levels?.[0];
    if(levels){const scale=Math.max(...[[a,b],[b,c],[c,a]].map(([p,q])=>Math.hypot((p.uv[0]-q.uv[0])*m.map.repeat.x*levels[0].w,(p.uv[1]-q.uv[1])*m.map.repeat.y*levels[0].h)/(Math.hypot(p.x-q.x,p.y-q.y)||1)));texture=levels[Math.min(levels.length-1,Math.max(0,Math.floor(Math.log2(Math.max(1,scale)))) )];}
    const x0=Math.max(0,Math.floor(Math.min(a.x,b.x,c.x))),x1=Math.min(W-1,Math.ceil(Math.max(a.x,b.x,c.x))),y0=Math.max(0,Math.floor(Math.min(a.y,b.y,c.y))),y1=Math.min(H-1,Math.ceil(Math.max(a.y,b.y,c.y)));
    const base=m.color||new THREE.Color(0xffffff),em=m.emissive||new THREE.Color(0),emit=m.emissiveIntensity??0;
    for(let y=y0;y<=y1;y++)for(let x=x0;x<=x1;x++){
      const u=((b.y-c.y)*(x+.5-c.x)+(c.x-b.x)*(y+.5-c.y))/area,v=((c.y-a.y)*(x+.5-c.x)+(a.x-c.x)*(y+.5-c.y))/area,w=1-u-v;if(u<0||v<0||w<0)continue;
      const z=a.z*u+b.z*v+c.z*w,idx=y*W+x;if(z < -1 || z > 1 || z>=depth[idx])continue;
      let alpha=m.opacity??1,tr=1,tg=1,tb=1;
      if(texture){uvPoint.set(a.uv[0]*u+b.uv[0]*v+c.uv[0]*w,a.uv[1]*u+b.uv[1]*v+c.uv[1]*w);m.map.transformUv(uvPoint);const tx=Math.min(texture.w-1,Math.max(0,Math.floor(uvPoint.x*texture.w))),ty=Math.min(texture.h-1,Math.max(0,Math.floor(uvPoint.y*texture.h))),ti=(ty*texture.w+tx)*4;
        tr=linear(texture.data[ti]/255);tg=linear(texture.data[ti+1]/255);tb=linear(texture.data[ti+2]/255);alpha*=texture.data[ti+3]/255;
      }
      if(alpha<.05)continue;
      const nx=a.n.x*u+b.n.x*v+c.n.x*w,ny=a.n.y*u+b.n.y*v+c.n.y*w,nz=a.n.z*u+b.n.z*v+c.n.z*w,nlen=Math.hypot(nx,ny,nz)||1;
      const diffuse=Math.max(0,(nx*light.x+ny*light.y+nz*light.z)/nlen);
      const brightness=m.isMeshBasicMaterial?1:.38+diffuse*.8;
      const colors=m.vertexColors?[a.color[0]*u+b.color[0]*v+c.color[0]*w,a.color[1]*u+b.color[1]*v+c.color[1]*w,a.color[2]*u+b.color[2]*v+c.color[2]*w]:[1,1,1];
      const values=[base.r*tr*colors[0]*brightness+em.r*emit,base.g*tg*colors[1]*brightness+em.g*emit,base.b*tb*colors[2]*brightness+em.b*emit];
      for(let ch=0;ch<3;ch++)pixels[idx*4+ch]=Math.round(srgb(Math.max(0,Math.min(1,values[ch])))*alpha+pixels[idx*4+ch]*(1-alpha));
      pixels[idx*4+3]=255;if(alpha>.45)depth[idx]=z;
    }
  }
  g.putImageData(image,0,0);return canvas;
}
for(const [i,course]of Object.values(COURSES).entries()){
  // Repeatable foliage placement in review renders; fixed landmarks are shared with gameplay.
  const random=Math.random;let seed=100+i;Math.random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
  const scene=new THREE.Scene(),track=new TrackSystem(scene,course.id);applyCartoonStyle(scene,track);Math.random=random;
  const cut=track.adventure,targetCut=cut.point(.45),cutDirection=cut.point(1).sub(cut.point(0)).normalize();
  const cutCamera=new THREE.OrthographicCamera(-70,70,39.375,-39.375,.1,700);cutCamera.position.copy(targetCut).add(new THREE.Vector3(-cutDirection.z*75-cutDirection.x*85,90,cutDirection.x*75-cutDirection.z*85));cutCamera.lookAt(targetCut);
  const cutImage=render(scene,cutCamera,course.theme),cg=cutImage.getContext('2d');cg.fillStyle='#17293ee8';cg.fillRect(0,H-66,W,66);cg.fillStyle='#f6fcff';cg.font='bold 25px sans-serif';cg.fillText(cut.theme.name+' · '+course.name,22,H-36);cg.font='16px sans-serif';cg.fillText(cut.theme.hint+' · Offline render of game meshes',22,H-13);fs.writeFileSync(`${output}/${course.id}-shortcut.png`,cutImage.toBuffer('image/png'));
  if(onlyCuts){console.log(course.id,'shortcut rendered');continue;}
  const camera=new THREE.OrthographicCamera(-300,300,168.75,-168.75,.1,1500);camera.position.set(310,380,450);camera.lookAt(0,0,0);
  const canvas=render(scene,camera,course.theme);fs.writeFileSync(`${output}/${course.id}-overview.png`,canvas.toBuffer('image/png'));
  const heroCamera=new THREE.OrthographicCamera(-110,110,61.875,-61.875,.1,1200);heroCamera.position.set(110,95,100);heroCamera.lookAt(12,4,-40);
  const hero=render(scene,heroCamera,course.theme);fs.writeFileSync(`${output}/${course.id}.png`,hero.toBuffer('image/png'));
  const landmarks=track.sceneryGroup.getObjectByName('course-landmarks-'+course.id);
  const houses=landmarks.children.filter(c=>c.name.includes('village-house'));
  const house=houses[Math.min(5,houses.length-1)],target=house.position.clone().add(new THREE.Vector3(0,4,0));
  const streetCamera=new THREE.OrthographicCamera(-45,45,25.3125,-25.3125,.1,180);
  streetCamera.position.copy(target).add(new THREE.Vector3(25,21,60).applyAxisAngle(new THREE.Vector3(0,1,0),house.rotation.y));streetCamera.lookAt(target);
  const street=render(scene,streetCamera,course.theme);fs.writeFileSync(`${output}/${course.id}-street.png`,street.toBuffer('image/png'));
  sg.drawImage(street,i%2*W,Math.floor(i/2)*H);sg.fillStyle='#091325d9';sg.fillRect(i%2*W,Math.floor(i/2)*H+H-48,W,48);sg.fillStyle='#f5f8ff';sg.font='bold 22px sans-serif';sg.fillText(course.name,i%2*W+22,Math.floor(i/2)*H+H-17);
  ag.drawImage(hero,i%2*W,Math.floor(i/2)*H);
  const thumb=createCanvas(320,180);thumb.getContext('2d').drawImage(hero,0,0,320,180);const jpg=thumb.toBuffer('image/jpeg',78);fs.writeFileSync(`${output}/${course.id}-thumb.jpg`,jpg);embedded[course.id]='data:image/jpeg;base64,'+jpg.toString('base64');
  const title=course.name;ag.fillStyle='#091325d9';ag.fillRect(i%2*W,Math.floor(i/2)*H+H-48,W,48);ag.fillStyle='#f5f8ff';ag.font='bold 22px sans-serif';ag.fillText(title,i%2*W+22,Math.floor(i/2)*H+H-17);
  console.log(course.id,'rendered;',landmarks.userData.drawCalls,'batched landmark draws');
}
if(onlyCuts)process.exit(0);
const kartImage=await loadImage('public/kart-models/ace.png'),kartThumb=createCanvas(320,200);kartThumb.getContext('2d').drawImage(kartImage,0,-60,320,320);embedded.kart='data:image/jpeg;base64,'+kartThumb.toBuffer('image/jpeg',82).toString('base64');
fs.writeFileSync(`${output}/all-courses.png`,atlas.toBuffer('image/png'));fs.writeFileSync('public/kart-courses.js','var KARIO_COURSES = '+JSON.stringify(embedded)+';\n');
fs.writeFileSync(`${output}/village-streets.png`,streets.toBuffer('image/png'));
