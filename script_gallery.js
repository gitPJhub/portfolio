let slideIndex = 0;
showSlides(slideIndex);

// next/previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// display the slide
function showSlides(n) {
    const slides = document.getElementsByClassName("slide");

    if (n >= slides.length) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // hide
    }

    slides[slideIndex].style.display = "block"; // show
}

let autoSlideIndex = 0;
function autoSlides() {
    const slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    autoSlideIndex++;
    if (autoSlideIndex > slides.length) {
        autoSlideIndex = 1;
    }

    slides[autoSlideIndex - 1].style.display = "block";

    setTimeout(autoSlides, 3000); 
}

autoSlides();