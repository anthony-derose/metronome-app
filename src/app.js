import Timer from "./timer.js";
import "./styles.css";

document.getElementById("app").innerHTML = `

`;

const tempoDisplay = document.querySelector(".tempo");
const decreaseTempoBtn = document.querySelector(".decrease-tempo");
const increaseTempoBtn = document.querySelector(".increase-tempo");
const tempoSlider = document.querySelector(".slider");
const startStopBtn = document.querySelector(".start-stop");
const subtractBeats = document.querySelector(".subtract-beats");
const addBeats = document.querySelector(".add-beats");
const measureCount = document.querySelector(".measure-count");

const klack = new Audio("klack.mp3");
const click = new Audio("click.mp3");

let bpm = 150;
let beatspermeasure = 4;
let count = 0;
let run = false;

decreaseTempoBtn.addEventListener("click", () => {
  if (bpm <= 50) {
    return;
  }
  bpm--;
  tempoMinMax();
  updateMetronome();
});

increaseTempoBtn.addEventListener("click", () => {
  if (bpm >= 250) {
    return;
  }
  bpm++;
  tempoMinMax();
  updateMetronome();
});

tempoSlider.addEventListener("input", () => {
  bpm = tempoSlider.value;
  tempoMinMax();
  updateMetronome();
});

startStopBtn.addEventListener("click", () => {
  count = 0;
  if (!run) {
    metronome.start();
    run = true;
    startStopBtn.textContent = "STOP";
  } else {
    metronome.stop();
    run = false;
    startStopBtn.textContent = "START";
  }
});

subtractBeats.addEventListener("click", () => {
  if (beatspermeasure <= 2) {
    return;
  }
  beatspermeasure--;
  measureCount.textContent = beatspermeasure;
  count = 0;
});

addBeats.addEventListener("click", () => {
  if (beatspermeasure >= 12) {
    return;
  }
  beatspermeasure++;
  measureCount.textContent = beatspermeasure;
  count = 0;
});

function updateMetronome() {
  tempoDisplay.textContent = bpm;
  tempoSlider.vaue = bpm;
  metronome.timeInterval = 60000 / bpm;
}

function tempoMinMax() {
  if (bpm <= 50) {
    return;
  }
  if ((bpm) => 250) {
    return;
  }
}

function playClick() {
  if (count === beatspermeasure) {
    count = 0;
  }
  if (count === 0) {
    klack.play();
    klack.currentTime = 0;
  } else {
    click.play();
    click.currentTime = 0;
  }
  count++;
}

const metronome = new Timer(playClick, 60000 / bpm, { immediate: true });
//metronome.start();
