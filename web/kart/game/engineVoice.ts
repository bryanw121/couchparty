// A combustion loop rather than a sustained musical oscillator. Deterministic for export/testing.
export function combustionLoop(sampleRate:number):Float32Array {
  const samples=new Float32Array(sampleRate);let seed=121,air=0;
  for(let i=0;i<samples.length;i++){
    seed=(Math.imul(seed,1664525)+1013904223)>>>0;
    const noise=seed/4294967296*2-1;air=air*.86+noise*.14;
    const phase=(i*60/sampleRate)%1;
    const pulse=Math.exp(-phase*13)*Math.sin(phase*Math.PI*10);
    const rumble=Math.sin(phase*Math.PI*2)*.32+Math.sin(phase*Math.PI*4)*.13+Math.sin(phase*Math.PI*6)*.06;
    const envelope=.95+.05*Math.sin(i/sampleRate*Math.PI*8);
    const noiseWindow=Math.sin(Math.PI*i/(samples.length-1))**2;
    samples[i]=(rumble+pulse*.52+air*.12*noiseWindow)*envelope;
  }
  // Periodic firing harmonics and a zero-ended noise envelope avoid a loop-boundary click.
  return samples;
}

export function engineVoice(speed:number,throttle:boolean,boost:boolean){
  const s=Math.min(1.6,Math.max(0,Number.isFinite(speed)?Math.abs(speed):0));
  const gear=s<.34?0:s<.72?1:2;
  const low=[0,.34,.72][gear],high=[.34,.72,1.3][gear];
  const rev=Math.min(1,Math.max(0,(s-low)/(high-low)));
  const hz=58+rev*72+(throttle?9:0)+(boost?28:0);
  return {rate:hz/60,subHz:hz*.5,filter:420+rev*1100+(throttle?220:0)+(boost?350:0),gain:.055+s*.035+(throttle?.035:0),air:throttle?.008+s*.012:0};
}
