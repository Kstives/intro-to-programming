// Heterogenous arrays can contain numbers, strings, objects, and other arrays
let myArray = [2, 'karey', [1, 2], {color : 'yellow'}, 10]
console.log(`The contents of myArray are: ${myArray}`);
console.log(myArray);
console.log(myArray[0]); // 2
console.log(myArray[1]); // 'karey'
console.log(myArray[2][0]); // 1, first element of the nested array
console.log(myArray[2][1]); // 2, second element of the nested array
console.log(myArray[3].color); // 'yellow', the value of the key in the nested object
console.log(myArray[4]); // 10
console.log(myArray.length); // 5
console.log(myArray[myArray.length - 1]); // 10, last item in array

// Modifying Arrays
let fruits = ['apples', 'oranges', 'limes', 'grapes'];
console.log(`The contents of fruits are: ${fruits}`);
console.log(fruits);

fruits[0] = 'pineapples'; // replacing first element of fruits array
console.log(fruits);
fruits[fruits.length] = 'lemons'; // adds lemons to the end of fruits array
console.log(fruits);

