function filter(input) {
  return Array.isArray(input);
}

console.log(filter([2,3, 4]));
console.log(filter({num1: 2, num2: 3, num3: 4}));