JavaScript Web Audio API Multi-Oscillator Synthesizer (written in TypeScript). Maps keyboard keys to notes using 12-tone equal temperment tuning, similar to FL Studio.

Try out the multi oscillator synthesizer online [here](https://web-multi-synth.vercel.app/)

BUILD: tsc && npm run prod; then open public/index.html in browser

TODO:
  - playing too many notes or if you are playing around with parameters and a lot of notes are pressed it can cause the application to crash / strutter / leave notes playing when releasing the key; which you can simply restart with a page reload to fix (but still would like to prevent crashes)
  - can add other effects like delay, filtering
  - could make the effects modular; as in the user can add / change order of effects (more complicated obviously)

Try out the first edition single oscillator synthesizer [here](https://rmb-synth.vercel.app/)

Visit the repo for the first edition [here](https://github.com/rolinmb/web-synth)
