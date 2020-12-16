// What does the following program log to the console? Why?
let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); // this logs 'hi' to the console
/*
** this logs 'hi' to the console because the foo object is global,
** so even within the function's scope, the key foo.a is accessable 
** and it's value is changed to the value of 'hi' in the bar function
*/

console.log(qux); // this logs 'hi' to the console
/*
** this logs 'hi' to the console because, again, the qux variable is global
** and so it is accessable within the bar function and is reassigned the value
** of 'hi' within the function
*/

/* Launch School Solution:
** "line [11] reassigns the argument2 variable, but it doesn't mutate the string 
** represented by qux. Thus, line [23] logs hello: the original value of the qux
** variable.""
*/
