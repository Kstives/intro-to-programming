// Variables that have primitive values store those values
// at the memory location associated with the variable.

let a = 5;
let b = a; // b == 5
a = 8;

console.log(a); // a = 8 because the value has changed in variable a's memory location
console.log(b); // b = 5 because the value in variable b's memory has not changed

let obj = {a: 1};
obj = {b: 2};
obj.c = 3;

console.log(obj); // {b: 2, c: 3}
// the memory address of the variable that holds the object does not change,
// but the value of that variable can change and point to different objects in
// different memory locations

let c = [1, 2];
let d = c;
c = [3, 4];

console.log(d); // logs [1, 2]
console.log(c); // logs [3, 4]

let e = [1, 2];
let f = e;
e.push(3,4);

console.log(e); // [1, 2, 3, 4]
console.log(f); // [1, 2, 3, 4]

// Because e and f point to the same array, when the array is mutated, it effects
// both variables 

let g = ['a', 'b', 'c'];
let h = g;
g[1] = 'x';

console.log(g); // logs ['a', 'x', 'c']
console.log(h) // logs ['a', 'x', 'c']

// Because g and h point to the same array, any reassignment of the array's elements
// will effect both variables g and h


