import fs from 'node:fs';
import {createCanvas,loadImage} from '@napi-rs/canvas';
const width=1600,tileW=800,tileH=450,header=64,footer=52;
const canvas=createCanvas(width,header+tileH*2+footer),g=canvas.getContext('2d');
const modern=process.argv.includes('--modern');
g.fillStyle='#10213c';g.fillRect(0,0,canvas.width,canvas.height);
g.fillStyle='#fff';g.font='bold 26px sans-serif';g.fillText(modern?'KARIO MART · SURFACE & TYPOGRAPHY STUDY':'KARIO MART · FOUR-PLAYER LIGHTING STUDY',24,42);
for(const [i,name] of ['Mario','Luigi','Peach','Yoshi'].entries()){
  const x=i%2*tileW,y=header+Math.floor(i/2)*tileH;
  g.drawImage(await loadImage('dist/split-renders/player-'+(i+1)+'.png'),x,y,tileW,tileH);
  if(modern){
    const color=['#ed4349','#26bb73','#ec79b5','#6fc640'][i];
    g.save();g.translate(x+24,y+tileH-26);g.transform(1,0,-.14,1,0,0);
    g.shadowColor='#101a35';g.shadowBlur=0;g.shadowOffsetY=5;
    const fill=g.createLinearGradient(0,-56,270,0);fill.addColorStop(0,color);fill.addColorStop(1,'#14233a');g.fillStyle=fill;g.beginPath();g.roundRect(0,-60,285,60,12);g.fill();g.shadowOffsetY=0;
    g.strokeStyle='white';g.lineWidth=3;g.beginPath();g.roundRect(0,-60,56,60,12);g.stroke();g.fillStyle='white';g.font='italic 900 26px Arial';g.fillText('P'+(i+1),10,-23);
    g.font='italic 900 27px Arial';g.fillText(name.toUpperCase(),71,-32);g.fillStyle='#ffd34e';g.font='bold 12px Arial';g.fillText('● 03   /   RACING',73,-12);g.restore();
    g.save();g.translate(x+tileW-20,y+tileH-24);g.textAlign='right';g.font='italic 900 70px Arial';g.strokeStyle='#101a35';g.lineWidth=8;g.strokeText((i+1)+['st','nd','rd','th'][i],0,0);g.fillStyle=i?'white':'#ffd34e';g.fillText((i+1)+['st','nd','rd','th'][i],0,0);g.restore();
  }else{g.fillStyle='#10213ce8';g.fillRect(x+12,y+12,180,34);g.fillStyle='#fff';g.font='bold 20px sans-serif';g.fillText('P'+(i+1)+' · '+name,x+24,y+36);}
}
g.fillStyle='#10213c';g.fillRect(tileW-2,header,4,tileH*2);g.fillRect(0,header+tileH-2,width,4);
g.fillStyle='#d7e9ff';g.font='20px sans-serif';g.fillText(modern?'Offline Blender + illustrative typography · Live demo has actual game shading, HUD and animation':'Offline Blender render of game meshes and race cameras · Browser lighting and HUD differ',24,canvas.height-20);
const file=modern?'presentation-study.png':'four-player-lighting-study.png';fs.mkdirSync('public/art-review',{recursive:true});fs.writeFileSync('public/art-review/'+file,canvas.toBuffer('image/png'));
console.log('Saved',file);
