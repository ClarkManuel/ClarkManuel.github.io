// JavaScript to cycle through images

const images = [
    'images/hulkvs1.jpg',
    'images/hulkvs2.jpg',
    'images/hulkvs3.jpg'
];

let currentImageIndex = 0;
const imageContainer = document.getElementById('image-container');

// Set initial image
imageContainer.style.backgroundImage = `url(${images[currentImageIndex]})`;

imageContainer.addEventListener('click', () => {
    // Increment the index to point to the next image
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Update the background image
    imageContainer.style.backgroundImage = `url(${images[currentImageIndex]})`;
});
