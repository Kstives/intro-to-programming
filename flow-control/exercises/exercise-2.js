let rlSync = require('readline-sync');
let askNumber = rlSync.question('Enter a number: ');

function evenOrOdd(number) {
if ((number % 2) + 1 === 1) {
  console.log('even');
} else {
  console.log('odd');
}

}

evenOrOdd(askNumber);