const spinner = document.body.querySelector('.lds-ring'); // находим спиннер-крутёлку для подгрузки сайта
const leftList = document.body.querySelector('#list-left'); // находим класс лишек-списка слева
const rightList = document.body.querySelector('#done-items'); // находим  список дел выполненных справа
const form = document.forms[0];

form.addEventListener('submit', function (event) { //назначаем обработчик события 
    const data = {
        text: this.elements.text.value,  // мы установили в качестве this текущий контекст. Это нужно чтобы мы могли получить объект todo с помощью this.
        isCompleted: this.elements.isCompleted.checked,
        priority: Number.parseInt(this.elements.priority.value)
    }

    fetch('http://localhost:3000/tasks/create', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(task => {
            addTask(task)
            console.log(task);
        })

    event.preventDefault();
})

function addToLeft(task) {
    const html = `<li> <input type="checkbox" data-id="${task.id}" aria-label="set completed" > <span class="badge bg-${task.priority === 1 ? 'primary' : task.priority === 2 ? 'warning' : 'danger'}">${task.priority === 1 ? 'low' : task.priority === 2 ? 'medium' : 'high'}</span> <p>${task.text}</p> </li>`
    leftList.insertAdjacentHTML('beforeend', html);

}

function addToRight(task) {
    const html = `<li> <input checked type="checkbox" data-id="${task.id}" aria-label="is completed"> <span class="badge bg-${task.priority === 1 ? 'primary' : task.priority === 2 ? 'warning' : 'danger'}">${task.priority === 1 ? 'low' : task.priority === 2 ? 'medium' : 'high'}</span> <p>${task.text}</p> <button data-id="${task.id}" class="btn btn-danger">delete</button> </li>`
    rightList.insertAdjacentHTML('beforeend', html);
}

function addTask(task) {
    if (task.isCompleted) {
        addToRight(task)
    } else {
        addToLeft(task)
    }
}

setInterval(() => {
    spinner.style.display = 'block';
    fetch('http://localhost:3000/tasks/')
        .then(response => response.json())
        .then(tasks => {
            leftList.innerHTML = '';
            rightList.innerHTML = '';
            tasks.forEach(task => addTask(task))
        })
        .catch(error => {
            console.error(error)
        })
        .finally(() => {
            spinner.style.display = 'none';
        })
}, 5000)

leftList.addEventListener('click', function (event) {
    if (event.target.tagName === 'INPUT') {
        console.log(event.target);
        const data = {
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
    if(event.target.tagName === 'BUTTON'){
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