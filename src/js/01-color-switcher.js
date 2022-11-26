function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const randomColor = getRandomHexColor();

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

refs.startBtn.addEventListener('click', StartChangingColor);
refs.stopBtn.addEventListener('click', StopChangingColor);

let timerId = null;

function StartChangingColor() {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.startBtn.setAttribute('disabled', true);
}

function StopChangingColor() {
  clearInterval(timerId);
  refs.startBtn.removeAttribute('disabled');
}
