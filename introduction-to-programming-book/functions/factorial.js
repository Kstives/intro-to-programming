// Features exercise 4

function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

times(times(times(times(times(1, 1), 2), 3), 4), 5);

/*
I just couldn't get it so I looked at the solution
but I was on the right track with the function composition.
I just didn't figure out how much embedding to do in the function call.
*/
