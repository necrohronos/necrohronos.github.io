//definicja; this to odwołanie do samego siebie
/*let person = {
    name: "Marcin",
    height: 184,
    //metoda - funkcja obiektu
    print() {
    console.log(this.name +  ' mierzy ' + this.height +'cm');
}
}
console.log(person.name) */
//wszystkie klucze
/*console.log(person);
person.print(); */
// class Person {
//     consstructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     prontInfo() {
//         console.log(this.name);
//     }
// }

class Person { constructor(name, surname) { this.name = name; this.surname = surname; }
printInfo() { console.log( `Imię: ${this.name}, Nazwisko ${this.surname}` ); }
}

let marcin = new Person('Marcin',174);
//console.log(marcin.name);
marcin.printInfo();

//MATH

function pole(r) {
    return Math.PI * Math.pow(r, 2);
}
console.log(pole(4));