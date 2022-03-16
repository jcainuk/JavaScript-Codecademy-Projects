const humanScore = 0;
const computerScore = 0;
const currentRoundNumber = 1;

// increase winner's score each round
const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
};

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
    console.log('The game was a tie!');
    return false;
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

// update round number
const advanceRound = () => currentRoundNumber += 1;
