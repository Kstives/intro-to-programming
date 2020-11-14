function tenCharAllCaps(words) {
  if (words.length > 10) {
    console.log(words.toUpperCase());
    return words.toUpperCase();
  } else {
    console.log(words);
    return words;
  }
}

tenCharAllCaps(prompt('Enter a phrase'));

// ternary version

function tenCharCapital(words) {
  return ((words.length > 10) ? words.toUpperCase() : words);
}

console.log(tenCharCapital("Jane Doe")); // Jane Doe
console.log(tenCharAllCaps("John Smith")); // JOHN SMITH