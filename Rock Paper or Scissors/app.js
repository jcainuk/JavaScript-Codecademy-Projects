// User Choice
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'
  ) {
    return userInput;
  }
  console.log('ERROR: Invalid user input.');
};

// Computer Choice
const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return 'Error';
      break;
  }
};

// Determine Winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return ' The user blew up the computer with a bomb!';
  }

  if (userChoice === computerChoice) {
    return 'The game was a tie!';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    }
    return 'The user won!';
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    }
    return 'The user won!';
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    }
    return 'The user won!';
  }
};

// Play Game
const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();

  console.log(`The USER choice was ${userChoice}`);
  console.log(`The COMPUTER choice was ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
