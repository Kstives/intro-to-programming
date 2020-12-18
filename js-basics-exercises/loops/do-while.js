// What is the difference between the following two code snippets?
// Check the MDN documentation on while and do...while.

// Snippet 1
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

// Snippet 2
let counter2 = 0;

do {
  console.log('Woooot!');
  counter2 -= 1;
} while (counter2 > 0);

/*
** In snippet 1, the code does not execute because the condition is not met in the while statement - the condition is evaluated before the code is executed.
** In snippet 2, the code executes only once because in a do...while 
** loop the code executes once before evaluating the condition statement. After running once, it must meet the while statement's condition statement to run again.
** In this case, it only runs once because it still does not
** meet the while statement's condition.
*/