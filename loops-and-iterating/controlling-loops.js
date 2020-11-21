// Launch School Controlling Loops example

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

// with the continue statement, the program is told to skip over the iteration of 'Naveed'
for (let index = 0; index < names.length; index += 1) {
  if (names[index === 'Naveed']) {
    continue;
  }

  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);

}

console.log(upperNames);