const story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

const overusedWords = ['really', 'very', 'basically'];

const unnecessaryWords = ['extremely', 'literally', 'actually'];

/// split story into words array
const storyWords = story.split(' ');
console.log(`Total Number of words in 'storyWords'${storyWords.length}`);

// remove unnecessary words from storyWords
const betterWords = storyWords.filter((word) => !unnecessaryWords.includes(word));
console.log(`Total Number of words in 'betterWords'${betterWords.length}`);

// how many times used overused words
let counter = 0;
betterWords.forEach((word) => {
  if (overusedWords.includes(word)) {
    counter++;
  }
});
console.log(`The number of times each overused word appears: ${counter}`);

// count number of sentences
let sentences = 0;

betterWords.forEach(((word) => {
  if (word[word.length - 1] === '.'
  || word[word.length - 1] === '!') {
    sentences += 1;
  }
}));
console.log(`Number of sentences ${sentences}`);

// log out betterWords
console.log(betterWords.join(' '));
