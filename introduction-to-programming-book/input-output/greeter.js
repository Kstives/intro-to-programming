// Input/Output Exercise 1

/*
function greeter() {
  let rlSync = require('readline-sync'); 
 let name = rlSync.question(`What is your name? `);
 console.log(`Hello, ${name}!`);
}

greeter();
*/

// Input/Output Exercise 2

// function greeter() {
//   let rlSync = require('readline-sync'); 
//   let firstName = rlSync.question(`What is your first name? `);
//   let lastName = rlSync.question(`What is your last name? `);

// console.log(`Hello, ${firstName} ${lastName}!`);
// }

// greeter();

// Functions Exercise 2
// let firstName;
// let lastName;


// function getName() {
//   firstName.prompt('What is your first name?');
//   lastName.prompt('What is your last name?');
//   console.log(`Hello, ${firstName} ${lastName}!`);
// }


// getName();
   
   
// Functions Exercise 2 take 2

  let rlSync = require('readline-sync'); 
  let firstName;
  let lastName;
 

function getFirstName() {
   firstName = rlSync.question('What is your first name? ');
}

function getLastName() {
   lastName = rlSync.question('What is your last name? ');
}



getFirstName();
getLastName();

console.log(`Hello, ${firstName} ${lastName}!`);