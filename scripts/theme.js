import { html, sunButton, moonButton } from "./elements.js"

export default function Theme() {

  function sunTheme() {
    sunButton.classList.add('hide');
    moonButton.classList.remove('hide');
    html.classList.add('dark');
  }

  function moonTheme() {
    sunButton.classList.remove('hide');
    moonButton.classList.add('hide');
    html.classList.remove('dark');
  }

  return {
    sunTheme,
    moonTheme
  }
}
