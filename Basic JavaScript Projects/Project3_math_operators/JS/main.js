// Function to perform addition and display the result
function performAddition() {
    const num1 = 10;
    const num2 = 15;
    const result = num1 + num2;
    document.getElementById("Math").innerHTML = "The result of the addition is:" + result;
}

function performSubtraction() {
    var Subtracion = 10 - 7;
    document.getElementById("Subtraction").innerHTML = "The result of the subtraction is:"  + Subtracion;
}

function performMultiplication() {
    var Multiplication = 10 * 7;
    document.getElementById("Multiplication").innerHTML = "The result of the multiplication is:"  + Multiplication;
}

function performDivision() {
    var Division= 35 / 7;
    document.getElementById("Division").innerHTML = "The result of the division is:"  + Division;
}

function multipleOperation() {
    var multipleOperation = (4 + 5) * 35 / 7 - 8;
    document.getElementById("multipleOperation").innerHTML = "The result of the division is:"  + multipleOperation;
}

function modulus_Operator() {
    var modulus_Operator = 25 % 6;
    document.getElementById("modulus_Operator").innerHTML = "The result of the division is:"  + modulus_Operator;
}

function negation_Operator() {
    var x = 25
    document.getElementById("negation_Operator").innerHTML = "The result of the operation is:"  + - x;
}

function increment_Operator() {
    let x = 25;
    x++;
    document.getElementById("increment_Operator").innerHTML = "The result of the increment is:" + x;
}

function decrement_Operator() {
    let x = 25;
    x--;
    document.getElementById("decrement_Operator").innerHTML = "The result of the decrement is:" + x;
}



