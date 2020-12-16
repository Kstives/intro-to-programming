// What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
} 

// This function returns an array of the length of each word in reversed order
// from the string that gets passed to the function when it is called

console.log(doSomething('Karey Stivers')); // logs [7, 5]
