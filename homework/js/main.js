
/*Посчитайте выражения*/

let c = 8 ;
let x = 2 ;
let a = 4 ;

alert( 3 + ((28*c/c**2-49) + (c-7/c+7)) * c/c+7 - c/c-7 );
alert( 4,5 + (25*x**2 - 4**-1) / (5*x + 2**-1)-3*x);
alert((2*a-2/a-2)+1-((8*a/a**2-4)+(a-2/a+2))*(a/a+2));



/*Пользователь вводит катеты прямоугольного треугольника. Найдите площадь, периметр и гипотенузу треугольника.*/
let katetTreygolnika1 = +prompt ('Введите первый катет треугольника');
let katetTreygolnika2 = +prompt ('Введите второй катет треугольника');
let squareTreygolnika = 1/2*(katetTreygolnika1*katetTreygolnika2);
alert(squareTreygolnika);
let gipotenyzaBezKornya = katetTreygolnika1**2+katetTreygolnika2**2;
let gipotenyzaTreygolnika = Math.sqrt(gipotenyzaBezKornya);
alert(gipotenyzaTreygolnika);
let perimetrTreygolnika = katetTreygolnika1 + katetTreygolnika2 + gipotenyzaTreygolnika;
alert(perimetrTreygolnika);



/*Пользователь вводит три числа. Найдите наибольшее число из них*/

let first = +prompt ('Введите первое число');
let second = +prompt ('Введите второе число');
let third = +prompt ('Введите третье число');
if (first > second )
{
if (first>third)
{
alert ( first );
}
}
else
{
if(second>first)
{
if(second>third)
{
alert ( second );
}
}
}
if (third>first)
{
if(third>second)
{
alert ( third);
}
}





let one = prompt ('Введите первое число');
let two = prompt ('Введите второе число');
let three = prompt ('Введите третье число');
alert ('Большее число :' + Math.max(one, two , three) );




/*Пользователь вводит число. Определить является ли оно четным (вывести да или нет)*/

let userNumber = prompt ('Введите число');
if ( userNumber % 2 == 0 )
{
alert ( " Да ");
}else {
    alert ("Нет")
}






