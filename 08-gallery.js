import gallery from './gallery-items.js'

const galleryContainer = document.querySelector('.js-gallery');
const cardsGallery = createGallery(gallery);
galleryContainer.insertAdjacentHTML('beforeend', cardsGallery);


console.log(galleryContainer)


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

