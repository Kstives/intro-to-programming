function multiply() {
  let rlSync = require('readline-sync');
  let num1 = rlSync.question("Enter the first number: ");
  let num2 = rlSync.question("Enter the second number: ");
  let result = console.log(`${num1} * ${num2} = ${num1 * num2}`);
  return result;
}

multiply();