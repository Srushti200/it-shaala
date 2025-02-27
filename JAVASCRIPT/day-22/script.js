let myArr = ["a", "b", "c", "d"];

// myArr.forEach((el) => {
//     console.log(el); // el--> local variable
// });


//perform specified action for each element in array
myArr.forEach((el, i) => {
    console.log("elemet at " , i , "is" , el); // el--> local variable , i--> gives index
});

// for (let i = 0; i < myArr.length; i++){
//     console.log(myArr)
// }


// map gives you another modified array
// map --> always need to return something
const newArray = myArr.map((el) => {
    return el.toUpperCase();
});

console.log(newArray);

let nums = [1, 2, 3, 4, -1, -4, -5, 10];
nums.forEach((el) => {
    console.log(el);
});

let newNums = nums.map((el) => {
    return el * 2
});

console.log(newNums);

//give +ve nums

const filteredArray = nums.filter((el) => {
    return el > 0;
    // if (el > 0) {
    //     return true;
    // } else {
    //     return false;
    // }
});

console.log(filteredArray);


// names = ["ram", "shyam", "raju", "baburao"];

// names = ["**ram**", "**shyam**", "**raju**", "**baburao**"];

names = ["ram", "shyam", "raju", "baburao"];

modifiedNames = names.map((el) => {
    
    
    modifiedNames = "**" + el + "**";
    return modifiedNames
    // return "**" + el + "**";

});
console.log(modifiedNames);


const todos = [
  {
    id: 1,
    todo: "Do something nice for someone you care about",
    completed: false,
  },
  {
    id: 2,
    todo: "Memorize a poem",
    completed: true,
  },
  {
    id: 3,
    todo: "Watch a classic movie",
    completed: true,
  },
  {
    id: 4,
    todo: "Watch a documentary",
    completed: false,
  },
  {
    id: 5,
    todo: "Invest in cryptocurrency",
    completed: false,
  },
];

const completedTask = todos.filter((el) => {
    return el.completed;
});
console.log(completedTask);



