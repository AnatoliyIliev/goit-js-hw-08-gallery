import gallery from './gallery-items.js'

const refs = {
    galleryContainer: document.querySelector('.js-gallery'),
    lightboxContainer: document.querySelector('.js-lightbox'),
    closeModalLightboxGallary: document.querySelector('[data-action="close-lightbox"]'),
    imageContainer: document.querySelector('.lightbox__image'),
}
const cardsGallery = createGallery(gallery);

refs.galleryContainer.insertAdjacentHTML('beforeend', cardsGallery);

refs.galleryContainer.addEventListener('click', onGalleryContainerClick);
refs.galleryContainer.addEventListener('click', onOpenModal);
refs.closeModalLightboxGallary.addEventListener('click', closeOpenModal);
refs.lightboxContainer.addEventListener('click', closeOpenModalOverlay);
window.addEventListener('keydown', closeOpenModalESC);
refs.galleryContainer.addEventListener('click', flippingGalleryLeftRight);

//Создание и рендер разметки.
function createGallery(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `
    <li class="gallery__item">
        <a
            class="gallery__link"
            href="${original}"
        >
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>
    `
    }).join('');
}

//Делегирования на галерее `ul.js-gallery` и получение `url` большого изображения.
function onGalleryContainerClick(evt) {
    const isTargetSwatchEl = evt.target.classList.contains('gallery__image');
    if (!isTargetSwatchEl) {
        return;
    }
    const inGalleryBigImage = evt.target.dataset.source;

    evt.preventDefault();

    changeImageOnLightbox(inGalleryBigImage);
}

// Открытие модального окна
function onOpenModal(evt) {
    const isTargetSwatchEl = evt.target.classList.contains('gallery__image');
    if (!isTargetSwatchEl) {
        return;
    }
    refs.lightboxContainer.classList.add('is-open');    
}

//Подмена значения атрибута `src` элемента `img.lightbox__image`
function changeImageOnLightbox(img) {    
    refs.imageContainer.src = `${img}`;
    // console.log(lightboxContainer);
}

//Закрытие модального окна по клику на кнопку
function closeOpenModal() {    
    refs.lightboxContainer.classList.remove('is-open');
    
    removeImageOnLightbox();
}

//Очистка значения атрибута `src` элемента `img.lightbox__image`
function removeImageOnLightbox() {
    refs.imageContainer.src = '';
}

//Закрытие модального окна по клику на `div.lightbox__overlay`.
function closeOpenModalOverlay() {
    closeOpenModal();
}

//Закрытие модального окна по нажатию клавиши `ESC`.
function closeOpenModalESC(evt) {
    if (evt.keyCode === 27) {
        closeOpenModal()
    }
}

//Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".
function flippingGalleryLeftRight(evt) {
    // console.log(evt.target.src);
    // console.log(gallery);
    const imgTarget = evt.target.src;
    // gallery.forEach(obj => {
        // console.log(obj.preview);
        // console.log(gallery.preview.findIndex(imgTarget));
    
    // })
        
        // .indexOf(imgTarget)
  
    
    console.log(gallery.findIndex(imgTarget));
}