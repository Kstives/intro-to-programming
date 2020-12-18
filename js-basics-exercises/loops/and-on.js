// Why does this code keep looping forever?

// for (let i = 0; ; i += 1) {
//   console.log("and on");
// }

/*
** This code loops over and over because it does not having a condition set to stop the loop, which would be in the second condition of the for loop
*/

for (let i = 0; i < 1; i += 1) {
  console.log("and on");
}