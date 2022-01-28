// Sentence to translate to whale language
const sentence1 = 'use systems not goals';

/* Translate English to whale language:
- Whale language has no consonants
- Whale language only uses vowels
- 'Y' is not a vowel for whales
- 'e' and 'u' must be sang twice
- All vowels must be capital letters
*/

const translateToWhale = (input) => {
  // English vowels
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // Empty results array
  const resultArray = [];

  // Capitalize i elem & add to resultArray
  const pushUpperCaseElem = (i) => {
    resultArray.push(input[i].toUpperCase());
  };

  // for loop
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (input[i] === vowels[j]) {
        pushUpperCaseElem(i);
        if (input[i] === 'e') {
          pushUpperCaseElem(i);
        }
        if (input[i] === 'u') {
          pushUpperCaseElem(i);
        }
      }
    }
  }

  return resultArray.join('');
};

console.log(translateToWhale(sentence1));
