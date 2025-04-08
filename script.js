let [seconds, minutes, hours] = [0, 0, 0];
let timerDisplay = document.querySelector(".timer-display");
let lapsContainer = document.querySelector(".laps");
let interval = null;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  timerDisplay.textContent = `${h}:${m}:${s}`;
}

function startTimer() {
  if (interval) return; // prevent multiple intervals

  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  pauseTimer();
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
  lapsContainer.innerHTML = "";
}

function addLap() {
  const li = document.createElement("li");
  li.textContent = timerDisplay.textContent;
  lapsContainer.appendChild(li);
}

// Button Event Listeners
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", addLap);
