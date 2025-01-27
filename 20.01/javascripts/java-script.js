'use strict';
document.addEventListener("DOMContentLoaded", function(){
    /* 
|||||||||||||||||||||||||||||||||||||||||||
||||   ДОМАШНЯЯ РАБОТА 1 (ЗА 20.01)   |||||
|||||||||||||||||||||||||||||||||||||||||||

    //всё выводится в консоль, чтобы не плодить уведы!

    //1
    let str = 'abcde';
    console.log(str[0]);
    console.log(str[1]);
    console.log(str[4]);

    //2
    let num1 = prompt("Enter first number.", "");
    let num2 = prompt("Enter second number.", "");
    let result;

    if (num1 > 0) {
        result = true;
    }
    else if (num2 > 0) {
        result = true;
    }
    else {
        result = false;
    }
    console.log(result);

    //3
    let userAge = parseInt(prompt("Enter your age (e.g. 18, 37).", ""));
    if (userAge >= 18) {
        console.log("Совершеннолетний");
    }
    else if (userAge < 18) {
        console.log("Несовершеннолетний");
    }
    else {
        console.log("error");
    }
    */

    /* 
    |||||||||||||||||||||||||||||||||||||||||||
    ||||   ДОМАШНЯЯ РАБОТА 2 (ЗА 27.01)   |||||
    |||||||||||||||||||||||||||||||||||||||||||
    */
    //задача 1

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

})