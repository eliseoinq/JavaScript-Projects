function displayCombinedMessage() {
    // Assign values to two variables
    let greeting = "Hello";
    let name = "You";

    // Combine the variables into a single message
    let message = greeting + ", " + name + "!";

    // Use document.getElementById to display the message in an HTML element
    document.getElementById("output").innerHTML = message;
}

function join() {
    // Declare a variable to hold the initial part of the sentence

    var sentence = "I'm learning";
    // Append additional text to the variable using the += operator

    sentence += "a lot from this course";
    // Use document.getElementById to find the element with the id "concatenate"
// Set its innerHTML property to display the combined sentence
    document.getElementById("concatenate").innerHTML = sentence;
}