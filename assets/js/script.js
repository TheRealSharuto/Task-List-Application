
// Selectors
const taskName = document.querySelector('.taskName');
const assigned = document.querySelector('.assigned');
const taskDescription = document.querySelector('.taskDescription');
const dueDate = document.querySelector('.dueDate');
const todoButton = document.querySelector('.todoButton');
const todoList = document.querySelector('.todoList');

// Event Listeners
todoButton.addEventListener('click', addTodo);



//function addTodo
function addTodo(event) {
    event.preventDefault();

    //create new todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo','container-fluid', 'shadow', 'rounded', 'p-2', 'mb-4');
    //create new todoITEM
    const newTodo = document.createElement('div');
    //newTodo.innerText = 'task header';
    newTodo.classList.add('todoItem');
    todoDiv.appendChild(newTodo);
    //create new task-header
    const newTask = document.createElement('h5');
    newTask.innerText = taskName.value;
    newTask.classList.add('todo-header', 'text-center');
    newTodo.appendChild(newTask);

    //create new task-body / description
    const newTaskBody = document.createElement('div');
    newTaskBody.classList.add('todo-body');
    newTaskBody.innerText = taskDescription.value;
    newTodo.appendChild(newTaskBody);

    //create new assigned
    const assignedPlaceholder = document.createElement('div');
    assignedPlaceholder.classList.add('assignedPlaceholder')
    assignedPlaceholder.innerText = "Assigned To: ";
    newTodo.appendChild(assignedPlaceholder);
    const newAssigned = document.createElement('span');
    newAssigned.innerText = assigned.value;
    assignedPlaceholder.appendChild(newAssigned);

    //create new due date
    const duedatePlaceholder = document.createElement('div');
    duedatePlaceholder.classList.add('duedatePlaceholder');
    duedatePlaceholder.innerText = "Due Date: ";
    newTodo.appendChild(duedatePlaceholder);
    const newDueDate = document.createElement('span');
    newDueDate.classList.add('alert');
    newDueDate.innerText = dueDate.value;
    duedatePlaceholder.appendChild(newDueDate);

    // //create new footer
    // const newTaskFooter = document.createElement('div');
    // newTaskFooter.classList.add('todo-footer');
    // newTaskFooter.innerText = 'task footer';
    // newTodo.appendChild(newTaskFooter);

    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv);
}


flatpickr("#dateTime", {});
