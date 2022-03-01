
//const body = document.querySelector('body')// находим элемент с которым будем взаимодействовать
const header = document.createElement('header'); // создаём новый элемент
document.body.prepend(header);//показываем его в HTML
console.log(header);


const nav = document.createElement('nav'); // создаём новый элемент
document.body.append(nav);
header.prepend(nav) //показываем его в HTML
console.log(nav);


const ul = document.createElement('ul');
ul.classList.add('head-menu');
nav.prepend(ul);

for (let i = 1; i <= 4; i++) {  
const li = document.createElement('li');
 document.body.append(li);
         li.textContent = 'page' + i;
         console.log('page'+ i); 
         ul.append(li);
        }

        

const main = document.createElement('main');
main.classList.add('container'); 
header.after(main) ;

const article = document.createElement('article');
const aside = document.createElement('aside');
aside.classList.add('sidebar');
main.prepend(article);
main.append(aside);

const h1 = document.createElement('h1');
h1.textContent = 'title';
const p = document.createElement('p');
p.textContent = 'content';
article.prepend(h1);
article.append(p);




//aside.insertAdjacentHTML('afterbegin', '<ul></ul>');
let ul_2 = document.createElement('ul');
aside.prepend(ul_2);

for (let m = 1; m <= 3; m++) {  
let li_2 = document.createElement('li');
li_2.textContent = 'post'+ m ;
console.log('post'+ m); 
ul_2.prepend(li_2);
}
    


const footer = document.createElement('footer');
main.after(footer); 
footer.insertAdjacentHTML('afterbegin', '<p>copyright <b>text</b></p>');