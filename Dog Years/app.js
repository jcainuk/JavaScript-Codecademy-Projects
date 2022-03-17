const formElements = document.getElementsByName('form');
console.log(formElements);

const humanInput = document.getElementById('human-age');
const dogInput = document.getElementById('dog-age');

// Age variable
const myAge = 33;

// The first 2 years of a dog's life
let earlyYears = 2;
earlyYears *= 10.5;

// Account for first 2 years
let laterYears = myAge - 2;

// Number of dog years for later human years
laterYears *= 4;

// check work
console.log(earlyYears);
console.log(laterYears);

// Calculate my age in dog years
const myAgeInDogYears = earlyYears + laterYears;

// Store my name in lowercase letters
const myName = 'Jonathan'.toLowerCase();

//  Sentence to show your name and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
