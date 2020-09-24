// додаю галерею

import gallery from "./gallery-items.js";

{
  /* <li class="gallery__item">
    <a
        class="gallery__link"
        href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
    >
        <img
            class="gallery__image"
            src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
            data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
            alt="Tulips"
        />
    </a>
</li> */
}

const makeGalleryItemMarkup = ({ preview, original, description }) => {
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
    `;
};

const imageGalleryContainer = document.querySelector(".js-gallery");

const makeGalleryMarkup = gallery.map(makeGalleryItemMarkup).join("");

imageGalleryContainer.insertAdjacentHTML("afterbegin", makeGalleryMarkup);

// оверлей контент

imageGalleryContainer.addEventListener("click", addLightboxContent);

const lightboxContentEl = document.querySelector(".lightbox__content img");

function addLightboxContent(evt) {
  lightboxContentEl.src = evt.target.dataset.source;
  lightboxContentEl.alt = evt.target.alt;
}

// закрити відкрити модальне вікно

const refs = {
  closeLightbox: document.querySelector('[data-action="close-lightbox"]'),
  lightbox: document.querySelector(".js-lightbox"),
  overlay: document.querySelector(".lightbox__overlay"),
};

imageGalleryContainer.addEventListener("click", onOpenLightbox);
refs.closeLightbox.addEventListener("click", onCloseLightbox);
refs.overlay.addEventListener("click", onOverlayClick);

function onOpenLightbox(event) {
  window.addEventListener("keydown", onEscKey);
  refs.lightbox.classList.add("is-open");
  event.preventDefault();
}

function onCloseLightbox() {
  window.removeEventListener("keydown", onEscKey);
  refs.lightbox.classList.remove("is-open");
  lightboxContentEl.src = "";
}

function onOverlayClick() {
  onCloseLightbox();
}

function onEscKey(event) {
  if (event.code === "Escape") {
    onCloseLightbox();
  }
}
