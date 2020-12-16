const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

/* When we run the above code, we get an error after the console logs the greetings 
** the first time, because the constant NAME is trying to be reassigned a value, 
** and you can't do that with Constants.
*/