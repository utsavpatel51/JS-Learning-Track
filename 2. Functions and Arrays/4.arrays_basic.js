/* Intro to Arrays */
const friends = ['friend1', 'friend2', 'friend3'];
console.log(friends);

// Another way to create array
const friends_2 = new Array('friend1', 'friend2', 'friend3');
console.log(friends_2);

// Access the array elements
console.log(friends[0], friends_2[1]);
console.log(friends.length);

// Mutate array data
friends[0] = 'friend4';
console.log(friends);


/* Basic Array Methods */


// Add element to end of array
friends.push('friend5');
console.log(friends);

// pop removes last element from array
friends.pop();
console.log(friends);

// Add element to beginning of array
friends.unshift('friend0');
console.log(friends);

// shift removes first element from array
friends.shift();
console.log(friends);

// Returns the index of the first occurrence of a value in an array or -1 if it is not present.
console.log(friends.indexOf('friend2'));
// ES6 method. Checks if value is in array[Use strict matching]
console.log(friends.includes('friend2'));
