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

function greeter() {
  let rlSync = require('readline-sync'); 
  let firstName = rlSync.question(`What is your first name? `);
  let lastName = rlSync.question(`What is your last name? `);

 console.log(`Hello, ${firstName} ${lastName}!`);
}

greeter();