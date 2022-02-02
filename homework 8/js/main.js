/*Задача 1
Объект Покупатель:
Фамилия, Имя, Отчество, Адрес, Номер кредитной карточки, Номер банковского счета;
*Создать массив из 5 покупателей.

*Вывести список покупателей в алфавитном порядке
Вывести покупателей, у которых номер кредитной карточки находится в заданном диапазоне.
(между 2 числами, задаете вы сами или спрашиваете через prompt)*/


function Customer ( surname , name , patronymic , creditCardNumber , bankNumber){
this.surname = surname;
this.name = name;
this.patronymic = patronymic;
this.creditCardNumber = creditCardNumber;
this.bankNumber = bankNumber;
this.print = function(){
    console.log(`Покупатель:${this.surname}: '${this.name}' : '${this.patronymic}' - ${this.creditCardNumber} , ${this.bankNumber}`);
};
}


const customer1 = new Customer ('Иванов', 'Иван', 'Дмитриевич', 122 , 899999987);
const customer2 = new Customer ('Абрамов', 'Олег', 'Александрович', 564 , 004442216);
const customer3 = new Customer ('Птушкин', 'Станислав', 'Васильевич', 852 , 359634911);
const customer4 = new Customer ('Янович', 'Александр', 'Михайлович', 460 , 669634698);
const customer5 = new Customer ('Синицын', 'Василий', 'Ильич', 960 , 544444488);

customers = [customer1 , customer2 , customer3 , customer4 , customer5];


const alphabetSort = customers.sort(function(a1,a2){
    if(a1.surname>a2.surname){
        return 1;
    }else if (a1.surname < a2.surname){
        return -1;
}
return 0;
})
console.log(alphabetSort);


customersFilter = (arr, min, max) => customers.filter(v => v.creditCardNumber > min && v.creditCardNumber < max);
console.log(customersFilter(customers, 150, 400)) ;




















/*Задача 2
Аквариум
Опишите объект fish

имя,цвет,хищник (да или нет),размер, скорость
Опишите объект aquarium
массив рыбок
+вывод списка рыбок Name: Имя, Color: Цвет, Size: размер, Speed: скорость, Predator: (да или нет) (соответсвенно)
+добавление рыбок
+смерть рыбки по имени

вывод всех рыбок чья скорость выше определенной
вывод только хищных рыб
+сортировка рыбок по имени
+сортировка рыбок по размеру 

function Fish( name , color ,predator, size , speed){
    this.name = name;
    this.color = color;
    this.predator = predator;
    this.size = size;
    this.speed = speed;
    this.print = function (){
        console.log(`Name: ${this.name}, Color: ${this.color} , Size: ${this.size} , Speed: ${this.speed} , Predator:${this.predator} `);
    };
}

function Aquarium(fishes = []){
    this.fishes = fishes;

    this.show = function (){
    this.fishes.forEach(b=> b.print())
    console.log('--------');
};
    this.add = function (fish){
        this.fishes.push(fish);
};

this.deleteFishByName = function (name){
     this.fishes = this.fishes.filter( f=> f.name !== name )
    };
this.speedFishes= function() {
    this.fishes =this.fishes.filter(f=>f.speed>=20);
};

this.predators = function (){
    this.fishes.filter(f=>f.predator = 'yes');
  };  
this.sortByName = function (){
    this.fishes.sort( (s1, s2) => {
        if(s1.name > s2.name){
            return 1;
        } else if(s1.name < s2.name){
            return  -1;
        }
        return 0;
    })
};
this.sortBySize = function (){
    this.fishes.sort( (s1, s2) => s1.size - s2.size);
};
}

const fish1 = new Fish( 'name1' , 'gold' ,'yes', 15 , 36);
const fish2 = new Fish( 'name2' , 'yellow' ,'no', 4 , 23);
const fish3 = new Fish( 'name3' , 'blue' ,'no', 2 , 14);
const fishes = [fish1, fish2 , fish3];

const aquarium = new Aquarium(fishes)
const fish4 = new Fish ( 'name4' , 'black' ,'no', 8 , 5);
aquarium.add(fish4);
aquarium.deleteFishByName(fish2);
aquarium.speedFishes();
aquarium.predators();
aquarium.sortByName();
aquarium.sortBySize();
aquarium.show();*/




function Fish( name , color ,predator, size , speed){
    this.name = name;
    this.color = color;
    this.predator = predator;
    this.size = size;
    this.speed = speed;
    this.print = function (){
        console.log(`Name: ${this.name}, Color: ${this.color} , Size: ${this.size} , Speed: ${this.speed} , Predator:${this.predator} `);
    };
}

const fish1 = new Fish( 'name1' , 'gold' ,'yes', 15 , 36);
const fish2 = new Fish( 'name2' , 'yellow' ,'no', 4 , 23);
const fish3 = new Fish( 'name3' , 'blue' ,'no', 2 , 14);
const fishes = [fish1, fish2 , fish3];

fishes.push (new Fish ( 'name4' , 'black' ,'no', 8 , 5));
console.log(fishes);

const iFish = fishes.findIndex(f=>f.name === 'name3' );
console.log(iFish);

delete fishes[iFish];
console.log(fishes);

const sortBySize = fishes.sort((s1, s2) => s1.size - s2.size);
console.log(sortBySize);

const sortByName = fishes.sort((s1, s2) => {
        if(s1.name > s2.name){
            return 1;
        } else if(s1.name < s2.name){
            return  -1;
        }
        return 0;
    })
 console.log(sortByName);

 const predatorFishes= fishes.filter(f=>f.predator = 'yes');
 console.log(predatorFishes);


 const speedFishes = fishes.filter(f=>f.speed>=20);
console.log(speedFishes);
 


