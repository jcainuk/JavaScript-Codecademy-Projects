const formElements = document.querySelectorAll('input');
console.log(formElements);

const humanInput = document.getElementById('human-age');
const dogInput = document.getElementById('dog-age');

const humanToDogYears = (age) => {
  if (age < 0 || age === 0) { return 0; } if (age > 0) {
  // The first 2 years of a dog's life
    let earlyYears = 2;
    earlyYears *= 10.5;

    // Account for first 2 years
    let laterYears = age - 2;

    // Number of dog years for later human years
    laterYears *= 4;

    // Calculate my age in dog years
    return earlyYears + laterYears;
  }
};

// for loop
for (let i = 0; i < formElements.length; i++) {
  const input = formElements[i];
  console.log(input);
  input.addEventListener('input', (event) => {
    const value = parseFloat(event.target.value);

    switch (event.target.name) {
      case 'human-age':
        dogInput.value = humanToDogYears(value);
        break;

      case 'dog-age':
        // humanInput.value = ;
        break;

      default:
        break;
    }
  });
}
