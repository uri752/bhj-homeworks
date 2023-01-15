const arrayElHasTooltip = [...document.getElementsByClassName('has-tooltip')];

for (let i = 0; i < arrayElHasTooltip.length; i++) {
    elHasTooltip = arrayElHasTooltip[i];
    
    elHasTooltip.addEventListener('click', (event) => {
        
        event.preventDefault(); // отключим стандартное поведение при клике на ссылку            
        
        curEl = event.target;        
        curTooltip = curEl.querySelector('.tooltip');
        if (curTooltip) {
            // если подсказка есть, то удалим ее
            curTooltip.remove();            
        } else {
            // иначе создаем ее 
            curTitle = curEl.getAttribute('title');                        
            curTooltip = document.createElement('div');
            curTooltip.classList.add('tooltip');
            curTooltip.classList.toggle('tooltip_active');
            curTooltip.innerHTML =  curTitle;
            
            //curEl.appendChild(curTooltip);   
            //curEl.append(curTooltip);   
            //вставляем не как дочерний, а после нашего элемента 
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