'use strict'
/* function wypisz(){
    console.log("kliknięto")
}
let buttonklick = document.getElementById("klik");
buttonklick.addEventListener('click', wypisz); */


//-----------------
let przycisk = document.getElementById('ankieta');

przycisk.addEventListener('submit', function (e) {
    let name = document.getElementById('name');
    let surname = document.getElementById('surname');
    e.preventDefault();
    console.log(name.value);
    console.log(surname.value);
})
