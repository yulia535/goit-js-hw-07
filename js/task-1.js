// Напиши скрипт, який виконає наступні операції.
// Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.Вийде 'У списку 3 категорії.'.
// Для кожного елемента li.item в списку ul#categories, знайде і
// виведе в консоль текст заголовка елемента(тега h2) і кількість
// елементів в категорії(всіх вкладених в нього елементів li).
// Наприклад, для першої категорії вийде:
// Категорія: Тварини
// Кількість елементів: 4
const categoriesItemRef = document.querySelectorAll('.item');
console.log(`У списку ${categoriesItemRef.length} категорії.`);
const category = document.querySelectorAll('h2');
category.forEach((item) => {
  const itemText = item.textContent;
  const amountEl = item.nextElementSibling.querySelectorAll('li').length;
  console.log(` Категорія: ${itemText} 
 Кількість елементів: ${amountEl}`);
});
