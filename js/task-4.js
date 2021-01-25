// Лічильник складається зі спана і кнопок,
// які повинні збільшувати і зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде зберігається
// поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і
// зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та
// оновлення інтерфейсу

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');
let counterValue = 0;
incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});
decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
