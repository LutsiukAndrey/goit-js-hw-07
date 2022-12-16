import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

const createGalleryItem = item => {
  return item
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    })
    .join('');
};

galleryRef.innerHTML = createGalleryItem(galleryItems);
console.log(galleryItems);
const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  navText: ['-', '+'],
  animationSpeed: 500,
  preloading: false,
});
