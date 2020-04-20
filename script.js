'use strict';

let photoSlides = document.querySelectorAll('.slider__photo-list > *');
let textSlides = document.querySelectorAll('.slider__top > *');
const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');
let currentIndex = 2;

const removeClass = () => {
    photoSlides[currentIndex].classList.remove("slider__photo_big");
    textSlides[currentIndex].classList.remove("slider__element_visible");
}

const addClass = () => {
    photoSlides[currentIndex].classList.add("slider__photo_big");
    textSlides[currentIndex].classList.add("slider__element_visible");
}

addClass();

btnLeft.addEventListener('click', () => {
    removeClass();
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = photoSlides.length - 1;
    }
    addClass();
})

btnRight.addEventListener('click', () => {
    removeClass();
    currentIndex++;
    if (currentIndex>= photoSlides.length) {
        currentIndex = 0;
    }
    addClass();
})

photoSlides.forEach((photo, index) =>{
    photo.addEventListener('click', ()=>{
        removeClass();
        currentIndex = index;
        addClass();
    })
})

