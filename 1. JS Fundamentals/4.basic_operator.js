let n1 = 5+5; //normal numeric addition
let n2 = 5+'5'; //one is a number, one is a string - this is a string concatenation
let n3 = '5'+5; //one is a string, one is a number - this is a string concatenation
let n4 = '5'+'5'; //both string so string concatenation
let n5 = 5 + 10 + '2' // from left to right first 5 + 10 = 15, then 15 + '2' = 152

let n6 = '5' * 5; //carryout as normal numeric multiplication

console.log(n1); 
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
console.log(n6);

let a1 = +11; //no effect on number type
let a2 = +'11'; //converts string to number
let a3 = +'11' + 11; //converts string to number and adds 5
let a4 = (+'11') + (+'11');
let a5 = -2;
console.log(a1);
console.log(a2, typeof a2);
console.log(a3);
console.log(a4);
console.log(-a5); //2  