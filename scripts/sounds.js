import { cards, treeButton, rainButton, shopButton, fireButton, backgroundCard, iconColor, inputColor, body } from "./elements.js"

export default function Sounds() {

  const woodSound = new Audio("./audios/Floresta.wav");
  const rainSound = new Audio("./audios/Chuva.wav");
  const shopSound = new Audio("./audios/Cafeteria.wav");
  const fireSound = new Audio("./audios/Lareira.wav");
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
  const backgounds = ['bg-tree', 'bg-rain', 'bg-shop', 'bg-fire'];

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeIsOver() {
    kitchenTimer.play();
  }

  function treeCardPressed() {
    if (treeButton.classList.contains('buttonPressed')) {
      woodSound.loop = true;
      woodSound.play()
    } else {
      woodSound.pause()
    }
  }

  function rainCardPressed() {
    if (rainButton.classList.contains('buttonPressed')) {
      rainSound.loop = true;
      rainSound.play();
    } else {
      rainSound.pause();
    }
  }

  function shopCardPressed() {
    if (shopButton.classList.contains('buttonPressed')) {
      shopSound.loop = true;
      shopSound.play();
    } else {
      shopSound.pause();
    }
  }

  function fireCardPressed() {
    if (fireButton.classList.contains('buttonPressed')) {
      fireSound.loop = true;
      fireSound.play();
    } else {
      fireSound.pause();
    }
  }

  function changeClassOnClick(button, index) {
    button.addEventListener('click', function () {
      cards[index].classList.toggle('buttonPressed');
      iconColor[index].classList.toggle('soundOnIcon');
      inputColor[index].classList.toggle('volumeOn');
      backgroundCard[index].classList.toggle('soundOnBackground');
      body.classList.toggle(backgounds[index]);
    })
  }

  return {
    pressButton,
    timeIsOver,
    treeCardPressed,
    rainCardPressed,
    shopCardPressed,
    fireCardPressed,
    changeClassOnClick,
    woodSound,
    rainSound,
    shopSound,
    fireSound
  }
}
