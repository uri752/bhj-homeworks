const progress = document.getElementById('progress');
document.forms.form.addEventListener('submit', (e) => {

    e.preventDefault();     
    
    const xhr = new XMLHttpRequest();
    
    //xhr.addEventListener('progress', (e) => { // это событие отрабатывается только в конце 
    
    xhr.upload.addEventListener('progress', (e) => {        
        if (e.lengthComputable) {
            let complete = e.loaded / e.total;
            progress.value = complete;            
        }
    });
        
    let file = e.currentTarget.file.files[0];
        
    const formData = new FormData();
    formData.append('file', file)
    const url = 'https://students.netoservices.ru/nestjs-backend/upload';
    xhr.open('POST',url);
    xhr.send(formData);

});
