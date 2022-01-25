// Current temperature forecast in kelvin
const kelvin = 293;

// Conversion of kelvin to celsius
const celsius = kelvin - 273;

// Conversion of celsius to fahrenheit and round down result
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Conversion of celsius to Newton scale
const newton = Math.floor(celsius * (33 / 100));
