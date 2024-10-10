// script.js
document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.video-prev');
    const nextButton = document.querySelector('.video-next');
    const slides = document.querySelectorAll('.video-slider-slide');
    const sliderContainer = document.querySelector('.video-slider-container');
    let currentSlide = 0;

    function showSlide(index) {
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;
        
        sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
    nextButton.addEventListener('click', () => showSlide(currentSlide + 1));

    // Initialize slider
    showSlide(currentSlide);
});

