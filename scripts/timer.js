import Controls from "./controls.js";
import Sounds from "./sounds.js";
import { minutesDisplay, secondsDisplay } from "./elements.js"

const sounds = Sounds();

const controls = Controls();

export default function Timer() {

  let minutes = Number(minutesDisplay.textContent);

  let timerTimeOut;

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;

    minutesDisplay.textContent = String(newMinutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes;
  }

  function reset() {
    updateDisplay(minutes, 0);
    hold();
  }

  function hold() {
    clearTimeout(timerTimeOut);
  }

  function countDown() {
    timerTimeOut = setTimeout(function () {

      let minutes = Number(minutesDisplay.textContent);

      let seconds = Number(secondsDisplay.textContent);

      let isFinished = minutes <= 0 && seconds <= 0;

      if (isFinished) {
        sounds.timeIsOver();
        controls.resetControls()
        reset();
        return
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));

      countDown();
    }, 1000);
  }

  return {
    updateDisplay,
    updateMinutes,
    reset,
    hold,
    countDown,
    minutes
  }

}