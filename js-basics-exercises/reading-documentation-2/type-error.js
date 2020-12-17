// let tweet = 'Woohoo! :-)';

// if (tweet.length() > 140) {
//   console.log('Tweet is too long!');
// }

// The above code raises the TypeError: tweet.length is not a function
// Check the documentation of both TypeError and length, in order ot find out what causes the error

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}

// MDN: "The TypeError object represents an error when an operation could not be performed, 
// typically (but not exclusively) when a value is not of the expected type."

/*
** In the case of the code above, the length property was trying to be used as a method
** by following it with a set of parentheses, when it is a property of the String prototype
** and does not use parentheses.
*/
