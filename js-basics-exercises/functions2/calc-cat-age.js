// function with if statements
// function catAge(humanAge) {
//   if (humanAge === 0) {
//     return 0;
//   } else if (humanAge === 1){
//     return 15;
//   } else if (humanAge === 2){
//     return 24;
//   } else {
//     let counter = humanAge;
//     humanAge = 16;
//       for (let i = 0; i < counter; i += 1){
//         humanAge += 4;
//       }
//       return humanAge;
//   }

// }

// function with switch statements
function catAge(humanAge) {
  switch(humanAge){
    case 0:
      console.log(0);
      break;
    case 1:
      console.log(15);
      break;
    case 2:
      console.log(24);
      break;
    default:
      let counter = humanAge;
      humanAge = 16;
      for (let i = 0; i < counter; i += 1){
        humanAge += 4;
      }
      console.log(humanAge);
  }

}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32