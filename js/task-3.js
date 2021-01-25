// Напиши скрипт для створення галереї зображень по масиву
// даних.
// В HTML є список ul#gallery.
// < ul id = "gallery" ></ul >
// Використовуй масив об'єктів images для створення
// тегів img вкладених в li.Для створення розмітки
// використовуй шаблонні рядки і insertAdjacentHTML().
// Всі елементи галереї повинні додаватися в DOM за одну
// операцію вставки.
// Додай мінімальне оформлення галереї флексбоксами або
// грід через   css - класи.
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const createImage = (image) => {
  const galleryItem = document.createElement('li');
  const galleryImage = document.createElement('img');
  galleryItem.appendChild(galleryImage);
  galleryImage.setAttribute('src', image.url);
  galleryImage.setAttribute('alt', image.alt);
  galleryImage.classList.add('img');
  return galleryItem;
};

console.log(createImage(images[0]));
const galleryImages = images.map((image) => createImage(image));
console.log(galleryImages);

const gallery = document.querySelector('#gallery');
gallery.append(...galleryImages);
gallery.classList.add('gallery');
