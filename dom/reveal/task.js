const arrayReveal = [...document.getElementsByClassName('reveal')];
elReveal = arrayReveal[0];

function isVisible(el) {
    const {top, bottom} = el.getBoundingClientRect();
    if (bottom < 0 || top > window.innerHeight) {
        return false;
    }
    return true;    
}

window.addEventListener('scroll', () => {
    arrayReveal.forEach((el) => {
        if (isVisible(el)) {
            el.classList.add('reveal_active');
        } else {
            el.classList.remove('reveal_active');
        }
    });
});
