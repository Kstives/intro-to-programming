let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(searchTerm, array) {
  let doesContain = array.filter(element => element === searchTerm);
  doesContain = doesContain.join();
    if (searchTerm === doesContain) {
      return true;
    } else {
    return false;
    }
  
}

  console.log(contains('Barcelona', destinations)); // true
  console.log(contains('Nashville', destinations)); // false
  console.log(contains('London', destinations)); // true

/*
** Using the array method filter, I iterate through the destinations array.
** The array element that matches the searchTerm (the function call's first
** argument) gets saved as the variable doesContain's value. If there is 
** no match, the doesContain array remains empty.
** I change the doesContain value to a string with join() and then check the
** searchTerm against the filtered array's result in doesContain.
** if the searchTerm string matches doesContain string, it returns true.  
** If the searchTerm string does not match the doesContain string, it returns
** false.
*/