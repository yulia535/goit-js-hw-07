// Напиши скрипт який, при наборі тексту в інпут
// input#name - input(подія input), підставляє його
// поточне значення в span#name - output.якщо інпут порожній,
// в спані повинен відображатися рядок 'незнайомець'.
const inputRef = document.querySelector('#name-input');
const spanNaneRef = document.querySelector('#name-output');
inputRef.addEventListener('input', (event) => {
  if (event.target.value === '') {
    spanNaneRef.textContent = 'незнайомець';
  } else {
    spanNaneRef.textContent = event.target.value;
  }
});
