
/*Используя код примера получите json (Адрес) и преобразуйте объекты
+Отсортируйте все альбомы по заголовку
Найдите количество картинок ширина и высота которых больше 800px
Преобразуйте альбом
Добавьте свойство user куда поместите объект соответствующего автора (id автора == id пользователя)
Замените в массиве images (внутри альбома) цифры на картинки (объекты image) с соответсвующим id
Удалите альбомы в которых меньше 5 картинок
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://msheiko.github.io/js/dz/F1021/json/1.json'); 
xhr.send();
xhr.onload = function() {
    console.log('Onload');
    const result = xhr.response; 
    const object = JSON.parse(result); 
    // Пишем код домашки ТУТ!!!
    const f = object.albums
    .map(albums=>{
        return {    title: albums.title,
        }  
    })
    .sort((a,b)=>{
        if (a.title>b.title){
        return 1;
        }else if( a.title<b.title){
        return -1;
        } return 0;
    })
console.log(f);  
};
xhr.onerror = function() {
  console.error("Запрос не удался");
};*/



/*Найдите количество картинок ширина и высота которых больше 800px
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://msheiko.github.io/js/dz/F1021/json/1.json'); 
xhr.send();
xhr.onload = function() {
    console.log('Onload');
    const result = xhr.response; 
    const object = JSON.parse(result); 
    // Пишем код домашки ТУТ!!!
    const f = object.images
    let sort = object.images.filter(images => parseInt(images.width)  > parseInt(800)  && parseInt(images.height) > parseInt(800) ); 
    console.log(sort);
};
   
xhr.onerror = function() {
  console.error("Запрос не удался");
};
//Преобразуйте альбом / Добавьте свойство user куда поместите 
//объект соответствующего автора (id автора == id пользователя)
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://msheiko.github.io/js/dz/F1021/json/1.json'); 
xhr.send();
xhr.onload = function() {
    console.log('Onload');
    const result = xhr.response; 
    const object = JSON.parse(result); 
    // Пишем код домашки ТУТ!!!
    const f = object
    object.albums.forEach(album => {
     album.user = object.users.find(user=> album.authorId === user.id);
      });
    console.log(f);
};
xhr.onerror = function() {
  console.error("Запрос не удался");
};


//Замените в массиве images (внутри альбома) цифры на картинки
// (объекты image) с соответсвующим id

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://msheiko.github.io/js/dz/F1021/json/1.json'); 
xhr.send();
xhr.onload = function() {
    console.log('Onload');
    const result = xhr.response; 
    const object = JSON.parse(result); 
    // Пишем код домашки ТУТ!!!
    const f = object
    object.albums.forEach(image => {
        album.user = object.find(user=> album.authorId === user.id);
         });
       console.log(f);
   };
    
};
xhr.onerror = function() {
  console.error("Запрос не удался");
};*/


// - Удалите альбомы в которых меньше 5 картинок

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://msheiko.github.io/js/dz/F1021/json/1.json'); 
xhr.send();
xhr.onload = function() {
    console.log('Onload');
    const result = xhr.response; 
    const object = JSON.parse(result); 
    // Пишем код домашки ТУТ!!!
    const f = object.albums
    let sort = object.albums.filter(images => parseInt(images.width)  > parseInt(800)  && parseInt(images.height) > parseInt(800) ); 
    console.log(sort);
};