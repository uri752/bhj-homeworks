const elBook = document.getElementById('book');
const arrayControl = [...document.getElementsByClassName('font-size')];

for (i = 0; i < arrayControl.length; i++) {

    arrayControl[i].onclick = (event) => {
        /*debugger;
        console.log(event);
        */

        // убрать стиль активной кнопки для всех кнопок и добавить только для текущей
        arrayControl.forEach( (element) => element.classList.remove('font-size_active'));
        let curEl = event.currentTarget;
        curEl.classList.add('font-size_active');
        

        if (curEl.classList.contains('font-size_big')) {
            // увеличенный шрифт
            elBook.classList.add('book_fs-big');
            elBook.classList.remove('book_fs-small');            
        } else if (curEl.classList.contains('font-size_small')) {
            // уменьшенный шрифт
            elBook.classList.add('book_fs-small');
            elBook.classList.remove('book_fs-big');            
        } else { //font-size_active
            // обычный шрифт - нет классов
            elBook.classList.remove('book_fs-big');
            elBook.classList.remove('book_fs-small');
        }

        return false; // убрать стандартное поведение - переход по ссылке
    };

}