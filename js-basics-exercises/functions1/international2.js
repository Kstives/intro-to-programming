// extracts language from locale
function extractLanguage(locale) {
  let lang = locale.slice(0,2);
  return lang;
}

// extracts region code from locale
function extractRegion(locale) {
  let localeSplit = locale.split('_');
  let regionCode = localeSplit[1].split('.')[0];
  return regionCode;
}

// greeting in world langauges
function greet(lang) {
  switch (lang) {
    case 'en':
      console.log('Hi!');
      break;
    case 'fr':
      console.log('Salut!');
      break;  
    case 'pt':
      console.log('Ola!');
      break;
    case 'de':
      console.log('Hallo!');
      break;
    case 'sv': 
      console.log('Hej!');
      break;
    case 'af':
      console.log('Haai!');
      break;
    default:
      console.log('Language not found!');
  }
}

// personal greeting in regional languages
function localGreet(locale) {
  let languageCode = extractLanguage(locale);
  let regionCode = extractRegion(locale);
  if (languageCode === 'en') {
    switch (regionCode) {
      case 'US':
        console.log('Hey!');
        break;
      case 'UK':
        console.log('You alright?');
        break;
      case 'AU':
        console.log('G\'day, Mate!')
    }
  } else {
    greet(languageCode);
  }
}

localGreet('en_AU.UTF-8'); // 'G'day, Mate!'
localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_UK.UTF-8'); // 'You alright?!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'