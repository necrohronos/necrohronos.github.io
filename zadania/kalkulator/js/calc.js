

document.addEventListener('DOMContentLoaded', function () {
    let noButtons = document.getElementsByClassName('number');
    let ekranik = document.getElementById('podglad');
    let resultButton = document.getElementById('wynik');
    let clearButton = document.getElementById('delete');

//    console.log(noButton);
    
    function widok() {
        ekranik.innerHTML += noButton.innerText;
        console.log(noButton.innerText);
    }
//pętla rozdzielająca wszystkie elementy na pojedyńcze
    for(noButton of noButtons) {
        noButton.addEventListener('click', widok);
//        console.log(noButton);
    }
    
//    noButton.addEventListener('click', widok);
    resultButton.addEventListener('click', function () {
        let wynik = eval(widok());
        ekranik.innerHTML(wynik);
    })
    clearButton.addEventListener('click', function () {
        ekranik.innerHTML('');
    })
});
/*
1. przyciski z jedna klasą
1a div do wyświetlania 
2. addEventListener podpiąć pod buttony
dla cyfr i znaków funkcja pobierająca value i wyświetla;
3. delete
4. funkcja wykonyjąca działanie dla wartości w wyświetlaczu eval()
2. petla dla przycisków */