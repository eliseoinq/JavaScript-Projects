// Creating function with a global variable
var X = 15;
function Add_number_1() {
    document.write(10 + X + "<br>");
}

function Add_number_2() {
    document.write(10 + X + "<br>");
}

Add_number_1();
Add_number_2();

// Creating function with a local variable
function Add_number_3() {
    var Y = 25;
    document.write(10 + Y + "<br>");
}

// Creating a function referring to a non defined variable (X)

function Add_number_4() {
    document.write(10 + Y + "<br>");
}

Add_number_3();
Add_number_4();

// using console_log to debug the non performing function "ReferenceError: Y is not defined"

// Created a function with if statement that utilizes the new Date().getHours() method
function get_Date() {
    if (new Date().getHours() < 12)
    document.getElementById("Greetings").innerHTML = "Good morning!!";
}

// created a function with if and else statement
function get_Support() {
    if (new Date().getHours() <= 18) {
        Support = "How can I help you?";
    }
    else {
        (new Date().getHours() > 18)
        Support = "We are gone for the day, contact us again befor 6:00PM";
    }
    document.getElementById("Support").innerHTML = Support;
}

// Created a function with IF and Else statement 
function win_holiday() {
    offer = document.getElementById("Offer").value;
    if (offer >= 500) {
        Holiday = "You won a holiday!";
    }
    else {
        Holiday = "Better luck next time!"
    }

    document.getElementById("Holiday").innerHTML = Holiday;
}

// Created a function with Else if statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 && Time > 0) {
        Reply = "It's morning time!";
    }
    else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}