// array iterating method forEach
let fruitBasket = ['apple', 'orange', 'lime', 'grapefruit'];

fruitBasket.forEach(function(fruit) {
  console.log(fruit.toUpperCase());
})

fruitBasket.forEach(function(fruit) {
 console.log('I love ' + fruit + 's');
});

// arrow function syntax 
fruitBasket.forEach(fruit => console.log(fruit));

let countingArray = [1, 2, 3];
countingArray.forEach(num => console.log(num + 2));
countingArray.forEach(num => console.log(num * num));
