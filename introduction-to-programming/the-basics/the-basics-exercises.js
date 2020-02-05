// The Basics exercises

// 1.
'Karey' + ' Stivers';

// 2.
let number = 4936;
let ones = number % 10;
number = number - ones;
number = number / 10;
let tens = number % 10;
number = number - tens;
number = number / 10
let hundreds = number % 10;
number = number - hundreds;
number = number / 10;
let thousands = number;

// solution shows multi-step arithmetic expressions number = (number - ones) / 10;
// which is more concise than my version

// 3.
// 'true' - String
// false - Boolean
// 1.5 - Number
// 2 - Number
// undefined - Undefined
// { foo: 'bar' } - Object

// 4.
var foo; // Statement
foo = 5; // Expression
foo; // Expression

// 5.
console.log('5' + 10); // This code logs '510' because of implicit coercion. 
// The string operand is coercing the non-string operand to become a string and be concatenated to the '5'

// 6.
console.log(Number('5') + 10);

// 7. 
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

// 8. 
var foo = ['a', 'b', 'c'];
foo.length; // returns 3
// foo[3]; will result in Undefined because there is no value for a 4th value in the array

// 9.
const names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];

// 10.
let pets = {
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard'
};

// 11. 
'foo' === 'Foo' // Evaluates to false, they are different cases

// 12.
parseInt('3.1415'); // Evaluates to 3 because with parseInt it stops at a symbol

// 13. 
'12' < '9'; // Evaluates to true because they are both strings


