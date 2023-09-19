var age = +prompt("Введите свой возраст");
if (0 < age && age < 18 &&  !isNaN(age)) {alert('Вы еще молоды, Вам нужно учиться')} 
else if (18 <= age && age < 50 &&  !isNaN(age)) {alert('Вам нужно работать')} 
else if (50 <= age && age < 59 &&  !isNaN(age)) {alert('Вам скоро на пенсию')} 
else if (59 <= age && age < 100 &&  !isNaN(age)) {alert('Вы пенсионер')} 
else  {alert('Что-то пошло не так')} 
alert('Введите три числа' )
var one = +prompt("Введите первое число");
var two = +prompt("Введите второе число");
var three = +prompt("Введите третье число");
if (one > two && one < three && !isNaN(one) && !isNaN(two) && !isNaN(three))
{alert('среднее число :' + one )} 
else if (one < two && one > three && !isNaN(one) && !isNaN(two) && !isNaN(three))
{alert('среднее число :' + one )} 
else if ( one < two && two < three && !isNaN(one) && !isNaN(two) && !isNaN(three))
{alert('среднее число :' + two )} 
else if ( one > two && two > three && !isNaN(one) && !isNaN(two) && !isNaN(three)) 
{alert('среднее число :' + two )} 
else if (three > two && one > three && !isNaN(one) && !isNaN(two) && !isNaN(three))
{alert('среднее число :' + three )} 
else if (three < two && one < three && !isNaN(one) && !isNaN(two) && !isNaN(three))
{alert('среднее число :' + three )} 
else {alert("ошибка при вводе" )}
var watch = +prompt("Введите время в цифрах");
switch (watch) {
    case 1:
        alert("1 час ночи");
        break;
    case 2:
        alert("2 часа ночи");
        break;
    case 3:
        alert("3 часа ночи");
        break;
    case 4:
        alert("4 часа ночи");
        break;
    case 5:
        alert("5 часов ночи");
        break;
    case 6:
        alert("6 часов ночи");
        break;
    case 7:
        alert("7 часов утра");
        break;
    case 8:
        alert("8 часов утра");
        break;
    case 9:
        alert("9 часов утра");
        break;
    case 10:
        alert("10 часов утра");
        break;
    case 11:
        alert("11 часа дня");
        break;
    case 12:
        alert("12 часа дня");
        break;
    case 13:
        alert("1 час дня");
        break;
    case 14:
        alert("2 часа дня");
        break;
    case 15:
        alert("3 часа дня");
        break;
    case 16:
        alert("4 часа дня");
        break;
    case 17:
        alert("5 часов дня");
        break;
    case 18:
        alert("6 часов вечера");
        break;
    case 19:
        alert("7 часов вечера");
        break;
    case 20:
        alert("8 часов вечера");
        break;
    case 21:
        alert("9 часов вечера");
        break;
    case 22:
        alert("10 часов вечера");
        break;
    case 23:
        alert("10 часов вечера");
        break;
    default:
        alert("такого часа нету");
        break;
}