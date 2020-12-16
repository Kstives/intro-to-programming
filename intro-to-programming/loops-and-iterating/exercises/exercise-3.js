let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/* 
**This loop results in an infinite loop because the while loop condition is
**assigning 1 to counter, instead of comparing it to 1. the if statement's conditional never evaluates to true, so the break statement never executes
*/