function calc(tablica = [1, 2, 3, 4, 5, 6]) {
let suma = 0;
    
    for(let i = 0; i < tablica.length; i++){
    suma += Math.pow(tablica[i], 2);
    }
    console.log('Suma kwadratów wynosi: ' + suma);
}
calc();