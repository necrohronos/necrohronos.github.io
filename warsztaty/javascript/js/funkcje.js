//f to nazwany blok kodu który dziala jak go wywołamy po imieniu
//deklaracja funkcji
/*
function wypiszDoKonsoli() {
    console.log('123')
}
wypiszDoKonsoli();
*/

//wyrażenie funkcyjne
const wypiszDoKonsoli = function() {
    console.log('123');
}

wypiszDoKonsoli();
//funkcje parametrowe
function dodawanie (n1, n2) {
    console.log (n1 + n2)
}
dodawanie(1,2);
//łączenie Stringów to konkatenacja