// Notes for LS Introduction to Programming/Functions

// function say() {
//   console.log('Hi!');
// }

function say(words = 'hello') {
  console.log(words + '!');
}

function add(a, b) {
  return a + b;
}


let twoAndThree = add(2, 3);

console.log(twoAndThree);
say('Howdy');
say();

// Mutating the Caller

let name = 'Pete Hanson';
console.log(name.toUpperCase()); // .toUpperCase() is a non-mutating or non-destructive operation
console.log(name); //the caller, name, is left unchanged

let oddNumbers = [1, 3, 5, 7, 9];
oddNumbers.pop(); // removes the last element from the array, mutating its caller, oddNumbers
console.log(oddNumbers); // logs [1, 3, 5, 7]

function changeFirstElement(array) {
  array[0] = 9;
}

let oneToFive = [1, 2, 3, 4, 5];
changeFirstElement(oneToFive);
console.log(oneToFive); // logs [9, 2, 3, 4, 5] because when the array oneToFive got passed 
// as an argument to the function changeFirstElements' parameter, it then ran in the function and
// changed oneToFive's first element to 9

function addToArray(array) {
  return array.concat(0);
}

let oneToSix = [1, 2, 3, 4, 5, 6]; // used oneToSix instead of oneToFive to avoid duplicates
console.log(addToArray(oneToSix)); // copied and altered array due to passing oneToSix into function addToArray
console.log(oneToFive); // original array


// Function Composition

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// let sum = add(20, 45);
// console.log(sum);

// let difference = subtract(80, 10);
// console.log(difference);

console.log(add(20, 45));
console.log(subtract(80, 10)); // examples of function composition, JS using a function call as an argument for another function
