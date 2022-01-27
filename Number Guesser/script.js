let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// return a random integer between 0 and 9
const generateTarget = () => Math.floor(Math.random() * 10);

// determine which guess is closest to target each round

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  if (humanGuess === computerGuess) {
    return true;
  } if (humanGuess !== computerGuess) {
    const difference = (a, b) => Math.abs(a - b);

    const computerDiffFromTarget = difference(targetGuess, computerGuess);

    const humanDiffFromTarget = difference(targetGuess, humanGuess);

    return computerDiffFromTarget > humanDiffFromTarget;
  }
};

// increase winner's score each round
const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
};

// update round number
const advanceRound = () => currentRoundNumber += 1;
