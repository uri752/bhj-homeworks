const arrayChat = [...document.getElementsByClassName('chat-widget')];
const curChat = arrayChat[0];
const elInput = document.getElementById('chat-widget__input');
const messagesRobot = ['Кто тут?',
    'Вы не купили у нас ни одного товара, чтобы так с нами разговаривать!',
    'Где ваша совесть?','К сожалению все операторы заняты. Не пишите нам больше.',
    'Добрый день! Досвидания!', 
    'Мы ничего не будем вам продавать'];

curChat.addEventListener('click', () => {
    curChat.classList.add('chat-widget_active');
});

elInput.addEventListener('keydown', (e) => {
    console.log(e);
    if (e.keyCode != 13) {
        return;
   }
   
   const now = new Date();
   messageClient = elInput.value; // textContent
   elInput.value = "";
   console.log("value: " + elInput.value);
   console.log("textContent: " + elInput.textContent);
   const messages = document.querySelector('.chat-widget__messages');
   messages.innerHTML += `
   <div class = "message message_client">
        <div class="message__time">${now.toLocaleTimeString()}</div>
        <div class="message__text">${messageClient}</div>
    </div>
   `;

   //ответ робота ИИ
   indexMessageRobot = Math.floor( Math.random() * messagesRobot.length);
   messageRobot = messagesRobot[indexMessageRobot];
   messages.innerHTML += `
   <div class = "message">
        <div class="message__time">${now.toLocaleTimeString()}</div>
        <div class="message__text">${messageRobot}</div>
    </div>
   `;
});