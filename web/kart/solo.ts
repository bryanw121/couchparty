import {CouchEngine} from './game/couchEngine';
import {DRIVERS} from '../../src/games/kart-roster.js';
import {COURSES} from './game/tracks';
import {soundEngine} from './game/audio';
import {LocalControls} from './game/localControls';
const el=(id:string)=>document.getElementById(id)!;
const select=(id:string)=>el(id) as HTMLSelectElement;
const controls=new LocalControls();
let race:CouchEngine|undefined,paused=false,stickPointer:number|undefined,victory:HTMLAudioElement|undefined,victoryWanted=false;
for(const driver of DRIVERS){const option=document.createElement('option');option.value=driver.id;option.textContent=driver.name;select('driver').appendChild(option);}select('driver').value='ace';
for(const course of Object.values(COURSES)){const option=document.createElement('option');option.value=course.id;option.textContent=course.name;select('course').appendChild(option);}
el('status').textContent='Ready. Sound starts when you tap LET’S RACE.';
function send(){if(race&&!paused)race.setInput('local-player',controls.snapshot());}
function resetInputs(){controls.reset();stickPointer=undefined;el('thumb').style.transform='translate(-50%,-50%)';el('stick').setAttribute('aria-valuenow','0');document.querySelectorAll<HTMLElement>('[data-action]').forEach(button=>button.dataset.held='false');send();}
function pause(value:boolean){if(!race)return;paused=value;resetInputs();race.setInput('local-player',{steer:0,gas:false,brake:false,drift:false,item:false});race.setPaused(value);el('paused').hidden=!value;el('pause').textContent=value?'Resume':'Pause';el('pause').setAttribute('aria-pressed',String(value));if(value)victory?.pause();else{if(victoryWanted)void victory?.play().catch(()=>{});send();}}
function setup(){race?.dispose();race=undefined;victoryWanted=false;victory?.pause();victory=undefined;paused=false;resetInputs();el('setup').hidden=false;el('pause').hidden=true;el('restart').hidden=true;el('paused').hidden=true;}
el('start').onclick=()=>{
  paused=false;el('paused').hidden=true;el('pause').textContent='Pause';controls.reset();
  victoryWanted=false;victory?.pause();victory=undefined;
  soundEngine.init();const driver=DRIVERS.find(d=>d.id===select('driver').value)||DRIVERS[0];controls.autoGas=(el('autoGas') as HTMLInputElement).checked;
  document.querySelector<HTMLElement>('[data-action=gas]')!.hidden=controls.autoGas;
  el('actions').dataset.manual=String(!controls.autoGas);
  try{
    race=new CouchEngine(el('race'),{players:[{id:'local-player',name:driver.name,driver:driver.id,color:driver.color,topper:driver.topper}],course:select('course').value,speed:select('speed').value as 'fast',laps:3,cpus:select('opponents').value==='yes',quality:'high',music:true,practice:true,
      onCelebration(){victoryWanted=true;victory=new Audio('/game-assets/audio/kart-victory.mp3');victory.loop=true;victory.volume=.45;victory.muted=soundEngine.getMuted();if(!paused)void victory.play().catch(()=>{});},
      onFinish(){race?.dispose();race=undefined;paused=false;el('paused').hidden=true;resetInputs();el('setup').hidden=false;el('pause').hidden=true;el('restart').hidden=true;el('status').textContent='Race complete! Choose another course or driver.';},
    });
    el('setup').hidden=true;el('pause').hidden=false;el('restart').hidden=false;race.start();send();
  }catch(error){race?.dispose();race=undefined;el('setup').hidden=false;el('status').textContent='This device could not start the race. '+String(error);}
};
el('restart').onclick=setup;el('pause').onclick=()=>pause(!paused);
el('sound').onclick=()=>{soundEngine.init();const muted=soundEngine.toggleMute();el('sound').textContent=muted?'Sound off':'Sound on';el('sound').setAttribute('aria-pressed',String(!muted));if(victory)victory.muted=muted;};
const stick=el('stick');
function steer(event:PointerEvent){const box=stick.getBoundingClientRect(),value=Math.max(-1,Math.min(1,(event.clientX-box.left-box.width/2)/(box.width*.38)));controls.steer(-value);el('thumb').style.transform='translate(calc(-50% + '+(value*box.width*.32)+'px),-50%)';stick.setAttribute('aria-valuenow',String(Math.round(value*100)));send();}
stick.addEventListener('pointerdown',event=>{if(!race||paused||stickPointer!==undefined)return;event.preventDefault();stickPointer=event.pointerId;stick.setPointerCapture(event.pointerId);steer(event);});
stick.addEventListener('pointermove',event=>{if(event.pointerId===stickPointer)steer(event);});
const releaseStick=(event:PointerEvent)=>{if(event.pointerId!==stickPointer)return;stickPointer=undefined;controls.steer(0);el('thumb').style.transform='translate(-50%,-50%)';stick.setAttribute('aria-valuenow','0');send();};
for(const type of ['pointerup','pointercancel','lostpointercapture'])stick.addEventListener(type,releaseStick as EventListener);
document.querySelectorAll<HTMLElement>('[data-action]').forEach(button=>{
  button.addEventListener('pointerdown',event=>{if(!race||paused)return;event.preventDefault();button.setPointerCapture(event.pointerId);controls.hold('pointer-'+event.pointerId,button.dataset.action!);button.dataset.held='true';send();});
  const release=(event:PointerEvent)=>{controls.release('pointer-'+event.pointerId);button.dataset.held='false';send();};
  for(const type of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(type,release as EventListener);
});
const keys:Record<string,string>={ArrowLeft:'left',KeyA:'left',ArrowRight:'right',KeyD:'right',Space:'drift',KeyE:'item',Enter:'item',KeyS:'brake',ArrowDown:'brake',KeyW:'gas',ArrowUp:'gas',ShiftLeft:'back',ShiftRight:'back'};
addEventListener('keydown',event=>{if(!race||event.ctrlKey||event.metaKey||event.altKey)return;if(event.code==='Escape'){event.preventDefault();if(!event.repeat)pause(!paused);return;}if(keys[event.code]&&!paused){event.preventDefault();controls.hold('key-'+event.code,keys[event.code]);send();}});
addEventListener('keyup',event=>{if(!race||!keys[event.code])return;event.preventDefault();controls.release('key-'+event.code);send();});
addEventListener('blur',()=>pause(true));document.addEventListener('visibilitychange',()=>{if(document.hidden)pause(true);});
addEventListener('pagehide',()=>{race?.dispose();victory?.pause();});
