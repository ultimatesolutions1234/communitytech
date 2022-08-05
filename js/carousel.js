const track = document.querySelector('.carousel__track');


const slides = Array.from(track.children);

const nextButton = document.querySelector('.carousel__button--right');

const slideWidth = slides[0].getBoundingClientRect().width + 70;
//
// arange the slides next to each other
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

// When i click the right, move slide right;

// nextButton.addEventListener('click', e => {
//     const currentSLide = track.querySelector('.current-slide');
//     const nextSlide = currentSLide.nextElementSibling;
//
//     const amountToMove = nextSlide.style,
//         left;
//     // move to the next slide
//     track.style.transform = 'translateX(-' + amountToMove + ')';
//     currentSLide.classList.remove('current-slide');
//     nextSlide.classList.add('current-slide');
// });
