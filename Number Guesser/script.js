const humanScore = 0;
const computerScore = 0;
const currentRoundNumber = 1;

// Write your code below:

// return a random integer between 0 and 9
const generateTarget = () => Math.floor(Math.random() * 10);

// determine which guess is closest to target each round

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  if (humanGuess === computerGuess) {
    return true;
  }

  const difference = (a, b) => Math.abs(a - b);

  const computerDiffFromTarget = difference(targetGuess, computerGuess);

  const humanDiffFromTarget = difference(targetGuess, humanGuess);

  return computerDiffFromTarget > humanDiffFromTarget;
};
