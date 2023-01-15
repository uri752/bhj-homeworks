const arrayControlDec = [...document.getElementsByClassName('product__quantity-control_dec')];
const arrayControlInc = [...document.getElementsByClassName('product__quantity-control_inc')];
const arrayProductAdd = [...document.getElementsByClassName('product__add')];
const cartProducts = document.querySelector('.cart__products');

for (let i = 0; i < arrayControlDec.length; i++) {
    let curControl = arrayControlDec[i];
    curControl.addEventListener('click', (event) => {        
        let curEl = event.target; 
        let curParent = curEl.parentNode;        
        let curElValue = curParent.querySelector('.product__quantity-value');        
        let curValue = +curElValue.innerText;        
        curValue -= 1;
        if (curValue < 1) {
            curValue = 1;
        }        
        curElValue.innerText = curValue;
    });
}

for (let i = 0; i < arrayControlInc.length; i++) {
    let curControl = arrayControlInc[i];
    curControl.addEventListener('click', (event) => {        
        let curEl = event.target; 
        let curParent = curEl.parentNode;        
        let curElValue = curParent.querySelector('.product__quantity-value');        
        let curValue = +curElValue.innerText;
        curValue += 1;        
        curElValue.innerText = curValue;
    });
}

for (let i = 0; i < arrayProductAdd.length; i++) {
    let curProductAdd = arrayProductAdd[i];
    curProductAdd.addEventListener('click', (event) => {
      
        curParent = event.target.parentNode.parentNode.parentNode;
        let dataId = curParent.getAttribute('data-id');
        let elImg = curParent.querySelector('.product__image');
        let srcImg = elImg.getAttribute('src');
        let elCount = curParent.querySelector('.product__quantity-value');
        let curCount = +elCount.innerText;

        
        // найти товар в корзине        
        // используем не императивный метод, а декларативный - функция find
        curElCart = [...document.getElementsByClassName('cart__product')];        
        curEl = curElCart.find((item) => {
            return item.getAttribute('data-id') == dataId    
        });        

        // если товара найден, то изменить количество 
        if (curEl) {
            let curElCartProductCount = curEl.querySelector('.cart__product-count');
            curCartProductCount = +curElCartProductCount.innerText;
            curCartProductCount += curCount;
            curElCartProductCount.innerText = curCartProductCount;
            return;
        } else {
            // иначе добавляем новый html-элемент 
            let newCartProduct = document.createElement('div');
            newCartProduct.classList.add('cart__product');
            newCartProduct.setAttribute('data-id', dataId);
            cartProducts.appendChild(newCartProduct);
            
            let newImg = document.createElement('img');
            newImg.classList.add('cart__product-image');
            newImg.setAttribute('src', srcImg);
            newCartProduct.appendChild(newImg);

            let newCount = document.createElement('div');
            newCount.classList.add('cart__product-count');
            newCount.innerText = curCount;
            newCartProduct.appendChild(newCount);
        }    
    });
}