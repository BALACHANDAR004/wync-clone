const slider = document.querySelector('.slider');
let slideIndex = 0;

function showSlide(n) {
    slideIndex += n;
    if (slideIndex >= slider.children.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slider.children.length - 1;
    }
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function autoSlide() {
    showSlide(1);
}

// Automatically advance the slider every 3 seconds (adjust as needed)
const autoSlideInterval = setInterval(autoSlide, 3000);

// Pause auto-sliding when the user hovers over the slider
slider.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

// Resume auto-sliding when the user moves the mouse out of the slider
slider.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(autoSlide, 3000);
});