// main.js
// Function with HTML and JS using ternary operation with imput from the browser
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short ":"You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_ride +  "to ride.";

}

// Function with HTML and JS using ternary operation with imput from the browser
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young ":"You are old enough ";
    document.getElementById("Vote").innerHTML = Can_vote +  "to vote.";

}
// A constructor function untilising "New" and "This" keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// A function to display the result of the constructor function
function myFunction() {
    document.getElementById("Keywords_and_Constructor").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year}

function Nested_Function() {
    document.getElementById("Nested_Output").innerHTML = Count();

    // Nested function
    function Count() {
        var Starting_point = 99;
        function Minus_one()  {
        Starting_point -= 1; // Subtract 1;
        }

        Minus_one(); //Call the nested function
        return Starting_point; // Return the updated value
    }
}