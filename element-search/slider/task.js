
// ДОРАБОТКА - заменить глобальную переменную локальной 

const elSliderPrev = document.getElementsByClassName('slider__arrow_prev')[0];

function isActiveSlide(element, index, array) {
    return element.classList.contains('slider__item_active')
}

elSliderPrev.onclick = () => {
    let curSlide = arraySliders.findIndex(isActiveSlide);
    arraySliders[curSlide].classList.toggle('slider__item_active');    
    curSlide = (curSlide == 0 ? arraySliders.length-1 : curSlide - 1);    
    arraySliders[curSlide].classList.toggle('slider__item_active');
};

const elSliderNext = document.getElementsByClassName('slider__arrow_next')[0];
elSliderNext.onclick = () => {    
    let curSlide = arraySliders.findIndex(isActiveSlide);
    arraySliders[curSlide].classList.toggle('slider__item_active');    
    curSlide = (curSlide == arraySliders.length-1 ? 0 : curSlide + 1);    
    arraySliders[curSlide].classList.toggle('slider__item_active');
};

const allElSlidersByClassName = document.getElementsByClassName('slider__item');
const arraySliders = Array.from(allElSlidersByClassName);