/*
** do-while loops are good for when you want the code in the loop 
** to run at least once before conditions need to be met
*/

let rlSync = require('readline-sync');
let askRunners;

/*
** ask first runner across the finish line, continue to ask each runner that crosses
** the finish line, if the the last runner says 'no' then there is no need to ask the
** quesiton anymore
*/

do {
  askRunners = rlSync.question('Are there more runners behind you? ');
} while (askRunners === 'yes');
   


  


  