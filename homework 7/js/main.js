/*Задача 1
Описать объект, представляющий треугольник. 
Предусмотреть методы для создания объектов, вычисления 
площади и периметра



function Triangle(side1,side2,side3){
    this.side1=side1;
    this.side2=side2;
    this.side3=side3;

    this.perimeter=function(){
      return side1+side2+side3;
};
this.square=function(){
    let partPerimeter=(side1+side2+side3)/2;
    console.log(partPerimeter);
    return Math.sqrt(partPerimeter * ((partPerimeter-side1) * (partPerimeter-side2) * (partPerimeter-side3)));
};
}
let Triangle1= new Triangle (8,4,6);
let p = Triangle1.perimeter();
let s = Triangle1.square();
console.log(p);
console.log(s);

*/







/*Задача 2
Создайте структуру с именем train, содержащую поля:
название пункта назначения, номер поезда, время отправления.

Ввести данные в массив из пяти элементов типа train
Упорядочить элементы по номерам поездов.
Добавить возможность вывода информации о поезде, номер 
которого введен пользователем.
Добавить возможность сортировки массив по пункту назначения,
 (* причем поезда с одинаковыми пунктами назначения должны 
быть упорядочены по времени отправления)*/


function Train(destination,trainNumber,departureTime){
    this.destination=destination;
    this.trainNumber=trainNumber;
    this.departureTime=departureTime;
}


let trains=[
{destination:'Wrozlaw', trainNumber:28 , departureTime:2300},
{destination:'Drezden', trainNumber:3 , departureTime:1100},
{destination:'Lublin', trainNumber:9 , departureTime:1800},
{destination:'Budapesht', trainNumber:15 , departureTime:1400},
{destination:'Yaroslavl', trainNumber:7 , departureTime:1200}
];

trains.sort(function(a,b){return a.trainNumber-b.trainNumber});
console.log(trains);



/*function sortByNumber(trains){
    trains.sort((a,b)=>a.trainNumber-a.trainNumber);
}*/


/*const train1 = new Train('Wrozlaw',28,2300);
const train2 = new Train('Drezden',3,1100);
const train3 = new Train('Lublin',9,1800);
const train4 = new Train('Budapesht',15,1400);
const train5 = new Train('Yaroslavl',7,1200);

const trains = [train1,train2,train3,train4,train5];*/


