$(document).ready(function() {
    console.log('lorem ipsum');
    console.log($('#first'));
    $('#first').css('background-color', 'red').hide(3000).show('slow');
    //nazwa() //wywołanie funkcji
})

function nazwa() {
    console.log('wywołanie funkcji')
}
//nie łapie pseudoelementów zmiennie definiujemy przez var nie let