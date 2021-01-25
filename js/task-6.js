// Напиши скрипт, який би при втраті фокуса на інпут,
// перевіряв його вміст на правильну кількість символів.
// <input
// type = "text"
// id = "validation-input"
// data - length="6"
// placeholder = "Введи 6 символів"/>
//     Скільки символів має бути в інпут, вказується в його
// атрибуті data - length.
// Якщо введена відповідна кількість, то border інпут стає зеленим,
// якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS - класи valid і invalid.

const validationInputRef = document.querySelector('#validation-input');
validationInputRef.addEventListener('blur', (event) => {
  const textImput = event.target.value;
  if (textImput.length === 6) {
    validationInputRef.classList.add('valid');
    validationInputRef.classList.remove('invalid');
  } else {
    validationInputRef.classList.add('invalid');
    validationInputRef.classList.remove('valid');
  }
});
