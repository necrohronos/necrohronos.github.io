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
   
   /*  for(let i=0; i < n; i++) {
       result *= result+1;  
     }
     return result; */
 }
console.log(silnia(5))