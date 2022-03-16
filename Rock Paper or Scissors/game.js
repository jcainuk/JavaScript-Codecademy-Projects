const inputs = document.getElementsByClassName('images');

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
