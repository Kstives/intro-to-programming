let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
// Object.fromEntries(nestedArray); // Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

//Object.fromEntries() can be used if the browser supports it, Node.js doesn't.

// Otherwise:
let nukem = {};
for (let i = 0; i < nestedArray.length; i += 1) {
  nukem[nestedArray[i][0]] = nestedArray[i][1];
}

console.log(nukem); // Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }