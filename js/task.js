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
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
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

const imageGalleryEl = document.querySelector(".js-gallery");

const makeGalleryMarkup = gallery.map(makeGalleryItemMarkup).join("");

imageGalleryEl.insertAdjacentHTML("afterbegin", makeGalleryMarkup);
