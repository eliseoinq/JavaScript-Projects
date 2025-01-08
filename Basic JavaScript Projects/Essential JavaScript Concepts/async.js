alert(document.getElementById("p1").innerHTML);
// Created this function just to test the defer attribute in the html code linked 
function join() {
    // Declare a variable to hold the initial part of the sentence

    var sentence = "I'm learning";
    // Append additional text to the variable using the += operator

    sentence += " a lot from this course";
    // Use document.getElementById to find the element with the id "concatenate"
// Set its innerHTML property to display the combined sentence
    document.getElementById("concatenate").innerHTML = sentence;
}