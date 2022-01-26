// Function to generate a random event
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } if (random === 1) {
    return 'Triathlon';
  } if (random === 2) {
    return 'Pentathlon';
  }
};

// Function to calculate the number of training days an event requires
const getTrainingDays = (event) => {
  let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

// Function to print a string with competitor name and their event
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

// Function to print a string with competitor name and days they must train
const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

// Generate a random event and save to variable
const event = getRandEvent();

// Get number of training days for random event and save to variable
const days = getTrainingDays(event);

// Name of competitor
const name = 'Nala';

// Function calls
logEvent(name, event);
logTime(name, days);

// Varibales for a new competitor
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

// Function calls for new competitor
logEvent(name2, event2);
logTime(name2, days2);
