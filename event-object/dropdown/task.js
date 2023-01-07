const arrayDropdownValue = [...document.getElementsByClassName('dropdown__value')]; // или Array.from()
const arrayDropdownItems = [...document.getElementsByClassName('dropdown__item')];

for (i = 0; i < arrayDropdownValue.length; i++) {
    elDropdownValue = arrayDropdownValue[i];
    elDropdownValue.onclick = (event) => {          
        curDropdownValue = event.target;
        curDropdown = curDropdownValue.parentNode;
        elUl = curDropdown.querySelector('ul');
        elUl.classList.toggle('dropdown__list_active');    
    }
}

for (i = 0; i < arrayDropdownItems.length; i++) {
    arrayDropdownItems[i].onclick = (event) => {                        
        curItem = event.target;
        curDropdownValue.textContent = curItem.textContent;
        curDropdown = curDropdownValue.parentNode;
        elUl = curDropdown.querySelector('ul');
        elUl.classList.toggle('dropdown__list_active');    
        return false; //отменить стандартное поведение
    }
}