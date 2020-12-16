function isNotANumber(value) {
  if (value === NaN) {
    return true;
  } else {
      return false;
  }
}

console.log(isNotANumber(NaN)); // true
console.log(isNotANumber(0)); // false

// Launch School solution:
function isNotANumber2(value) {
  return value !== value;
}

console.log(isNotANumber2(NaN)); // true
console.log(isNotANumber2(0)); // false