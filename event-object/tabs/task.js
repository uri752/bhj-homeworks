const arrayTabs = [...document.getElementsByClassName('tab')];
const arrayContents = [...document.getElementsByClassName('tab__content')];

for (i = 0; i < arrayTabs.length; i++) {
    arrayTabs[i].addEventListener('click', (event) => {
        curTab = event.currentTarget;
        curTab.classList.add('tab_active');
        
        index = arrayTabs.indexOf(curTab);
        curContent = arrayContents[index];
        curContent.classList.add('tab__content_active');

        // деактивировать все табы, за исключением выбранного
        arrayTabs.forEach((element) => {
            if (element != curTab) {
                element.classList.remove('tab_active');
            }    
        });

        // деактивировать все содержимое табов, за исключение выбранной
        arrayContents.forEach((element) => {
            if (element != curContent) {
                element.classList.remove('tab__content_active');
            }
        });                               
    });
}