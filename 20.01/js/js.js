'use strict';
document.addEventListener("DOMContentLoaded", function(){
    
    // let message;
    // message = 'Hello!';
    //можно объявлять переменные, а уже потом записывать в них значения

    //имя переменной не может начинаться с цифр. Переменная может соджержать только буквы, цифры и /, $
    //некоторые имена переменных зарезервированны, допустим let, class, return и function
    //const - объявление неизменной переменной
    
    // let x = "аку"

    //alert(`Hi, ${x}!`) //обратные кавычки позволяют вставлять переменные в текст
    //alert("Hi, ${x}!")
    // let t = 3;
    // let isHot = t > 30 ? "Hot" : "NotHot"; //  краткая форма записи if else 
    // console.log(isHot); // вывести в консоль

    /* let userAnswer = prompt("Do you give us your approval?")

    if (userAnswer.toLowerCase() === "yes") { //toLowerCase - вызов в окошке кнопок да нет
        console.log("Thanks for your approval");
        }
    else if (userAnswer === null) {
        console.log(":(");
    }
    else {
        console.log("You didn't gave us yout approval")
    } */
    
    // let userName = prompt("Enter your name.", "");
    // alert(userName);
      
    let str = 'abcde';
    console.log(str[0]);
    console.log(str[1]);
    console.log(str[4]);

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
    /*let a = parseInt(prompt("Введите первое число:"));
    let b = parseInt(prompt("Введите второе число:"));
    сonsole.log(a > 0 || b > 0);*/
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
})
