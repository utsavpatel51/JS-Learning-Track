// Arrow Function

let calcAge = (birthYear) => {
    let year = 2022; // local variable
    return year - birthYear;
}
console.log(calcAge(1998));

// Implicit return and no parameter
let func1 = () => 5 + 10;

console.log(func1());


// callback with arrow function
function ask(question, yes, no){
    if(confirm(question))
        yes()
    else
        no()
}
ask("Do yo agree?",
    () => {console.log("You agree!");},
    () => {console.log("No cancel it!")}
)