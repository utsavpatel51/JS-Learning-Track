let user = new Object(); // "object constructor" syntax
user = {};  // "object literal" syntax

let person = {
    name: 'Light',
    age: 17,
    gender: 'Male',
    location: {
        'country': 'JP'
    }
} // "object literal" syntax
console.log(person);

person = {
    name: 'Light',
    "key space": "value" // key with space must wrapped with quotes
}

/* accessing properties */
console.log(person.name); // Using dot notion
console.log(person['name']); // Using bracket notation

// square bracket allows spaces in the key
console.log(person['key space']); // will work
// console.log(person.key space); // will throw error

// square bracket allows to use any expression as key
name_key = 'name';
console.log(person[name_key]); // will work as person['name']
console.log(person.name_key); // will look for name_key in person object which is not defined
console.log(person['key ' + 'space']); // will work

let key1 = 'name';
let key2 = 'age';
person = {
    [key1]: 'Light', // The name of property is taken  from key1 variable. means 'name': 'Light'
    key2: 17, // As we didn't use [] the name of the property will be key2 
}
console.log(person);

let obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
}
console.log("key1" in obj); // true
console.log("key4" in obj); // false
for (let key in obj) {
    console.log(`${key}=>${obj[key]}`);
}

/* Object methods */
person = {
    name: 'Light',
    birthYear: 1994,
    age: function () { // function expression
        return 2022 - this.birthYear;
    },
    age1(){ // method shorthand
        return 2022 - this.birthYear;
    }

}

console.log(person.age());
console.log(person['age']());