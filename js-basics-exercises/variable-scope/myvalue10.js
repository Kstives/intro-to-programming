const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a); // firstName: 'Jane, lastName: 'Doe'
// the object key firstName gets changed in obj a because const object 
// complex values can change, unlike const primitive values in variables