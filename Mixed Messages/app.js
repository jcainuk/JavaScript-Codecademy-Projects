// Random inspirational quote generator

// adverbs of frequency array
const adverbsOfFrequency = [
  'always',
  'usually',
  'often',
  'sometimes',
  'rarely',
  'never',
];

// adjectives array
const adjectives = [
  'able',
  'bad',
  'big',
  'black',
  'certain',
  'clear',
  'different',
  'early',
  'easy',
  'free',
  'full',
  'good',
  'great',
  'hard',
  'high',
  'human',
  'important',
  'international',
  'large',
  'late',
  'little',
  'local',
  'long',
  'low',
  'old',
  'political',
  'real',
  'right',
  'slow',
  'small',
  'social',
  'special',
  'strong',
  'stupid',
  'sure',
  'truthful',
  'white',
  'young',
];

// Phrase with the verb set
const phrasesWithTheVerbSet = [
  'a ladder against the wall',
  'a stone on the grave',
  'a trap ready to catch prey',
  'aside some money for a rainy day',
  'another goal',
  'the house on fire',
  'the door ajar',
  'a wedding day',
  'the rules for the game',
  'a record for the half mile',
  'an example of generosity',
  'lessons for the children to work upon at home',
  'a thermostat at 68',
  'a broken bone',
  'sail for America',
  'the table for dinner',
  'your first novel in Paris',
  'foot in a minefield',
];

// function
const randomAdverb = adverbsOfFrequency[Math.floor(Math.random() * adverbsOfFrequency.length)];
const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
const randomPhrase = phrasesWithTheVerbSet[Math.floor(Math.random() * phrasesWithTheVerbSet.length)];

// example quote
/* “You are ADVERBOFFREQUENCY too ADJECTIVE to set PHRASEWITHSET
 or to dream a new dream.” */
