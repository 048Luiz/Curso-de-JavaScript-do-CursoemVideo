function factorial(n) {
  let fac = 1;
  for (let calc = n; calc > 1; calc--) {
    fac *= calc;
  }
  return fac;
}

//5! = 5 x 4 x 3 x 2 x 1 = 120
console.log(factorial(5));
