let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });

    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
}

setInterval(showSlides, 3000); // Change slide every 3 seconds
