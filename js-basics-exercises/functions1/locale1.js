function extractLanguage(locale) {
  let lang = locale.slice(0,2);
  console.log(lang);
}

extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'