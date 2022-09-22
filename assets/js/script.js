
const taskname = document.querySelector('.input-taskname');
const assign = document.querySelector('.input-assign');
const description = document.querySelector('.input-description');
const duedate = document.querySelector('.input-date');
const tasklist = document.querySelector('.tasklist');
const completed = document.querySelector('.completed');
const cardduedate = document.querySelector('.card-duedate');


// button selectors
const addtaskButton = document.querySelector('.addtask-btn');
//const checkButton = document.querySelector('.check-btn');

// Event Listeners
addtaskButton.addEventListener('click', addTask);
tasklist.addEventListener('click', statusCheck);

function addTask(e) {
    e.preventDefault();

    const item = e.target;

    // create new list item
    const newListItem = document.createElement('li');
    newListItem.classList.add('list-group-item', 'shadow-lg', 'rounded');

    // create card-taskname
    const cardTaskName = document.createElement('div');
    cardTaskName.classList.add('card-taskname');
    newListItem.appendChild(cardTaskName);
    const taskNameTitle = document.createElement('h6');
    taskNameTitle.classList.add('title');
    taskNameTitle.innerText = taskname.value;
    cardTaskName.appendChild(taskNameTitle);

    // create card-assign
    const cardAssign = document.createElement('div');
    cardAssign.classList.add('card-assign', 'text-muted');
    cardAssign.innerText = 'Assign To: '
    newListItem.appendChild(cardAssign);
    const assignText = document.createElement('span');
    assignText.innerText = assign.value;
    cardAssign.appendChild(assignText);

    // create card-description
    const cardDescription = document.createElement('div');
    cardDescription.classList.add('card-description');
    cardDescription.innerText = 'Description: ';
    newListItem.appendChild(cardDescription);
    const descriptionText = document.createElement('span');
    descriptionText.innerText = description.value;
    cardDescription.appendChild(descriptionText);

    // create card-duedate
    const cardDueDate = document.createElement('div');
    cardDueDate.classList.add('card-duedate');
    newListItem.appendChild(cardDueDate);
    const dueDateSpan = document.createElement('span');
    dueDateSpan.classList.add('text-duedate');
    dueDateSpan.innerText = 'Due Date: ';
    cardDueDate.appendChild(dueDateSpan);
    const dueDateText = document.createElement('span');
    dueDateText.classList.add('alert');
    dueDateText.innerText = duedate.value;
    cardDueDate.appendChild(dueDateText);

    // create card-status
    const cardstatus = document.createElement('div');
    cardstatus.classList.add('card-status');
    newListItem.appendChild(cardstatus);

    // create trash button
    const trashbtn = document.createElement('button');
    trashbtn.classList.add('trash-btn');
    trashbtn.innerHTML = '<i class="fa-solid fa-trash fa-fw"></i>';
    cardstatus.appendChild(trashbtn);

    // create check button
    const checkbtn = document.createElement('button');
    checkbtn.classList.add('check-btn');
    checkbtn.innerHTML = '<i class="fa-solid fa-check fa-fw"></i>';
    cardstatus.appendChild(checkbtn);

    // append everything under tasklist
    tasklist.appendChild(newListItem);

    // clear input values
    taskname.value = "";
    assign.value = "";
    description.value = "";
    duedate.value = "";

    if (item.classList[0] === 'completed') {
        cardstatus.remove();
    }
}

function statusCheck(e) {
    const item = e.target;

    if (item.classList[0] === 'trash-btn') {
        const task = item.parentElement.parentElement;
        task.classList.add('vanish');
        // task.addEventListener('transition-end', function(){
        //     task.remove();
        // });
        task.remove();
    }

    if (item.classList.contains('complete')) {
        item.remove();
    }



    if (item.classList.contains('check-btn')) {
        const task = item.parentElement.parentElement;
        completed.appendChild(task);
        item.remove();
        completed.addEventListener('click', statusCheck);

    }



}




flatpickr("#dateTime", {});
