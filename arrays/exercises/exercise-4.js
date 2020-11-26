// create a new array that contains one element for each element in the orignal array

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let evenOrOdd = myArray.map(function (index) {
  if (index % 2 === 0) {
    index = 'even';
  } else {
    index = 'odd';
  }
  return index;
});

console.log(evenOrOdd);

// Launch School solution
let newArray = myArray.map(function(value) {
  if (value % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});