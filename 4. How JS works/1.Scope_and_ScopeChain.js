"use strict";

function calcAge(birthYear) {
	const age = 2022 - birthYear;

	/* Function scope */
	function printAge() {
		// firstName, birthYear, age is accessible here due to scope chaining
		let output = `${firstName} is born in ${birthYear} and he is ${age} years old.`;
		console.log(output);

		/* Block scope */
		if (birthYear > 2000) {
			var millenial = true;
			// This will work and firstName will change to 'Kira' because inside this block this will be new
			// variable having the same name as the one outside the block.
			const firstName = "Kira"; // Creating a new variable shadowing the one outside the block
			output = "New output"; // Assigning a new value to the variable

			const message = `${firstName} is a millenial!`; // variable lookup will be find firstName of current scope
			console.log(message);

			function add(a, b) {
				return a + b;
			}
		}
		// console.log(message); // ReferenceError: message is not accessible here due to block scope
		console.log(millenial); // true. because var is function scope
		// add(1, 2); // ReferenceError: add is not accessible here. function is also block scope only in strict mode.
		console.log(output); // New output because we simply reassigned the variable and not created a new one.
	}
	printAge();
	return age;
}
const firstName = "Light";
calcAge(2002);
console.log(firstName); // Light. Although we change the value to 'Kira' but outside the block it have no effect.
