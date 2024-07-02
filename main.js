let timer;
let elapsedTime = 0;
let isRunning = false;
let isStopped = false;

const display = document.querySelector(".Timer");
const startPauseButton = document.getElementById("start-pause");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

startPauseButton.addEventListener("click", startPause);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);

function startPause() {
  if (isStopped) {
    displayTime(0);
    isStopped = false;
    start();
  } else if (isRunning) {
    pause();
  } else {
    start();
  }
}

function start() {
  startPauseButton.textContent = "Pause";
  isRunning = true;
  timer = setInterval(() => {
    elapsedTime += 1000;
    displayTime(elapsedTime);
  }, 1000);
}

function pause() {
  startPauseButton.textContent = "Start";
  isRunning = false;
  clearInterval(timer);
}

function stop() {
  pause();
  displayTime(elapsedTime);
  elapsedTime = 0;
  isStopped = true;
}

function reset() {
  stop();
  displayTime(0);
}

function displayTime(time) {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  display.textContent = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}

function addZero(number) {
  return number < 10 ? "0" + number : number;
}
