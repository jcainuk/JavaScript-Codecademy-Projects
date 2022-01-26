/* Determine how many hours of sleep you got each night of the week */
const getSleepHours = (day) => {
  day = day.toLowerCase();

  switch (day) {
    case 'monday':
      return 8;
      break;

    case 'tuesday':
      return 6;
      break;

    case 'wednesday':
      return 9;
      break;

    case 'thursday':
      return 5;
      break;

    case 'friday':
      return 2;
      break;

    case 'saturday':
      return 7;
      break;

    case 'sunday':
      return 12;
      break;

    default:
      return 'ERROR: Enter a day of the week!';
      break;
  }
};

console.log(getSleepHours('monday'));
console.log(getSleepHours('tuesday'));
console.log(getSleepHours('wednesday'));
console.log(getSleepHours('thursday'));
console.log(getSleepHours('friday'));
console.log(getSleepHours('saturday'));
console.log(getSleepHours('sunday'));

console.log(getSleepHours('bananaday'));

/* get the total sleep hours that you actually slept */
const getActualSleepHours = () => getSleepHours('monday')
  + getSleepHours('tuesday')
  + getSleepHours('wednesday')
  + getSleepHours('thursday')
  + getSleepHours('friday')
  + getSleepHours('saturday')
  + getSleepHours('sunday');
console.log(`actual sleep hours:${getActualSleepHours()}`);

/* get the ideal sleep hours that you prefer */
const getIdealSleepHours = (idealHours) => idealHours * 7;
console.log(`ideal sleep hours:${getIdealSleepHours()}`);

// calculate sleep debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);

  if (actualSleepHours === idealSleepHours) {
    console.log('You are getting the perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You are getting ${actualSleepHours - idealSleepHours} hours more sleep than needed`);
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`You should get ${idealSleepHours - actualSleepHours} more hours sleep!`);
  }
};

calculateSleepDebt();
