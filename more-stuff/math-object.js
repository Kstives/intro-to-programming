// JS square root method
Math.sqrt(36);

// JS pi method
Math.PI;

// Dates

// Getting the day of the week of a date
let date = new Date('December 25, 2012');
date.getDay() // returns 2, which is Tuesday

// Getting a day name

function getDayOfWeek(date) {
  let daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  return daysOfWeek[date.getDay()];
}

let date = new Date('December 25 2012');
console.log(getDayOfWeek(date)); // Tuesday
