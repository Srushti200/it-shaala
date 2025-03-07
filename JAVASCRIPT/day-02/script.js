"use strict";
// data types
let age = 48;
console.log(age);

// bigint
let population = 99999999n;
console.log(typeof population);

// boolean
const isValid = false;
const isAllowed = true;
console.log(typeof isValid);

//  string
const firstName = "srushti";
const lastName = 'patil';
// backticks / string template
const fullName = 'srushti patil'
console.log(typeof firstName);
console.log(typeof fullName);

// undefined
let city;
console.log(typeof city);

// null
let state = null;
console.log(typeof state);

// object
let person = {
    firstName: "srushti",
    lastName: "patil",
    age: 20,
    city: "sangli"
};
console.log(typeof person);

// symbol --> unique vale
let unique1 = Symbol("unique value");
let unique2 = Symbol("unique value");
console.log(typeof unique1);
console.log(unique1 == unique2);



