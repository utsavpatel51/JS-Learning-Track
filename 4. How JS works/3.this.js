"use strict";

console.log(this); // Global Window Context

function calcAge(birthYear) {
	console.log(2020 - birthYear);
	console.log(this); // Simple function call. For strict mode, this will be undefined
}
calcAge(1998);

const calcAgeArrow = (birthYear) => {
	console.log(2020 - birthYear);
	console.log(this); // Arrow function call does not have this. It is bound to parent scope this keyword. In this case, it is the global window context
};
calcAgeArrow(1998);

const jonas = {
	birthYear: 1998,
	calcAge: function () {
		console.log(this); // this keyword is bound to the object that is calling the method. In this case, it is the jonas object
	},
};
jonas.calcAge();

const mark = {
	birthYear: 2002,
};
mark.calcAge = jonas.calcAge;
mark.calcAge(); // in this case this keyword would be mark object not jonas object. Cuz it's bound to the object that is calling the method.

const f = jonas.calcAge;
f(); // here it's simple function call same as calcAge. so `this` will be undefined.

// ===================== Example 2 =====================

const david = {
	name: "David",
	birthYear: 1998,
	calcAge: function () {
		console.log(this); // `this` keyword is bound to object calling method
		const isMillenial = function () {
			// although calcAge is called via object david. but isMillenial is simple function call so `this` will be undefined for that
			console.log(this);
		};
		isMillenial();

		/*
		// Solution 1 to solve above problem
		const self = this;
		const isMillenial1 = function () {
			console.log(self); // instead of using `this` we can use `self` which is equal to `this` of outside of scope.
		};
		isMillenial1();
        */

		/*
		// Solution 2 to solve above problem(ES6 approach)
		const isMillenial2 = () => {
			console.log(this); // This will work because arrow function `this` is bound to parent scope
		};
		isMillenial2();
        */
	},
	greet: () => {
		console.log(this); // for arrow function, `this` is bound to parent scope. In this case, it would be undefined
	},
};
david.calcAge();
david.greet();
