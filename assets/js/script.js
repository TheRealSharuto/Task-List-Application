
const taskname = document.querySelector('.input-taskname');
const assign = document.querySelector('.input-assign');
const description = document.querySelector('.input-description');
const duedate = document.querySelector('.input-date');
const tasklist = document.querySelector('.list-group');

// button selectors
const addtaskbtn = document.querySelector('.addtask-btn');

// Event Listeners
addtaskbtn.addEventListener('click', addTask);

function addTask(event) {
    event.preventDefault();

    // create new list item
    const newListItem = document.createElement('li');
    newListItem.classList.add('list-group-item', 'shadow-lg', 'mb-4', 'p-3', 'rounded');

    // create all the containers for the item
    const newTaskname = document.createElement('div'); // create new taskname div
    const newAssign = document.createElement('div');
    const newDescription = document.createElement('div');
    const newDueDate = document.createElement('div');
    const newStatus = document.createElement('div');
    const titleOfTaskname = document.createElement('h6')


    
    // create styles for all containers
    newTaskname.classList.add('card-taskname');
    newAssign.classList.add('card-assign');
    newDescription.classList.add('card-description');
    newDueDate.classList.add('card-date', 'mt-2', 'mb-2');
    newStatus.classList.add('card-status');
    titleOfTaskname.classList.add('title', 'border-bottom', 'pb-4');
    

    // grab value of all input
    titleOfTaskname.innerText = taskname.value;
    newAssign.innerText = assign.value;
    newDescription.innerText = description.value;
    // create placeholder for Due Date
    const duedatePlaceholder = document.createElement('span');
    duedatePlaceholder.innerText = 'Due Date: '; 
    newDueDate.innerText = duedate.value;


    // arrange in order of display
    newListItem.appendChild(newTaskname);
    newListItem.appendChild(newAssign);
    newListItem.appendChild(newDescription);
   
    newListItem.appendChild(newDueDate);
    
    newListItem.appendChild(newStatus);
    newDueDate.appendChild(duedatePlaceholder);


    // append list items under ul.list-group
    newTaskname.appendChild(titleOfTaskname);


    // append everything under tasklist
    tasklist.appendChild(newListItem);
}




flatpickr("#dateTime", {});
