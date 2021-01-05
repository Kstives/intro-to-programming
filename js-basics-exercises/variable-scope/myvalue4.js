function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction(); // this logs 1 because the if block is within the scope
// of the variable a, which is all of myFunction 

