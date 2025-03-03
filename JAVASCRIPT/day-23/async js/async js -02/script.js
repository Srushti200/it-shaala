

function sendReq() {
    const p1 = new Promise((resolve, reject) => {
    //heavy operation --> 2 sec
    //resolve("Data we got When our promise has been resolved");
    setTimeout(() => {
        resolve({ id: 1, title: "learn from dev", userId: "123" });
        //reject(("somethimg went wrong"));
    }, 2000);
    // reject("from promise reject");

});
    return promiseObj;
}

//const promiseObj = new Promise((resolve, reject) =>{});


//how to consume / use promise

const p1 = sendReq();

p1
.then((data) => console.log("From.then", data))
.catch((err) =>console.log("From.catch", err));


