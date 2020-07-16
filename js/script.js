let pole = [];
let i = 0;


function uloz(coUlozit) {
   let input = document.getElementById(coUlozit).value;
   pole.push(input);
   console.log(pole);
    window.localStorage.setItem('ha',pole);
}

function myF() 
{
    document.getElementById("show").classList.toggle("show");
}

function vypis(text) {
    let sablona = document.getElementById('name');
    window.localStorage.
    salona.innerHTML= "<p>" + text + "</p>";
}

function zobraz () {
    
    console.log(pole[i]);
    vypis(pole[i]);
    window.localStorage.getItem(pole[i]);
}

let counter = 0;

function like(){
    counter++;
    console.log(counter);
    let inputs = document.getElementsByClassName("pocet");
    console.log(inputs);
}


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
