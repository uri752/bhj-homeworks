const  elementTitle = document.getElementById('poll__title');
const elementAnswers = document.getElementById('poll__answers');

const url = 'https://students.netoservices.ru/nestjs-backend/poll';
const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {

    if (xhr.readyState != xhr.DONE) {
        return;
    }

    jsonObject = JSON.parse(xhr.responseText);

    if (elementTitle) {        
        elementTitle.textContent = jsonObject.data.title;
    }

    if (elementAnswers) {
        let answers = jsonObject.data.answers;
        for (answer of answers) {            
            //elementAnswers.insertAdjacentHTML('beforeEnd',`<button class="poll__answer">${answer}</button>`);
            newAnswer = document.createElement('button');
            newAnswer.classList.add('poll__answer');
            newAnswer.textContent = answer;
            newAnswer.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!')); //alert, prompt, confirm
            elementAnswers.appendChild(newAnswer);
        }
    }

    

})

xhr.open('GET',url);
xhr.send();