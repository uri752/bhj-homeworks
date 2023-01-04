const elementClickerCounter = document.getElementById("clicker__counter");
const elementCookie = document.getElementById("cookie");

function clickerCounterOnclick() {
    
    let clickerCounter = +elementClickerCounter.textContent;
    clickerCounter += 1;

    let koef = 1.2;
    let elWidth = elementCookie.width;    
    let elHeight = elementCookie.height;

    if (clickerCounter % 2 != 0) {
        elWidth *= koef;
        elHeight *= koef;
    } else {
        elWidth /= koef;
        elHeight /= koef;
    }

    elementCookie.width = elWidth;    
    elementCookie.height = elHeight;

    elementClickerCounter.textContent = clickerCounter;
    
    
} 

elementCookie.onclick = clickerCounterOnclick;