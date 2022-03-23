console.log(firstName); // undefined. var hoisting initial value is undefined.
// console.log(lastName); // ReferenceError. let hoisting initial value is uninitialized.
// console.log(age); // ReferenceError. const hoisting initial value is uninitialized

var firstName = "Light";
let lastName = "Yagami";
const age = 16;

console.log(addDeclaration(1, 2)); // Would work perfectly fine. Because function declaration is hoisted and initial value is function itself.
console.log(addExpression); // undefined
// console.log(addExpression(1, 2)); // TypeError. var hoisting initial value is undefined and undefined is not a function.
console.log(addArrow(1, 2)); // ReferenceError. const hoisting initial value is uninitialized.
function addDeclaration(a, b) {
	return a + b;
}

var addExpression = function (a, b) {
	return a + b;
};

const addArrow = (a, b) => a + b;
