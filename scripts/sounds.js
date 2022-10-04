import { treeButton, rainButton, shopButton, fireButton } from "./elements.js"

export default function Sounds() {

  const woodSound = new Audio("./audios/Floresta.wav");
  const rainSound = new Audio("./audios/Chuva.wav");
  const shopSound = new Audio("./audios/Cafeteria.wav");
  const fireSound = new Audio("./audios/Lareira.wav");
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeIsOver() {
    kitchenTimer.play();
  }

  function treeCardPressed() {
    treeButton.classList.toggle('buttonPressed');

    if (treeButton.classList.contains('buttonPressed')) {
      woodSound.loop = true;
      woodSound.play()
    } else {
      woodSound.pause()
    }
  }

  function rainCardPressed() {
    rainButton.classList.toggle('buttonPressed');

    if (rainButton.classList.contains('buttonPressed')) {
      rainSound.loop = true;
      rainSound.play();
    } else {
      rainSound.pause();
    }
  }

  function shopCardPressed() {
    shopButton.classList.toggle('buttonPressed');

    if (shopButton.classList.contains('buttonPressed')) {
      shopSound.loop = true;
      shopSound.play();
    } else {
      shopSound.pause();
    }
  }

  function fireCardPressed() {
    fireButton.classList.toggle('buttonPressed');

    if (fireButton.classList.contains('buttonPressed')) {
      fireSound.loop = true;
      fireSound.play();
    } else {
      fireSound.pause();
    }
  }

  return {
    pressButton,
    timeIsOver,
    treeCardPressed,
    rainCardPressed,
    shopCardPressed,
    fireCardPressed,
    woodSound,
    rainSound,
    shopSound,
    fireSound
  }
}
