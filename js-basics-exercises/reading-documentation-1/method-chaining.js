let tweet = 'Starting to get the hang of it... #javascript #launchschool';

// What do the following statements evaluate to?
tweet.split(' '); // ['Starting', 'to', 'get', 'the', 'hang', 'of', 'it...', '#javascript', '#launchschool']
tweet.split(' ').reverse(); // ['#launchschool', '#javascript', 'it...', 'of', 'hang', 'the', 'get', 'to', 'Starting']
tweet.split(' ').reverse().join(' '); // "#launchschool #javascript it... of hang the get to Starting"

/*
** String.prototype.split() is a method that is used on strings to create an array with elements
** from the string based on the separator used in the split method. In this case it is a space.
*/

/*
Array.prototype.reverse() is an array method that reverses the order of the array elements 
** i.e. the first element becomes the last and the last element becomes the first.
*/

/*
** Array.prototype.reverse() is an array method that creates a string from an array based on the separator.
** In this case, it is a space.
*/