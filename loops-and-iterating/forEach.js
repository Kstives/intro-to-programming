// let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

// names.forEach(function(name) {
//   console.log(name);
// });

// function above refined as arrow function 
let names2 = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names2.forEach(name => console.log(name));

// using all forEach function parameters
let disneyCharacters = ['Mickey', 'Donald', 'Goofy'];

disneyCharacters.forEach(function(name, index, array) {
  console.log(`One of the top disney character names is ${name} and it is in position ${index} of the list of ${array}`);
});