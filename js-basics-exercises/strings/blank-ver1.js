function isBlank(string) {
  if (string === '') {
    return true;
  } else {
    return false;
  }
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true