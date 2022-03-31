const spinner = document.body.querySelector('.lds-ring'); // находим спиннер-крутёлку для подгрузки сайта
const leftList = document.body.querySelector('#list-left'); // находим класс лишек-списка слева
const rightList = document.body.querySelector('#done-items'); // находим  список дел выполненных справа
const form = document.forms[0];

form.addEventListener('submit', function (event) { //назначаем обработчик события на форму 
    const data = { // создаём переменную с данными 
        text: this.elements.text.value,  // мы установили в качестве this текущий контекст. Это нужно чтобы мы могли получить объект todo с помощью this.
        isCompleted: this.elements.isCompleted.checked,
        priority: Number.parseInt(this.elements.priority.value)
    }

    fetch('http://localhost:3000/tasks/create', { // отправляем запрос  на сервер 
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json()) // получаем ответ с сервера 
        .then(task => {
            addTask(task)
            console.log(task);
        })

    event.preventDefault(); // отмена стандарных действий браузера 
})

function addToLeft(task) { // функция добавления задач в левый столбец 
    const html = `<li> <input type="checkbox" data-id="${task.id}" aria-label="set completed" > <span class="badge bg-${task.priority === 1 ? 'primary' : task.priority === 2 ? 'warning' : 'danger'}">${task.priority === 1 ? 'low' : task.priority === 2 ? 'medium' : 'high'}</span> <p>${task.text}</p> </li>`
    leftList.insertAdjacentHTML('beforeend', html);

}

function addToRight(task) {
    const html = `<li> <input checked type="checkbox" data-id="${task.id}" aria-label="is completed"> <span class="badge bg-${task.priority === 1 ? 'primary' : task.priority === 2 ? 'warning' : 'danger'}">${task.priority === 1 ? 'low' : task.priority === 2 ? 'medium' : 'high'}</span> <p>${task.text}</p> <button data-id="${task.id}" class="btn btn-danger">delete</button> </li>`
    rightList.insertAdjacentHTML('beforeend', html);
}

function addTask(task) { // функция добавления выполненных задач в правый сталбец иначе в левый столбец 
    if (task.isCompleted) {
        addToRight(task)
    } else {
        addToLeft(task)
    }
}

setInterval(() => {    // каждые 5 секунд добавляется новая задача 
    spinner.style.display = 'block';
    fetch('http://localhost:3000/tasks/')
        .then(response => response.json())
        .then(tasks => {
            leftList.innerHTML = '';  // обнуляем  очищаем 
            rightList.innerHTML = '';
            tasks.forEach(task => addTask(task)) // проходимся по всем задниям и возвращаем готовую задачу 
        })
        .catch(error => {   // отлавливаем ошибки 
            console.error(error)
        })
        .finally(() => {
            spinner.style.display = 'none'; // крутёлка не видна ( крутелка видна каждые 5 секунд)
        })
}, 5000)

leftList.addEventListener('click', function (event) { // вешаем обработчик события на левую сторону 
    if (event.target.tagName === 'INPUT') {  // исходный элемент на котором произошло событие 
        console.log(event.target);
        const data = {  // данные которые отображаются в инпутах
            id: Number.parseInt(event.target.dataset.id),
            isCompleted: true
        }
        spinner.style.display = 'block';
        fetch('http://localhost:3000/tasks/update', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(task => {
                event.target.closest('li').remove();
                addToRight(task)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                spinner.style.display = 'none';
            })
    }
})

rightList.addEventListener('click', function (event){
    if(event.target.tagName === 'BUTTON'){ // если tagname = button 
        const data = {
            id: Number.parseInt(event.target.dataset.id),
        }
        spinner.style.display = 'block';
        fetch('http://localhost:3000/tasks/delete', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                if(response.status === 200){
                    event.target.closest('li').remove(); 
                }
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                spinner.style.display = 'none';
            })
    }
})


rightList.addEventListener('click', function (event) {
    if (event.target.tagName === 'INPUT') {
        console.log(event.target);
        const data = {
            id: Number.parseInt(event.target.dataset.id),
            isCompleted: false
        }
        spinner.style.display = 'block';
        fetch('http://localhost:3000/tasks/update', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(task => {
                event.target.closest('li').remove();
                addToLeft(task)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                spinner.style.display = 'none';
            })
    }
})
