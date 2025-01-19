'use strict';
document.addEventListener("DOMContentLoaded", function(){
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
})