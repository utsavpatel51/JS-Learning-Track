let n1 = 0;
let n2 = 5/0;
let n3 = "not a number"/5;
console.log(n1, typeof n1);
console.log(n2, typeof n2);
console.log(n3, typeof n3);

let s1 = "String value";
let s2 = 'String value';
let s3 = `String value${5+5}`;
console.log(s1, typeof s1);
console.log(s2, typeof s2);
console.log(s3, typeof s3);

let b1 = true;
let b2 = false;
console.log(b1, typeof b1);
console.log(b2, typeof b2);

let u1;
let u2 = undefined;
console.log(u1, typeof u1);
console.log(u2, typeof u2);

let age=null;
console.log(age, typeof age);

let n4 = 1232n;
const n5 = 1234567890123456789012345678901234567890n;
console.log(n4, typeof n4);
console.log(n5, typeof n5);

