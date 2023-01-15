
const elTasks = document.getElementById('tasks');
const elInput = document.getElementById('task__input');
const buttonTaskAdd = document.getElementById('tasks__add');

buttonTaskAdd.onclick = (event) => {    
    event.preventDefault();    
    addTask();
};

function addTask() {
       
    let textTodo = elInput.value;
    elInput.value = '';
    if (textTodo.trim() == '') {
        return;
    }
        
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

