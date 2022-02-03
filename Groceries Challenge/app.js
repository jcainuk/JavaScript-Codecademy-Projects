/*
Write a function groceries() that takes an array of object literals
of grocery items. The function should return a string with each item
separated by a comma except the last two items should be separated
by the word 'and'. Make sure spaces (' ') are inserted where they
are appropriate.

*/
const groceries = (arr) => {
  const newArr = [];

  for (const obj of arr) {
    newArr.push(obj.item);
  }

  if (newArr.length === 1) {
    return `${newArr[0]}`;
  }
  const lastItem = newArr.pop();
  return `${newArr.join(', ')} and ${lastItem}`;
};

// tests
console.log(groceries([{ item: 'Carrots' }, { item: 'Hummus' }, { item: 'Pesto' }, { item: 'Rigatoni' }]));
// returns 'Carrots, Hummus, Pesto and Rigatoni'

console.log(groceries([{ item: 'Bread' }, { item: 'Butter' }]));
// returns 'Bread and Butter'

console.log(groceries([{ item: 'Cheese Balls' }]));
// returns 'Cheese Balls'
