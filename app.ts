var audioCtx: AudioContext | undefined = undefined;
var masterGain: GainNode | undefined = undefined;
var distortion: WaveShaperNode | undefined = undefined;
var sineGain: GainNode | undefined = undefined;
var squareGain: GainNode | undefined = undefined;
var sawtoothGain: GainNode | undefined = undefined;
var triangleGain: GainNode | undefined = undefined;
var muted: boolean = true;

type Note = {
    name: string;
    frequency: number;
    sineOsc: OscillatorNode | undefined;
    squareOsc: OscillatorNode | undefined;
    sawtoothOsc: OscillatorNode | undefined;
    triangleOsc: OscillatorNode | undefined;
}

var c4: Note = { name: 'C4', frequency: 261.63,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var cs4: Note = { name: 'C#4/Db4', frequency: 277.18,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var d4: Note = { name: 'D4', frequency: 293.66, 
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var ds4: Note = { name: 'D#4/Eb4', frequency: 311.13,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var e4: Note = { name: 'E4', frequency: 329.63,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var f4: Note = { name: 'F4', frequency: 349.23,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var fs4: Note = { name: 'F#4/Gb4', frequency: 369.99,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined};
var g4: Note = { name: 'G4', frequency: 392.0,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var gs4: Note = { name: 'G#4/Ab4', frequency: 415.3,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var a4: Note = { name: 'A4', frequency: 440.0,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var as4: Note = { name: 'A#4/Bb4', frequency: 466.16,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var b4: Note = { name: 'B4', frequency: 493.88,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var c5: Note = { name: 'C5', frequency: 523.25,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var cs5: Note = { name: 'C#5/Db5', frequency: 554.37,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var d5: Note = { name: 'D5', frequency: 587.33,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var ds5: Note = { name: 'D#5/Eb5', frequency: 622.25,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var e5: Note = { name: 'E5', frequency: 659.25,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };

interface NoteMap {
    [key: string]: Note;
}

const noteMap: NoteMap = {
    'Q': c4,
    '2': cs4,
    'W': d4,
    '3': ds4,
    'E': e4,
    'R': f4,
    '5': fs4,
    'T': g4,
    '6': gs4,
    'Y': a4,
    '7': as4,
    'U': b4,
    'I': c5,
    '9': cs5,
    'O': d5,
    '0': ds5,
    'P': e5
};

interface keyMap {
    [key: string]: boolean;
}

var pressedKeyMap: keyMap = {};
var pressedNoteMap: keyMap = {};

document.onkeydown = (e) => {
    let keyStr: string = String(e.key).toUpperCase();
    pressedKeyMap[keyStr] = true;
    document.getElementById('key-view')!.innerHTML = JSON.stringify(pressedKeyMap);
    if (keyStr in noteMap) {
        let noteStr: string = noteMap[keyStr].name;
        if (!pressedNoteMap[noteStr]) {
            pressedNoteMap[noteStr] = true;
            const freq: number = noteMap[keyStr].frequency;

            let sinOsc: OscillatorNode = audioCtx!.createOscillator();
            sinOsc.type = <OscillatorType>"sine";
            sinOsc.frequency.setValueAtTime(freq, audioCtx!.currentTime);
            sinOsc.connect(sineGain!).connect(distortion!);

            let sqrOsc: OscillatorNode = audioCtx!.createOscillator();
            sqrOsc.type = <OscillatorType>"square";
            sqrOsc.frequency.setValueAtTime(freq, audioCtx!.currentTime);
            sqrOsc.connect(squareGain!).connect(distortion!);

            let sawOsc: OscillatorNode = audioCtx!.createOscillator();
            sawOsc.type = <OscillatorType>"sawtooth";
            sawOsc.frequency.setValueAtTime(freq, audioCtx!.currentTime);
            sawOsc.connect(squareGain!).connect(distortion!);

            let triOsc: OscillatorNode = audioCtx!.createOscillator();
            triOsc.type = <OscillatorType>"triangle";
            triOsc.frequency.setValueAtTime(freq, audioCtx!.currentTime);
            triOsc.connect(triangleGain!).connect(distortion!);

            distortion!.connect(masterGain!).connect(audioCtx!.destination);

            if (!muted) {
                sinOsc.start();
                sqrOsc.start();
                sawOsc.start();
                triOsc.start();
            }

            noteMap[keyStr].sineOsc = sinOsc;
            noteMap[keyStr].squareOsc = sqrOsc;
            noteMap[keyStr].sawtoothOsc = sawOsc;
            noteMap[keyStr].triangleOsc = triOsc;
        }
    }
    document.getElementById('note-press-view')!.innerHTML = JSON.stringify(pressedNoteMap);
}

document.onkeyup = (e) => {
    let keyStr: string = String(e.key).toUpperCase();
    pressedKeyMap[keyStr] = false;
    document.getElementById('key-view')!.innerHTML = JSON.stringify(pressedKeyMap);
    if (keyStr in noteMap) {
        let noteStr: string = noteMap[keyStr].name;
        pressedNoteMap[noteStr] = false;
        try {
            noteMap[keyStr].sineOsc!.stop();
            noteMap[keyStr].squareOsc!.stop();
            noteMap[keyStr].sawtoothOsc!.stop();
            noteMap[keyStr].triangleOsc!.stop();
        } catch {}
        noteMap[keyStr].sineOsc = undefined;
        noteMap[keyStr].squareOsc = undefined;
        noteMap[keyStr].sawtoothOsc = undefined;
        noteMap[keyStr].triangleOsc = undefined;
    }
    document.getElementById('note-press-view')!.innerHTML = JSON.stringify(pressedNoteMap);
}

document.getElementById('mute-unmute-btn')!.addEventListener('click', function() {
    muted = !muted;
    if (muted) {
        document.getElementById('mute-unmute-btn')!.innerHTML = "Unmute Synthesizer";
        for (const key in noteMap) {
            if (noteMap[key].sineOsc) {
                noteMap[key].sineOsc!.stop();
                noteMap[key].squareOsc!.stop();
                noteMap[key].sawtoothOsc!.stop();
                noteMap[key].triangleOsc!.stop();
            }
            noteMap[key].sineOsc = undefined;
            noteMap[key].squareOsc = undefined;
            noteMap[key].sawtoothOsc = undefined;
            noteMap[key].triangleOsc = undefined;
        }
    } else {
        document.getElementById('mute-unmute-btn')!.innerHTML = "Mute Synthesizer";
        for (const key in noteMap) {
            if (noteMap[key].sineOsc) {
                noteMap[key].sineOsc!.stop();
                noteMap[key].squareOsc!.stop();
                noteMap[key].sawtoothOsc!.stop();
                noteMap[key].triangleOsc!.stop();
            }
            noteMap[key].sineOsc = undefined;
            noteMap[key].squareOsc = undefined;
            noteMap[key].sawtoothOsc = undefined;
            noteMap[key].triangleOsc = undefined;
        }
    }
});

document.getElementById('master-gain-slider')!.addEventListener('input', function() {
    let slider = <HTMLInputElement>document.getElementById('master-gain-slider');
    let val: number = slider.valueAsNumber;
    masterGain!.gain.setValueAtTime(val, audioCtx!.currentTime);
    document.getElementById('master-gain-view')!.innerHTML = val.toString();
});

function getDistortionCurve(amount?: number): Float32Array {
    const k: number = typeof amount === "number" ? amount : 50;
    const n_samples: number = 44100;
    const curve: Float32Array = new Float32Array(n_samples);
    const deg: number = Math.PI / 180;
    for (let i = 0; i < n_samples; i++) {
        const x: number = (i * 2) / n_samples - 1;
        curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
}

document.getElementById('master-distortion-slider')!.addEventListener('input', function() {
    let slider = <HTMLInputElement>document.getElementById('master-distortion-slider');
    let val: number = slider.valueAsNumber;
    distortion!.curve = getDistortionCurve(val);
    document.getElementById('master-distortion-view')!.innerHTML = val.toString();
});

document.getElementById('sine-gain-slider')!.addEventListener('input', function() {
    let slider = <HTMLInputElement>document.getElementById('sine-gain-slider');
    let val: number = slider.valueAsNumber;
    sineGain!.gain.setValueAtTime(val, audioCtx!.currentTime);
    document.getElementById('sine-gain-view')!.innerHTML = val.toString();
});

document.getElementById('square-gain-slider')!.addEventListener('input', function() {
    let slider = <HTMLInputElement>document.getElementById('square-gain-slider');
    let val: number = slider.valueAsNumber;
    squareGain!.gain.setValueAtTime(val, audioCtx!.currentTime);
    document.getElementById('square-gain-view')!.innerHTML = val.toString();
});

document.getElementById('sawtooth-gain-slider')!.addEventListener('input', function() {
    let slider = <HTMLInputElement>document.getElementById('sawtooth-gain-slider');
    let val: number = slider.valueAsNumber;
    sawtoothGain!.gain.setValueAtTime(val, audioCtx!.currentTime);
    document.getElementById('sawtooth-gain-view')!.innerHTML = val.toString();
});

document.getElementById('triangle-gain-slider')!.addEventListener('input', function() {
    let slider = <HTMLInputElement>document.getElementById('triangle-gain-slider');
    let val: number = slider.valueAsNumber;
    triangleGain!.gain.setValueAtTime(val, audioCtx!.currentTime);
    document.getElementById('triangle-gain-view')!.innerHTML = val.toString();
});

window.addEventListener('load', function() {
    try {
        audioCtx = new AudioContext();
        masterGain = audioCtx.createGain();
        masterGain.gain.setValueAtTime(0.125, audioCtx.currentTime);
        distortion = audioCtx.createWaveShaper();
        distortion.curve = getDistortionCurve(0);
        distortion.oversample = <OverSampleType>"2x";
        sineGain = audioCtx.createGain();
        sineGain.gain.setValueAtTime(0.125, audioCtx.currentTime);
        squareGain = audioCtx.createGain();
        squareGain.gain.setValueAtTime(0.125, audioCtx.currentTime);
        sawtoothGain = audioCtx.createGain();
        sawtoothGain.gain.setValueAtTime(0.125, audioCtx.currentTime);
        triangleGain = audioCtx.createGain();
        triangleGain.gain.setValueAtTime(0.125, audioCtx.currentTime);
    } catch (error) {
        alert("The JavaScript Web Audio API is not supported by this browser.");
    }
});