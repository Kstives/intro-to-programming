function extractRegion(locale) {
  let localeSplit = locale.split('_');
  let regionCode = localeSplit[1].split('.')[0];
  console.log(regionCode);
}

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'