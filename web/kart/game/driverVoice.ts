import {soundEngine} from './audio';
import {humanVoiceSamples} from './humanVoice';

export type DriverCall='start'|'boost'|'trick'|'hit'|'item'|'overtake'|'finish'|'win';
// Human performances replace the previous oscillator/formant calls.
// Small playback-rate differences retain each driver's identity.
export const driverVoiceSamples=humanVoiceSamples;

const priority:Record<DriverCall,number>={start:1,item:1,boost:2,overtake:2,trick:3,hit:4,finish:5,win:5};
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
    if(call!=='finish'&&call!=='win'&&previous&&now-previous.at<1.4&&priority[call]<=previous.priority)return false;
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
