const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li,
// після чого вставить всі li за одну операцію в список ul.ingredients.
// Для створення DOM - вузлів використовуй document.createElement().
const addLi = ingredients.forEach((item) => {
  const ingredient = document.createElement('li');
  ingredient.textContent = item;
  const ul = document.querySelector('#ingredients');
  ul.appendChild(ingredient);
});
