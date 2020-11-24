function factorial(num) {
  let product = 1;
  for (let i = 1; i <= num; i += 1) {
   product *= i;
  }
return product;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));

// Launch School solution
function lsFactorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *= counter;
  }

  return result;
}

console.log(lsFactorial(1));     // => 1
console.log(lsFactorial(2));     // => 2
console.log(lsFactorial(3));     // => 6
console.log(lsFactorial(4));     // => 24
console.log(lsFactorial(5));     // => 120
console.log(lsFactorial(6));     // => 720
console.log(lsFactorial(7));     // => 5040
console.log(lsFactorial(8));     // => 40320




