const arrayElHasTooltip = [...document.getElementsByClassName('has-tooltip')];

for (let i = 0; i < arrayElHasTooltip.length; i++) {
    elHasTooltip = arrayElHasTooltip[i];
    
    elHasTooltip.addEventListener('click', (event) => {
        
        event.preventDefault(); // отключим стандартное поведение при клике на ссылку            
        
        curEl = event.target;          
        curTitle = curEl.getAttribute('title');                        

        curTooltip = document.querySelector('.tooltip');
        if (curTooltip && curTooltip.innerHTML === curTitle) {
            // если подсказка есть для этого элемента, то удалим ее
            curTooltip.remove();            
        } else {
            // иначе создаем ее             
            curTooltip = document.createElement('div');
            curTooltip.classList.add('tooltip');
            curTooltip.classList.toggle('tooltip_active');
            curTooltip.innerHTML =  curTitle;                        
            curEl.insertAdjacentElement('afterend',curTooltip);
            
            let coords = curEl.getBoundingClientRect();
            let left = coords.left;   
            let top = coords.top + curEl.offsetHeight;
            curTooltip.style.left = left + 'px';
            curTooltip.style.top = top + 'px';
        }

        // удалим другие подсказки, если они есть 
        const arrayTooltip = [...document.getElementsByClassName('tooltip')];
        for (let i = 0; i < arrayTooltip.length; i++) {            
            elTooltip = arrayTooltip[i];            
            if (elTooltip === curTooltip) {
                continue;
            }            
            elTooltip.remove();            
        }                                
                        
    }, false)
}