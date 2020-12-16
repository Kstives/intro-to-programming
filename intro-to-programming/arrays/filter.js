/*
** filter array method iterates through an array, returning a new array that 
** meets the conditional, filter doesn't mutate the caller
*/

// filter the double ditit numbers into doubleDigits array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let doubleDigits = numbers.filter(num => num > 9);
console.log(doubleDigits);



