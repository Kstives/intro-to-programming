let rlSync = require('readline-sync');
let askNumber = rlSync.question('Enter a number: ');

function evenOrOdd(number) {
if (Number.isInteger(number) === false) {
    console.log('Sorry, that\'s not a number.');
    return;
} else if (number % 2 === 0) {
    console.log('even');
  } else {
  console.log('odd');
}

}

evenOrOdd(Number(askNumber));