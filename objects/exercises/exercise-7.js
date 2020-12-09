let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

// Snippet 1
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

// Snippet 2
for (let key in myObj) {
  console.log(key);
}

/*
** Yes, both Snippet 1 and Snippet 2 will produce the same output
** because both loop through the keys of myObj object and print them to the console
** Snippet 1 does so by passing the keys to an array and looping through the array
** and the for/in loops through the keys in the myObj object directly
*/

// Launch School solution:
// Snippet 1 only produces myObj own object's keys
// Snippet 2 produces myObj object's keys and the prototype object's keys