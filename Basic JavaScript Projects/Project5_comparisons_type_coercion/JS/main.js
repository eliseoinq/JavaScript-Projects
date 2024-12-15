// declare a variable string
let myVariable = "Good Morning!!!";

// Use document.write() and typeof to display the data type string
document.write("The data type of myVariable is: " + typeof myVariable);

// declare a variable number
let myVariable1 = 365;

// Use document.write() and typeof to display the data type number
document.write("The data type of myVariable is: " + typeof myVariable1);

//Use document.write() to utilize type coercion
document.write("365" + 55);

//Use NaN function and diplay true
function is_Not_a_number() {
    document.getElementById("test").innerHTML = isNaN("Good morning");
}

///Use NaN function and diplay false
function is_a_number() {
    document.getElementById("test1").innerHTML = isNaN("883");
}

//Use infity function and dislay in HTML
function infinity() {
    document.getElementById("infinity").innerHTML = (3E320);
}

//Use negative infity function and dislay in HTML
function neg_infinity() {
    document.getElementById("neg_infinity").innerHTML = (-3E320);
}

//Use booleans law to display greater 
function boolean_greater_and() {
    document.getElementById("greater").innerHTML = (10 > 2);
}

//Use booleans law to display lesser 
function boolean_lesser_than() {
    document.getElementById("lesser").innerHTML = (10 <= 2);
}

//Use equations and display results on the consol log
console.log(3+8+265+4+159);

console.log(255<=125);

//Use compare function display false
function compare() {
    document.getElementById("compare").innerHTML = ([10+7]==15);
}

//Use compare function display true
function compare1() {
    document.getElementById("compare1").innerHTML = ([10+5]==15);
}

//Use triple equal to display true
var x =150;
var y =150;
function compare_triple_equal() {
    document.getElementById("compare2").innerHTML =(x === y);
}

//Use triple equal to display false
var a =150;
var b ="150";
function compare_triple_equal1() {
    document.getElementById("compare3").innerHTML =(a === b);
}

//Use AND operator and diaplay true
function AND() {
    document.getElementById("AND").innerHTML =(10 > 6 && 7 < 10);
}

//Use AND operator and diaplay false
function AND1() {
    document.getElementById("AND1").innerHTML =(10 > 12 && 7 < 10);
}

//Use or operator and display true
function OR() {
    document.getElementById("OR").innerHTML =(10 > 12 || 10 > 7);
}

//Use or operator and display false
function OR1() {
    document.getElementById("OR1").innerHTML =(10 < 6 || 7 > 10);
}

//Use not operator and display false
function NOT() {
    document.getElementById("NOT").innerHTML = !(10 > 6);
}

//Use not operator and display true
function NOT1() {
    document.getElementById("NOT1").innerHTML = !(10 < 6);
}