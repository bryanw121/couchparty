export type Instrument='piano'|'marimba'|'brass'|'strings'|'bass';
// Original sample synthesis: rounded harmonic instruments rather than square-wave leads.
export function instrumentSamples(kind:Instrument,frequency:number,duration:number,sampleRate=44100){
  const length=Math.max(.08,Math.min(5,duration)),samples=new Float32Array(Math.ceil((length+.12)*sampleRate));
  for(let i=0;i<samples.length;i++){
    const t=i/sampleRate,p=2*Math.PI*frequency*t,attack=1-Math.exp(-t/(kind==='strings'?.12:kind==='brass'?.03:.004));
    const release=Math.max(0,Math.min(1,(length+.12-t)/.12));
    let value=0,decay=1;
    if(kind==='piano'){value=Math.sin(p)+.35*Math.sin(p*2.002)*Math.exp(-t*5)+.16*Math.sin(p*3.006)*Math.exp(-t*9)+.07*Math.sin(p*4.01)*Math.exp(-t*14);decay=Math.exp(-t*2.8/length);}
    if(kind==='marimba'){value=Math.sin(p)+(frequency*3.99<sampleRate*.45?.28*Math.sin(p*3.99)*Math.exp(-t*13):0)+(frequency*9.98<sampleRate*.45?.1*Math.sin(p*9.98)*Math.exp(-t*22):0);decay=Math.exp(-t*4/length);}
    if(kind==='brass'){for(let k=1;k<7;k++)value+=Math.sin(p*k+Math.sin(t*31)*.008*k)/(k*k);decay=.7+.3*Math.exp(-t*8);}
    if(kind==='strings'){value=.5*(Math.sin(p*.998)+Math.sin(p*1.002))+.15*Math.sin(p*2)+.065*Math.sin(p*3);decay=.8;}
    if(kind==='bass'){value=Math.sin(p)+.24*Math.sin(p*2)*Math.exp(-t*8);decay=Math.exp(-t*2/length);}
    samples[i]=value*attack*release*decay*.65;
  }
  return samples;
}
