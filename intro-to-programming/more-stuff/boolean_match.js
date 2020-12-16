function has_a_or_e(string) {
  let results = string.match(/[ae]/g);
  if (results) {
    console.log(`We have a match! ${results}`);
  } else {
    console.log('No match here.');
  }
}

has_a_or_e("basketball");
has_a_or_e("football");
has_a_or_e("hockey");
has_a_or_e("golf");

// using /g is inappropriate when you only need a single match

