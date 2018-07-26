'use strict'
/*function potegaTrzy(x) {
    //return Math.pow(x, 3);
    let wynik = 1;
    for(let i=0; i < 3; i++) {
        wynik *= x;
    }
    return wynik;
}
console.log(potegaTrzy(3)); */
function potegaN(y, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= y;
    }
    return result;
}
console.log(potegaN(12, 3))
