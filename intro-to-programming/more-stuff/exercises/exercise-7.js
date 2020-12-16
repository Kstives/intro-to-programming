// What is the exception handling and what problem does it solve?

try {
  console.log(x);
} catch (exception) {
  console.log('There is a problem here');
}

/*
** exception handling is testing code within the try/catch statements to 
** search for and deal with specific errors in your code intentionally. 
** This solves the problem of errors being thrown and interrupting the program
** making it harder to pinpoint the specific error
*/