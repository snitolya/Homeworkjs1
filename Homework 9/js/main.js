
/*Задача 1
Получите по адресу https://jsonplaceholder.typicode.com/users массив объектов
+Преобразуйте их в массив объектов вида
  [
      {
          id: 1, // соответсвующий id из JSON
          name: 'FIRSTNAME', //Возьмите только имя (часть строки до первого пробела), сделайте все буквы заглавными
          phone: 'номер телефона', // Удалите все кроме цифр
          location: {
              street: 'Улица',
              index: 'Почтовый индекс',
              number: 'Номер suite' // Оставьте только цифры ("suite": "Apt. 950" => number: 950 (число))
          }
      },
      ....
  ]
- Полученный массив преобразуйте заменив phone на сумму ТОЛЬКО четных цифр из этого же свойства
+Отсортируйте массив по name
+-Удалите из массив всех в номере дома которых есть цифра 1
Разделите индекс всех на 2 и округлите результат до целого вверх
Выведите результат*/
const request = new XMLHttpRequest();
 
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
 
request.onload = function() {
    console.log('Onload');
    const result = request.response;
 
    const object = JSON.parse(result);
    // TODO: type code here
    const f = object
    .map(user=>{
        return {
            id : user.id,
            name: user.name.split(' ')[0].toUpperCase(),
            phone : user.phone.replaceAll('.','').replaceAll('x','').replaceAll(' ','').replaceAll('-','').replaceAll('(','').replaceAll(')','').split('').filter(e=>e%2===0).reduce((a,b)=>+a+ +b),
            location:{
            street : user.address.street,
            index : user.address.zipcode.replaceAll('-',''),
            number : user.address.suite.split(' ')[1].includes('1'), // обрезали строку до пробела
        }
   
     }
    })
    .sort((a,b)=>(a.name>b.name) ? 1:-1) //работает , остортировала по алфавиту
            
  
    console.log(f);
    }
 
request.send();//делаем запрос 
console.log('Done');


        //.forEach((e,index) => { if (e %2===0 && e < f ) f=e});
        
/*.map( o=> o.phone)
        .filter(str => { 
            const chetNumber = +str.phone;
             return chetNumber % 2 === 0
            })*/

























/*
Задача 2
Получите по адресу https://jsonplaceholder.typicode.com/posts массив объектов
Удалите из массив все элементы title который больше 25 символов
Каждуй первую букву слова из свойства body сделайте заглавной
Отсортируйте массив по длине body
Удалите из всех элементов свойство userId
Выведите результат
Преобразуйте результат в JSON строку и вывидите*/


/*const request = new XMLHttpRequest();
 
request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
 
request.onload = function() {
    console.log('Onload');
    const result = request.response;
 
    const object = JSON.parse(result);
    // TODO: type code here
    const f = object
    .map(post=>{
        return {
            title : post.title,
            userId: post.userId,
            id: post.id,
            body: post.body.charAt(0).toUpperCase().slice(1).toLowerCase(),
   
     }
    })  
    .sort((a,b)=>(a.length>b.length)) 
 
     //delete object.userId  

  
    console.log(f);
    }
 
request.send();//делаем запрос 
console.log('Done');*/