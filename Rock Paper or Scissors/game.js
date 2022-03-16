// create variables for all html elements

const inputs = document.getElementsByClassName('images');
const roundNumberDisplay = document.getElementById('round-number');
const computerGuessDisplay = document.getElementById('computer-guess');
const humanScoreDisplay = document.getElementById('human-score');
const computerScoreDisplay = document.getElementById('computer-score');
const targetNumberDisplay = document.getElementById('target-number');
const computerWinsDisplay = document.getElementById('computer-wins');
const nextRoundButton = document.getElementById('next-round');

// for loop

for (let i = 0; i < inputs.length; i++) {
  /* iterate through the inputs section
  and add an event listener to each individual input
  */
  const input = inputs[i];
  input.addEventListener('click', (event) => {
    // save the value of the input as a variable
    // use parseFloat() in case the value is not a number
    const { value } = event.target;
    console.log(value);
  });
}
