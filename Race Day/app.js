// Generate a race number for runner from 1
let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

const runnerAge = 18;

/* Early adults receive a race number at or above 1000.
 All others receive a number below 1000 */
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

// Start time and race number statements for runners
if (runnerAge > 18 && registeredEarly) {
  console.log(`You will race at 9:30am. Your race number is: ${raceNumber}`);
} else if (runnerAge >= 18 && !registeredEarly) {
  console.log(`You will race at 11:00am. Your race number is: ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30pm. Your race number is: ${raceNumber}`);
} else {
  // Special case for those who are exactly 18
  console.log('Please see the registration desk');
}
