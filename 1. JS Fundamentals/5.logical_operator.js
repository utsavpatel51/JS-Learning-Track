console.log(true || false); // true
console.log(null || undefined); // undefined. no truthy value so return the last value
console.log('Hi' || 1); // Hi
console.log(null || 0); // 0

false || console.log('Will be evaluate'); // first argument is false, so it will evaluate the second expression
true || console.log('Will not be evaluate');

console.log(1 && 5 && null && 2); // null. return first falsy value
console.log(1 && 5 && 3); // 3. no falsy value so return the last value

// inverse of boolean(value)
console.log(!true); // false
console.log(!"Hi"); // false

// inverse(inverse of boolean(value)) == boolean(value)
console.log(!!true); // true
console.log(!!"Hi"); // true


