//defining a KVP
function my_Dictionary() {
    var Car = {
        Brand:"Ferrari",
        engine:"2.7l",
        Color:"Red",
        Year:"1978",
        Power:"390bhp",
    };
    delete Car.Power; //This delete the Power KVP from the dictionary before is displayed 
    document.getElementById("Dictionary").innerHTML = Car.Power;
}