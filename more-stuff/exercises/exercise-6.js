let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(array, term) { 
  let searchMatches = [];
  array.map(word => {
    if (term.test(word)) {
     return searchMatches.push(word);
    }
  });
  return searchMatches;
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']


// launch school solution 2:
function allMatches2(words, pattern) {
  return words.filter((word) => pattern.test(word));
}

console.log(allMatches2(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']