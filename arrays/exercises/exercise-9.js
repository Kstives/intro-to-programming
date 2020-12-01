let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkForThree(list) {
  return list.map(num => {
    if (num === 3) {
      return true;
    } else {
        return false;
    }
  });
}

console.log(checkForThree(numbers1));
console.log(checkForThree(numbers2));
console.log(checkForThree(numbers3));