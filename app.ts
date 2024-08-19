var audioCtx: AudioContext | undefined = undefined;
var masterComp: DynamicsCompressorNode | undefined = undefined;
var masterGain: GainNode | undefined = undefined;
var masterDist: WaveShaperNode | undefined = undefined;
var sineGain: GainNode | undefined = undefined;
var squareGain: GainNode | undefined = undefined;
var sawtoothGain: GainNode | undefined = undefined;
var triangleGain: GainNode | undefined = undefined;
var customGain: GainNode | undefined = undefined;
var customWave: PeriodicWave | undefined = undefined;
var muted: boolean = true;

type Note = {
    name: string,
    frequency: number,
    isPressed: boolean,
    sineOsc: OscillatorNode | undefined,
    squareOsc: OscillatorNode | undefined,
    sawtoothOsc: OscillatorNode | undefined,
    triangleOsc: OscillatorNode | undefined,
    customOsc: OscillatorNode | undefined,
}

var c4: Note = { name: 'C4', frequency: 261.63, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var cs4: Note = { name: 'C#4/Db4', frequency: 277.18, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var d4: Note = { name: 'D4', frequency: 293.66,  isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var ds4: Note = { name: 'D#4/Eb4', frequency: 311.13, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var e4: Note = { name: 'E4', frequency: 329.63, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var f4: Note = { name: 'F4', frequency: 349.23, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var fs4: Note = { name: 'F#4/Gb4', frequency: 369.99, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var g4: Note = { name: 'G4', frequency: 392.0, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var gs4: Note = { name: 'G#4/Ab4', frequency: 415.3, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var a4: Note = { name: 'A4', frequency: 440.0, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var as4: Note = { name: 'A#4/Bb4', frequency: 466.16, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var b4: Note = { name: 'B4', frequency: 493.88, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var c5: Note = { name: 'C5', frequency: 523.25, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var cs5: Note = { name: 'C#5/Db5', frequency: 554.37, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var d5: Note = { name: 'D5', frequency: 587.33, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var ds5: Note = { name: 'D#5/Eb5', frequency: 622.25, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var e5: Note = { name: 'E5', frequency: 659.25, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };

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
    let keyChar: string = String(e.key).toUpperCase();
    pressedKeyMap[keyChar] = true;
    document.getElementById('key-view')!.innerHTML = JSON.stringify(pressedKeyMap);
    if (keyChar in noteMap) {
        let noteName: string = noteMap[keyChar].name;
        if (!pressedNoteMap[noteName]) {
            pressedNoteMap[noteName] = true;
            const freq: number = noteMap[keyChar].frequency;

            let sinOsc: OscillatorNode = audioCtx!.createOscillator();
            sinOsc.type = <OscillatorType>"sine";
            sinOsc.frequency.setValueAtTime(freq, audioCtx!.currentTime);
            sinOsc.connect(sineGain!).connect(masterDist!).connect(masterComp!);

            let sqrOsc: OscillatorNode = audioCtx!.createOscillator();
            sqrOsc.type = <OscillatorType>"square";
            sqrOsc.frequency.setValueAtTime(freq, audioCtx!.currentTime);
            sqrOsc.connect(squareGain!).connect(masterDist!).connect(masterComp!);

            let sawOsc: OscillatorNode = audioCtx!.createOscillator();
            sawOsc.type = <OscillatorType>"sawtooth";
            sawOsc.frequency.setValueAtTime(freq, audioCtx!.currentTime);
            sawOsc.connect(squareGain!).connect(masterDist!).connect(masterComp!);

            let triOsc: OscillatorNode = audioCtx!.createOscillator();
            triOsc.type = <OscillatorType>"triangle";
            triOsc.frequency.setValueAtTime(freq, audioCtx!.currentTime);
            triOsc.connect(triangleGain!).connect(masterDist!).connect(masterComp!);

            let cstmOsc: OscillatorNode = audioCtx!.createOscillator();
            cstmOsc.setPeriodicWave(customWave!);
            cstmOsc.frequency.setValueAtTime(freq, audioCtx!.currentTime);
            cstmOsc.connect(customGain!).connect(masterDist!).connect(masterComp!);

            masterComp!.connect(masterGain!).connect(audioCtx!.destination);

            if (!muted) {
                sinOsc.start();
                sqrOsc.start();
                sawOsc.start();
                triOsc.start();
                cstmOsc.start();
            }

            noteMap[keyChar].sineOsc = sinOsc;
            noteMap[keyChar].squareOsc = sqrOsc;
            noteMap[keyChar].sawtoothOsc = sawOsc;
            noteMap[keyChar].triangleOsc = triOsc;
            noteMap[keyChar].customOsc = cstmOsc;
        }
    }
    document.getElementById('note-press-view')!.innerHTML = JSON.stringify(pressedNoteMap);
}

document.onkeyup = (e) => {
    let keyChar: string = String(e.key).toUpperCase();
    pressedKeyMap[keyChar] = false;
    document.getElementById('key-view')!.innerHTML = JSON.stringify(pressedKeyMap);
    if (keyChar in noteMap) {
        let noteName: string = noteMap[keyChar].name;
        pressedNoteMap[noteName] = false;
        try {
            noteMap[keyChar].sineOsc!.stop();
            noteMap[keyChar].squareOsc!.stop();
            noteMap[keyChar].sawtoothOsc!.stop();
            noteMap[keyChar].triangleOsc!.stop();
            noteMap[keyChar].customOsc!.stop();
        } catch {}
        noteMap[keyChar].sineOsc = undefined;
        noteMap[keyChar].squareOsc = undefined;
        noteMap[keyChar].sawtoothOsc = undefined;
        noteMap[keyChar].triangleOsc = undefined;
        noteMap[keyChar].customOsc = undefined;
    }
    document.getElementById('note-press-view')!.innerHTML = JSON.stringify(pressedNoteMap);
}

document.getElementById('mute-unmute-btn')!.addEventListener('click', function() {
    muted = !muted;
    if (muted) {
        document.getElementById('mute-unmute-btn')!.innerHTML = "unmute";
    } else {
        document.getElementById('mute-unmute-btn')!.innerHTML = "mute";
    }
    for (const key in noteMap) {
    	if (noteMap[key].sineOsc) {
            noteMap[key].sineOsc!.stop();
            noteMap[key].squareOsc!.stop();
            noteMap[key].sawtoothOsc!.stop();
            noteMap[key].triangleOsc!.stop();
            noteMap[key].customOsc!.stop();
        }
        noteMap[key].sineOsc = undefined;
        noteMap[key].squareOsc = undefined;
        noteMap[key].sawtoothOsc = undefined;
	    noteMap[key].triangleOsc = undefined;
        noteMap[key].customOsc = undefined;
    }
});

document.getElementById('master-gain-slider')!.addEventListener('input', function() {
    let slider = <HTMLInputElement>document.getElementById('master-gain-slider');
    let val: number = slider.valueAsNumber;
    masterGain!.gain.setValueAtTime(val, audioCtx!.currentTime);
    document.getElementById('master-gain-view')!.innerHTML = val.toString();
});

document.getElementById('master-threshold-slider')!.addEventListener('input', function() {
    let slider = <HTMLInputElement>document.getElementById('master-threshold-slider');
    let val: number = slider.valueAsNumber;
    masterComp!.threshold.setValueAtTime(val, audioCtx!.currentTime);
    document.getElementById('master-threshold-view')!.innerHTML = val.toString();
});

document.getElementById('master-knee-slider')!.addEventListener('input', function() {
    let slider = <HTMLInputElement>document.getElementById('master-knee-slider');
    let val: number = slider.valueAsNumber;
    masterComp!.knee.setValueAtTime(val, audioCtx!.currentTime);
    document.getElementById('master-knee-slider')!.innerHTML = val.toString();
});

document.getElementById('master-ratio-slider')!.addEventListener('input', function() {
    let slider = <HTMLInputElement>document.getElementById('master-ratio-slider');
    let val: number = slider.valueAsNumber;
    masterComp!.ratio.setValueAtTime(val, audioCtx!.currentTime);
    document.getElementById('master-ratio-view')!.innerHTML = val.toString();
});

document.getElementById('master-attack-slider')!.addEventListener('input', function() {
    let slider = <HTMLInputElement>document.getElementById('master-attack-slider');
    let val: number = slider.valueAsNumber;
    masterComp!.attack.setValueAtTime(val, audioCtx!.currentTime);
    document.getElementById('master-attack-view')!.innerHTML = val.toString();
});

document.getElementById('master-release-slider')!.addEventListener('input', function() {
    let slider = <HTMLInputElement>document.getElementById('master-release-slider');
    let val: number = slider.valueAsNumber;
    masterComp!.release.setValueAtTime(val, audioCtx!.currentTime);
    document.getElementById('master-release-view')!.innerHTML = val.toString();
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
    masterDist!.curve = getDistortionCurve(val);
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

document.getElementById('custom-gain-slider')!.addEventListener('input', function() {
    let slider = <HTMLInputElement>document.getElementById('custom-gain-slider');
    let val: number = slider.valueAsNumber;
    customGain!.gain.setValueAtTime(val, audioCtx!.currentTime);
    document.getElementById('custom-gain-view')!.innerHTML = val.toString();
});

document.getElementById('custom-harmonics-slider')!.addEventListener('input', function() {
    let slider = <HTMLInputElement>document.getElementById('custom-harmonics-slider');
    let val: number = slider.valueAsNumber;
    document.getElementById('custom-harmonics-view')!.innerHTML = val.toString();
});

function paintWaveform(real: number[], imag: number[]) {
    let canvas = <HTMLCanvasElement>document.getElementById('custom-waveform-canvas');
    const canvasCtx = canvas.getContext('2d');
    if (!canvasCtx) {
        console.error("Error; <canvas> context not available.");
        return;
    }
    const width = canvas.width;
    const height = canvas.height;
    canvasCtx.clearRect(0, 0, width, height);
    canvasCtx.beginPath();
    for (let i = 0; i < width; i++) {
        const x = (i / width) * 2 - 1;
        const y = real.reduce((sum, a, n) => sum + a * Math.cos(n * Math.PI * x), 0) +
            imag.reduce((sum, b, n) => sum + b * Math.sin(n * Math.PI * x), 0);
        const yPos = (y / 2 + 0.5) * height;
        if (i === 0) {
            canvasCtx.moveTo(i, yPos);
        } else {
            canvasCtx.lineTo(i, yPos);
        }
    }
    canvasCtx.strokeStyle = 'blue';
    canvasCtx.lineWidth = 2;
    canvasCtx.stroke();
}

document.getElementById('gen-custom-wave-btn')!.addEventListener('click', function() {
    let slider = <HTMLInputElement>document.getElementById('custom-harmonics-slider');
    const numHarmonics = slider.valueAsNumber;
    let real = [];
    let imag = [];
    for (let i = 1; i <= numHarmonics; i++) {
        real.push(0);
        if (i % 2 === 1) {
            imag.push(1 / i);
        } else {
            imag.push(0);
        }
    }
    customWave = audioCtx!.createPeriodicWave(real, imag);
    paintWaveform(real, imag);
});

window.addEventListener('load', function() {
    try {
        audioCtx = new AudioContext();

        masterGain = audioCtx.createGain();
        masterGain.gain.setValueAtTime(0.125, audioCtx.currentTime);
        
        let masterGainSlider = <HTMLInputElement>document.getElementById('master-gain-slider')
        masterGainSlider.value = String(0.125);

        masterComp = audioCtx.createDynamicsCompressor();
        masterComp.threshold.setValueAtTime(-50, audioCtx.currentTime);
        masterComp.knee.setValueAtTime(40, audioCtx.currentTime);
        masterComp.ratio.setValueAtTime(12, audioCtx.currentTime);
        masterComp.attack.setValueAtTime(0, audioCtx.currentTime);
        masterComp.release.setValueAtTime(0.25, audioCtx.currentTime);
        
        let compressorThresholdSlider = <HTMLInputElement>document.getElementById('master-threshold-slider');
        compressorThresholdSlider.value = String(-50);

        let compressorKneeSlider = <HTMLInputElement>document.getElementById('master-knee-slider');
        compressorKneeSlider.value = String(40);

        let compressorRatioSlider = <HTMLInputElement>document.getElementById('master-ratio-slider');
        compressorRatioSlider.value = String(12);

        let compressorAttackSlider = <HTMLInputElement>document.getElementById('master-attack-slider');
        compressorAttackSlider.value = String(0);

        let compressorReleaseSlider = <HTMLInputElement>document.getElementById('master-release-slider');
        compressorReleaseSlider.value = String(0.25);
        
        masterDist = audioCtx.createWaveShaper();
        masterDist.curve = getDistortionCurve(0);
        masterDist.oversample = <OverSampleType>"2x";
        
        let masterDistortionSlider = <HTMLInputElement>document.getElementById('master-distortion-slider');
        masterDistortionSlider.value = String(0);

        sineGain = audioCtx.createGain();
        sineGain.gain.setValueAtTime(0.125, audioCtx.currentTime);
        
        squareGain = audioCtx.createGain();
        squareGain.gain.setValueAtTime(0.125, audioCtx.currentTime);
        
        sawtoothGain = audioCtx.createGain();
        sawtoothGain.gain.setValueAtTime(0.125, audioCtx.currentTime);
        
        triangleGain = audioCtx.createGain();
        triangleGain.gain.setValueAtTime(0.125, audioCtx.currentTime);

        let waveformSliders = document.getElementsByClassName('waveform-slider');
        for (let i = 0; i < waveformSliders.length; i++) {
            let slider = <HTMLInputElement>waveformSliders[i];
            slider.value = String(0.125);
        }

        customGain = audioCtx.createGain();
        customGain.gain.setValueAtTime(0, audioCtx.currentTime);

        let customGainSlider = <HTMLInputElement>document.getElementById('custom-gain-slider');
        customGainSlider.value = String(0);

        let real = [];
        let imag = [];
        for (let i = 1; i <= 4; i++) {
            real.push(0);
            if (i % 2 === 1) {
                imag.push(1 / i);
            } else {
                imag.push(0);
            }
        }
        customWave = audioCtx.createPeriodicWave(real, imag);
        paintWaveform(real, imag)

        let customHarmonicsSlider = <HTMLInputElement>document.getElementById('custom-harmonics-slider');
        customHarmonicsSlider.value = String(4);
        
    } catch (error) {
        alert("The JavaScript Web Audio API is not supported by this browser.");
    }
});
