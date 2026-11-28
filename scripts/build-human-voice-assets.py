"""Decode licensed source recordings with Blender's offline audio library."""
import aud, base64, json, pathlib, numpy as np
root=pathlib.Path(__file__).resolve().parent.parent
clips={}
for source in sorted((root/'audio/human').iterdir()):
    if source.suffix not in ('.ogg','.mp3'): continue
    samples=aud.Sound.file(str(source)).rechannel(1).resample(22050).data().reshape(-1)
    assert np.isfinite(samples).all()
    # Trim silence while retaining breaths/onsets and the natural performance.
    indices=np.flatnonzero(np.abs(samples)>.008)
    assert len(indices)>0
    samples=samples[max(0,int(indices[0])-330):min(len(samples),int(indices[-1])+660)]
    # Group celebration is a short finish sting, rather than a long crowd loop.
    if source.stem=='cheers': samples=samples[:int(2.2*22050)]
    samples=samples.astype(np.float64)
    samples-=samples.mean()
    peak=float(np.max(np.abs(samples)))
    samples*=min(2.0,.82/max(peak,.001))
    fade=min(220,len(samples)//4)
    samples[:fade]*=np.linspace(0,1,fade)
    samples[-fade:]*=np.linspace(1,0,fade)
    pcm=(np.clip(samples,-1,1)*32767).astype('<i2')
    clips[source.stem]={'rate':22050,'pcm':base64.b64encode(pcm.tobytes()).decode('ascii')}
    print(source.stem,round(len(samples)/22050,2),'seconds')
target=root/'web/kart/game/human-voice-assets.json'
target.write_text(json.dumps(clips,separators=(',',':')),encoding='utf8')
print('Packed',len(clips),'recordings:',target.stat().st_size,'bytes')
