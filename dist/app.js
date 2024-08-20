"use strict";
var audioCtx = undefined;
var masterComp = undefined;
var masterGain = undefined;
var masterDist = undefined;
var sineGain = undefined;
var squareGain = undefined;
var sawtoothGain = undefined;
var triangleGain = undefined;
var customGain = undefined;
var customWave = undefined;
var muted = true;
var distType = "tanh";
var c3 = { name: 'C3', frequency: 130.81, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var cs3 = { name: 'C#3/Dd3', frequency: 138.59, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var d3 = { name: 'D3', frequency: 146.83, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var ds3 = { name: 'D#3/Eb3', frequency: 155.56, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var e3 = { name: 'E3', frequency: 164.81, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var f3 = { name: 'F3', frequency: 174.61, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var fs3 = { name: 'F#3/Gb3', frequency: 185.0, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var g3 = { name: 'G3', frequency: 196.0, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var gs3 = { name: 'G#3/Ab3', frequency: 207.65, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var a3 = { name: 'A3', frequency: 220.0, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var as3 = { name: 'A#3/Bb3', frequency: 233.08, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var b3 = { name: 'B3', frequency: 246.94, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var c4 = { name: 'C4', frequency: 261.63, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var cs4 = { name: 'C#4/Db4', frequency: 277.18, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var d4 = { name: 'D4', frequency: 293.66, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var ds4 = { name: 'D#4/Eb4', frequency: 311.13, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var e4 = { name: 'E4', frequency: 329.63, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var f4 = { name: 'F4', frequency: 349.23, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var fs4 = { name: 'F#4/Gb4', frequency: 369.99, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var g4 = { name: 'G4', frequency: 392.0, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var gs4 = { name: 'G#4/Ab4', frequency: 415.3, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var a4 = { name: 'A4', frequency: 440.0, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var as4 = { name: 'A#4/Bb4', frequency: 466.16, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var b4 = { name: 'B4', frequency: 493.88, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var c5 = { name: 'C5', frequency: 523.25, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var cs5 = { name: 'C#5/Db5', frequency: 554.37, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var d5 = { name: 'D5', frequency: 587.33, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var ds5 = { name: 'D#5/Eb5', frequency: 622.25, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
var e5 = { name: 'E5', frequency: 659.25, isPressed: false,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined, customOsc: undefined };
const noteMap = {
    'Z': c3,
    'S': cs3,
    'X': d3,
    'D': ds3,
    'C': e3,
    'V': f3,
    'G': fs3,
    'B': g3,
    'H': gs3,
    'N': a3,
    'J': as3,
    'M': b3,
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
function getNoteStatusMap() {
    let noteStatusMap = {};
    for (const key in noteMap) {
        noteStatusMap[noteMap[key].name] = noteMap[key].isPressed;
    }
    return noteStatusMap;
}
var pressedKeyMap = {};
document.onkeydown = (e) => {
    let keyChar = String(e.key).toUpperCase();
    pressedKeyMap[keyChar] = true;
    document.getElementById('key-view').innerHTML = JSON.stringify(pressedKeyMap);
    if (keyChar in noteMap) {
        const note = noteMap[keyChar];
        if (!note.isPressed) {
            note.isPressed = true;
            const freq = note.frequency;
            let sinOsc = audioCtx.createOscillator();
            sinOsc.type = 'sine';
            sinOsc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            sinOsc.connect(sineGain).connect(masterDist).connect(masterComp);
            let sqrOsc = audioCtx.createOscillator();
            sqrOsc.type = 'square';
            sqrOsc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            sqrOsc.connect(squareGain).connect(masterDist).connect(masterComp);
            let sawOsc = audioCtx.createOscillator();
            sawOsc.type = 'sawtooth';
            sawOsc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            sawOsc.connect(sawtoothGain).connect(masterDist).connect(masterComp);
            let triOsc = audioCtx.createOscillator();
            triOsc.type = 'triangle';
            triOsc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            triOsc.connect(triangleGain).connect(masterDist).connect(masterComp);
            let cstmOsc = audioCtx.createOscillator();
            cstmOsc.setPeriodicWave(customWave);
            cstmOsc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            cstmOsc.connect(customGain).connect(masterDist).connect(masterComp);
            masterComp.connect(masterGain).connect(audioCtx.destination);
            if (!muted) {
                sinOsc.start();
                sqrOsc.start();
                sawOsc.start();
                triOsc.start();
                cstmOsc.start();
            }
            note.sineOsc = sinOsc;
            note.squareOsc = sqrOsc;
            note.sawtoothOsc = sawOsc;
            note.triangleOsc = triOsc;
            note.customOsc = cstmOsc;
        }
    }
    document.getElementById('note-press-view').innerHTML = JSON.stringify(getNoteStatusMap());
};
document.onkeyup = (e) => {
    let keyChar = String(e.key).toUpperCase();
    pressedKeyMap[keyChar] = false;
    document.getElementById('key-view').innerHTML = JSON.stringify(pressedKeyMap);
    if (keyChar in noteMap) {
        const note = noteMap[keyChar];
        note.isPressed = false;
        try {
            note.sineOsc.stop();
            note.squareOsc.stop();
            note.sawtoothOsc.stop();
            note.triangleOsc.stop();
            note.customOsc.stop();
        }
        catch (_a) { }
        note.sineOsc = undefined;
        note.squareOsc = undefined;
        note.sawtoothOsc = undefined;
        note.triangleOsc = undefined;
        note.customOsc = undefined;
    }
    document.getElementById('note-press-view').innerHTML = JSON.stringify(getNoteStatusMap());
};
document.getElementById('mute-unmute-btn').addEventListener('click', function () {
    muted = !muted;
    document.getElementById('mute-unmute-btn').innerHTML = muted ? 'unmute' : 'mute';
    for (const keyChar in noteMap) {
        const note = noteMap[keyChar];
        if (note.isPressed) {
            note.sineOsc.stop();
            note.squareOsc.stop();
            note.sawtoothOsc.stop();
            note.triangleOsc.stop();
            note.customOsc.stop();
        }
        note.sineOsc = undefined;
        note.squareOsc = undefined;
        note.sawtoothOsc = undefined;
        note.triangleOsc = undefined;
        note.customOsc = undefined;
    }
});
document.getElementById('master-gain-slider').addEventListener('input', function () {
    let slider = document.getElementById('master-gain-slider');
    let val = slider.valueAsNumber;
    masterGain.gain.setValueAtTime(val, audioCtx.currentTime);
    document.getElementById('master-gain-view').innerHTML = val.toString();
});
document.getElementById('master-threshold-slider').addEventListener('input', function () {
    let slider = document.getElementById('master-threshold-slider');
    let val = slider.valueAsNumber;
    masterComp.threshold.setValueAtTime(val, audioCtx.currentTime);
    document.getElementById('master-threshold-view').innerHTML = val.toString();
});
document.getElementById('master-knee-slider').addEventListener('input', function () {
    let slider = document.getElementById('master-knee-slider');
    let val = slider.valueAsNumber;
    masterComp.knee.setValueAtTime(val, audioCtx.currentTime);
    document.getElementById('master-knee-slider').innerHTML = val.toString();
});
document.getElementById('master-ratio-slider').addEventListener('input', function () {
    let slider = document.getElementById('master-ratio-slider');
    let val = slider.valueAsNumber;
    masterComp.ratio.setValueAtTime(val, audioCtx.currentTime);
    document.getElementById('master-ratio-view').innerHTML = val.toString();
});
document.getElementById('master-attack-slider').addEventListener('input', function () {
    let slider = document.getElementById('master-attack-slider');
    let val = slider.valueAsNumber;
    masterComp.attack.setValueAtTime(val, audioCtx.currentTime);
    document.getElementById('master-attack-view').innerHTML = val.toString();
});
document.getElementById('master-release-slider').addEventListener('input', function () {
    let slider = document.getElementById('master-release-slider');
    let val = slider.valueAsNumber;
    masterComp.release.setValueAtTime(val, audioCtx.currentTime);
    document.getElementById('master-release-view').innerHTML = val.toString();
});
function getDistortionCurve(typeStr, amount) {
    const k = typeof amount === 'number' ? amount : 50;
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < n_samples; i++) {
        const x = (i * 2) / n_samples - 1;
        switch (typeStr) {
            case "tanh":
                curve[i] = Math.tanh(k * x);
                break;
            case "tanhsc":
                curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
                break;
            case "sine":
                curve[i] = Math.sin(k * x);
                break;
            case "log1":
                curve[i] = ((k + 1) * Math.log1p(x)) / Math.log1p(k);
                break;
            case "log2":
                curve[i] = Math.log(1 + k * x * Math.abs(curve[i])) / Math.log(1 + (k * x));
                break;
            case "pow":
                curve[i] = ((k * x) - (1.0 / 3.0)) * Math.pow((k * x), 3);
                break;
            case "sig":
                curve[i] = 2.0 / (1 + Math.exp(-k * x)) - 1.0;
                break;
            case "para":
                curve[i] = (k * x) - Math.pow(k * x, 2);
                break;
            case "fuzzy":
                curve[i] = (k * x) / (1 + k * Math.abs(x));
                break;
            case "filthy":
                curve[i] *= k * x;
                break;
            case "eo":
                curve[i] *= k * x;
                curve[i] = curve[i] - (k * Math.pow(k * x, 3)) / 3;
                break;
            default:
                curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
                break;
        }
    }
    return curve;
}
document.getElementById('master-distortion-slider').addEventListener('input', function () {
    let slider = document.getElementById('master-distortion-slider');
    let val = slider.valueAsNumber;
    masterDist.curve = getDistortionCurve(distType, val);
    document.getElementById('master-distortion-view').innerHTML = val.toString();
});
document.getElementById('master-distortion-type-select').addEventListener('change', function () {
    let select = document.getElementById('master-distortion-type-select');
    let slider = document.getElementById('master-distortion-slider');
    let val = slider.valueAsNumber;
    masterDist.curve = getDistortionCurve(select.value, val);
});
document.getElementById('master-distortion-oversample-select').addEventListener('change', function () {
    let select = document.getElementById('master-distortion-oversample-select');
    masterDist.oversample = select.value;
});
document.getElementById('sine-gain-slider').addEventListener('input', function () {
    let slider = document.getElementById('sine-gain-slider');
    let val = slider.valueAsNumber;
    sineGain.gain.setValueAtTime(val, audioCtx.currentTime);
    document.getElementById('sine-gain-view').innerHTML = val.toString();
});
document.getElementById('square-gain-slider').addEventListener('input', function () {
    let slider = document.getElementById('square-gain-slider');
    let val = slider.valueAsNumber;
    squareGain.gain.setValueAtTime(val, audioCtx.currentTime);
    document.getElementById('square-gain-view').innerHTML = val.toString();
});
document.getElementById('sawtooth-gain-slider').addEventListener('input', function () {
    let slider = document.getElementById('sawtooth-gain-slider');
    let val = slider.valueAsNumber;
    sawtoothGain.gain.setValueAtTime(val, audioCtx.currentTime);
    document.getElementById('sawtooth-gain-view').innerHTML = val.toString();
});
document.getElementById('triangle-gain-slider').addEventListener('input', function () {
    let slider = document.getElementById('triangle-gain-slider');
    let val = slider.valueAsNumber;
    triangleGain.gain.setValueAtTime(val, audioCtx.currentTime);
    document.getElementById('triangle-gain-view').innerHTML = val.toString();
});
document.getElementById('custom-gain-slider').addEventListener('input', function () {
    let slider = document.getElementById('custom-gain-slider');
    let val = slider.valueAsNumber;
    customGain.gain.setValueAtTime(val, audioCtx.currentTime);
    document.getElementById('custom-gain-view').innerHTML = val.toString();
});
document.getElementById('custom-harmonics-slider').addEventListener('input', function () {
    let slider = document.getElementById('custom-harmonics-slider');
    let val = slider.valueAsNumber;
    document.getElementById('custom-harmonics-view').innerHTML = val.toString();
});
function paintWaveform(real, imag) {
    let canvas = document.getElementById('custom-waveform-canvas');
    const canvasCtx = canvas.getContext('2d');
    if (!canvasCtx) {
        console.error('Error; <canvas> context not available.');
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
        }
        else {
            canvasCtx.lineTo(i, yPos);
        }
    }
    canvasCtx.strokeStyle = 'blue';
    canvasCtx.lineWidth = 2;
    canvasCtx.stroke();
}
document.getElementById('gen-custom-wave-btn').addEventListener('click', function () {
    let slider = document.getElementById('custom-harmonics-slider');
    const numHarmonics = slider.valueAsNumber;
    let real = [];
    let imag = [];
    for (let i = 1; i <= numHarmonics; i++) {
        real.push(0);
        if (i % 2 === 1) {
            imag.push(1 / i);
        }
        else {
            imag.push(0);
        }
    }
    customWave = audioCtx.createPeriodicWave(real, imag);
    paintWaveform(real, imag);
});
window.addEventListener('load', function () {
    try {
        audioCtx = new AudioContext();
        masterGain = audioCtx.createGain();
        masterGain.gain.setValueAtTime(0.125, audioCtx.currentTime);
        let masterGainSlider = document.getElementById('master-gain-slider');
        masterGainSlider.value = String(0.125);
        masterComp = audioCtx.createDynamicsCompressor();
        masterComp.threshold.setValueAtTime(-50, audioCtx.currentTime);
        masterComp.knee.setValueAtTime(40, audioCtx.currentTime);
        masterComp.ratio.setValueAtTime(12, audioCtx.currentTime);
        masterComp.attack.setValueAtTime(0, audioCtx.currentTime);
        masterComp.release.setValueAtTime(0.25, audioCtx.currentTime);
        let compressorThresholdSlider = document.getElementById('master-threshold-slider');
        compressorThresholdSlider.value = String(-50);
        let compressorKneeSlider = document.getElementById('master-knee-slider');
        compressorKneeSlider.value = String(40);
        let compressorRatioSlider = document.getElementById('master-ratio-slider');
        compressorRatioSlider.value = String(12);
        let compressorAttackSlider = document.getElementById('master-attack-slider');
        compressorAttackSlider.value = String(0);
        let compressorReleaseSlider = document.getElementById('master-release-slider');
        compressorReleaseSlider.value = String(0.25);
        masterDist = audioCtx.createWaveShaper();
        masterDist.curve = getDistortionCurve(distType, 0);
        masterDist.oversample = '2x';
        let masterDistortionSlider = document.getElementById('master-distortion-slider');
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
            let slider = waveformSliders[i];
            slider.value = String(0.125);
        }
        customGain = audioCtx.createGain();
        customGain.gain.setValueAtTime(0, audioCtx.currentTime);
        let customGainSlider = document.getElementById('custom-gain-slider');
        customGainSlider.value = String(0);
        let real = [];
        let imag = [];
        for (let i = 1; i <= 4; i++) {
            real.push(0);
            if (i % 2 === 1) {
                imag.push(1 / i);
            }
            else {
                imag.push(0);
            }
        }
        customWave = audioCtx.createPeriodicWave(real, imag);
        paintWaveform(real, imag);
        let customHarmonicsSlider = document.getElementById('custom-harmonics-slider');
        customHarmonicsSlider.value = String(4);
    }
    catch (error) {
        alert('The JavaScript Web Audio API is not supported by this browser.');
    }
});
