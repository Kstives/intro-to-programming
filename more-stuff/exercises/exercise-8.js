function isNotANumber(value) {
  if (!value) {
    return true;
  } else {
      return false;
  }
}

console.log(isNotANumber(NaN)); // true
console.log(isNotANumber(0)); // false
console.log(isNotANumber('string')); // false
console.log(isNotANumber(undefined)); // false
console.log(isNotANumber('')); // false
console.log(isNotANumber(5 - 'a')); // true
