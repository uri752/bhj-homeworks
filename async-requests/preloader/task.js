const elementItems = document.getElementById('items');
const loaderImg = document.getElementById('loader');
const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {    
    // принцип раннего выхода
    if (xhr.readyState != xhr.DONE) {        
        return;
    }

    // скрыть анимацию
    loaderImg.classList.remove('loader_active');        
    
    // вывести полученные от сервера данные
    jsonObject = JSON.parse(xhr.responseText);        
    let valute = jsonObject.response.Valute;
    for (key in valute) {
        let code = valute[key].CharCode;
        let value = valute[key].Value;                
        if (elementItems) {
            elementItems.insertAdjacentHTML('beforeEnd',`<div class="item"><div class="item__code"> ${code} </div> <div class="item__value">${value}</div> <div class="item__currency">руб.</div></div>`)            
        }        
    }

});
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
xhr.open('GET',url);
xhr.send();