export const SOLO_SETTINGS_KEY='kario:solo:settings:v1';
export type SoloSettings={driver:string;course:string;speed:'chill'|'fast'|'turbo';quality:'standard'|'high'|'low';opponents:'yes'|'no';autoGas:boolean;music:number;effects:number;sensitivity:number};
export const DEFAULT_SOLO:SoloSettings={driver:'ace',course:'meadow',speed:'fast',quality:'standard',opponents:'yes',autoGas:true,music:.75,effects:.8,sensitivity:1};
export function formatRaceTime(time:number|null){if(time===null||!Number.isFinite(time)||time<0)return '—';const hundredths=Math.round(time*100);return Math.floor(hundredths/6000)+':'+((hundredths%6000)/100).toFixed(2).padStart(5,'0');}
export function parseSoloSettings(value:unknown):SoloSettings{
  const raw=value&&typeof value==='object'?value as Record<string,unknown>:{};
  const pick=(key:keyof SoloSettings,choices:unknown[])=>choices.includes(raw[key])?raw[key]:DEFAULT_SOLO[key];
  const number=(key:'music'|'effects'|'sensitivity',low:number,high:number)=>typeof raw[key]==='number'&&Number.isFinite(raw[key])?Math.max(low,Math.min(high,raw[key] as number)):DEFAULT_SOLO[key];
  return {driver:pick('driver',['ace','tabby','lulu','bunbun','rex','zippy','duke','grizz']) as string,course:pick('course',['meadow','sunset','frosty','neon']) as string,speed:pick('speed',['chill','fast','turbo']) as SoloSettings['speed'],quality:pick('quality',['standard','high','low']) as SoloSettings['quality'],opponents:pick('opponents',['yes','no']) as SoloSettings['opponents'],autoGas:typeof raw.autoGas==='boolean'?raw.autoGas:true,music:number('music',0,1),effects:number('effects',0,1),sensitivity:number('sensitivity',.6,1.4)};
}
export function readSoloSettings(storage:Pick<Storage,'getItem'>|null){try{return parseSoloSettings(JSON.parse(storage?.getItem(SOLO_SETTINGS_KEY)||'null'));}catch{return {...DEFAULT_SOLO};}}
export function saveSoloSettings(storage:Pick<Storage,'setItem'>|null,value:SoloSettings){try{storage?.setItem(SOLO_SETTINGS_KEY,JSON.stringify(parseSoloSettings(value)));return !!storage;}catch{return false;}}
