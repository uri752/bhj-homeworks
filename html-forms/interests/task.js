const arrayCheckboxs = [...document.getElementsByClassName('interest__check')];

arrayCheckboxs.forEach((element) => {
    element.onclick = (event) => {
        elCur = event.target;       
        elParent = elCur.closest('.interest');        
        arrayElement = elParent.querySelectorAll('.interest__check');        
        for ( let i = 0; i < arrayElement.length; i++) {
            el = arrayElement[i];
            if (el === elCur) {
                continue;
            }
            el.checked = elCur.checked;            
        };
    };
});