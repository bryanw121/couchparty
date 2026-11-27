// Exercises the actual controller in a DOM fixture, then draws labeled design previews.
// The PNGs are native-canvas design renders, not browser/device screenshots.
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { parseHTML } from 'linkedom';
import { createCanvas, loadImage } from '@napi-rs/canvas';
import * as kart from '../src/games/kart.js';

const css=fs.readFileSync('public/kart-controller.css','utf8');
const art=fs.readFileSync('public/kart-art.js','utf8').replace('/*KART_PORTRAITS*/',()=>fs.readFileSync('public/kart-portraits.js','utf8')).replace('/*KART_COURSES*/',()=>fs.readFileSync('public/kart-courses.js','utf8'));
const html=fs.readFileSync('public/play.html','utf8').replace('/*KART_ART*/',()=>art).replace('/*KART_CONTROLLER_CSS*/',()=>css);
const {document,window}=parseHTML(html);
class Socket {readyState=1;sent=[];constructor(){Socket.last=this;}send(raw){this.sent.push(JSON.parse(raw));}}
const values=new Map(),sandbox={document,window,console,WebSocket:Socket,location:{protocol:'http:',host:'fixture.invalid',search:''},localStorage:{getItem:k=>values.get(k)||null,setItem:(k,v)=>values.set(k,v)},history:{replaceState(){}},navigator:{vibrate(){}},screen:{orientation:{angle:0}},URLSearchParams,setInterval:()=>1,clearInterval(){},setTimeout:()=>1,clearTimeout(){},confirm:()=>false};
sandbox.Date=class extends Date{static clock=1000;static now(){return this.clock+=25;}};
vm.createContext(sandbox);vm.runInContext(document.querySelector('script').textContent,sandbox);
const socket=Socket.last;
socket.onmessage({data:JSON.stringify({t:'joined',pid:'preview-player',room:'DEMO'})});
const state={phase:'game',code:'DEMO',selected:'kart',players:[],settings:{},g:{kind:'kart',phase:'race',raceId:'preview-race',course:'meadow',laps:3,racers:[{id:'preview-player',name:'Alex',driver:'ace',color:'#e22c30',topper:'cap'}],lists:{drivers:kart.DRIVERS,courses:kart.COURSES}}};
socket.onmessage({data:JSON.stringify({t:'state',s:state,you:{id:'preview-player',name:'Alex',color:'#e22c30',isHost:true,g:{kind:'kart',racing:true,racer:true}}})});
const $=id=>document.getElementById(id);
assert.equal($('kDriverName').textContent,'Mario');assert.equal($('kCourseName').textContent,'Meadow Loop');
document.querySelector('[data-km="stick"]').click();
for(const id of ['kItemHint','kPlace','kLap','kMode','kGas','kBrake','kDrift','kItem'])assert.equal(document.querySelectorAll('#'+id).length,1,'unique controller ID: '+id);
function pointer(id,type,x=0){const e=new window.Event(type,{bubbles:true,cancelable:true});Object.assign(e,{pointerId:1,clientX:x});$(id).dispatchEvent(e);}
for(const [id,key]of [['kDrift','d'],['kBrake','b'],['kItem','i']]){pointer(id,'pointerdown');assert.equal(socket.sent.at(-1)[key],true);pointer(id,'pointerup');assert.equal(socket.sent.at(-1)[key],false);}
$('kStick').setPointerCapture=()=>{};pointer('kStick','pointerdown',100);pointer('kStick','pointermove',145);assert.ok(socket.sent.at(-1).s<-.6,JSON.stringify({last:socket.sent.at(-1),input:vm.runInContext('({mode:K.steerMode,stick:K.stick,stickId:K.stickId,lastSent:K.lastSent})',sandbox)}));pointer('kStick','pointerup',145);assert.equal(socket.sent.at(-1).s,0);
document.querySelector('[data-km="tilt"]').click();await Promise.resolve();assert.ok($('kGrid').classList.contains('tiltmode'));
document.querySelector('[data-km="stick"]').click();assert.ok(!$('kGrid').classList.contains('tiltmode'));
socket.onmessage({data:JSON.stringify({t:'khud',h:{rank:2,of:8,lap:2,laps:3,item:'boost',n:1,done:false}})});
assert.equal($('kPlace').textContent,'2nd');assert.equal($('kLap').textContent,'Lap 2/3');assert.ok($('kItem').getAttribute('aria-label').includes('Mushroom'));
console.log('PASS: actual controller renders driver/course/HUD; touch buttons, joystick and mode switches transmit inputs.');
if(!process.argv.includes('--test')){
  const output='public/controller-previews';fs.mkdirSync(output,{recursive:true});
  document.querySelectorAll('script').forEach(s=>s.remove());
  fs.writeFileSync(output+'/controller.html','<!doctype html>\n'+document.documentElement.outerHTML);
  const portrait=await loadImage($('kDriverPortrait').querySelector('img').src),item=await loadImage(Buffer.from($('kItemIcon').querySelector('svg').outerHTML));
  const tokens={};for(const m of css.matchAll(/--ctl-([\w-]+)\s*:\s*(#[\da-f]+)/gi))tokens[m[1]]=m[2];
  for(const [name,width,height]of [['landscape',844,390],['portrait',390,844]]){
    const canvas=createCanvas(width*2,height*2),g=canvas.getContext('2d');g.scale(2,2);
    const round=(x,y,w,h,r,fill,stroke)=>{g.beginPath();g.roundRect(x,y,w,h,r);g.fillStyle=fill;g.fill();if(stroke){g.strokeStyle=stroke;g.lineWidth=1;g.stroke();}};
    const text=(value,x,y,size=13,color=tokens.ink,weight='bold',align='left')=>{g.font=`${weight} ${size}px sans-serif`;g.textAlign=align;g.fillStyle=color;g.fillText(value,x,y);};
    const gradient=(x,y,h,a,b)=>{const c=g.createLinearGradient(x,y,x,y+h);c.addColorStop(0,a);c.addColorStop(1,b);return c;};
    const tall=name==='portrait',pad=14,header=tall?76:66,toolY=10+header+10,top=toolY+38+10,avail=height-top-14;
    g.fillStyle=tokens.bg;g.fillRect(0,0,width,height);g.fillStyle=gradient(0,0,height,'#172e4b',tokens.bg);g.fillRect(0,0,width,height);
    g.save();g.beginPath();g.roundRect(pad,10,58,58,16);g.clip();g.drawImage(portrait,pad,10,58,58);g.restore();
    text('KARIO MART',82,22,10,tokens.muted);text('Mario',82,42,18);text('Meadow Loop',82,60,12,tokens.muted,'normal');
    text('2nd',width-120,43,34,tokens.gold,'bold','center');text('POSITION',width-120,59,9,tokens.muted,'bold','center');text('Lap 2/3',width-24,40,13,tokens.ink,'bold','right');
    const help=$('kItemHint').textContent;text(help,pad,toolY+23,11,tokens.muted,'normal');
    round(width-pad-118,toolY,118,36,18,tokens.panel,tokens.border);round(width-pad-62,toolY+3,59,30,15,tokens.gold);text('Tilt',width-pad-88,toolY+23,12,tokens.muted,'bold','center');text('Touch',width-pad-32,toolY+23,12,tokens.bg,'bold','center');
    const leftW=tall?width-pad*2:(width-pad*2-14)/2,leftH=tall?(avail-14)*.9/1.9:avail;
    round(pad,top+6,leftW,leftH,28,'#030b17');round(pad,top,leftW,leftH,28,gradient(pad,top,leftH,'#254364',tokens.panel),tokens.border);text('STEER',pad+18,top+25,10,tokens.muted);
    const cx=pad+leftW/2,cy=top+leftH/2,r=Math.min(95,leftH*.39);
    g.beginPath();g.arc(cx,cy,r,0,Math.PI*2);g.fillStyle='#0c1a30';g.fill();g.strokeStyle=tokens.border;g.lineWidth=2;g.stroke();
    g.beginPath();g.arc(cx,cy,r-10,0,Math.PI*2);g.fillStyle=gradient(cx,cy-r,r*2,'#2f5076','#162b48');g.fill();
    g.beginPath();g.arc(cx,cy+6,r*.52,0,Math.PI*2);g.fillStyle='#35577c';g.fill();g.beginPath();g.arc(cx,cy,r*.52,0,Math.PI*2);g.fillStyle=gradient(cx,cy-r*.52,r,'#e4f2ff','#4e7ca9');g.fill();g.strokeStyle='#d5e8f8';g.lineWidth=3;g.stroke();
    text('◀',pad+30,cy+5,15,tokens.muted);text('▶',pad+leftW-42,cy+5,15,tokens.muted);text('Thumb anywhere · slide left or right',cx,top+leftH-13,10,tokens.muted,'normal','center');
    const rightX=tall?pad:pad+leftW+14,rightY=tall?top+leftH+14:top,rightW=leftW,rightH=tall?avail-leftH-14:avail,bw=(rightW-12)/2,bh=(rightH-12)/2;
    const controls=[['item',0,0,'#294a79','#173051',$('kItemName').textContent],['gas',1,0,'#305b58','#1c3e40','AUTO GAS'],['drift',0,1,'#afdfff',tokens.drift,'DRIFT'],['brake',1,1,'#ffbbc1',tokens.brake,'BRAKE']];
    for(const [kind,col,row,a,b,label]of controls){const x=rightX+col*(bw+12),y=rightY+row*(bh+12),cx=x+bw/2,cy=y+bh/2;
      round(x,y+6,bw,bh-6,24,'#020713');round(x,y,bw,bh-6,24,gradient(x,y,bh,a,b),kind==='item'?tokens.gold:kind==='gas'?'#447d75':'#ffffff40');
      const ink=kind==='item'?tokens.ink:kind==='gas'?'#9fe8d6':kind==='drift'?'#153b5c':'#5f2535';
      if(kind==='item'){const size=tall?62:46;g.drawImage(item,cx-size/2,cy-size/2-9,size,size);}else text(kind==='gas'?'↑↑':kind==='drift'?'↝':'Ⅱ',cx,cy+2,tall?40:30,ink,'bold','center');
      text(label,cx,y+bh-20,kind==='item'?11:13,ink,'bold','center');
    }
    fs.writeFileSync(`${output}/${name}.png`,canvas.toBuffer('image/png'));console.log('Wrote controller design render:',name);
  }
}
