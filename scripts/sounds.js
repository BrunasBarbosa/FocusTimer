import { treeButton, rainButton, shopButton, fireButton, body } from "./elements.js"

export default function Sounds() {

  const woodSound = new Audio("./audios/Floresta.wav");
  const rainSound = new Audio("./audios/Chuva.wav");
  const shopSound = new Audio("./audios/Cafeteria.wav");
  const fireSound = new Audio("./audios/Lareira.wav");
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
  const isActived = (element) => element.classList.toggle('buttonPressed');
  const buttonPressed = shopButton.classList.contains('buttonPressed');
    

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeIsOver() {
    kitchenTimer.play();
  }

  function treeCardPressed() {
    treeButton.classList.toggle('buttonPressed');

    if (treeButton.classList.contains('buttonPressed')) {
      body.classList.add('bg-tree');
      woodSound.loop = true;
      woodSound.play()
    } else {
      body.classList.remove('bg-tree');
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
    console.log("entrou aqui");
    shopButton.classList.toggle('buttonPressed');

    if (shopButton.classList.contains('buttonPressed')) {
      body.classList.add('bg-shop');
      shopSound.loop = true;
      shopSound.play();
      console.log("caiu no if")
    } else {
      console.log("caiu no else")
      body.classList.remove('bg-shop');
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
