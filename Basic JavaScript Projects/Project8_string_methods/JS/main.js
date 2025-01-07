// created a function that concatenate a sentence
function full_sentance() {
    var part_1 = "Good morning! ";
    var part_2 = "Today we'll learn ";
    var part_3 = "how to ";
    var part_4 = "concatenate a string with JS"
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// created a function that slice a sentence
function slice_method() {
    var Sentence = "All work and no play makes Jon a dull boy"
    var Section = Sentence.slice(27,31);//estracting "Jon"
    document.getElementById("Slice").innerHTML = Section;
}

// created a function that slice a sentence using a negative parameter
function slice_neg() {
    var Sentence_1 = "All work and no play makes Jon a dull boy"
    var Section_1 = Sentence_1.slice(-26,-20); //extracting "play"
    document.getElementById("Slice_neg").innerHTML = Section_1;
}

//created a function to convert string to upper cases
function Convert_upper() {
    let text = document.getElementById("upper").innerHTML;
    document.getElementById("upper").innerHTML = text.toUpperCase();
}

//created a function to convert numbers to string
function string_Method() {
    var X = 125;
    document.getElementById("Number_to_string").innerHTML = X.toString();
}

//created a function to shorten long number to precise lenght
function precision_Method() {
    var X = 12584.215648325;
    document.getElementById("long_number").innerHTML = X.toPrecision(8);
}

//created a function using the toFixed method and rounding up a number

function roundUp() {
    let num = 7.89416;
    let n = num.toFixed();
    document.getElementById("round_up").innerHTML = n;
}

//created a function using the valueOf method to return the primitive value of a number

function getValueOf() {
    let num = 21;
    let n = num.valueOf();
    document.getElementById("valueOf").innerHTML = n;
}
