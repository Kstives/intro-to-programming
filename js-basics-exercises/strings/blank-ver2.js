function isBlank(string) {
  if (string.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true

// String.prototype.trim() method ccan be used here to remove the empty spaces
// in a string and to then check to see if the length is zero