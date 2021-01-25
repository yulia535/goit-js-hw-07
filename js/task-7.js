// Напиши скрипт, який реагує на зміну значення input#font -
// size - control(подія input) і змінює інлайн - стиль span#text
// оновлюючи властивість font - size.В результаті при перетягуванні
// повзунка змінюватиметься розмір тексту.
const controlFer = document.querySelector('#font-size-control');
controlFer.setAttribute('min', 16);
controlFer.setAttribute('max', 100);
controlFer.setAttribute('step', 1);
const textRef = document.querySelector('#text');
controlFer.addEventListener('input', (event) => {
  textRef.style.fontSize = event.target.value + 'px';
});
