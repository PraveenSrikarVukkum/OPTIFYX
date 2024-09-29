let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    // If index goes beyond the number of slides, wrap around
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Move the slide container to the new position
    const slideWidth = slides[currentSlide].clientWidth;
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Show the first slide on page load
showSlide(currentSlide);
