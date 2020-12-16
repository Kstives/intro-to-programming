let list1 = [1, 6, 3, 2];
let list2 = [-1, -6, -3, -2];
let list3 = [2, 2];

function largestNumber(list) {
  console.log(Math.max(...list));
}

largestNumber(list1); // 6
largestNumber(list2); // -1
largestNumber(list3); // 2

// Launch School solution:
console.log(Math.max(1, 6, 3, 2));      // => 6
console.log(Math.max(-1, -6, -3, -2));  // => -1
console.log(Math.max(2, 2));            // => 2