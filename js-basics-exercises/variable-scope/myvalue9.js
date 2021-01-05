const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a); // a type error is thrown: const variables cannot change 
// values, and that is what is happening in the myFunction function.