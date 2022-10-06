import { playButton, pauseButton, stopButton, setButton, minutesDisplay, secondsDisplay } from "./elements.js"
import Timer from "./timer.js"

const timer = Timer();

export default function Controls() {

  function play() {
    playButton.classList.add('hide');
    pauseButton.classList.remove('hide');
    stopButton.classList.remove('hide');
    setButton.classList.add('hide');

    timer.countDown();
  }

  function pause() {
    playButton.classList.remove('hide');
    pauseButton.classList.add('hide');

    timer.hold();
  }

  function stopTimer() {
    stopButton.classList.add('hide');
    setButton.classList.remove('hide');
    playButton.classList.remove('hide');
    pauseButton.classList.add('hide');

    timer.reset();
  }

  function resetControls() {
    playButton.classList.remove('hide');
    pauseButton.classList.add('hide');
    stopButton.classList.add('hide');
    setButton.classList.remove('hide');
  }

  function getMinutes() {
    let newMinutes = Number(prompt(`Quantos minutos?`))
    if (!newMinutes) {
      return false;
    }

    return newMinutes;
  }

  function plusFiveMinutes() {
    let currentMinutes = Number(minutesDisplay.textContent)
    let newMinutes;
    newMinutes = currentMinutes + 5;

    timer.updateDisplay(newMinutes, secondsDisplay.textContent);
  }

  function lessFiveMinutes() {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);
    let newMinutes;

    let insufficientMinutes = minutes < 5;

    if (insufficientMinutes) {
      return
    }

    newMinutes = minutes - 5;

    timer.updateDisplay(newMinutes, seconds);
  }

  return {
    play,
    pause,
    stopTimer,
    resetControls,
    getMinutes,
    plusFiveMinutes,
    lessFiveMinutes
  }
}