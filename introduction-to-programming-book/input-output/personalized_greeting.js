// personalized_greeting.js exercise of Input/Output

let rlSync = require('readline-sync');
let name = rlSync.question("What's your name?\n");
console.log(`Good morning, ${name}!`);