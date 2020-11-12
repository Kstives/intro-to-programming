function scream(words) {
  words = words + "!!!!";
  return;
  console.log(words);
}

scream('Yipeee');

/*
** this program logs nothing to the console log because the code is returned and 
** the program stopped before the console could log anything
*/