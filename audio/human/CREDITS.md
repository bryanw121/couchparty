# Recorded voice effects

All included recordings are distributed under **CC0 1.0 Universal**:
https://creativecommons.org/publicdomain/zero/1.0/

- `male-*.ogg`, `female-*.ogg`: Kenney, **Voiceover Pack**.
  Official source and CC0 declaration: https://kenney.nl/assets/voiceover-pack
  Download mirror: https://github.com/Mcamento8/open-game-sfx-index/tree/main/audio/voiceover-pack
  Included phrases: Go, Power up, Look out, You win, Congratulations.
  These are spoken audio assets; the source page does not identify individual performers.
- `hurt-01.mp3`, `hurt-03.mp3`: EZduzziteh, **Hurt Sound Effects**.
  Human-recorded impact vocalizations, made for a game jam.
  Source and CC0 declaration: https://opengameart.org/content/hurt-sound-effects
- `cheers.ogg`: Nocturnal_Vanguard / AuraVoice, **Cheers**.
  Human-recorded group celebration.
  Source and CC0 declaration: https://opengameart.org/content/cheers-0

The original files are retained here. `scripts/build-human-voice-assets.py`
decodes them to mono 22,050 Hz PCM, trims silence, adjusts level, applies short
edge fades and embeds the result in `web/kart/game/human-voice-assets.json`.
Runtime applies small character-specific playback-rate adjustments. Finish calls
include a quieter group cheer. The embedded samples play through the effects
volume/mute bus, without additional network requests during a race.

These are not Nintendo recordings or performances of Nintendo character voices.
