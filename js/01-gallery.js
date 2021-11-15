import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox.
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием.
// Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>; */
//insertHTML
function createGalleryMarkup(galleryItems) {
  const gallery = document.querySelector(".gallery");
  const galleryMarkup = galleryItems
    .map(
      (item) =>
        `<div class="gallery__item">
  <a class="gallery__link " href="${item.original}">
    <img

      class="gallery__image "
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    )
    .join("");
  gallery.insertAdjacentHTML("beforeend", galleryMarkup);
}
createGalleryMarkup(galleryItems);
//modalWindow
const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const targetElem = event.target.classList.contains("gallery__image");
  if (!targetElem) {
    // console.log(event.target);
    return;
  }
  const srcDataSource = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${srcDataSource}">`);
  instance.show();
  //escapeBtnClose
  window.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape") {
      instance.close();
    }
  });
});
