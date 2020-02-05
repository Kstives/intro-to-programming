// Notes for Variables chapter in Introduction to Programmming with Javascript book by Launch School

// Declaring and Assigning Variables
let firstName; // returns value of undefined
firstName = 'Mitchell';
console.log(`Your first name is ${firstName}`);
// Prints Your first name is Mitchell and returns value as undefined

firstName = 'Joe'; // replaces value of 'Mitchell' with value of 'Joe'
firstName = 42; // replaces value of 'Joe' with value of 42

let lastName = 'Brady';

let a = 4;
let b = a;
a = 7;
// b is 4, even though a has a new value. Variables reference values in memory 
// that aren't deeply linked to each other. 

const middleName = 'David';
const INTEREST_RATE = 0.0783; // A standard convention when naming constants is to use all upercase letters
// and digits in the name; if the name contains multiple words, use underscores to separate the words

// Variable Scope
if (1 === 1) {
  let a = 'foo';
}

console.log(a); // ReferenceError: a is not defined (because it is declared in a code block and referenced
// out of the block)

let c = 'foo';
if (1 === 1) {
  c = 'bar';
}

console.log(c); // prints 'bar'

// COMMON GOTCHA
/*
All undeclared variables have global scope: they ignore block and function scope entirely.
*/




