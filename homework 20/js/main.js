// Используя API RandomUser, Реализовать функционал:

// При загрузке страницы грузим юзера
// Выводим его данные в карточку справа
// При нажатии кнопки Add добавляем юзера в таблицу (только нужные поля)
// При нажатии кнопки Next загружаем нового юзера
// Изменяйте шаблон при необходимости


let ourPage = 1;
function loadNextUser(page){
fetch("https://randomuser.me/api/")
.then ((response) => response.json())
.then((user)=>{
    console.log(user);
    const tbody = document.body.querySelector('tbody');
    console.log(tbody);

})
}

     loadNextUser(ourPage);
     const buttonNext = document.body.querySelectorAll('button')[1];
     console.log(buttonNext);
     buttonNext.addEventListener('click', ()=>{
        currentPage++;
        loadNextUser(ourPage);
         })



// loadUserInTable(currentPage);
//  const buttonAdd = document.body.querySelectorAll('button')[0];
//  console.lpg(buttonAdd);
//  buttonNext.addEventListener('click', ()=>{
//     currentPage++;
//     loadUserInTable(currentPage);
//      })