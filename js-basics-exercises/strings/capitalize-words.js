// Write code that capitalized the words in the string 'launch school tech & talk'
// so you get the string 'Launch School Tech & Talk'


function capitalizeString(str) {
  let wordsInArray = str.split(' ');
  let capitalFirstLetter = wordsInArray.map(letter => letter[0].toUpperCase());
  wordsInArray = wordsInArray.map(letter => letter.substring(1));
  for (let i = 0; i < capitalFirstLetter.length; i += 1) {
    wordsInArray[i] = capitalFirstLetter[i] + wordsInArray[i];
  }
 let capitalizedWords = wordsInArray.join(' ');
  return capitalizedWords;
}

console.log(capitalizeString('launch school tech & talk'));