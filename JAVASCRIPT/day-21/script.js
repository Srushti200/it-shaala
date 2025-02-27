import doSomething, { userName, greet } from "./main.js";
// import doSomething from "./main.js";
// import { greet } from "./main.js";

console.log(userName);

greet();

doSomething();

export const age = 55;


//arrays
const arrays = ["ram", "sham", "jay"];
const revArr = []
// arrays[0] = arrays[0].toUpperCase();
// let newArr = [];

// for (let i = 0; i < arrays.length; i++){
//     // console.log(arrays[i]);
//     newArr.push(arrays[i].toUpperCase());  
// }
// console.log(newArr);


for (let j = arrays.length-1; j >= 0; j--){
    console.log(revArr.push(arrays[j]));
}

console.log(revArr);




let userName1 = "salman";
console.log(userName1.at(3));
console.log(userName1[3]);


// given two array --> merge them
let array1 = ["ram", "sham", "jay", "raj", "harsh"];
let array2 = ["pravin", "sumit", "vishwajeet"];
let mergeArrays = array1.concat(array2);
console.log(mergeArrays);


//salman --> reverse the string
let str = "salman";
let reverse = "" ;


for (let i = str.length - 1; i >= 0; i--) {
    
        reverse += str[i];
        // if (i > 0) {
        //     reverse += ","
        // }
    }

console.log(reverse);


