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
        // fahrenheitInput.value =
        // newtonInput.value =
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

// Current temperature forecast in kelvin
const kelvin = 293;

// Conversion of kelvin to celsius
const celsius = kelvin - 273;

// Conversion of celsius to fahrenheit and round down result
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Extra Practice
// Conversion of celsius to Newton Scale and round down result
const newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${newton} on the Newton scale.`);
