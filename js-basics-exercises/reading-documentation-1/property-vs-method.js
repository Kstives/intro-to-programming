// What are the return values of the statements on line 3 to 5?
// Refer to the MDN documents about the Array object for help

let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

trees[trees.length - 1]; // returns 'palm tree' 
trees.pop(); // returns 'palm tree' 
// this is the element that was just removed from the end of the array
trees[trees.length - 1]; // returns 'sequoia' 
// because 'sequoia' is the last element of the array now