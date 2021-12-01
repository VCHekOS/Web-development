function getvaluesFromCalculator1(){

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    //alert("read values: " + num1 + operator + num2);
    
    let result = calculate(num1, operator, num2);
    result = "Your answer: " + result;

    document.getElementById("result").innerHTML = result;

}

function getvaluesFromCalculator2(){

    let num1 = parseInt(document.getElementById("n1").value);
    let num2 = parseInt(document.getElementById("n2").value);

    const form = document.getElementById("selection");
    let operator = form.elements["sel"].value;

    let res = calculate(num1, operator, num2);
    res = "Your answer: " + res;

    document.getElementById("res").innerHTML = res;

}

function getvaluesFromCalculator3(){

    let num1 = parseInt(document.getElementById("number1").value);
    let num2 = parseInt(document.getElementById("number2").value);
    let operator = document.getElementById("action").value;
    
    let result = calculate(num1, operator, num2);
    result = "Your answer: " + result;

    document.getElementById("answer").innerHTML = result;

}

function increase(x){

    let index = "number" + x;
    let num1 = parseInt(document.getElementById(index).value);
    num1++;
    document.getElementById(index).value = num1;

}

function decrease(x){

    let index = "number" + x;
    let num1 = parseInt(document.getElementById(index).value);
    num1--;
    document.getElementById(index).value = num1;

}

function calculate(num1, operator, num2){

    let result = 0;

    switch(operator){

        case "+":
            result = num1 + num2;
            break;

        case "-":
             result = num1 - num2;
             break;

        case "*":
             result = num1 * num2;
             break;

        case "/":
             result = num1 / num2;
             break;

    };

    return result;

}