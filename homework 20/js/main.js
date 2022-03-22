// Используя API RandomUser, Реализовать функционал:

// При загрузке страницы грузим юзера
// Выводим его данные в карточку справа
// При нажатии кнопки Add добавляем юзера в таблицу (только нужные поля)
// При нажатии кнопки Next загружаем нового юзера
// Изменяйте шаблон при необходимости


function loadUserInTable(page){
fetch('https://randomuser.me/api/?page=${page}')
.then ((response) => response.json())
.then((json)=>{
console.log(json);
const photo = document.body.querySelector('#photo');
photo.src = json.results[0].picture.medium;
const gender = document.body.querySelector('#gender');
gender.textContent = json.results[0].gender;
const name = document.body.querySelector('#name');
name.textContent = `${json.results[0].name.first} ${json.results[0].name.last}`;
const email = document.body.querySelector('#email');
email.textContent = json.results[0].email;
const phone = document.body.querySelector('#phone');
phone.textContent = json.results[0].phone;
const table = document.body.querySelector('tbody');
const tableRow = document.createElement('trr');
tbody.append(tableRow);
 
});
}


loadUserInTable(1);

const buttonNext = document.body.querySelectorAll('button')[1].addEventListener('click', function()=>{
const currentPage = Number.parseInt(this.dataset.page);
this.dataset.page = currentPage +1;
loadUserInTable(currentPage+1);
console.log(this.dataset.page);




const buttonAdd = document.body.querySelectorAll('button')[0];
 console.log(buttonAdd);
 buttonAdd.addEventListener('click', (e)=>{
    e.preventDefault();
    loadUserInTable();
     })




 //https://htmlweb.ru/java/example/add_row_in_table.php



// function loadNextUser(){
// const buttonNext = document.body.querySelectorAll('button')[1];
// console.log(buttonNext);
// buttonNext.addEventListener('click', (e) => {
//   e.preventDefault();
//   e++;
//  })
//  const photo = document.body.querySelector('#photo');
//  photo.src = user.picture.medium;
//  const gender = document.body.querySelector('#gender');
//  gender.textContent = user.gender;
//  const name = document.body.querySelector('#name');
//  name.textContent = `${user.name.first} ${user.name.last}`;
//  const email = document.body.querySelector('#email');
//  email.textContent = user.email;
//  const phone = document.body.querySelector('#phone');
//  phone.textContent = user.phone;
//  console.log(phone);
 
// }
//   fetch('https://randomuser.me/api')
//     .then((response) => {
//       console.log(response)
//       return response.json()
//     })
//     .then(user => {
//       console.log(user)
//     const userMan = document.querySelector('.col-md-8') 
//     console.log(userMan);
    
//     })

