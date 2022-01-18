/*
Задача
let str = 'asd!asdf!adf!asdf!!!!'
Удалите в строке все символы '!'

let str = 'asd!asdf!adf!asdf!!!!';
  while (str.includes('!')){
    str=str.replaceAll('!','')
  }
console.log(str); */


/*Задача
let str = 'Lorem ipsum...'

Дана строка, состоящая из слов, разделенных пробелами.

Определите количество слов в строке.
В данной строке вставить после каждого символа 'a' символ 'b'.
Удалите 3 первых слова  

let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
let str1 = str.substr(18);
console.log (str.split(' ').length);
console.log(str1);
if (str.includes('a')){
  str = str.replace('a', 'ab');
} 
console.log(str);*/




/*Задача 3
email = 'admin@email.com'
Дан email в строке. Определить, является ли он корректным

наличие символа '@' и точки
наличие не менее двух символов после последней точки 

let email = 'admin@email.com'
if (email.includes('@' , '.') , ('.' , '-5')) {
  console.log('Корректный email');
}else{
  console.log('Не корректный email');
}
*/




/*Задача
Дана строка, содержащая полное имя файла 
(например, 'c:\WebServers\home\testsite\www\myfile.txt'). 
Выделите из этой строки имя файла без расширения.)

let str = 'c:\WebServers\home\ktestsite\www\myfile.txt';
console.log (str.substr(-10,6));)*/



/*Задача
let str = 'Lorem ipsum123 dolor 123 sit amet,
co1nsec856989tetur adipis7cing elit, sed d6o eiusmod temp567or 
incid6idunt ut l65abore et123 dolore magn256a aliqua. 
Ut enim4 ad minim veniam, quis nostrud'
Удалить в строке все цифры.

let str = 'Lorem ipsum123 dolor 123 sit amet, co1nsec856989tetur adipis7cing elit, sed d6o eiusmod temp567or incid6idunt ut l65abore et123 dolore magn256a aliqua. Ut enim4 ad minim veniam, quis nostrud';
console.log(str.replace(/[0-9]/g,"")); */



/*Задача
let str = '+++++------==---+++++'
Замените все символы '+' на '-' и наоборот 

let str = '+++++------==---+++++';
if (str.includes('+')){
  str = str.replaceAll('+', '-');
}
console.log(str);
if(str.includes('-')){
  str = str.replaceAll('-', '+');
} 
console.log(str); */
























/*Задача
Напишите функцию которая принимает r 
и возвращает длину окружности радиусом r 


const PI = 3.14159265359;
function calcLengthCircle(radius){
  let LengthCircle = PI * (radius*2);

  return LengthCircle;
}
let funcResult = calcLengthCircle(7);
console.log(Длина окружности: ${funcResult}); */


/* Задача 8
Напишите функцию, которая принимает цену товара price 
и возврадает новую цену с скидкой 3.5 %
let discount = 3.5;

function calcPriceWithDisc(price){
  let calcDics = (price*discount)/100;
  let newPriceWithDics = price-calcDics;

  return newPriceWithDics;
}
let resultFunc = calcPriceWithDisc(120);
console.log( Цена : ${resultFunc} ); */
