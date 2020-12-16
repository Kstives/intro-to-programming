function isNegZero(value) {
  if (1 / value === -Infinity) {
    return true;
  } else {
    return false;
  }
    
}

console.log(isNegZero(-0)); // true
console.log(isNegZero(0)); // false
console.log(isNegZero(3)); // false