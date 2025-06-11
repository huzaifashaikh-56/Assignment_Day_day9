// Array of image filenames (make sure the images exist in the same folder)
const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg"
];

let currentIndex = 0;
const sliderImage = document.getElementById("slider-image");

// Show the previous image
function showPrevious() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  sliderImage.src = images[currentIndex];
}

// Show the next image
function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  sliderImage.src = images[currentIndex];
}
