const arrayElHasTooltip = [...document.getElementsByClassName('has-tooltip')];

for (let i = 0; i < arrayElHasTooltip.length; i++) {
    elHasTooltip = arrayElHasTooltip[i];
    
    elHasTooltip.addEventListener('click', (event) => {
        
        event.preventDefault();        
        const arrayTooltip = [...document.getElementsByClassName('tooltip')];
        for (let i = 0; i < arrayTooltip.length; i++) {
            elTooltip = arrayTooltip[i];
            console.log(elTooltip);
            // удалим существующие подсказки 
            elTooltip.remove();            
        }
                
        curEl = event.target;        
        curTitle = curEl.getAttribute('title');        
        
        //curEl.insertAdjacentHTML('afterEnd',`<div class='tooltip tooltip_active'>${curTitle}</div>`);   
        curTooltip = document.createElement('div');
        curTooltip.classList.add('tooltip');
        curTooltip.classList.toggle('tooltip_active');
        //curTooltip.textContent = curTitle;
        curTooltip.innerHTML =  curTitle;
        curEl.appendChild(curTooltip);

        let coords = curEl.getBoundingClientRect();
        let left = coords.left;   
        let top = coords.top + curEl.offsetHeight;
        curTooltip.style.left = left + 'px';
        curTooltip.style.top = top + 'px';
                        
    }, false)
}