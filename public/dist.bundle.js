(()=>{"use strict";var e=void 0,t=void 0,n=void 0,s=void 0,i=void 0,r=void 0,o=void 0,c=void 0,a=void 0,d=void 0,u=void 0,m=void 0,l=void 0,v=void 0,g=!0,O="tanh";const y={Z:{name:"C3",frequency:130.81,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},S:{name:"C#3/Dd3",frequency:138.59,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},X:{name:"D3",frequency:146.83,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},D:{name:"D#3/Eb3",frequency:155.56,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},C:{name:"E3",frequency:164.81,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},V:{name:"F3",frequency:174.61,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},G:{name:"F#3/Gb3",frequency:185,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},B:{name:"G3",frequency:196,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},H:{name:"G#3/Ab3",frequency:207.65,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},N:{name:"A3",frequency:220,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},J:{name:"A#3/Bb3",frequency:233.08,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},M:{name:"B3",frequency:246.94,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},Q:{name:"C4",frequency:261.63,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},2:{name:"C#4/Db4",frequency:277.18,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},W:{name:"D4",frequency:293.66,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},3:{name:"D#4/Eb4",frequency:311.13,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},E:{name:"E4",frequency:329.63,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},R:{name:"F4",frequency:349.23,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},5:{name:"F#4/Gb4",frequency:369.99,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},T:{name:"G4",frequency:392,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},6:{name:"G#4/Ab4",frequency:415.3,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},Y:{name:"A4",frequency:440,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},7:{name:"A#4/Bb4",frequency:466.16,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},U:{name:"B4",frequency:493.88,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},I:{name:"C5",frequency:523.25,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},9:{name:"C#5/Db5",frequency:554.37,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},O:{name:"D5",frequency:587.33,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},0:{name:"D#5/Eb5",frequency:622.25,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0},P:{name:"E5",frequency:659.25,isPressed:!1,sineOsc:void 0,squareOsc:void 0,sawtoothOsc:void 0,triangleOsc:void 0,customOsc:void 0}};function E(){let e={};for(const t in y)e[y[t].name]=y[t].isPressed;return e}var f={};function h(e,t){const n="number"==typeof t?t:50,s=44100,i=new Float32Array(s),r=Math.PI/180;let o=0;for(let t=0;t<s;t++){const c=2*t/s-1;switch(e){case"tanh":i[t]=Math.tanh(n*c);break;case"tanhsc":default:i[t]=(3+n)*c*20*r/(Math.PI+n*Math.abs(c));break;case"sine":i[t]=Math.sin(n*c);break;case"log1":i[t]=(n+1)*Math.log1p(c)/Math.log1p(n);break;case"log2":i[t]=Math.log(1+n*c*Math.abs(i[t]))/Math.log(1+n*c);break;case"pow":i[t]=(n*c-1/3)*Math.pow(n*c,3);break;case"sig":i[t]=2/(1+Math.exp(-n*c))-1;break;case"para":i[t]=n*c-Math.pow(n*c,2);break;case"fuzzy":i[t]=n*c/(1+n*Math.abs(c));break;case"filthy":i[t]=n*c*i[t];break;case"eo":i[t]=n*c*i[t]-n*Math.pow(n*c,3)/3;break;case"even":i[t]=Math.pow(c,2)*(1+n*Math.pow(c,2));break;case"odd":i[t]+=n*c*Math.pow(i[t],3)/3;break;case"rekt":i[t]=Math.abs(i[t])*n*c;break;case"or":case"xor":case"nor":case"xnor":case"and":case"nand":o=Math.floor(i[t]*Number.MAX_VALUE);const s="or"===e?1431655765:178956970,a="or"===e?o|s:"xor"===e?o^s:"nor"===e?~(o|s):"xnor"===e?o^~s:"and"===e?o&s:~(o&s);i[t]=n*c*(a/Number.MAX_VALUE)}}return i}function T(e,t){let n=document.getElementById("custom-waveform-canvas");const s=n.getContext("2d");if(!s)return void console.error("Error; <canvas> context not available.");const i=n.width,r=n.height;s.clearRect(0,0,i,r),s.beginPath();for(let n=0;n<i;n++){const o=n/i*2-1,c=((e.reduce(((e,t,n)=>e+t*Math.cos(n*Math.PI*o)),0)+t.reduce(((e,t,n)=>e+t*Math.sin(n*Math.PI*o)),0))/2+.5)*r;0===n?s.moveTo(n,c):s.lineTo(n,c)}s.strokeStyle="blue",s.lineWidth=2,s.stroke()}function B(){requestAnimationFrame(B);const e=document.getElementById("oscilloscope"),t=e.getContext("2d"),n=v.frequencyBinCount,s=new Uint8Array(n);v.getByteTimeDomainData(s),t.clearRect(0,0,e.width,e.height),t.fillStyle="rgb(200, 200, 200)",t.fillRect(0,0,e.width,e.height),t.lineWidth=2,t.strokeStyle="rgb(0 ,0 , 0)",t.beginPath();const i=e.width/n;let r=0;for(let o=0;o<n;o++){const n=s[o]/128*e.height/2;0===o?t.moveTo(r,n):t.lineTo(r,n),r+=i}null==t||t.lineTo(e.width,e.height/2),t.stroke()}document.onkeydown=O=>{let h=String(O.key).toUpperCase();if(f[h]=!0,document.getElementById("key-view").innerHTML=JSON.stringify(f),h in y){const O=y[h];if(!O.isPressed){O.isPressed=!0;const y=O.frequency;let E=e.createOscillator();E.type="sine",E.frequency.setValueAtTime(y,e.currentTime),E.connect(c).connect(v);let f=e.createOscillator();f.type="square",f.frequency.setValueAtTime(y,e.currentTime),f.connect(a).connect(v);let h=e.createOscillator();h.type="sawtooth",h.frequency.setValueAtTime(y,e.currentTime),h.connect(d).connect(v);let T=e.createOscillator();T.type="triangle",T.frequency.setValueAtTime(y,e.currentTime),T.connect(u).connect(v);let B=e.createOscillator();B.setPeriodicWave(l),B.frequency.setValueAtTime(y,e.currentTime),B.connect(m).connect(v),v.connect(s).connect(i).connect(r).connect(o).connect(t).connect(n).connect(e.destination),g||(E.start(),f.start(),h.start(),T.start(),B.start()),O.sineOsc=E,O.squareOsc=f,O.sawtoothOsc=h,O.triangleOsc=T,O.customOsc=B}}document.getElementById("note-press-view").innerHTML=JSON.stringify(E())},document.onkeyup=e=>{let t=String(e.key).toUpperCase();if(f[t]=!1,document.getElementById("key-view").innerHTML=JSON.stringify(f),t in y){const e=y[t];e.isPressed=!1;try{e.sineOsc.stop(),e.squareOsc.stop(),e.sawtoothOsc.stop(),e.triangleOsc.stop(),e.customOsc.stop()}catch(e){}e.sineOsc=void 0,e.squareOsc=void 0,e.sawtoothOsc=void 0,e.triangleOsc=void 0,e.customOsc=void 0}document.getElementById("note-press-view").innerHTML=JSON.stringify(E())},document.getElementById("mute-unmute-btn").addEventListener("click",(function(){g=!g,document.getElementById("mute-unmute-btn").innerHTML=g?"unmute":"mute";for(const e in y){const t=y[e];t.isPressed&&(t.sineOsc.stop(),t.squareOsc.stop(),t.sawtoothOsc.stop(),t.triangleOsc.stop(),t.customOsc.stop()),t.sineOsc=void 0,t.squareOsc=void 0,t.sawtoothOsc=void 0,t.triangleOsc=void 0,t.customOsc=void 0}})),document.getElementById("master-gain-slider").addEventListener("input",(function(){let t=document.getElementById("master-gain-slider").valueAsNumber;n.gain.setValueAtTime(t,e.currentTime),document.getElementById("master-gain-view").innerHTML=t.toString()})),document.getElementById("master-threshold-slider").addEventListener("input",(function(){let n=document.getElementById("master-threshold-slider").valueAsNumber;t.threshold.setValueAtTime(n,e.currentTime),document.getElementById("master-threshold-view").innerHTML=n.toString()})),document.getElementById("master-knee-slider").addEventListener("input",(function(){let n=document.getElementById("master-knee-slider").valueAsNumber;t.knee.setValueAtTime(n,e.currentTime),document.getElementById("master-knee-slider").innerHTML=n.toString()})),document.getElementById("master-ratio-slider").addEventListener("input",(function(){let n=document.getElementById("master-ratio-slider").valueAsNumber;t.ratio.setValueAtTime(n,e.currentTime),document.getElementById("master-ratio-view").innerHTML=n.toString()})),document.getElementById("master-attack-slider").addEventListener("input",(function(){let n=document.getElementById("master-attack-slider").valueAsNumber;t.attack.setValueAtTime(n,e.currentTime),document.getElementById("master-attack-view").innerHTML=n.toString()})),document.getElementById("master-release-slider").addEventListener("input",(function(){let n=document.getElementById("master-release-slider").valueAsNumber;t.release.setValueAtTime(n,e.currentTime),document.getElementById("master-release-view").innerHTML=n.toString()})),document.getElementById("master-distortion-slider").addEventListener("input",(function(){let e=document.getElementById("master-distortion-slider").valueAsNumber;s.curve=h(O,e),document.getElementById("master-distortion-view").innerHTML=e.toString()})),document.getElementById("master-distortion-type-select").addEventListener("change",(function(){let e=document.getElementById("master-distortion-type-select"),t=document.getElementById("master-distortion-slider").valueAsNumber;s.curve=h(e.value,t)})),document.getElementById("master-distortion-oversample-select").addEventListener("change",(function(){let e=document.getElementById("master-distortion-oversample-select");s.oversample=e.value})),document.getElementById("master-delay-slider").addEventListener("input",(function(){let t=document.getElementById("master-delay-slider").valueAsNumber;i.delayTime.setValueAtTime(t,e.currentTime),document.getElementById("master-delay-view").innerHTML=t.toString()})),document.getElementById("master-panning-slider").addEventListener("input",(function(){let t=document.getElementById("master-panning-slider").valueAsNumber;r.pan.setValueAtTime(t,e.currentTime),document.getElementById("master-panning-view").innerHTML=t.toString()})),document.getElementById("master-filter-frequency-slider").addEventListener("input",(function(){let t=document.getElementById("master-filter-frequency-slider").valueAsNumber;o.frequency.setValueAtTime(t,e.currentTime),document.getElementById("master-filter-frequency-view").innerHTML=t.toString()})),document.getElementById("master-filter-detune-slider").addEventListener("input",(function(){let t=document.getElementById("master-filter-detune-slider").valueAsNumber;o.detune.setValueAtTime(t,e.currentTime),document.getElementById("master-filter-detune-view").innerHTML=t.toString()})),document.getElementById("master-filter-qfactor-slider").addEventListener("input",(function(){let t=document.getElementById("master-filter-qfactor-slider").valueAsNumber;o.Q.setValueAtTime(t,e.currentTime),document.getElementById("master-filter-qfactor-view").innerHTML=t.toString()})),document.getElementById("master-filter-gain-slider").addEventListener("input",(function(){let t=document.getElementById("master-filter-gain-slider").valueAsNumber;o.gain.setValueAtTime(t,e.currentTime),document.getElementById("master-filter-gain-view").innerHTML=t.toString()})),document.getElementById("master-filter-type-select").addEventListener("change",(function(){let e=document.getElementById("master-filter-type-select");o.type=e.value})),document.getElementById("sine-gain-slider").addEventListener("input",(function(){let t=document.getElementById("sine-gain-slider").valueAsNumber;c.gain.setValueAtTime(t,e.currentTime),document.getElementById("sine-gain-view").innerHTML=t.toString()})),document.getElementById("square-gain-slider").addEventListener("input",(function(){let t=document.getElementById("square-gain-slider").valueAsNumber;a.gain.setValueAtTime(t,e.currentTime),document.getElementById("square-gain-view").innerHTML=t.toString()})),document.getElementById("sawtooth-gain-slider").addEventListener("input",(function(){let t=document.getElementById("sawtooth-gain-slider").valueAsNumber;d.gain.setValueAtTime(t,e.currentTime),document.getElementById("sawtooth-gain-view").innerHTML=t.toString()})),document.getElementById("triangle-gain-slider").addEventListener("input",(function(){let t=document.getElementById("triangle-gain-slider").valueAsNumber;u.gain.setValueAtTime(t,e.currentTime),document.getElementById("triangle-gain-view").innerHTML=t.toString()})),document.getElementById("custom-gain-slider").addEventListener("input",(function(){let t=document.getElementById("custom-gain-slider").valueAsNumber;m.gain.setValueAtTime(t,e.currentTime),document.getElementById("custom-gain-view").innerHTML=t.toString()})),document.getElementById("custom-harmonics-slider").addEventListener("input",(function(){let e=document.getElementById("custom-harmonics-slider").valueAsNumber;document.getElementById("custom-harmonics-view").innerHTML=e.toString()})),document.getElementById("gen-custom-wave-btn").addEventListener("click",(function(){const t=document.getElementById("custom-harmonics-slider").valueAsNumber;let n=[],s=[];for(let e=1;e<=t;e++)n.push(0),e%2==1?s.push(1/e):s.push(0);l=e.createPeriodicWave(n,s),T(n,s)})),window.addEventListener("load",(function(){try{e=new AudioContext,(n=e.createGain()).gain.setValueAtTime(.125,e.currentTime),document.getElementById("master-gain-slider").value=String(.125),(t=e.createDynamicsCompressor()).threshold.setValueAtTime(-50,e.currentTime),t.knee.setValueAtTime(40,e.currentTime),t.ratio.setValueAtTime(12,e.currentTime),t.attack.setValueAtTime(0,e.currentTime),t.release.setValueAtTime(.25,e.currentTime),document.getElementById("master-threshold-slider").value=String(-50),document.getElementById("master-knee-slider").value=String(40),document.getElementById("master-ratio-slider").value=String(12),document.getElementById("master-attack-slider").value=String(0),document.getElementById("master-release-slider").value=String(.25),(s=e.createWaveShaper()).curve=h(O,0),s.oversample="2x",document.getElementById("master-distortion-slider").value=String(10),document.getElementById("master-delay-slider").value=String(.01),(i=e.createDelay(3)).delayTime.setValueAtTime(.01,e.currentTime),document.getElementById("master-panning-slider").value=String(0),(o=e.createBiquadFilter()).frequency.setValueAtTime(14e3,e.currentTime),o.detune.setValueAtTime(0,e.currentTime),o.Q.setValueAtTime(0,e.currentTime),o.gain.setValueAtTime(1,e.currentTime),o.type="lowpass",document.getElementById("master-filter-frequency-slider").value=String(14e3),document.getElementById("master-filter-detune-slider").value=String(0),document.getElementById("master-filter-qfactor-slider").value=String(0),document.getElementById("master-filter-gain-slider").value=String(1),(r=e.createStereoPanner()).pan.setValueAtTime(0,e.currentTime),(c=e.createGain()).gain.setValueAtTime(.125,e.currentTime),(a=e.createGain()).gain.setValueAtTime(.125,e.currentTime),(d=e.createGain()).gain.setValueAtTime(.125,e.currentTime),(u=e.createGain()).gain.setValueAtTime(.125,e.currentTime);let g=document.getElementsByClassName("waveform-slider");for(let e=0;e<g.length;e++)g[e].value=String(.125);(m=e.createGain()).gain.setValueAtTime(0,e.currentTime),document.getElementById("custom-gain-slider").value=String(0);let y=[],E=[];for(let e=1;e<=4;e++)y.push(0),e%2==1?E.push(1/e):E.push(0);if(l=e.createPeriodicWave(y,E),T(y,E),document.getElementById("custom-harmonics-slider").value=String(4),(v=e.createAnalyser()).fftSize=2048,B(),/Mobi|Android/i.test(navigator.userAgent)){const e=document.getElementById("hidden-input");e.addEventListener("input",(function(e){e.target.value,e.target.value=""})),e.focus()}}catch(e){alert("The JavaScript Web Audio API is not supported by this browser.")}}))})();
//# sourceMappingURL=dist.bundle.js.map