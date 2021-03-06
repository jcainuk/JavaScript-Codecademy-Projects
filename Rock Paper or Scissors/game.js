// create variables for all html elements

const inputs = document.getElementsByClassName('images');

const computerGuessDisplay = document.getElementById('computer-guess');

const computerScoreDisplay = document.getElementById('computer-score');
const computerWinsDisplay = document.getElementById('computer-wins');

// for loop

for (let i = 0; i < inputs.length; i++) {
  /* iterate through the inputs section
  and add an event listener to each individual input
  */
  const input = inputs[i];
  input.addEventListener('click', (event) => {
    // save the value of the input as a variable

    const currentHumanChoice = event.target.value;
    const currentComputerChoice = getComputerChoice();

    console.log('Human Choice:', currentHumanChoice);
    console.log('Computer Choice:', currentComputerChoice);
    // Display the computer guess
    computerGuessDisplay.innerText = currentComputerChoice;

    // Determine winner
    // Determine if the human or computer wins:
    const humanIsWinner = determineWinner(currentHumanChoice, currentComputerChoice);
    console.log(humanIsWinner);

    // Display the winner
    if (humanIsWinner === 'The game was a tie!') {
      return computerWinsDisplay.textContent = 'The game was a tie!';
    } if (humanIsWinner === true) {
      return computerWinsDisplay.textContent = 'You win!';
    }
    if (humanIsWinner === false) {
      return computerWinsDisplay.textContent = 'You lose!';
    }
  });
}
