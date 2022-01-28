const secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// check array length
console.log(secretMessage.length);

// remove last item of array
secretMessage.pop();

// check new length of array
console.log(secretMessage.length);

// add two words to end of array
secretMessage.push('to', 'Program');

// check indexof 'easily'
console.log(secretMessage.indexOf('easily'));

// replace 'easily' with 'right'
secretMessage[7] = 'right';

// remove first element of array
secretMessage.shift();

// add new element to start of array
secretMessage.unshift('Programming');

/* remove the strings 'get', 'right', 'the',
'first', 'time', and replace them with the single string know */
secretMessage.splice(6, 5, 'know');

// Print secret message
console.log(secretMessage.join(' '));
