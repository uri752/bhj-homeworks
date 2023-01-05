const elementModalMain = document.getElementById('modal_main');
elementModalMain.classList.add('modal_active');

const elementModalSuccess = document.getElementById('modal_success');
const allElementsShowSuccessByClass = document.getElementsByClassName('show-success');


function closeModalMain() {
    elementModalMain.classList.remove('modal_active');
}

function closeModalSuccess() {
    elementModalSuccess.classList.remove('modal_active');
}

function closeModal() {
    closeModalMain();
    closeModalSuccess();
}

const allElementsCloseByClass = document.getElementsByClassName('modal__close');
//console.log("elementModalMainClose: "+allElementCloseByClass)

for (let i = 0; i < allElementsCloseByClass.length; i++) {
    allElementsCloseByClass[i].onclick = closeModal;
}


function showSuccessOnclick() {    
    closeModalMain();    
    elementModalSuccess.classList.add('modal_active');
}
allElementsShowSuccessByClass[0].onclick = showSuccessOnclick;