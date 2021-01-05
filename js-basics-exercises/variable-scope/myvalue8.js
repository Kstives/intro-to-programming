let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b); // This logs 2
// in the myFunction invocation, the variable b gets passed as an argument to
// the parameter a within the myFunction function. The argument then gets logged 
// to the console. There is no erorr thrown because the variable b is declared
// before the myFunction is invoked.