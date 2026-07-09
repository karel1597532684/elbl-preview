const serviceImages = window.serviceImages || [];

let currentImage = 0;

const mainImage = document.getElementById("mainImage");
const lightboxImage = document.getElementById("lightboxImage");
const thumbnails = document.querySelectorAll(".thumbnails img");

function updateImage() {
  if (!mainImage || serviceImages.length === 0) return;

  mainImage.classList.remove("fade");
  void mainImage.offsetWidth;

  mainImage.src = serviceImages[currentImage];
  mainImage.classList.add("fade");

  if (lightboxImage) {
    lightboxImage.src = serviceImages[currentImage];
  }

  thumbnails.forEach(function (thumb) {
    thumb.classList.remove("active");
  });

  if (thumbnails[currentImage]) {
    thumbnails[currentImage].classList.add("active");
  }
}

function changeImage(index) {
  currentImage = index;
  updateImage();
}

function nextImage() {
  currentImage++;

  if (currentImage >= serviceImages.length) {
    currentImage = 0;
  }

  updateImage();
}

function prevImage() {
  currentImage--;

  if (currentImage < 0) {
    currentImage = serviceImages.length - 1;
  }

  updateImage();
}

function openLightbox() {
  const lightbox = document.getElementById("lightbox");

  if (!lightbox || !lightboxImage) return;

  lightboxImage.src = serviceImages[currentImage];
  lightbox.classList.add("active");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");

  if (!lightbox) return;

  lightbox.classList.remove("active");
}

document.addEventListener("keydown", function (e) {
  const lightbox = document.getElementById("lightbox");

  if (!mainImage) return;

  if (e.key === "ArrowRight") {
    nextImage();
  }

  if (e.key === "ArrowLeft") {
    prevImage();
  }

  if (e.key === "Escape" && lightbox) {
    lightbox.classList.remove("active");
  }
});