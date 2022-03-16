//  Function Expression
let calcAge = function (birthYear){
    let year = 2022; // local variable
    return year - birthYear;
}
console.log(calcAge(1998));
// console.log(year); // ReferenceError: year is not defined. The variable is local to the function

let newVar = calcAge;
console.log(newVar(2000));


// callback with function expression
function ask(question, yes, no){
    if(confirm(question))
        yes()
    else
        no()
}
ask("Do yo agree?",
    function() {console.log("You agree!");},
    function() {console.log("No cancel it!");}
)