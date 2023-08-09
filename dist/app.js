"use strict";
var audioCtx = undefined;
var compressor = undefined;
var masterGain = undefined;
var distortion = undefined;
var sineGain = undefined;
var squareGain = undefined;
var sawtoothGain = undefined;
var triangleGain = undefined;
var muted = true;
var c4 = { name: 'C4', frequency: 261.63,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var cs4 = { name: 'C#4/Db4', frequency: 277.18,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var d4 = { name: 'D4', frequency: 293.66,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var ds4 = { name: 'D#4/Eb4', frequency: 311.13,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var e4 = { name: 'E4', frequency: 329.63,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var f4 = { name: 'F4', frequency: 349.23,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var fs4 = { name: 'F#4/Gb4', frequency: 369.99,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var g4 = { name: 'G4', frequency: 392.0,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var gs4 = { name: 'G#4/Ab4', frequency: 415.3,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var a4 = { name: 'A4', frequency: 440.0,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var as4 = { name: 'A#4/Bb4', frequency: 466.16,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var b4 = { name: 'B4', frequency: 493.88,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var c5 = { name: 'C5', frequency: 523.25,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var cs5 = { name: 'C#5/Db5', frequency: 554.37,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var d5 = { name: 'D5', frequency: 587.33,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var ds5 = { name: 'D#5/Eb5', frequency: 622.25,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
var e5 = { name: 'E5', frequency: 659.25,
    sineOsc: undefined, squareOsc: undefined, sawtoothOsc: undefined, triangleOsc: undefined };
const noteMap = {
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
var pressedKeyMap = {};
var pressedNoteMap = {};
document.onkeydown = (e) => {
    let keyStr = String(e.key).toUpperCase();
    pressedKeyMap[keyStr] = true;
    document.getElementById('key-view').innerHTML = JSON.stringify(pressedKeyMap);
    if (keyStr in noteMap) {
        let noteStr = noteMap[keyStr].name;
        if (!pressedNoteMap[noteStr]) {
            pressedNoteMap[noteStr] = true;
            const freq = noteMap[keyStr].frequency;
            let sinOsc = audioCtx.createOscillator();
            sinOsc.type = "sine";
            sinOsc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            sinOsc.connect(sineGain).connect(distortion).connect(compressor);
            let sqrOsc = audioCtx.createOscillator();
            sqrOsc.type = "square";
            sqrOsc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            sqrOsc.connect(squareGain).connect(distortion).connect(compressor);
            let sawOsc = audioCtx.createOscillator();
            sawOsc.type = "sawtooth";
            sawOsc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            sawOsc.connect(squareGain).connect(distortion).connect(compressor);
            let triOsc = audioCtx.createOscillator();
            triOsc.type = "triangle";
            triOsc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            triOsc.connect(triangleGain).connect(distortion).connect(compressor);
            compressor.connect(masterGain).connect(audioCtx.destination);
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
    document.getElementById('note-press-view').innerHTML = JSON.stringify(pressedNoteMap);
};
document.onkeyup = (e) => {
    let keyStr = String(e.key).toUpperCase();
    pressedKeyMap[keyStr] = false;
    document.getElementById('key-view').innerHTML = JSON.stringify(pressedKeyMap);
    if (keyStr in noteMap) {
        let noteStr = noteMap[keyStr].name;
        pressedNoteMap[noteStr] = false;
        try {
            noteMap[keyStr].sineOsc.stop();
            noteMap[keyStr].squareOsc.stop();
            noteMap[keyStr].sawtoothOsc.stop();
            noteMap[keyStr].triangleOsc.stop();
        }
        catch (_a) { }
        noteMap[keyStr].sineOsc = undefined;
        noteMap[keyStr].squareOsc = undefined;
        noteMap[keyStr].sawtoothOsc = undefined;
        noteMap[keyStr].triangleOsc = undefined;
    }
    document.getElementById('note-press-view').innerHTML = JSON.stringify(pressedNoteMap);
};
document.getElementById('mute-unmute-btn').addEventListener('click', function () {
    muted = !muted;
    if (muted) {
        document.getElementById('mute-unmute-btn').innerHTML = "Unmute Synthesizer";
        for (const key in noteMap) {
            if (noteMap[key].sineOsc) {
                noteMap[key].sineOsc.stop();
                noteMap[key].squareOsc.stop();
                noteMap[key].sawtoothOsc.stop();
                noteMap[key].triangleOsc.stop();
            }
            noteMap[key].sineOsc = undefined;
            noteMap[key].squareOsc = undefined;
            noteMap[key].sawtoothOsc = undefined;
            noteMap[key].triangleOsc = undefined;
        }
    }
    else {
        document.getElementById('mute-unmute-btn').innerHTML = "Mute Synthesizer";
        for (const key in noteMap) {
            if (noteMap[key].sineOsc) {
                noteMap[key].sineOsc.stop();
                noteMap[key].squareOsc.stop();
                noteMap[key].sawtoothOsc.stop();
                noteMap[key].triangleOsc.stop();
            }
            noteMap[key].sineOsc = undefined;
            noteMap[key].squareOsc = undefined;
            noteMap[key].sawtoothOsc = undefined;
            noteMap[key].triangleOsc = undefined;
        }
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
    compressor.threshold.setValueAtTime(val, audioCtx.currentTime);
    document.getElementById('master-threshold-view').innerHTML = val.toString();
});
document.getElementById('master-knee-slider').addEventListener('input', function () {
    let slider = document.getElementById('master-knee-slider');
    let val = slider.valueAsNumber;
    compressor.knee.setValueAtTime(val, audioCtx.currentTime);
    document.getElementById('master-knee-slider').innerHTML = val.toString();
});
document.getElementById('master-ratio-slider').addEventListener('input', function () {
    let slider = document.getElementById('master-ratio-slider');
    let val = slider.valueAsNumber;
    compressor.ratio.setValueAtTime(val, audioCtx.currentTime);
    document.getElementById('master-ratio-view').innerHTML = val.toString();
});
document.getElementById('master-attack-slider').addEventListener('input', function () {
    let slider = document.getElementById('master-attack-slider');
    let val = slider.valueAsNumber;
    compressor.attack.setValueAtTime(val, audioCtx.currentTime);
    document.getElementById('master-attack-view').innerHTML = val.toString();
});
document.getElementById('master-release-slider').addEventListener('input', function () {
    let slider = document.getElementById('master-release-slider');
    let val = slider.valueAsNumber;
    compressor.release.setValueAtTime(val, audioCtx.currentTime);
    document.getElementById('master-release-view').innerHTML = val.toString();
});
function getDistortionCurve(amount) {
    const k = typeof amount === "number" ? amount : 50;
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < n_samples; i++) {
        const x = (i * 2) / n_samples - 1;
        curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
}
document.getElementById('master-distortion-slider').addEventListener('input', function () {
    let slider = document.getElementById('master-distortion-slider');
    let val = slider.valueAsNumber;
    distortion.curve = getDistortionCurve(val);
    document.getElementById('master-distortion-view').innerHTML = val.toString();
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
window.addEventListener('load', function () {
    try {
        audioCtx = new AudioContext();
        masterGain = audioCtx.createGain();
        masterGain.gain.setValueAtTime(0.125, audioCtx.currentTime);
        let masterGainSlider = document.getElementById('master-gain-slider');
        masterGainSlider.value = String(0.125);
        compressor = audioCtx.createDynamicsCompressor();
        compressor.threshold.setValueAtTime(-50, audioCtx.currentTime);
        compressor.knee.setValueAtTime(40, audioCtx.currentTime);
        compressor.ratio.setValueAtTime(12, audioCtx.currentTime);
        compressor.attack.setValueAtTime(0, audioCtx.currentTime);
        compressor.release.setValueAtTime(0.25, audioCtx.currentTime);
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
        distortion = audioCtx.createWaveShaper();
        distortion.curve = getDistortionCurve(0);
        distortion.oversample = "2x";
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
    }
    catch (error) {
        alert("The JavaScript Web Audio API is not supported by this browser.");
    }
});