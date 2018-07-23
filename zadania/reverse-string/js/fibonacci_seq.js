function fibonacci(n) {
  if(n == 0) {
    console.log(0);
  }
  else if(n == 1) {
    console.log(1);
  } 
  else if(n > 1)  {
      for(let n = 0; n < 21; n++) {
console.log(fibonacci(n-1) + fibonacci(n-2));

  }}
}
fibonacci(0);
