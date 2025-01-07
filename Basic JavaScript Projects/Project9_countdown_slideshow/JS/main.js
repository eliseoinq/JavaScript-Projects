// created a function that runs a timer for an alarm 
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds -1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

//created image slideshow function

let slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n)  {
    showSlides(slideIndex += n);
}

//Thumbnail image control
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slides.length = slides.length;}

// Loop to hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

// Loop to deactivate all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
// Show the current slide and activate the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}