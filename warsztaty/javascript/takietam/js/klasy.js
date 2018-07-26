'use strict';

class Car{
    constructor(VIN, marka, model, paliwo, pojemnosc, rok, wlasciciel="producent", uszkodzony = "false") {
        this.VIN = VIN;
        this.marka = marka;
        this.model = model;
        this.paliwo = paliwo;
        this.pojemnosc = pojemnosc;
        this.wlasciciel = wlasciciel;
        this.rok = rok;
        this.uszkodzony = uszkodzony;
    }
    zepsuj() {this.uszkodzony = "true"};
    napraw() {this.uszkodzony = "false"};
    wymienSilnik(nowePaliwo, nowaPojemnosc) {
        this.paliwo = nowePaliwo;
        this.pojemnosc = nowaPojemnosc;
    }
    sprzedaj(nowyWlasciciel) {this.wlasciciel = nowyWlasciciel;}
}
let autoJulki = new Car (314334341, "Audi", "R8", "benzyna", 5.2, 2017);
autoJulki.sprzedaj("Julka Golańska");
autoJulki.zepsuj();
autoJulki.napraw();
autoJulki.wymienSilnik(1.9, "TDI");
autoJulki.sprzedaj("Sabina");
console.log(autoJulki);
let autoKuby = new Car (414515523, "Nissan", "GT-R", "benzyna", 3.8, 2018, "Kuba K");
console.log(autoKuby);

let garage =[autoJulki,autoKuby];
console.log(garage);