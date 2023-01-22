// проверить в локальном хранилище user_id и если есть, то показать приветствие
let userId = localStorage.getItem('user_id');
const elementWelcome = document.getElementById('welcome');
const elementSignin = document.getElementById('signin');
const elementUserId = document.getElementById('user_id');

if (userId) {
    if (elementWelcome) {
        elementUserId.textContent = userId;
        elementWelcome.classList.add('welcome_active');                
        elementSignin.classList.remove('signin_active');        
    }
} 

document.forms.register.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = 'https://students.netoservices.ru/nestjs-backend/auth';
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState != xhr.DONE) {
            return;
        }
        
        jsonObject = JSON.parse(xhr.responseText);        
        success = jsonObject.success;
        if (success === true) {
            userId = jsonObject.user_id;            
            localStorage.setItem('user_id',userId);
            if (elementWelcome) {
                elementUserId.textContent = userId;
                elementWelcome.classList.add('welcome_active');
                elementSignin.classList.remove('signin_active');        
            }
        }
            
    });

    xhr.open('POST',url);
    const data = new FormData(document.forms.register);    
    xhr.send(data);
});
    

