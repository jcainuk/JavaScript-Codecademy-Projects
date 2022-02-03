// subLength challenge
/*
Write a function subLength() that takes 2 parameters,
 a string and a single character.
The function should search the string for the two occurrences
 of the character and return the length between them including the 2 characters.

 If there are less than 2 or more than 2 occurrences of the character the function should return 0.

*/
const subLength = (string, char) => {
  // change string into an array
  const stringArray = string.split('');

  // variable to count number of times given character in string
  let charCount = 0;

  // variable to collect the indexes where char appears in string
  const indexes = [];

  /* forEach  used on stringArray to increase charCount if  char is present
  in string. It uses forEach's built in index parameter, catches it and pushes it to the
  indexes array */

  stringArray.forEach((letter, index) => {
    if (letter === char) {
      charCount++;
      indexes.push(index);
    }
  });
  /*  If there are less than 2 or more than 2 occurrences
     of the character the function should return 0. */
  if (charCount < 2 || charCount > 2) {
    return 0;
  }

  /* search the string for the two occurrences of the
  character and return the length between them including the 2 characters. */

  // get first index from indexes array
  const index0 = indexes[0];

  // get second index from indexes array and add 1 so slice() will work
  const index1 = indexes[1] + 1;

  // get a slice() from the stringArray and save to variable
  const newLetterArray = stringArray.slice(index0, index1);

  // return the length of the slice between and including the two indexes of char
  return newLetterArray.length;
};

console.log(subLength('nannnna', 'a')); // =>  length = 6
console.log(subLength('banana', 'n')); // => 3
console.log(subLength('open', 'o')); // => 0
console.log(subLength('internet', 'e')); // => 4
console.log(subLength('tomato', 'm')); // => 0
console.log(subLength('Yoritomo', 'o')); // => 0
