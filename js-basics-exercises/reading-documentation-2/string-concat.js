//How can you join two or more strings together?

// Method 1 (the suggested method): concatenation by the addition operator:

"Hello, my name is " + "Steve."; // returns 'Hello, my name is Steve.'

// Method 2: concatenation using String.prototype.concat():

let string1 = "One for the money, ";
let string2 = "two for the show,";
let string3 = " three to get ready,";
let string4 = " and four to go!";

console.log(string1.concat('', string2 , string3 , string4));
// returns "One for the money, two for the show, three to get ready, and four to go!"

