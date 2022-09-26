import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

function createElemetItems(items) {
  return items
    .map(item => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
      alt="${item.description}"
      />
      </a>
      </div>`;
    })
    .join('');
}

const galleryMarkUp = createElemetItems(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkUp);

galleryRef.addEventListener('click', onImageClick);

let imageOnclick;

function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    console.log('not img');
    return;
  }
  let imgUrl = event.target.dataset.source;
  imageOnclick = basicLightbox.create(`<img src="${imgUrl}"/>`, {
    onShow: () => (event.target.src = imgUrl),
  });
  imageOnclick.show();
}
