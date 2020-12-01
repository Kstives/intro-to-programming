let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  return array.reduce((accumulator, element) => {
    return accumulator + element.length;
  },[]);
}

console.log(oddLengths(arr)); // => [1, 5, 3]

// Launch School solution

function oddLengths2(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}

let arr2 = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths2(arr2));

/* second stab at reduce with array: using reduce to put odd numbers 
** into a new array
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function oddNumbers(array) {
  return array.reduce((separator, element) => {
    if (element % 2 === 1) {
      separator.push(element);
    } 
    return separator;
  },[]);
}

console.log(oddNumbers(numbers));

// separating any word that starts with letter 'k' and putting it
// in a new array

let maryPoppinsBag = ['kitchen', 'blowfish', 'knife', 'fan', 'basketball', 'kite'];

function kWords(words) {
  return words.reduce((kWordsArray, element) => {
    if (element[0] === 'k') {
      kWordsArray.push(element);
    }
    return kWordsArray;
  }, []);
}

console.log(kWords(maryPoppinsBag));
