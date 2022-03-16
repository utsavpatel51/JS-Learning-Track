/* String conversion */
let s1 = String(5);
let s2 = String(null);
let s3 = String(true);
let s4 = String(undefined);
let s5 = String(NaN);
console.log(s1, typeof s1);
console.log(s2, typeof s2);
console.log(s3, typeof s3);
console.log(s4, typeof s4);
console.log(s5, typeof s5);

/* Number conversion */
let n1 = "";
let n2 = true;
let n3 = "5";
let n4 = "  5  ";
let n5 = "  zcy";
console.log(Number(n1));
console.log(Number(n2));
console.log(Number(n3));
console.log(Number(n4));
console.log(Number(n5));

/* Boolean conversion */
let b1 = "";
let b2 = "  ";
let b3 = "5";
let b4 = null;
let b5 = 5/0;
console.log(Boolean(b1));
console.log(Boolean(b2));
console.log(Boolean(b3));
console.log(Boolean(b4));
console.log(b5, Boolean(b5));
