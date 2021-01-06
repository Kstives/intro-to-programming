let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

let findX = byteSequence.search('x');

if (findX !== -1) {
  console.log(`Yes, x is in this string, it first occurs at character ${findX}.`)
} else {
  console.log('No, this string does not contain x.');
}

// if the search term is not in the string, the method will return -1,
// otherwise it returns the position of the searched character
// the method is case sensitive and will only search for the lowercase x, in this instance
