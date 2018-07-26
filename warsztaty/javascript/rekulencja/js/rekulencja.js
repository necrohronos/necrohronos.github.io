'use strict'
 function silnia(n) {
     let result = 1;
     if (n < 0) {
         return -1;
     }
     else if (n < 2) {
         return 1;
     }
     else {
         result = n * silnia(n-1);
         return result;
     }
 }


function sliniaLoop(n){
  let wynik = 1;
     if (n < 0) {
         return -1;
     }
     else if (n < 2) {
         return 1;
     }
     else { 
     for(n; n>0; --n){
         wynik = wynik * n;
         
     }
         return wynik;
     }}
     console.log(silnia(5));
console.log(sliniaLoop(5))