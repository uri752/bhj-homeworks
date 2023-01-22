//  Хром не работает с куками в локальных файлах

const elementModal = document.getElementById('subscribe-modal');

modalClose = getCookie('modalClose');
if (navigator.cookieEnabled === false) {
    alert('Cookies отключены!');
}

if (elementModal && modalClose != 'true' ) {
    elementModal.classList.add('modal_active');
}

const elementModalClose = document.querySelector('.modal__close');
if (elementModalClose) {
    elementModalClose.addEventListener('click', () => {
        setCookie('modalClose','true');

        if (elementModal) {
            elementModal.classList.remove('modal_active');
        }
    });
}

// функции-помощники для чтения-записи куки
function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));    
    result = '';
    if (cookie) {
        result = cookie.substr(name.length + 1);
    }
    return result;
}
