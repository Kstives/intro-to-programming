for (let i = 0; i < 5;) {
  console.log(i += 1);
}

/*
** this code does not produce an error because a for loop does not need all
** 3 conditions to run, it just needs at least one.
** This loop prints 1 through 5 in the console
*/