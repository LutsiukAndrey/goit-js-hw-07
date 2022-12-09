import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryRef = document.querySelector('.gallery');
let instance = '';
function showPic(src) {
  instance = basicLightbox.create(`<img src="${src}"/>`);
  instance.show();
}

const createGalleryItem = item => {
  return item
    .map(({ preview, original, description, code }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
data-code ="${code}"
      alt="${description}"
        />
        </a>
        </div>`;
    })
    .join('');
};
const onClick = event => {
  event.preventDefault();
  const { target } = event;

  if (target.nodeName !== 'IMG') {
    return;
  }

  showPic(event.target.dataset.source);
};
document.addEventListener('keydown', event => {
  let img = document.querySelector(`img[data-code='${event.keyCode}'`);
  if (event.keyCode == 27) {
    instance.close();
    return;
  }
  showPic(img.dataset.source);
  console.log(event.keyCode);
  // }
  //  else if(instance.show() || ){

  //   }
});

const onKeyNumClick = event => {};
window.addEventListener('keydown', onKeyNumClick);

galleryRef.addEventListener('click', onClick);
galleryRef.innerHTML = createGalleryItem(galleryItems);
