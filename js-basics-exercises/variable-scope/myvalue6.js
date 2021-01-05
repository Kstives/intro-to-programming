let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b); // this will log false
/*
** The variable named b within the if statement is not accessable globally,
** so the console.log method used within the global scope will log the globally
** declared b variable with the value of false.
*/