const images = ["foto1.jpg", "foto2.jpg", "foto3.jpg"];
let currentIndex = 0;
const slideshowImage = document.getElementById("slideshow-image");

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    slideshowImage.src = images[currentIndex];
}

setInterval(changeImage, 3000);