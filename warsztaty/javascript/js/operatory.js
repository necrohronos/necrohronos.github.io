//let zmienna = 10;
//console.log(zmienna);
// console.log(++zmienna);
// console.log(zmienna++);
// console.log(zmienna);

//zmienna +=10;
//zmienna = zmienna +10
// console.log(zmienna);

//operatory porównania
/*
if {2 === '2'} {
    console.log("2 == '2'")
}
*/

//operatory logiczne
/*
if (2 == '2' && 3 == '3') {
    console.log('iloczyn logiczny')
}
*/
/*
 if (2 === '2' || 3 == '3') {
    console.log('negacja iloczyn logiczny')
}
*/
//skrócony zapis
/*
let number = 100; 
let wynik = ( number > 0 ) ? -1 : 1;
console.log( wynik );
*/
//instrukcja warunkowa
/*
if (1 > 10) {
    console.log ('1 > 10');
}
else if (1 == 10) {
    console.log('1 == 10')
}
else {
    console.log('1 < 10')
}
*/
 //switch
let color = 'czerwony';
switch(color) {
    case 'zielony':
        console.log('zielony')
        break;
    case 'niebieski':
        console.log('podałeś niebieski');
        break;
    case 'żółty':
        console.log('podałeś żółty');
        break;
    default:
        console.log('Nie podałeś koloru')
}