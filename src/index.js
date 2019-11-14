/* eslint-disable no-console */
const handleKeyPress = event => {
  const keys = [].slice.call(document.querySelectorAll('div[data-key]'));
  const isDrumKey = keys.some(
    key => `${key.dataset.key}` === `${event.keyCode}`
  );
  if (!isDrumKey) return;
  const key = document.querySelector(`div[data-key = '${event.keyCode}']`);
  key.classList.add('playing');
  const audio = document.querySelector(`audio[data-key = '${event.keyCode}']`);
  audio.currentTime = 0;
  audio.play();
};

const handleTransitionEnd = event => {
  if (event.propertyName !== 'transform') return;
  event.target.classList.remove('playing');
};

const handleClick = element => {
  document.dispatchEvent(
    new KeyboardEvent('keydown', { keyCode: `${element.dataset.key}` })
  );
};

document.addEventListener('keydown', handleKeyPress);
document.addEventListener('transitionend', handleTransitionEnd);
