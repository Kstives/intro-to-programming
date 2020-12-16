// push array method - mutates caller
let veggies = ['potato', 'corn', 'squash', 'onion'];
console.log(veggies);

veggies.push('eggplant'); // added 'eggplant' as array's last element
console.log(veggies);

veggies.push('pumpkin', 'leek'); // added 'pumpkin' and 'leek' as array's last elements
console.log(veggies);

// concat array method - does not mutate caller
let veggiesBatch2 = veggies.concat('tomato', 'broccoli', 'kale');
console.log(`The elements of veggiesBatch2 are: ${veggiesBatch2}`); 

// pop array method - mutates caller
veggiesBatch2.pop(); // removes 'kale' from array
console.log(veggiesBatch2);

// splice array method - mutates caller
veggiesBatch2.splice(4,3); // removes 'eggplant', 'pumpkin', and 'leek' from array
console.log(`The remaining elements in the veggiesBatch2 array are: ${veggiesBatch2}`);

