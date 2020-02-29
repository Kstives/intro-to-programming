// Notes for LS Introduction to Programming/Functions

// function say() {
//   console.log('Hi!');
// }

function say(words = 'hello') {
  console.log(words + '!');
}

function add(a, b) {
  return a + b;
}


let twoAndThree = add(2, 3);

console.log(twoAndThree);
say('Howdy');
say();
