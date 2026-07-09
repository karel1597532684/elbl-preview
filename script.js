const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Děkujeme za poptávku. Brzy se vám ozveme.");
  });
}

const serviceImages = [
  "images/sauna1.jpg",
  "images/sauna2.jpg",
  "images/sauna3.jpg",
  "images/sauna4.jpg"
];

let currentImage = 0;

const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumbnails img");

function updateImage() {
  if (!mainImage) return;

  mainImage.classList.remove("fade");
  void mainImage.offsetWidth;

  mainImage.src = serviceImages[currentImage];
  const lightboxImage = document.getElementById("lightboxImage");

if (lightboxImage) {
  lightboxImage.src = serviceImages[currentImage];
}
  mainImage.classList.add("fade");

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
  const lightboxImage = document.getElementById("lightboxImage");

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
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function nextSlide(){

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide>=slides.length){

        currentSlide=0;

    }

    slides[currentSlide].classList.add("active");

}

setInterval(nextSlide,6000);