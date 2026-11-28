import fs from 'node:fs';
import {createCanvas,loadImage} from '@napi-rs/canvas';
import {DRIVERS} from '../src/games/kart.js';
const exportData=JSON.parse(fs.readFileSync('dist/art-scenes.json','utf8'));
for(const kind of ['character','item']){
 const models=exportData.filter(m=>m.kind===kind),size=kind==='character'?320:256,dir=kind==='character'?'public/kart-portraits':'public/item-previews',embedded={};
 const board=createCanvas(size*4,size*Math.ceil(models.length/4)),ctx=board.getContext('2d');
 for(const [i,m]of models.entries()){const bytes=fs.readFileSync(dir+'/'+m.id+'.png');embedded[m.id]='data:image/png;base64,'+bytes.toString('base64');ctx.drawImage(await loadImage(bytes),i%4*size,Math.floor(i/4)*size,size,size);}
 fs.writeFileSync(dir+'/roster.png',board.toBuffer('image/png'));
 if(kind==='character')fs.writeFileSync('public/kart-portraits.js','var KART_PORTRAITS = '+JSON.stringify(embedded)+';\n');
 else fs.writeFileSync('public/kart-items.json',JSON.stringify(embedded)+'\n');
 if(kind==='item'){
  const sheet=createCanvas(1080,1250),g=sheet.getContext('2d');g.fillStyle='#dfedf5';g.fillRect(0,0,1080,1250);g.textAlign='center';g.fillStyle='#243a51';g.font='bold 38px sans-serif';g.fillText('KARIO MART · ITEM COLLECTION',540,60);
  for(const [i,m]of models.entries()){const x=24+i%4*260,y=95+Math.floor(i/4)*270;g.fillStyle='#f6fbff';g.beginPath();g.roundRect(x,y,250,256,20);g.fill();g.drawImage(await loadImage(dir+'/'+m.id+'.png'),x+13,y,224,224);g.fillStyle='#243a51';g.font='bold 19px sans-serif';g.fillText(m.name,x+125,y+239);}
  g.font='18px sans-serif';g.fillText('Offline studio renders of the runtime game meshes',540,1210);fs.mkdirSync('public/art-review',{recursive:true});const bytes=sheet.toBuffer('image/png');fs.writeFileSync('public/art-review/items.png',bytes);fs.writeFileSync('public/item-previews/soft-collectible-models.png',bytes);
 }
}
