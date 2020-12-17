// How many arguments does the Array.prototype.join() method expect?
// What happens if you call it with less or more arguments

let array = ["hello", "world"];

array.join(); // This will return the string "hello,world"
array.join('-'); // This will return the string "hello-world"
array.join(' '); // This will return the string "hello world"
array.join('*', ','); // This will return the string "hello*world"

/*
** The array method .join() doesn't expect any arguments, but if there are no arguments given 
** it will return the array elements in a string separated by commas. 
** To control what the elements in the string are separated by, you can pass the separator you want
** as an argument (such as a hyphen or space as used above) surrounded by quotations marks.
** If you pass more than one argument such as the last example, the string will return separated 
** only by the first argument's separator and ignores any other separators passed.
*/