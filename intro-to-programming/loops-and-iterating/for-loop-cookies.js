let cookies = 0;
let cookieJar = 0;
let askCookies;
let cookieAnswer = true;

for (cookies = 1; cookieAnswer === true; cookies += 1) {
  askCookies = prompt("Do you want a cookie? ");
  if (askCookies === 'yes') {
    console.log("Here, let\'s put that cookie in the cookie jar!");
      cookieJar = cookies;
      if (cookieJar === 1) {
        console.log(`There is ${cookieJar} cookie in the cookie jar.`);
      } else {
        console.log(`There are ${cookieJar} cookies in the cookie jar.`)
      }
  } else {
    console.log("Ok, no cookies for you!");
    console.log(`There are ${cookieJar} cookies in the cookie jar.`)
    cookieAnswer = false;
  }
} 