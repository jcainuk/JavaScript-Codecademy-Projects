const formElements = document.querySelectorAll('input');
console.log(formElements);

const humanInput = document.getElementById('human-age');
const dogInput = document.getElementById('dog-age');

const humanToDogYears = (age) => {
  const yearOne = 15;
  const yearTwo = 9;

  if (age < 0 || age === 0) { return 0; }
  if (age === 1) {
    return yearOne;
  }
  if (age === 2) {
    return yearOne + yearTwo;
  }
  if (age > 2) {
    return yearOne + yearTwo + ((age - 2) * 4);
  }
};

const dogToHumanYears = (age) => {
  if (age < 0 || age === 0) {
    return 0;
  }
  if (age === 1) {
    return 15;
  }

  if (age === 2) {
    return 24;
  }
  if (age > 2) {
    const laterYears = age - 2;
    const earlyYears = 24;
    return earlyYears + (laterYears * 4);
  }
};

// for loop
for (let i = 0; i < formElements.length; i++) {
  const input = formElements[i];

  input.addEventListener('input', (event) => {
    const value = parseFloat(event.target.value);

    switch (event.target.name) {
      case 'human-age':
        dogInput.value = humanToDogYears(value);
        break;

      case 'dog-age':
        humanInput.value = dogToHumanYears(value);
        break;

      default:
        break;
    }
  });
}
