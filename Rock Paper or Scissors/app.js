// Generate computer choice
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
  if (userChoice === computerChoice) {
    return 'The game was a tie!';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      console.log('The computer won!');
      return false;
    }

    console.log('The user won!');
    return true;
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      console.log('The computer won!');
      return false;
    }

    console.log('The user won!');
    return true;
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      console.log('The computer won!');
      return false;
    }
    console.log('The user won!');
    return true;
  }
};
