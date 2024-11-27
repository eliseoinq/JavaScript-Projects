// defining and naming the addition function
function performAddition() {
    const num1 = 10;
    const num2 = 15;
    const result = num1 + num2;
    document.getElementById("Math").innerHTML = "The result of the addition is:" + result; //Print result in HTML
}
// defining and naming the subtraction function
function performSubtraction() {
    var Subtracion = 10 - 7;
    document.getElementById("Subtraction").innerHTML = "The result of the subtraction is:"  + Subtracion; //Print result in HTML
}
// defining and naming the multiplication function
function performMultiplication() {
    var Multiplication = 10 * 7;
    document.getElementById("Multiplication").innerHTML = "The result of the multiplication is:"  + Multiplication; //Print result in HTML
}
// defining and naming the division function
function performDivision() {
    var Division= 35 / 7;
    document.getElementById("Division").innerHTML = "The result of the division is:"  + Division; //Print result in HTML
}
// defining and naming the multioperato function
function multipleOperation() {
    var multipleOperation = (4 + 5) * 35 / 7 - 8;
    document.getElementById("multipleOperation").innerHTML = "The result of the division is:"  + multipleOperation; //Print result in HTML
}
// defining and naming the modulus operator function
function modulus_Operator() {
    var modulus_Operator = 25 % 6;
    document.getElementById("modulus_Operator").innerHTML = "The result of the division is:"  + modulus_Operator; //Print result in HTML
}
// defining and naming the negation operator function
function negation_Operator() {
    var x = 25
    document.getElementById("negation_Operator").innerHTML = "The result of the operation is:"  + - x; //Print result in HTML
}
// defining and naming the increment operator function
function increment_Operator() {
    let x = 25;
    x++;
    document.getElementById("increment_Operator").innerHTML = "The result of the increment is:" + x; //Print result in HTML
}
// defining and naming the decrement operator function
function decrement_Operator() {
    let x = 25;
    x--;
    document.getElementById("decrement_Operator").innerHTML = "The result of the decrement is:" + x; //Print result in HTML
}
// esample of math random for the window alert
window.alert(Math.random()* 1);

//math object:Example 1: calculating square root of a number 
function square_root() {
const number = 1248;
const result = Math.sqrt(number);

document.getElementById("result").innerHTML = result ; //Print result in HTML
}





