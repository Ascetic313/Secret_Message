let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// removing the last string
secretMessage.pop()
// Checking the length
console.log(secretMessage.length)
// Adding words to secretMessage
secretMessage.push('to', 'program')
console.log(secretMessage)
// Changing word in secretMessage
secretMessage[7]= 'right';
console.log(secretMessage)
// Removing the first string //
secretMessage.shift('Learning')
console.log(secretMessage)
// Adding a string //
secretMessage.unshift('programming')
console.log(secretMessage)
// Splicing
secretMessage.splice(6,10, 'know')
console.log(secretMessage)
// Joining the string together
console.log(secretMessage.join(' secretMessage '))