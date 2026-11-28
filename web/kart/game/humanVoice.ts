import recordings from './human-voice-assets.json';
import type {DriverCall} from './driverVoice';

const clips=recordings as Record<string,{rate:number;pcm:string}>;
const decoded=new Map<string,Float32Array>();
const characterRate:Record<string,number>={cap:1,cat:1.07,bunny:1.04,bow:1.1,crown:.82,horns:1.3,antenna:1.22,bear:.9};
export function humanVoiceClip(topper:string,call:DriverCall,variant=0){
  const female=topper==='bunny'||topper==='bow';
  const voice=female?'female':'male';
  if(call==='hit')return female?'female-war_look_out':variant%2?'hurt-03':'hurt-01';
  if(call==='win')return voice+'-you_win';
  if(call==='finish')return voice+'-congratulations';
  if(call==='boost'||call==='item')return voice+'-power_up';
  return voice+'-go';
}
function decode(name:string){
  let data=decoded.get(name);if(data)return data;
  const raw=atob(clips[name].pcm);data=new Float32Array(raw.length/2);
  for(let i=0;i<data.length;i++){const word=raw.charCodeAt(i*2)|(raw.charCodeAt(i*2+1)<<8);data[i]=(word>=32768?word-65536:word)/32768;}
  decoded.set(name,data);return data;
}
export function humanVoiceSamples(topper:string,call:DriverCall,rate=44100,variant=0){
  const name=humanVoiceClip(topper,call,variant),source=decode(name);
  const speed=(characterRate[topper]||1)*(1+(variant%3-1)*.025);
  const ratio=clips[name].rate/rate*speed;
  const data=new Float32Array(Math.ceil(source.length/ratio));
  for(let i=0;i<data.length;i++){const at=i*ratio,left=Math.floor(at),mix=at-left;data[i]=((source[left]||0)*(1-mix)+(source[left+1]||0)*mix)*.64;}
  data[0]=data[data.length-1]=0;
  if(call==='finish'||call==='win'){
    const cheer=humanCheerSamples(rate),combined=new Float32Array(data.length+Math.floor(rate*.12)+cheer.length);
    combined.set(data);combined.set(cheer,data.length+Math.floor(rate*.12));return combined;
  }
  return data;
}
export function humanCheerSamples(rate=44100){
  const source=decode('cheers'),ratio=clips.cheers.rate/rate,data=new Float32Array(Math.ceil(source.length/ratio));
  for(let i=0;i<data.length;i++){const at=i*ratio,left=Math.floor(at),mix=at-left;data[i]=((source[left]||0)*(1-mix)+(source[left+1]||0)*mix)*.36;}
  data[0]=data[data.length-1]=0;return data;
}
