const h1 = document.querySelector('#title');
const button = document.querySelector('#changeColor');
const body = document.body;

function randomColor() {
  return `rgb(${randomNum()},${randomNum()},${randomNum()})`;
}

function randomNum() {
  return Math.floor(Math.random() * 255);
}

button.addEventListener('click', () => {
  const changeColor = randomColor();
  body.style.backgroundColor = changeColor;
  h1.innerText = changeColor;
})

body.addEventListener('keypress', () => {
  if (event.key === 'Enter') {
    const changeColor = randomColor();
    body.style.backgroundColor = changeColor;
    h1.innerText = changeColor;
  }
})
