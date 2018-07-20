let tablica = [10, 100, 43, 53, 76, 1123]
/*
for(let i = 0; i < tablica.length; i++){
    console.log(tablica[i]);
}
*/
/*
 for(let i = tablica.length - 1; i >= 0; i--) {
    console.log(tablica[i]);
}
*/
//pętla forEach
/*
tablica.forEach(function(element, index) {
                console.log('Index tablicy: ' + index + ' element tablicy: ' + element)
                });
 */
//pętla for in 
/*
let car = {
    marka: 'Audi',
    model: 'R8',
    pojemnosc: 4.2
};
for(let key in car) {
    console.log(car[key])
};
*/
//while do powtarzających się czynności
/*
let liczba = 1;
while(true) {
    console.log(liczba++ +'nie mam końca i zawieszam kompa')
}
*/

let number = 1;
/*
while(number <= 10) {
    console.log(number++)
};
*/
//do while najpierw robi potem sprawdza warunki - zadziała chociaż raz przy false
/*
do{
    console.log(number++)
} while(number > 2);
*/

let liczba = 1;
/*
while(true) {
    console.log(liczba++ + ' mam koniec');
    if(liczba == 15) {
        break;
    }}
*/
for(let i=1; i<=20; i++) {
    if(i % 2 != 0) {
        continue;
                   }
    console.log(i + '');
};