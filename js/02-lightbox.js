import { galleryItems } from './gallery-items.js';
const galleryRef = document.querySelector('.gallery');

function createElemetItems(items) {
  return items
    .map(item => {
      return `<a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`;
    })
    .join('');
}
const galleryMarkUp = createElemetItems(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkUp);

const lighbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250' });
lighbox.on('show.simplelightbox');
