import Timer from "./timer.js";
import Controls from "./controls.js";
import Sounds from "./sounds.js";
import Theme from "./theme.js";
import {
  playButton,
  pauseButton,
  stopButton,
  setButton,
  plusButton,
  lessButton,
  buttons,
  treeButton,
  rainButton,
  shopButton,
  fireButton,
  sunButton,
  moonButton,
  inputColor,
  cards
} from "./elements.js";

const timer = Timer();

const controls = Controls();

const sounds = Sounds();

const theme = Theme();

const soundsList = [sounds.woodSound, sounds.rainSound, sounds.shopSound, sounds.fireSound];

cards.forEach(sounds.changeClassOnClick)

buttons.forEach((button) => {
  button.addEventListener('click', sounds.pressButton);
})

inputColor.forEach((input, index) => {
  input.addEventListener('input', () => {
    soundsList[index].volume = inputColor[index].value / 100;
  })
})

playButton.addEventListener('click', controls.play);

pauseButton.addEventListener('click', controls.pause);

stopButton.addEventListener('click', controls.stopTimer);

plusButton.addEventListener('click', controls.plusFiveMinutes);

lessButton.addEventListener('click', controls.lessFiveMinutes);

setButton.addEventListener('click', function () {
  let newMinutes = controls.getMinutes();

  if (!newMinutes) {
    timer.reset()
    return
  }

  timer.updateDisplay(timer.updateMinutes(newMinutes), 0);
});

treeButton.addEventListener('click', sounds.treeCardPressed);

rainButton.addEventListener('click', sounds.rainCardPressed);

shopButton.addEventListener('click', sounds.shopCardPressed);

fireButton.addEventListener('click', sounds.fireCardPressed);

sunButton.addEventListener('click', theme.sunTheme);

moonButton.addEventListener('click', theme.moonTheme);

