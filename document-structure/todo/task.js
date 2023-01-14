
const elTasks = document.getElementById('tasks');
const elInput = document.getElementById('task__input');
const buttonTaskAdd = document.getElementById('tasks__add');
buttonTaskAdd.onclick = (event) => {    
    event.preventDefault();
    addTask();
};

elInput.addEventListener('keydown', (e) => {
        
    if (e.keyCode != 13) {
        return;
    }
    
    addTask();
});


function addTask() {
    
    console.log('addTask()');

    let textTodo = elInput.value;
    elInput.value = '';
    if (textTodo.trim() == '') {
        return;
    }
        
    console.log(textTodo);
    
    /*elTasks.insertAdjacentHTML('afterEnd',
    `<div class="task">
        <div class="task__title">
            ${textTodo}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`);   
    */
    

    let newTodo = document.createElement('div');
    newTodo.classList.add('task');
    
    let newTodoChildDiv = document.createElement('div');
    newTodoChildDiv.classList.add('task__title');
    newTodoChildDiv.textContent = textTodo;
    newTodo.appendChild(newTodoChildDiv);

    let newTodoChildA = document.createElement('a');
    newTodoChildA.classList.add('task__remove');
    newTodoChildA.innerHTML = '&times';
    newTodoChildA.addEventListener('click', (event) => {
        curParent = event.target.parentNode;
        curParent.remove();
    });
    newTodo.appendChild(newTodoChildA);

    elTasks.appendChild(newTodo);
    
}

