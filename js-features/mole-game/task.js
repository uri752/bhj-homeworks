const elementDead = document.getElementById("dead");
const elementLost = document.getElementById("lost");
let deadCounter =0;
let lostCounter = 0;

function getHole(index) {
    let holeId = "hole"+index;
    const elementHole = document.getElementById(holeId);
    return elementHole;
}

function holeOnclick() {
    let strClassName = this.className;

    //strClassName.indexOf("hole_has-mole") >0
    //hole.className.includes( 'hole_has-mole' );
    //hole.classList.contains( 'hole_has-mole' );

    if (this.className.includes('hole_has-mole')) {
        deadCounter += 1;        
    } else  {
        lostCounter += 1;        
    }

    // если убили 10 кротов - победа 
    if (deadCounter >= 10) {        
        window.alert("Победа!");
        deadCounter = 0;
        lostCounter = 0;
    }

    // если 5 поражений - игра заканчивается 
    if (lostCounter >= 5) {
        window.alert("Поражение!");
        deadCounter = 0;
        lostCounter = 0;
    }

    elementDead.textContent = deadCounter;
    elementLost.textContent = lostCounter;
}

for (let i = 1; i<=9; i++) {
    let hole = getHole(i);
    hole.onclick = holeOnclick;
}
