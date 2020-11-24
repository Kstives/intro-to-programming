let product = 1;
let i = 1;
function factorial(num) {
  product *= i;
  i += 1;
  if (i <= num) {
   factorial(num * 1);
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