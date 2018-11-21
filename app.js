const currentImage = document.querySelector('#current-image');
const otherImages = document.querySelectorAll('.other-images img');

// blue border for 1st image by default
otherImages[0].style.border = '3px solid blue';

otherImages.forEach(image => image.addEventListener('click', switchImage));

function switchImage(e) {
    // lightgrey border for all images to match their container div
    otherImages.forEach(image => image.style.border = '3px solid lightgrey');

    // switches src of current image to the src of the clicked image
    currentImage.src = e.target.src;

    // apply fadeIn animation class
    currentImage.classList.add('fade-in');

    // remove fadeIn animation class
    setTimeout(() => currentImage.classList.remove('fade-in'), 500);

    e.target.style.border = '3px solid blue';   // blue border for clicked image
}
