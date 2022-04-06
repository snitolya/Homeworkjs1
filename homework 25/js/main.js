// Задача 1
// Создать класс машина, имеющий марку , число цилиндров, мощность.
// Определить конструктор и функцию печати. 
// Создать производный класс – грузовики, имеющий грузоподъемность кузова.
// Определить конструктор, функцию печати. 
// Определить функции переназначения марки и грузоподъемности.

// class Car{
//     constructor(brand,numberOfCylinders,power){
//         this.name = 'Car';
//         this.brand=brand;
//         this.numberOfCylinders=numberOfCylinders;
//         this.power=power;
//     }
//     draw(){
//         console.log(`${this.name} brand: ${this.brand} numberOfCylinder: ${this.numberOfCylinders}, power: ${this.power}`)
//     }
// }
// console.log(Car);
// class Trucks extends Car{
//     constructor(brand,numberOfCylinders,power,trucksCapacity){
//     super(brand,numberOfCylinders,power);
//     this.trucksCapacity=trucksCapacity;
//     this.name = 'Trucks';
//     }

//     draw(){
//         console.log(`${this.name} brand: ${this.brand} trucksCapacity: ${this.trucksCapacity} `);
//     }
// }

// let truck1 = new Trucks('Ивеко', 8, 5670, 45);
// console.log(truck1);
// truck1.draw();

// ----------------------------------------------------------------------------------------------------------------------------

// Задача 2
// Реализуйте функции конструктор для Student и Aspirant, аспирант отличается от студента наличием некой научной работы.
// Student содержит свойства: firstName,lastName , group , averageMark (содержащую среднюю оценку).Aspirant имеет дополнительное свойство work

// Создать метод getScholarship() для Student, который возвращает сумму стипендии. 
// Если средняя оценка студента больше или равна 5, то сумма 100, иначе 80.
// Переопределить этот метод в Aspirant. Если средняя оценка аспиранта равна 5, то сумма 200, иначе 180.
// Создать несколько объектов типа Student и Aspirant. Создать массив содержащий объекты Student и Aspirant. 
// Вызвать метод getScholarship() для каждого элемента массива.


class Student {
    constructor(firstName, lastName, group, averageMark) {
        this.name = 'Student';
        this.firstName = firstName;
        this.lastName = lastName;
        this.group = group;
        this.averageMark = averageMark;
    }
  
    getScholarShip(){
        if (this.averageMark >= 5) { return 100 }
        else { return 80 }
    }

}

class Aspirant extends Student {
    constructor(firstName, lastName, group, averageMark, work) {
        super(firstName, lastName, group, averageMark);
        this.name = 'Aspirant';
        this.work = work;
    }

    getScholarShip(){
        if (this.averageMark === 5) { return 200 }
        else { return 180 }
    }
}

let student1 = new Student("Nina", "Krat", 402, 7);
let student2 = new Student("Vitaliy", "Mironovskiy", 102, 5);
let student3 = new Student("Simona", "Skorina", 840, 2);
let student4 = new Student("Emilia", "Klark", 122, 9);
let student5 = new Student("Nora", "Gilbert", 402, 4);

let aspirant1 = new Aspirant("Anastasia", "Omikron", 846, 9, 'nature');
let aspirant2 = new Aspirant("Nikolay", "Spiridonov", 580, 8, 'water');
let aspirant3 = new Aspirant("Milana", "Glasnowa", 610, 3, 'disaster');
let aspirant4 = new Aspirant("Werona", "Kuzmenkowa", 610, 5, 'environment');
let aspirant5 = new Aspirant("Yulia", "Romanova", 300, 7, 'art');

const students = [student1, student2, student3, student4, student5];
const aspirants = [aspirant1, aspirant2, aspirant3, aspirant4, aspirant5];
students.forEach(a => console.log(a.getScholarShip()))
aspirants.forEach(b => console.log(b.getScholarShip()))


const student = new Student();
const aspirant = new Aspirant();
student.getScholarShip();
aspirant.getScholarShip();