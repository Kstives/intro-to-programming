let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/*
** This code logs 1 to the console. Executing the foo function does not affect
** the outcome because a local variable "bar" is created in the function that is 
** different from the global variable "bar"
*/

// solution example that does affect the global variable "bar2"
let bar2 = 1;
function foo2() {
  bar2 = 2;
}

foo2();
console.log(bar2);

