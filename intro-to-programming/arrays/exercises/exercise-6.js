let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];


function oddLengths(array) {
  let arrayLengths = array.map(index => index.length);
  return arrayLengths.filter(oddNum => oddNum % 2 !== 0);
}

console.log(oddLengths(arr)); // => [1, 5, 3]

// Launch School solution

// function oddLengths(strings) {
//   let lengths = arr.map((letters) => letters.length);
//   let oddLengths = lengths.filter((number) => number % 2 === 1);
//   return oddLengths;
// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr));