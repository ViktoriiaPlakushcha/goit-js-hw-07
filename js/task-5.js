const bodyEl = document.querySelector('body');
const btn = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
btn.addEventListener('click', handleClick);

function handleClick() {
  let newcolor = getRandomHexColor()
  bodyEl.style.backgroundColor = newcolor;
  spanEl.textContent = newcolor;
  return; 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
