// Snippet 1
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // {prefix: 'Pacific'} 
// The prefix variable and prefix property are two separate things


// Snippet 2
let ocean2 = {};
let prefix = 'Indian';

ocean2[prefix] = 'Pacific';

console.log(ocean2); // {Indian: 'Pacific'}
// because the property bracket notation is not using quotation marks
// it is assigning the variable value 'Indian' to the ocean2 property name