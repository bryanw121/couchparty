import {soundEngine} from './audio';

export type DriverCall='start'|'boost'|'trick'|'hit'|'item'|'overtake'|'finish';
// Original, nonverbal character calls. Different resonances, delivery and rhythm,
// rather than one voice shifted up/down. These are not Nintendo recordings.
export const DRIVER_VOICES:Record<string,{pitch:number;resonance:number;rough:number;air:number;tempo:number;rhythm:number[]}>={
  cap:{pitch:290,resonance:1,rough:.04,air:.01,tempo:1,rhythm:[1,1.5]},
  cat:{pitch:240,resonance:.92,rough:.07,air:.035,tempo:.86,rhythm:[.75,1.15,1.4]},
  bunny:{pitch:350,resonance:1.12,rough:.04,air:.02,tempo:1.15,rhythm:[1.3,1,.95]},
  bow:{pitch:385,resonance:1.04,rough:.015,air:.045,tempo:.94,rhythm:[1,1.35]},
  crown:{pitch:105,resonance:.63,rough:.4,air:.09,tempo:.78,rhythm:[1,.72]},
  horns:{pitch:470,resonance:1.4,rough:.015,air:0,tempo:1.3,rhythm:[1,1.8,.85]},
  antenna:{pitch:540,resonance:1.23,rough:.22,air:.025,tempo:1.2,rhythm:[1.4,1.05]},
  bear:{pitch:145,resonance:.72,rough:.28,air:.08,tempo:.86,rhythm:[.8,1.2,.9]},
};
const VOWELS=[[650,1150,2600],[370,800,2350],[300,1900,2750],[500,1500,2500]];
const patterns:Record<DriverCall,number[]>={start:[0,1],boost:[2,0,1],trick:[1,2,0],hit:[0,1],item:[2],overtake:[3,0],finish:[0,2,0,1]};
export function driverVoiceSamples(topper:string,call:DriverCall,rate=44100,variant=0){
  const p=DRIVER_VOICES[topper]||DRIVER_VOICES.cap,pattern=patterns[call];
  const segment=(call==='finish'?.16:call==='hit'?.19:.115)/p.tempo;
  const length=segment*pattern.length+.045;
  const data=new Float32Array(Math.ceil(length*rate));
  const weights=pattern.map((v,index)=>{
    const vowel=VOWELS[(v+variant)%VOWELS.length];
    const pitch=p.pitch*p.rhythm[index%p.rhythm.length]*(1+variant*.025)*(call==='hit'?1.075:call==='finish'?1.15:1.04);
    return Array.from({length:36},(_,n)=>{
      const harmonic=n+1,f=pitch*harmonic;
      let weight=.025/harmonic;
      for(let band=0;band<3;band++)weight+=[1,.48,.2][band]*Math.exp(-.5*((f-vowel[band]*p.resonance)/(110+band*60))**2)/Math.sqrt(harmonic);
      return weight;
    });
  });
  let phase=0,seed=12345+variant*271;
  for(let i=0;i<data.length;i++){
    const t=i/rate,index=Math.floor(t/segment);if(index>=pattern.length)continue;
    const local=t-index*segment,u=local/segment;
    const envelope=Math.min(1,local/.012)*Math.min(1,(segment-local)/.035);
    let glide=call==='hit'?1.4-u*.65:call==='finish'?1+u*.3:1.12-u*.16;
    glide*=p.rhythm[index%p.rhythm.length]*(1+variant*.025);
    const fundamental=p.pitch*glide*(1+.015*Math.sin(t*2*Math.PI*6));
    phase+=2*Math.PI*fundamental/rate;
    let voiced=0;
    for(let harmonic=1;harmonic<=36&&fundamental*harmonic<rate*.43;harmonic++){
      voiced+=Math.sin(phase*harmonic)*weights[index][harmonic-1];
    }
    seed=(Math.imul(seed,1664525)+1013904223)>>>0;
    const air=(seed/4294967296*2-1)*p.air;
    const growl=1-p.rough*(.5+.5*Math.sin(2*Math.PI*37*t));
    data[i]=Math.tanh((voiced*growl+air)*1.5)*.52*envelope;
  }
  return data;
}

const priority:Record<DriverCall,number>={start:1,item:1,boost:2,overtake:2,trick:3,hit:4,finish:5};
// One foreground voice at a time keeps four-player races intelligible.
// Instance-owned sources stop on pause/dispose, with no queued timeout callbacks.
export class DriverVoiceDirector {
  private last=new Map<string,{at:number;priority:number}>();
  private variants=new Map<string,number>();
  private buffers=new WeakMap<AudioContext,Map<string,AudioBuffer>>();
  private active?:{source:AudioBufferSourceNode;gain:GainNode;end:number;priority:number};
  play(racer:string,topper:string,call:DriverCall){
    const audio=soundEngine.output();if(!audio||audio.ctx.state!=='running')return false;
    const {ctx,out}=audio,now=ctx.currentTime;
    const previous=this.last.get(racer);
    if(call!=='finish'&&previous&&now-previous.at<1.4&&priority[call]<=previous.priority)return false;
    if(this.active&&now<this.active.end){if(priority[call]<=this.active.priority)return false;this.stop();}
    const variant=this.variants.get(racer)||0;
    let cache=this.buffers.get(ctx);if(!cache){cache=new Map();this.buffers.set(ctx,cache);}
    const key=topper+':'+call+':'+variant;
    let buffer=cache.get(key);if(!buffer){const data=driverVoiceSamples(topper,call,ctx.sampleRate,variant);buffer=ctx.createBuffer(1,data.length,ctx.sampleRate);buffer.copyToChannel(data,0);cache.set(key,buffer);}
    const source=ctx.createBufferSource(),gain=ctx.createGain();source.buffer=buffer;gain.gain.value=.48;
    source.connect(gain).connect(out);source.start(now);
    this.active={source,gain,end:now+buffer.length/ctx.sampleRate+.18,priority:priority[call]};
    source.onended=()=>{source.disconnect();gain.disconnect();if(this.active?.source===source)this.active=undefined;};
    this.last.set(racer,{at:now,priority:priority[call]});this.variants.set(racer,(variant+1)%3);return true;
  }
  stop(){const active=this.active;this.active=undefined;if(active){try{active.source.stop();}catch{}active.source.disconnect();active.gain.disconnect();}}
}
