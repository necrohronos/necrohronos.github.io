// DOMContentLoaded ładuje skrypt po załadowaniu strony
//funkcja na popup
document.addEventListener("DOMContentLoaded",function(){
    //przy wiekszych projektach lepiej odwołaś się do f globalnej
    document.getElementById('przycisk').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'block';
    })
    document.getElementById('btn').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
    })
});
let inputText = document.querySelectorAll('input[type="text"]');
for (let i =0; i < inputText.length; i++) {
    inputText[i].addEventListener('change', function() {
        document.getElementById('result').innerHTML += this.value;
    })
    document.body.addEventListener('keydown', zmienKolor);
    document.body.removeEventListener('keydown', zmienKolor)
}
//funkcja na zmianę tła przy wciśnięciu przycisku
function zmienKolor() {
    this.style.backgroundColor = 'beige';
}
/* document.body.addEventListener('keyup', function() {
    this.style.backgroundColor = '#171515';
})
} */
/* function zmienKolor() {
document.body.addEventListener('keydown', function() {
    this.style.backgroundColor = 'beige';
})
document.body.addEventListener('keyup', function() {
    this.style.backgroundColor = '#171515';
})
}

//funkcja na pisanie tego co w formularzu
/* let inputText = document.querySelectorAll('input[type="text"]');
for (let i =0; i < inputText.length; i++) {
    inputText[i].addEventListener('change', function() {
        document.getElementById('result').innerHTML += this.value;
    })
}
*/

let linki = document.getElementsByClassName('link');
for (let i = 0; i < linki.length; i++) {
    linki[i].addEventListener('click', function(event) {
        event.preventDefault();
        console.log(event);
    })
}
