// Create a username
const userName = '';

// Ternary operator greets user with their name is present
userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');

// The user's question
const userQuestion = 'Will I find a job soon?';

console.log(`The user asked: ${userQuestion}`);

// Generate the user's number between 1 and 7
const randomNumber = Math.floor(Math.random() * 8);

// Variable to catch eight ball's answer string
let eightBall = '';

// Switch statement checks random number then generates the answer
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;

  case 1:
    eightBall = 'It is decidedly so';
    break;

  case 2:
    eightBall = 'Reply hazy try again';
    break;

  case 3:
    eightBall = 'Cannot predict now';
    break;

  case 4:
    eightBall = 'Do not count on it';
    break;

  case 5:
    eightBall = 'My sources say no';
    break;

  case 6:
    eightBall = 'Outlook not so good';
    break;

  case 7:
    eightBall = 'Signs point to yes';
    break;

  default:
    eightBall = 'INVALID!';
}

// Log the answer to the user's question from the switch statement
console.log(`The answer to the question:   ${eightBall}`);
