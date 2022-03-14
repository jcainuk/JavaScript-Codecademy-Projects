// get individual input elements from DOM
const kelvinInput = document.getElementById('kelvin');
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const newtonInput = document.getElementById('newton');

// get the inputs section collectively from the DOM
const inputs = document.getElementsByClassName('inputs');

// for loop

for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];
  input.addEventListener('input', (event) => {
    const { value } = event.target;
    // console.log(`${event.target.name} ${value}`);
    switch (event.target.name) {
      case 'kelvin':
        celsiusInput.value = value - 273;
        fahrenheitInput.value = (value - 273.15) * (9 / 5) + 32;

        break;

      case 'celsius':
        // calculation of other values
        break;

      case 'fahrenheit':
        // calculation of other values
        break;

      case 'newton':
        // calculation of other values
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
