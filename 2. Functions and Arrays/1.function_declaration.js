// Function Declarations
function calcAge(birthYear) {
    let year = 2022; // local variable
    return year - birthYear;
}

console.log(calcAge(1998));
// console.log(year); // ReferenceError: year is not defined. The variable is local to the function

let userName = "Light";
function changeUserName(){
    console.log(`Inside function ${userName}`); // function have access to all outer variables
    userName = "Kira" // function can modify outer variables
}

changeUserName();
console.log(`Value modify by function ${userName}`); //the value was modified by the function

userName = "Light";
function changeUserName1(){
    let userName = "Kira" // declare a local variable
    console.log(`Inside function1 ${userName}`);
}
changeUserName1();
console.log(`Value outside function ${userName}`); // unchanged. function change the local variable value

// Function Declaration can be called before it defined
func1()
function func1(){
    console.log('I can be called before my declaration');
}