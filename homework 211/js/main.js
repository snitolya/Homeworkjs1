const tasks = [
    {
        id: 1,
        completed: false,
        text: 'Добавить все заявки в 1С',
    },
    {
        id: 2,
        completed: false,
        text: 'Отправка писем',
    },
    {
        id: 3,
        completed: false,
        text: 'Согласование договоров',
    },
    {
        id: 4,
        completed: false,
        text: 'Добавить 15 компаний в базу',
    },
    {
        id: 5,
        completed: false,
        text: 'Обзвон должников',
    },
];


let taskList = document.querySelector(".tasks-list");

function currentTask(parent, task){
    fetch('http://localhost:3000/tasks')
    .then ((response) => response.json())
    .then((user)=>{
    console.log(user);
    let div = document.createElement("div");
    div.className = "task-item";
    div.taskId = task.id;
    form = document.createElement("form");
    input = document.createElement("input");
    input.type = "checkbox";
    input.id = "task-" + task.id;
    span = document.createElement("span");
    span.innerText = task.text;
    form.append(input);
    div.append(form, span);
    parent.append(div);
    input.addEventListener('click',testTask);
})
}

for (let task of tasks)
currentTask(taskList, task);
 
function testTask() {
    let id = +this.id.match(/^task-(\d+)$/)[1]; // поиск task и возвращает в нём нужный id (по индексу)
    tasks.find(e => e.id === id).completed = this.checked;
    console.log(tasks); // Тестим
}




// let taskList = document.querySelector(".tasks-list");
// function renderTask(parent, task) {
//     let div = document.createElement("div");
//     div.className = "task-item";
//     div.taskId = task.id;
//     form = document.createElement("form");
//     input = document.createElement("input");
//     input.type = "checkbox";
//     input.id = "task-" + task.id;
//     span = document.createElement("span");
//     span.innerText = task.text;
//     form.append(input);
//     div.append(form, span);

//     parent.append(div);
//     // Навесить обработчики на новую строку
//     input.onchange = checkbox_change;

// }
 
// for (let task of tasks)
// renderTask(taskList, task);
 
// function checkbox_change() {
//     let id = +this.id.match(/^task-(\d+)$/)[1]; // поиск task и возвращает в нём нужный id (по индексу)
//     tasks.find(e => e.id === id).completed = this.checked;
//     console.log(tasks); // Тестим
// }
