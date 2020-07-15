function uloz(coUlozit) {
   let input = document.getElementById(coUlozit);
    window.localStorage.setItem('jmeno', input.value);
}

function zobraz (coZobrazit) {
    document.getElementById('name').innerHTML = coZobrazit + ' - ' + window.localStorage.getItem(coZobrazit);
}