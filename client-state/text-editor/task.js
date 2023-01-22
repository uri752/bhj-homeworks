const storedText = localStorage.getItem('storedText');
const editor = document.getElementById('editor');

if (storedText) {    
    editor.value = storedText;   
}

document.addEventListener('keydown', (e) => {    
    localStorage.setItem('storedText',editor.value);
    console.log(editor.value);
})