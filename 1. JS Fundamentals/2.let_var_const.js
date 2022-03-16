if (true) {
	var i = 5;
	let j = 5;
	console.log(i, j); // Both i, j are accessible
}
// i is still accessible because var ignore code block so it is global
console.log(i);
// while let is block scope so it is not accessible
console.log(j);

function sayHi() {
	// variable created with var wil be function scope.
	if (true) {
		var x = 5;
		let y = 5;
	}
	console.log(x); // x is accessible as var is function scope
	console.log(y); // y is not accessible as let is block scope. so only inside if block let is accessible.
}
sayHi();
console.log(x, y); // both x, y are not accessible outside the function.

function funcVar() {
	var v1 = 2;
	{
		var v1 = 3;
		console.log(v1); // 3
	}
	console.log(v1); // 3
}
funcVar();

function funcLet() {
	let v1 = 2;
	{
		let v1 = 3;
		console.log(v1); // 3
	}
	console.log(v1); // 2
}

const c1 = 5;
c1 = 6; // error const can not be updated or re-declared.
// const c2; // error const must be initialized at the time of declaration.
