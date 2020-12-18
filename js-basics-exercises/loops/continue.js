let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let index = 0; index < cities.length; index += 1) {
  if (cities[index] === null) {
    continue;
  } else {
    console.log(cities[index].length);
  }
}

// when the continue statement is executed, the current iteration of the loop
// is skipped over and it goes to the next iteration of the loop