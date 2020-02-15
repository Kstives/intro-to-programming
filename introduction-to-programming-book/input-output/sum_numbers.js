// sum_numbers.js from Input/Output
/*
let rlSync = require('readline-sync');

let number1 = Number(rlSync.question('Enter the first number\n'));
let number2 = Number(rlSync.question('Enter the second number\n'));
let sum = number1 + number2;

console.log(`The numbers ${number1} and ${number2} add to ${sum}`);
*/

// my own version of exercise above

console.log('How many letters are in your full name?');

let rlSync = require('readline-sync');

let firstName = rlSync.question('Enter your first name\n');
let lastName = rlSync.question('Enter your last name\n');
let fullNameSum =  firstName.length + lastName.length;

console.log(`The number of letters in your full name of ${firstName} ${lastName} is ${fullNameSum}`);