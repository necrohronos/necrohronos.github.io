let napis = 'Akademia108';

function stringReverse() {
let napisPodzielony = napis.split('');
console.log(napisPodzielony);
let tablicaOdwrocona = napisPodzielony.reverse();
console.log(tablicaOdwrocona);
let napisZjednoczony = tablicaOdwrocona.join('');
console.log(napisZjednoczony);
}
stringReverse();
