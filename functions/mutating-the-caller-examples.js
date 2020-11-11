let name = "Pete Hanson";
console.log(name.toUpperCase());
console.log(name);

let oddNumbers = [1, 3, 5, 7, 9];
oddNumbers.pop();
console.log(oddNumbers);

function changeFirstElement(array) {
  array[0] = 9;
}

let oneToFive = [1, 2, 3, 4, 5];
changeFirstElement(oneToFive);
console.log(oneToFive);

function addToArray(array) {
  return array.concat(0);
}

let oneToSix = [1, 2, 3, 4, 5, 6];
console.log(addToArray(oneToSix));
console.log(oneToSix);