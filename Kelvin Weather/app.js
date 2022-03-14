// get individual input elements from DOM
const kelvinInput = document.getElementById('kelvin');
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const newtonInput = document.getElementById('newton');

// get the inputs section collectively from the DOM
const inputs = document.getElementsByClassName('inputs');

// for loop

for (let i = 0; i < inputs.length; i++) {
  /* iterate through the inputs section
  and add an event listener to each individual input
  */
  const input = inputs[i];
  input.addEventListener('input', (event) => {
    // save the value of the input as a variable
    // use parseFloat() in case the value is not a number
    const { value } = parseFloat(event.target);

    /* conditional switch statement to compute new values for
     each temperature type using event.target.name
    */
    switch (event.target.name) {
      case 'kelvin':
        celsiusInput.value = value - 273;
        fahrenheitInput.value = (value - 273.15) * (9 / 5) + 32;
        newtonInput.value = (value - 273.15) * 0.33000;
        break;

      case 'celsius':
        // calculation of other values
        // kelvinInput.value =
        fahrenheitInput.value = Math.floor(value * (9 / 5) + 32);
        newtonInput.value = Math.floor(value * (33 / 100));
        break;

      case 'fahrenheit':
        // calculation of other values
        // kelvinInput.value =
        // celsiusInput.value =
        // newtonInput.value =
        break;

      case 'newton':
        // calculation of other values
        // kelvinInput.value =
        // fahrenheitInput.value =
        // celsiusInput.value =
        break;

      default:
        break;
    }
  });
}
