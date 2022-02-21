
/*Задача 1
Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

let arr = [[1, 2, 3], [4, 5], [6]];
let sumMassive = arr.flat().reduce((sum, current) => sum + current, 0);
//.flat -достаёт вложенные массивы и переносит их на уровень, который определяет разработчик
//Здесь мы передаем 0 как наше начальное значение.
console.log(sumMassive);

//Array.reduce - Его цель — взять массив и сжать его содержимое в одно значение.

----------------------------------------------------------------------------------------------------------------------


/*Задача 2
+Создайте объект User c полями firstName, lastName, year(год рождения)
+Реализуйте геттер, который возвращает полное имя пользователя
+Реализутей геттер age на основе года рождения пользователя

let user ={
    firstName : "Ilya" ,
    lastName : "Snitovets",
    year: 1994,

get fullName(){
    return `${this.firstName} ${this.lastName}`;
    },

get age(){
    let todayYear = new Date().getFullYear();
    return todayYear - this.year;
}
    }
console.log(user);
console.log(user.fullName);
console.log(user.age);


+Создайте массив из 10 пользователей
+Добавьте возможность вывода пользователей старше определенного возраста n,
+упорядоченых в алфовитном порядке в обратном направлении
+Добавьте возможность удаления пользователей младше определенного возраста n


let users = [
{
    user1: "Niko", age: 25,
},{ 
    user2:"Georgina", age: 76,
},{
    user3: "Alwaris", age: 12,
},{
    user4: "Dina", age:80,
},{ 
    user5:"Stefan", age:5,
},{
    user6:"Mihael", age: 17,
},{ 
    user7:"Margarita", age:23,
},{
    user8: "Olya", age:34,
},{
    user9: "Renat", age:46,
},{ 
    user10:"Valeriya", age:77,
},
];


let usersOlder = users.filter(function(number){
    return number.age > 30;
}).reverse();;

let usersElder = users.filter(function(number){
    return number.age < 10;
});

delete usersElder;

console.log(users);
console.log(usersOlder);
console.log(usersElder);

--------------------------------------------------------------------------------


/*Задача 3
+Создайте объект shape и его наследников circle, rectangle.

+-Oбъект shape содержит метод draw()(выводит название фигуры и ее цвет) и переменную хранящую цвет.
+Oбъект rectangle содержит свойство хранящее длины двух его сторон
+Oбъект circle содержит свойство radius
+Oбъекты circle, rectangle содержат координаты точек.
+Создать массив содержащий эти фигуры.
В цикле нарисовать их (вызвать метод draw).



let shape = {
color:"зелёный",
name :"круг",
draw(){
    return `${this.name} ${this.color}`;
}
}
console.log(shape);


let circle = new Object();
circle.radius = 765;
circle.coordinates = 854.321567;
Object.setPrototypeOf(circle,shape);
console.log(circle);


let rectangle = {
    lengthFirst: 5,
    lengthSecond: 8,
}
rectangle.coordinates = 128.9864255;
Object.setPrototypeOf(rectangle,shape);
console.log(rectangle);

let massive = ['shape', 'circle', 'rectangle'];
//console.log(massive);

for (let i = 0; i < massive; i++) {
    massive[i].draw();
  }
  console.log(massive);





/*Задача 4
+Реализуйте функции конструктор для Student и Aspirant, аспирант отличается от студента наличием некой научной работы.

+Student содержит свойства:

+firstName   /   lastName   /  group   /  averageMark (содержащую среднюю оценку).
+Aspirant имеет дополнительное свойство work

Создать метод getScholarship() для Student, который возвращает сумму стипендии.
Если средняя оценка студента больше или равна 5, то сумма 100, иначе 80.
Переопределить этот метод в Aspirant. Если средняя оценка аспиранта равна 5, то сумма 200, иначе 180.
+Создать несколько объектов типа Student и Aspirant. Создать массив содержащий объекты Student и Aspirant.
Вызвать метод getScholarship() для каждого элемента массива.*/

function Student(firstName,lastName,group,averageMark) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.group = group;
    this.averageMark = averageMark;
    /*this.getScholarship = function(value){
        return value >= 5 ? 100 : 80;*/
   //this.averageMark.filter(b=> b >= 5 ? 100 : 80);
   
    
    /*this.getScholarship = function(){
         averageMark >= 5 ? 100 : 80;
    //this.averageMark.filter(b=> b >= 5 ? 100 : 80);
    }
        /*this.averageMark.filter((b)=> {
            if(b.averageMark >= 5 ){
                return 100 ;
            }else if(b.averageMark < 5 ) { 
                return 80;
            }
        })
        
        };*/
}



function Aspirant(firstName,lastName,group,averageMark, work) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.group = group;
    this.averageMark = averageMark;  
    this.work = work; 
        }


let student1 = new Student("Nina" , "Krat" , 402 , 7);
let student2 = new Student("Vitaliy" , "Mironovskiy" , 102 , 5);
let student3 = new Student("Simona" , "Skorina" , 840 , 2);
let student4 = new Student("Emilia" , "Klark" , 122 , 9);
let student5 = new Student("Nora" , "Gilbert" , 402 , 4);

let aspirant1 = new Aspirant("Anastasia" , "Omikron" , 846 , 9, 'nature');
let aspirant2 = new Aspirant("Nikolay" , "Spiridonov" ,580 , 8, 'water');
let aspirant3 = new Aspirant("Milana" , "Glasnowa" , 610 , 3, 'disaster');
let aspirant4 = new Aspirant("Werona" , "Kuzmenkowa" , 610 , 5, 'environment');
let aspirant5 = new Aspirant("Yulia" , "Romanova" , 300 , 7, 'art');

const students = [student1,student2,student3,student4,student5];
const aspirants = [aspirant1,aspirant2,aspirant3,aspirant4,aspirant5];




const student = new Student();
student.getScholarship() ;
//const scholarship = student.getScholarship() ;
//console.log(getScholarship);
