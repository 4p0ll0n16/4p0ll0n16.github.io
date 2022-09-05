const requestForm = document.querySelector('#request_form');
const taskName = document.querySelector('#task_name');
const assigner = document.querySelector('#assigner');
const assignee = document.querySelector('#assignee');
const submitBtn = document.querySelector('#request_form button');

const requests = document.querySelector('#requests');

requestForm.addEventListener('submit', function(e){
    e.preventDefault();
    const li = document.createElement('li');
    const br = document.createElement('br');
    formLayout(li, 'Task Name: ', taskName.value);
    li.append(br);
    formLayout(li, 'Assigner: ', assigner.value);
    formLayout(li, 'Assignee: ', assignee.value);
    requests.append(li);
    taskName.value = '';
    assigner.value = '';
    assignee.value = '';
})

function formLayout (li, label, input) {
    const b = document.createElement('b');
    li.append(b);
    b.append(label);
    li.append(input);
}





