// given two array --> merge them
let array1 = ["ram", "sham", "jay", "raj", "harsh"];
let array2 = ["pravin", "sumit", "vishwajeet"];
let mergeArrays = array1.concat(array2);
console.log(mergeArrays);


let arr1 = ["a", "b", "c"] ;
let arr2 = ["d", "e", "f"];
//spread operator --> spreads the arrray
let mergeArr = [...arr1, ...arr2];
console.log(mergeArr);
    

//salman --> reverse the string
let str = "raj";
let reverse = "" ;


for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i]; 
    
    if (i > 0) {
            reverse += ","
        }
}
console.log(reverse);

//"salman".split().reverse();


let city = "pune";
let splitArray = city.split(""); // ["p","u","n","e"]
const reverseArr = splitArray.reverse(); // ["e", "n", "u","p"]
// join --> array to string conversion
console.log(reverseArr.join(""));//enup



// array destructuring
const names = ["ram", "sham", "raj" ,"jay"];
// let st1 = names[0];
//let st2 = names[1];
let [st1, st2, , st4] = names;
console.log(st1); // ram
console.log(st2); // sham
console.log(st4); //jay
