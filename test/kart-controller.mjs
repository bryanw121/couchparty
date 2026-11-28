import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
class Target {
  listeners=new Map();style={};dataset={};classes=new Set();
  classList={add:(...x)=>x.forEach(v=>this.classes.add(v)),remove:(...x)=>x.forEach(v=>this.classes.delete(v)),toggle:(v,on)=>on?this.classes.add(v):this.classes.delete(v)};
  addEventListener(type,fn){const list=this.listeners.get(type)||[];list.push(fn);this.listeners.set(type,list);}
  emit(type,event={}){for(const fn of this.listeners.get(type)||[])fn({preventDefault(){},button:0,...event});}
  setPointerCapture(){if(this.failCapture)throw Error('capture unavailable');}
  hasPointerCapture(){return false;}
  getBoundingClientRect(){return {top:0,bottom:100,height:100};}
}
const html=fs.readFileSync('public/play.html','utf8'),nodes=new Map(),$=id=>{if(!nodes.has(id))nodes.set(id,new Target());return nodes.get(id);};
const win=new Target(),doc=new Target();doc.hidden=false;doc.querySelectorAll=()=>[...nodes.values()];
const sent=[],K={active:true,steerMode:'stick',stick:0,brake:false,aim:'front'};
const context=vm.createContext({K,$,window:win,document:doc,Date,send:m=>sent.push(m),buzz(){},setSteerMode(){}});
vm.runInContext(html.slice(html.indexOf('function kartSend(force)'),html.indexOf("$('kRecenter').onclick")),context);
const stick=$('kStick'),gas=$('kGas'),drift=$('kDrift');
stick.emit('pointerdown',{pointerId:1,clientX:100,clientY:100});
stick.emit('pointermove',{pointerId:1,clientX:150,clientY:160});assert.equal(K.brake,true);assert.ok(K.stick<0);
stick.emit('pointerdown',{pointerId:2,clientX:300,clientY:300});
win.emit('pointerup',{pointerId:2});assert.equal(K.brake,true,'second finger cannot steal or release steering');
stick.emit('lostpointercapture',{pointerId:1});assert.equal(K.stick,0);assert.equal(K.brake,false);
// Capture failure still receives a release outside the control.
gas.failCapture=true;gas.emit('pointerdown',{pointerId:3,clientY:99});assert.equal(K.brake,true);
win.emit('pointerup',{pointerId:3});assert.equal(K.brake,false);assert.equal(K.gas,false);
// Steering + drift + item remain independent.
stick.emit('pointerdown',{pointerId:4,clientX:50,clientY:50});
stick.emit('pointermove',{pointerId:4,clientX:0,clientY:50});
drift.emit('pointerdown',{pointerId:5});$('kItem').emit('pointerdown',{pointerId:6,clientY:10});
win.emit('pointercancel',{pointerId:5});assert.equal(K.drift,false);assert.equal(K.item,true);assert.ok(K.stick>0);
win.emit('blur');assert.equal(K.stick,0);assert.equal(K.item,false);assert.equal(K.stickId,null);assert.equal(sent.at(-1).g,false);
win.emit('focus');stick.emit('pointerdown',{pointerId:7,clientX:50,clientY:50});
stick.emit('pointermove',{pointerId:7,clientX:100,clientY:100});assert.ok(K.stick<0);
win.emit('pagehide');assert.equal(K.stick,0);assert.equal(K.brake,false);
win.emit('pageshow');assert.equal(K.background,false);
gas.emit('pointerdown',{pointerId:8,clientY:99});context.clearKartFocus(false);assert.equal(K.brake,false);
gas.emit('pointermove',{pointerId:8,clientY:99});assert.equal(K.brake,false,'old gesture cannot revive after reset');
gas.emit('pointerdown',{pointerId:9,clientY:1});assert.equal(K.gas,true);
gas.emit('lostpointercapture',{pointerId:8});assert.equal(K.gas,true,'stale lost-capture cannot cancel a new gesture');
win.emit('pointerup',{pointerId:9});assert.equal(K.gas,false);
context.screen={orientation:{angle:0}};
vm.runInContext(html.slice(html.indexOf('function tiltAngle(e)'),html.indexOf('async function enableTilt()')),context);
K.steerMode='tilt';K.steer=1;K.ref=0;
context.onMotion({accelerationIncludingGravity:{x:0,y:0}});assert.equal(K.steer,0,'flat phone cannot latch an old steering angle');
context.onMotion({accelerationIncludingGravity:{x:6,y:8}});assert.ok(K.steer>0);
K.lastMotionAt=Date.now()-2000;context.kartSend(true);assert.equal(sent.at(-1).s,0,'sensor interruption neutralizes steering despite heartbeats');
context.clearKartFocus(true);context.onMotion({accelerationIncludingGravity:{x:6,y:8}});assert.equal(K.steer,0,'background sensor cannot revive steering');
console.log('PASS phone controller: lost capture, capture failure, second finger, multi-control release, focus/page lifecycle and fresh gestures');
