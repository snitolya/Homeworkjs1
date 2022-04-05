// На основе API https://api.instantwebtools.net/v1/airlines

// Для отображения данных обязательно использовать bootstrap
// Получить данные авиаперелетов и вывести их в таблицу
// Пока данные загружается выводить spinner
// Если данные не загрузились сообщить об этом пользователю используя botstrap alert
// Поскольку таблица большая, организуйте разбиение на страницы
// Добавьте возможность переключаться между страницами
// Добавьте возможность выбора, сколько элементов отображать на странице
// Реализуйте поиск по введенной пользователем строке
// Добавьте возможность сортировки таблицы по выбранному столбцу



function loadDataInTable(){
   fetch('https://api.instantwebtools.net/v1/airlines')
   .then ((response) => response.json())
   .then((airline)=>{
   console.log(airline);

   const table = document.body.querySelector('.table');
   const id = document.body.querySelector('#id');
   id.textContent = airline[0].id;
   const name = document.body.querySelector('#name');
   name.textContent = airline[0].name;
   const country = document.body.querySelector('#country');
   country.textContent = airline[0].country;
   const logo = document.body.querySelector('#logo');
   logo.textContent = airline[0].logo;
   const slogan = document.body.querySelector('#slogan');
   slogan.textContent = airline[0].slogan;
   const head_quaters = document.body.querySelector('#head_quaters');
   head_quaters.textContent = airline[0].head_quaters;
   const website = document.body.querySelector('#website');
   website.textContent = airline[0].website;
   const established = document.body.querySelector('#established');
   established.textContent = airline[0].established;



   airline.forEach(item =>{
      //console.log(oneAirline);
   const tr = document.body.querySelector(tr);
   const list = `<th scope="row">1</th>
     <td class='id'>${item}</td>
     <td class='name'>${item}</td>
     <td class='country'>${item}</td>
     <td class='logo'>${item}</td>
     <td class='slogan'>${item}</td>
     <td class='head_quaters'>${item}</td>
     <td class='website'>${item}</td>
     <td class='established'>${item}</td>`
     tr.textContent = list;
     document.body.querySelector('tbody').append('.all_airlines');
   });
   
   })
      



   

}

loadDataInTable();


const spinner = document.body.querySelector('.lds-ring');
setInterval(() => {   
   spinner.style.display = 'block';
   fetch('https://api.instantwebtools.net/v1/airlines')
       .then(response => response.json())
       .then(airline => {
          
       })
       .catch(error => {   
           console.error(error)
       })
       .finally(() => {
           spinner.style.display = 'none'; 
       })
}, 5000)



