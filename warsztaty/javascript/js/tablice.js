//tablice to obiekt pozwalający na przechowywanie więcej niż 1 wartości
let zmienna = ['Krystian', 'Ala', 'Adam', 10];
console.log(zmienna[1]);
//dodawanie do tablicy
zmienna[4] = 'Marcin';
console.log(zmienna);
//dodawanie na koniec tablicy
zmienna.push('Michał')
console.log(zmienna)
//dodawanie na początek tablicy
zmienna.unshift('Kordian', 'Konrad');
console.log(zmienna);
//zamiana
zmienna[5] = 'Swaworzyc';
console.log(zmienna);
//sprawdzanie długości
console.log(zmienna.length);
//Usuwanie z końca
zmienna.pop();
console.log(zmienna);
//usuwanie z początku
zmienna.shift()
 console.log(zmienna);
//join zwraca wszystki elementy jako tekts
console.log(zmienna.join(' '));
//reverse odwraca tablicę niezalżnie gdie został wykonany
console.log(zmienna.reverse());
console.log(zmienna[0]);
//sort sortuje tablice niezaleznie dzie zostal wykonany
console.log(zmienna.sort());
 
