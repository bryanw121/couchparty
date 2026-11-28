import fs from 'node:fs';
import {createCanvas,loadImage} from '@napi-rs/canvas';
const width=1600,tileW=800,tileH=450,header=64,footer=52;
const canvas=createCanvas(width,header+tileH*2+footer),g=canvas.getContext('2d');
g.fillStyle='#10213c';g.fillRect(0,0,canvas.width,canvas.height);
g.fillStyle='#fff';g.font='bold 26px sans-serif';g.fillText('KARIO MART · FOUR-PLAYER LIGHTING STUDY',24,42);
for(const [i,name] of ['Mario','Luigi','Peach','Yoshi'].entries()){
  const x=i%2*tileW,y=header+Math.floor(i/2)*tileH;
  g.drawImage(await loadImage('dist/split-renders/player-'+(i+1)+'.png'),x,y,tileW,tileH);
  g.fillStyle='#10213ce8';g.fillRect(x+12,y+12,180,34);g.fillStyle='#fff';g.font='bold 20px sans-serif';g.fillText('P'+(i+1)+' · '+name,x+24,y+36);
}
g.fillStyle='#10213c';g.fillRect(tileW-2,header,4,tileH*2);g.fillRect(0,header+tileH-2,width,4);
g.fillStyle='#d7e9ff';g.font='20px sans-serif';g.fillText('Offline Blender render of game meshes and race cameras · Browser lighting and HUD differ',24,canvas.height-20);
fs.mkdirSync('public/art-review',{recursive:true});fs.writeFileSync('public/art-review/four-player-lighting-study.png',canvas.toBuffer('image/png'));
console.log('Saved four-player-lighting-study.png');
