let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
 
function findIntegers(array) {
  return array.filter(num => Number.isInteger(num) === true);
}

console.log(integers); // => [1, 3, -4]

// Launch School solution
// function findIntegers(array) {
//   return array.filter(function(element) {
//     return Number.isInteger(element);
//   });
// }