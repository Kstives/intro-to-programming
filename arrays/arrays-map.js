// forEach method
// forEach performs simple iterations and returns undefined
let numbers = [1, 2, 3, 4]
let squares = [];
numbers.forEach(num = squares.push(num * num));
console.log(squares);
console.log(numbers);

numbers.forEach(num => squares.push(num * num));
console.log(squares);

/* map method
** map transforms an array's elements and returns a new array with 
** the transformed values
*/

let numbers = [1, 2, 3, 4]
let squares = numbers.map(num =num * num);
console.log(squares);

squares = numbers.map(num =num * num);
console.log(squares);
