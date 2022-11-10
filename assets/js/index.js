// calling the elements
const form = document.getElementById('form')
const taskName = document.getElementById('name');
const assign = document.getElementById('assign');
const description = document.getElementById('description');
const dueDate = document.getElementById('due-date');
// Alerts by section
const taskAlert = document.querySelector('#taskNameAlert');
const assignAlert = document.querySelector('#assignAlert');
const dueDateAlert = document.querySelector('#dueDateAlert');

// Functions
form.addEventListener('submit', e => {
    e.preventDefault();

    validFormFieldInput();
});

const setError = (element, message) => {
    const inputQuery = element.parentElement;
    const alertDisplay = inputQuery.querySelector('.alert-message');

    alertDisplay.innerText = message;
    inputQuery.classList.add('alert-message');

    inputQuery.classList.remove('success');


}
const revealTaskError = () => {
    taskAlert.style.visibility = 'visible';
}
const begoneTaskError = () => {
    taskAlert.style.visibility = 'hidden';
}

const revealAssignError = () => {
    assignAlert.style.visibility = 'visible';
}
const begoneAssignError = () => {
    assignAlert.style.visibility = 'hidden';
}

const revealDateError = () => {
    dueDateAlert.style.visibility = 'visible';
}
const begoneDateError = () => {
    dueDateAlert.style.visibility = 'hidden';
}

const setSuccess = element => {
    const inputQuery = element.parentElement;
    const alertDisplay = inputQuery.querySelector('.alert-message');
    alertDisplay.innerHTML = '';

    inputQuery.classList.add('success');

    inputQuery.classList.remove('alert-message');
};

const validFormFieldInput = () => {
    const taskNameValue = taskName.value.trim();
    const assignValue = assign.value.trim();
    const dueDateValue = dueDate.value.trim();

    if (taskNameValue === '') {
        revealTaskError();
        setError(taskName, 'Please enter a task name');
    } else {
        begoneTaskError();
        setSuccess(taskName)
    }

    if (assignValue === '') {
        revealAssignError();
        setError(assign, 'Please assign this task to a user.');
    } else {
        begoneAssignError();
        setSuccess(assign)
    }

    if (dueDateValue === '') {
        revealDateError();
        setError(dueDate, 'Please a due date for this task');
    } else {
        begoneDateError();
        setSuccess(dueDate)
    }
}




// Event Listener


