// Features exercise 3

function multiply() {
  let readlineSync = require('readline-sync');
  let num1 = readlineSync.question('Enter the first number: ');
  let num2 = readlineSync.question('Enter the second number: ');
  console.log(`${num1} * ${num2} =`, num1 * num2);

}

multiply();

