// Input/Output Exercise 1

let rlSync = require('readline-sync'); 

function greeter(name) {
  console.log(`Hello, ${name}!`);
}

greeter(rlSync.question(`What is your name? `));


// Input/Output Exercise 2

// function greeter() {
//   let rlSync = require('readline-sync'); 
//   let firstName = rlSync.question(`What is your first name? `);
//   let lastName = rlSync.question(`What is your last name? `);

// console.log(`Hello, ${firstName} ${lastName}!`);
// }

// greeter();