let count = localStorage.getItem("count");

if (!count) {
  count = 0;
  localStorage.setItem("count", count);
}

let countEl = document.querySelector("#count");
countEl.textContent = count;

const updateCount = () => {
  count++;
  localStorage.setItem("count", count);
  countEl.textContent = count;
};

const button = document.querySelector("button");
button.addEventListener("click", updateCount);

const startTimer = () => {
  let seconds = 30;
  let timerEl = document.querySelector("#timer");
  let timer = setInterval(() => {
    if (seconds < 10) {
      timerEl.textContent = `00:00:0${seconds}`;
    } else {
      timerEl.textContent = `00:00:${seconds}`;
    }
    seconds--;
    if (seconds < 0) {
      clearInterval(timer);
      button.removeEventListener("click", updateCount);
    }
  }, 1000);
};

startTimer();
