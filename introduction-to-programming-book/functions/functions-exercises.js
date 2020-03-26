// exercises to LS Intro to Programming with JavaScript: Functions

// 1.
let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/* 
this code logs 1 to the console, because while the the variable bar is declared within the function foo() it has block scope, and is not recognized outside of the function block. Whereas the other bar variable declared outside of the block has global scope and is a different variable than the on inside the function foo(). If, instead of declaring a variable, the function body just contained a reassignment of the global scope bar, then the console would have logged bar as having the value of 2.
*/

