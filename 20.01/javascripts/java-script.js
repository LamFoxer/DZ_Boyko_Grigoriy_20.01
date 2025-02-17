'use strict';
document.addEventListener("DOMContentLoaded", function(){
    /* 
|||||||||||||||||||||||||||||||||||||||||||
||||   ДОМАШНЯЯ РАБОТА 1 (ЗА 20.01)   |||||
|||||||||||||||||||||||||||||||||||||||||||
    */

    alert("Сначала вы увидете ДЗ1 за 20.01.");

    //1
    let str = 'abcde';
    alert("я обращаюсь сначала к " + str[0] + " потом к " + str[1] + " и наконец к " + str[4]);

    //2
    let num1 = parseInt(prompt("Enter first number.", ""));
    let num2 = parseInt(prompt("Enter second number.", ""));

    alert(num1 > 0 || num2 > 0);

    //3
    let userAge = parseInt(prompt("Enter your age (e.g. 18, 37).", ""));
    if (userAge >= 18) {
        alert("Совершеннолетний");
    }
    else if (userAge < 18) {
        alert("Несовершеннолетний");
    }
    else {
        alert("error");
    }

    /* 
    |||||||||||||||||||||||||||||||||||||||||||
    ||||   ДОМАШНЯЯ РАБОТА 2 (ЗА 27.01)   |||||
    |||||||||||||||||||||||||||||||||||||||||||
    */
    //задача 1

    alert("Теперь вашему вниманию ДЗ2 за 27.01");

    let numberOne = parseInt(prompt("Введите число арабскими цифрами:", ""));

    let numberTwo = parseInt(prompt("Введите число арабскими цифрами:", ""));
    
    if (numberOne > numberTwo) {
        alert(numberOne + " больше " + numberTwo);
    }
    
    else if(numberOne < numberTwo) {
        alert(numberOne + " меньше " + numberTwo);
    }
    
    else if(numberOne === numberTwo) {
        alert(numberOne + " равно " + numberTwo);
    }
    
    else {     
        alert("Ошибка! Введите два арабских часла (пример: 32, 2, 67,4)");
    }
    //конец задачи 1
    //задача 2
    let numberThree = parseInt(prompt("Введите число арабскими цифрами для проверки на чётность:", ""));

    if( (numberThree % 2) === 0) {
        alert(numberThree + " - чётное");
        console.log("1");
    }
    
    else if( (numberThree % 2) != 0 ) {
        alert(numberThree + " - нечётное");
    }

    else {     
        alert("Ошибка! Введите арабское число (пример: 32, 2, 67,4)");
    }
    //конец задачи 2
    //задача 3
    const secretNumber = 2;
    let numberFour = parseInt(prompt("Угадайте, какое число от 0 до 10 я загадал?", ""));

    if ( numberFour === secretNumber) {
        alert(numberFour + " Угадал!");
    }

    else {     
        alert("Не получилось.");
    }
    //конец задачи 3

    /* 
    |||||||||||||||||||||||||||||||||||||||||||
    ||||   ДОМАШНЯЯ РАБОТА 3 (ЗА 03.02.)   ||||
    |||||||||||||||||||||||||||||||||||||||||||
    */

    //Если честно, больше всего на сайте Д.Рамса мне понравилось изменения цвета-
    //-текста при наведении. Так просто и лаконично, но как красиво и элегантно.
    //К тому же функционально: пользователь понимает, что можно кликнуть.

    //!ВНИМАНИЕ! СТЕКЛОМОРФ ПОЧЕМУ-ТО НЕ РАБОТАЕТ В SAFARI.

    alert("ДЗ3 за 03.02. Стекломорф работает только в гугл хроме.");

    let button = document.querySelectorAll(".clickbox");

    button.forEach(function(clickbox){ 
        clickbox.addEventListener("click", function(){
            if(clickbox.style.backgroundColor === "lightsalmon"){
                
                clickbox.style.backgroundColor = "red";
                clickbox.style.margin = '70%';
            }
            else{
                clickbox.style.backgroundColor = "lightsalmon";
                clickbox.style.margin = '50%';
            }
        });
    });


})