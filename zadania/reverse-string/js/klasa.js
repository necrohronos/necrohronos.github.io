// function Ksiazka(tytul, autor, przeczytana) 
class Ksiazka { constructor(tytul, autor, przeczytana)
{
    this.tytul = tytul,
    this.autor = autor,
    this.przeczytana = przeczytana,

printInfo() { 
         if (this.przeczytana == true) {
        console.log( `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i została przeczytana` ); }
        else {
            console.log( `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i nie została przeczytana` );
        }}


/* this.opiszKsiazke = function (){
    if (this.przeczytana == true) {
       console.log('Książka ma tytuł ' + this.tytul + ', autorem jest ' + this.autor + ' i została przeczytana');
        
    }
    else {
    console.log('Książka ma tytuł ' + this.tytul + ', autorem jest ' + this.autor + ' i została nie przeczytana');
}
} */
} }
let wiedzmin = new Ksiazka('Wiedźmin', 'Andrzej Sapkowski', true);
let leguin = new Ksiazka('Lewa ręka ciemności', 'Ursula LeGuin', false);
let hobbit = new Ksiazka('Hobbit', 'J.R.R. Tolkien', false);
let regal = [wiedzmin, hobbit, leguin];

function iloscPrzeczytanych(x) {
    let liczba = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i].przeczytana == true) {
            liczba++;
            console.log(x[i].printInfo());
        } else {
            console.log(x[i].printInfo());
        }
        
    }
console.log('Przeczytano książek: ' + liczba);

}
iloscPrzeczytanych(regal);
