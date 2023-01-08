const arrayRotators = [...document.getElementsByClassName('rotator__case')];

setInterval(()=>{
    for ( i = 0; i < arrayRotators.length; i++) {
        if (arrayRotators[i].classList.contains('rotator__case_active')) {
            curIndex = i;
        }
        arrayRotators[i].classList.remove('rotator__case_active');
    }
    
    curIndex = (curIndex < arrayRotators.length-1) ? curIndex + 1 : 0;
    arrayRotators[curIndex].classList.add('rotator__case_active');
    
}, 1000);