function repeat(times, word) {
  let repeatedWord = word;
  for (let i = 1; i < times; i++) {
    repeatedWord += word;
  }
  return repeatedWord;
}

console.log(repeat(3, 'ha')); // 'hahaha'
