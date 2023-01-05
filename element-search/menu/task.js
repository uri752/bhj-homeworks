const allElementsMenuLinkByClassName = document.getElementsByClassName('menu__link');
for ( i = 0; i < allElementsMenuLinkByClassName.length; i++ ) {
    let elementParent = allElementsMenuLinkByClassName[i].closest('.menu__item');    
    let elementSubMenu = elementParent.querySelector('.menu_sub');    
    if (elementSubMenu != null) {            
        allElementsMenuLinkByClassName[i].onclick = () =>  {
            elementSubMenu.classList.add('menu_active');            
            return false;
        }
    }
}