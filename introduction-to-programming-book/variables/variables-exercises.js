// Variables chapter exercises 3-6

// 3.
function myFunction() {
  let foo = 'bar';
}

console.log(foo);

// You get a ReferenceError because the scope of foo is block and not global and it is referenced globally.

// 4.
const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// You get a runtimeError because you tried to re-assign the value of a constant variable, 
// which can't have its value re-assigned.

// 5.
let fooTheSecond = 'bar';
function mySecondFunction() {
  let fooTheSecond = 'qux';
}

console.log(fooTheSecond);

// This program logs 'bar' to the console because the code in the code block was not run, 
// therefore, the value of fooTheSecond did not get changed to 'qux'

/*
In LS solution, they also point out that fooTheSecond is first declared globally, and because the 
variable fooTheSecond is then declared within a block of code, its scope is block. So when fooTheSecond
is referenced globally, the globally declared variable's value gets printed instead of the block-level
variable's value.
*/

// 6.
const FOO = 'bar';
function myThirdFunction() {
  const FOO = 'qux';
  
}

console.log(FOO); 
/* 
Although the constant FOO is being shadowed in a code block,
it will not result in an error to print FOO because the global constant is being referenced,
not the block-level constant
*/