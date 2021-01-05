function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction(); // this logs 2

/*
** Because a variable named "a" is declared within an if statement in 
** the function, it "shadows" the function block's variable "a"
** creating a distinct variable apart from the outer function block's variable 
** with its own block scope within the if statement.
** Initially, the first console log on line 5 would have logged the function
** block's variable "a", but after the if statement variable was created, the 
** console now logs on line 7 its immediate scope's variable, the "a" variable 
** with the value of 2.
*/