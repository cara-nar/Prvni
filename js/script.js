let pole = [];
let i = 0;

function uloz(coUlozit) {
   let input = document.getElementById(coUlozit).value;
   pole.push(input);
   console.log(pole);
    window.localStorage.setItem('ha',pole);
}
// document.getElementById("myBtn").onclick = function() {myFunction()};

function myF() 
{
    document.getElementById("show").classList.toggle("show");
}

function vypis(text) {
    let salona = document.getElementById('name');
    window.localStorage.
    salona.innerHTML= "<p>" + text + "</p>";
}

function zobraz () {
    
    console.log(pole[i]);
    vypis(pole[i]);
    window.localStorage.getItem(pole[i]);
}
