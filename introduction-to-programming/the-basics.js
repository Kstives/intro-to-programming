// Strings
console.log("He said, 'Hi there!'"); // single quotes in double quotes
console.log('He said, \'Hi there!\''); // single quotes with escaped single quotes
console.log('He said, "Hi there!"'); // double quotes in single quotes
console.log("He said, \"Hi there!\""); // double quotes with escaped double quotes

// my preferred way:
console.log('He said, "Hi there!"'); // or
console.log('He said, \'Hi there!\'');

// Template Literals
console.log(`5 plus 5 equals ${5 + 5}`); // outputs '5 plus 5 equals 10'
let unusualPet = 'chicken';

console.log(`my favorite pet that I own is a ${unusualPet}.`);
// outputs 'my favorite pet that I own is a chicken'

// Numbers
let numbers = [1, 2, 3, 30, 50, 43.25];

// Booleans
let toggleOn = true;
let sessionActive = false;

toggleOn ? console.log('I\'m on!') : console.log('I\'m off!');

// Undefined
let myVariable; // returns undefined because it was not initialized

function myFunction() {
console.log('I am a function');  
} 
myFunction(); // returns undefined because the function does not have a return statement

// Null
let foo = null; // intentional setting of 'no value' using null

// typeof Operator
typeof 1; // returns 'number'
typeof 'foo'; // returns 'string'
typeof true; // returns 'boolean'
typeof undefined; // returns 'undefined'
typeof null; // returns 'object'

// Adding, Subtracting, and Multiplying numbers
38 + 4; // returns 42
44 - 2; // returns 42
7 * 6; // returns 42

// Division and Remainder
16 / 4; // returns 4
16 / 2.5; // returns 6.4
16 / 5; // returns 3.2
16 / 7; // returns 2.2857142857142856

16 % 4; // returns 0
16 % 5; // returns 

42 === 42; // returns true
42 === 43; // returns false
'foo' === 'foo'; // returns true
'FOO' === 'foo'; // returns false

// String Concatenation
'foo' + 'bar'; // returns 'foobar'
'1' + '2'; // returns '12' because both are strings

'1' + 2; // returns '12' because the string '1' coerced the number into being a string.
'5' - 3; // returns 2 because coercion only works with the + operator, which is used for addition and concatenation

// NaN 'Not a Number'
0 / 0; // returns NaN because you can't divide 0 by 0
4 - 'dog'; // returns NaN because the string 'dog' doesn't contain numbers

// Explicit Coercion

/* 
The difference between explicit and implicit coercion is that explicit coercion 
lets you decide what kind of coercion you want, whereas implicit coercion lets the engine decide.
*/

Number('1') + 1; // = 2 Explicit Coercion
'1' + 1; // = '11' Implicit Coercion - 
/*
If one operand is a string and the other is not, the non-string operand
string will be coerced into a string
*/

// parseInt
parseInt('12'); // = 12
parseInt('12xyz'); // = 12
parseInt('3.1415'); // 3

// parseFloat
parseFloat('12.5foo'); // = 12.5

// String
String(20); // ='20'

// Data Structures




