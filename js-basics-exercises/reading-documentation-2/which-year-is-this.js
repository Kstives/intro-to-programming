// What is the difference between the two methods 
// and which one should you use?

let today = new Date();

today.getYear(); 
/*
** this returns the number of milliseconds between January 1 1970 and the current date
** but has an issue with time past 2000 and does not display full date
*/
today.getFullYear(); // this is a new method that displays the full year, this one should be used


// Launch School solution: 
/*
** Date.prototype.getYear() returns a number representing the year of the date on which it is invoked, minus 1900. 
** For example, if the date is sometime in 2019, getYear() will return 119.
*/