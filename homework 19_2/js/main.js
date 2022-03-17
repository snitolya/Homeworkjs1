// Задача 2
// Используя шаблон сделать функциональный TODO list.

// При вводе задачи она добавляется в список
// Длина задача не должна быть меньше 10 символов (При ошибке выводить пользователю сообщение любым удобным вам способом)
// В зависимости от выбранного приоритета назначать класс элементу li
// One => list-group-item-secondary
// Two => list-group-item-warning
// Three => list-group-item-danger
// Можете изменять шаблон, при необходимости


const form = document.forms[0];
const ul = document.querySelector('ul'); 
const input = document.querySelector("input"); 
function createTodoList(event) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = input.value;
    ul.append(li);
    event.preventDefault();
}
form.addEventListener('submit', createTodoList);

input.addEventListener('input' , function(){
    if(this.value.length>10){
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
    }else {
        this.classList.remove('is-valid');
        this.classList.add('is-invalid');
    }
})

const select = document.querySelector('#inputPriority');
console.log('inputPriority');

 


