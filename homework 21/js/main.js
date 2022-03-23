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
];


function renderTask2(parent, task) {
    let str = `<div class="task-item" data-task-id="${task.id}">
<div class="task-item__main-container">
  <div class="task-item__main-content">
    <form class="checkbox-form">
      <input class="checkbox-form__checkbox" type="checkbox" id="task-${task.id}">
      <label for="task-${task.id}"></label>
    </form>
    <span class="task-item__text">${task.text}</span>
  </div>
  <button class="task-item__delete-button default-button delete-button" data-delete-task-id="${task.id}">
    Удалить
  </button>
</div>
</div>`;
    parent.insertAdjacentHTML("beforeend", str);
    // Навесить обработчики на новую строку
    parent.lastElementChild.querySelector(".checkbox-form__checkbox").onchange = checkbox_change;
    parent.lastElementChild.querySelector(".task-item__delete-button").onclick = delete_click;
}
 
function renderTask(parent, task) {
    let div1 = document.createElement("div"),
        div2 = document.createElement("div"),
        div3 = document.createElement("div"),
        form = document.createElement("form"),
        input = document.createElement("input"),
        label = document.createElement("label"),
        span = document.createElement("span"),
        button = document.createElement("button");
    div1.className = "task-item";
    div1.dataset.taskId = task.id;
    div2.className = "task-item__main-container";
    div3.className = "task-item__main-content";
    form.className = "checkbox-form";
    input.className = "checkbox-form__checkbox";
    input.type = "checkbox";
    input.id = "task-" + task.id;
    label.htmlFor = "task-" + task.id;
    span.className = "task-item__text";
    span.innerText = task.text;
    button.className = "task-item__delete-button default-button delete-button";
    button.dataset.deleteTaskId = task.id; // Исправлено
    button.textContent = " Удалить ";
    form.append(input, " ", label);
    div3.append(form, " ", span);
    div2.append(div3, " ", button)
    div1.append(div2);
 
    parent.append(div1);
    // Навесить обработчики на новую строку
    input.onchange = checkbox_change;
    button.onclick = delete_click;
}
 
let taskList = document.querySelector(".tasks-list");
for (let task of tasks)
    renderTask(taskList, task);
 
let form = document.querySelector(".create-task-block");
form.onsubmit = form_submit;
let idCounter = 3; // Максимальное значение id у существующего массива задач
 
function form_submit(event) {
    event.preventDefault();
    let input = this.querySelector(".create-task-block__input");
    ++idCounter;
    let task = {
        id: idCounter,
        text: input.value
    };
    tasks.push(task);
    input.value = ""; // Очистить поле ввода, чтобы было видно, что добавили
    renderTask(taskList, task);
}
 
function checkbox_change() {
    let id = +this.id.match(/^task-(\d+)$/)[1];
    tasks.find(e => e.id === id).completed = this.checked;
    console.log(tasks); // Тестирование
}
function delete_click() {
    let id = +this.dataset.deleteTaskId;
    let index = tasks.findIndex(e => e.id === id);
    tasks.splice(index, 1);
    this.parentElement.parentElement.remove();
    console.log(tasks); // Тестирование
}