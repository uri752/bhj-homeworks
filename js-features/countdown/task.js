const elementTimer = document.getElementById("timer");
let timerCount = elementTimer.textContent;

let timerId = setInterval(() => {
        if (timerCount <= 0) {            
            clearInterval(timerId);
            window.alert("Вы победили в конкурсе!");
            return;
        }
        timerCount -= 1;       
        /*console.log("timerCount: " + timerCount);
        console.log("elementTimer.textContent: " + elementTimer.textContent);*/
        elementTimer.textContent = timerCount;
    }
    ,1000)