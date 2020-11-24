// Loops and Iterating age.js modification

let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you? '));
let decadeCount = 0;

for (let i = 0; i < 4; i += 1) {
  decadeCount += 10;
  age += 10;
  console.log(`In ${decadeCount} years, you will be ${age} years old.`);
}

// Launch School solution
for (let future = 10; future <= 40; future += 10) {
  console.log(`In ${future} years, you will be ${age + future} years old.`);
}