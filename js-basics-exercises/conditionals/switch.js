let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

/* This code will log neigh, tweet tweet, and *cricket* to the console log
** this is because there are no break statements after each case,
** once a match is found, it logs the match and the following cases' code
*/