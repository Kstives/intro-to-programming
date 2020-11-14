function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/*
** This program logs 'Product1', 'Product2', 'Product3', and 'Product not found!'
** to the console because there were no breaks put into each case, so the evaluation
** fell through to all of the cases, logging them as it went
*/

/* 
**(Correction: It doesn't log Product1 because it is the first case and doesn't match, **so it moves on)
*/
