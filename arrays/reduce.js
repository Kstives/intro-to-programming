// reduce array method, does not mutate caller
let numbers = [2, 3, 5, 7];
let letters = ['a', 'b', 'c', 'd'];

let sum = numbers.reduce((accumulator, element) => accumulator + element, 0);
console.log(sum);

//arrow function
let multiply = numbers.reduce((accumulator, element) => accumulator * element, 1);
console.log(multiply);

let allCap = letters.reduce((accumulator, element) => accumulator + element.toUpperCase(), '');
console.log(allCap);