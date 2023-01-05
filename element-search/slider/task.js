let curSlide = 0;

const elSliderPrev = document.getElementsByClassName('slider__arrow_prev')[0];
elSliderPrev.onclick = () => {
    //console.log('elSliderPrev: '+elSliderPrev)
    arraySliders[curSlide].classList.remove('slider__item_active');
    curSlide -= 1;
    if (curSlide < 0) { curSlide = arraySliders.length-1;}
    arraySliders[curSlide].classList.add('slider__item_active');
};

const elSliderNext = document.getElementsByClassName('slider__arrow_next')[0];
elSliderNext.onclick = () => {
    //console.log('elSliderNext: '+elSliderNext)
    arraySliders[curSlide].classList.remove('slider__item_active');
    curSlide += 1;
    if (curSlide >= arraySliders.length) {curSlide = 0}
    arraySliders[curSlide].classList.add('slider__item_active');
};

const allElSlidersByClassName = document.getElementsByClassName('slider__item');
const arraySliders = Array.from(allElSlidersByClassName);