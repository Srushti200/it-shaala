//https://dummyjson.com/todos

// const p1 = fetch("https://dummyjson.com/todos");

// p1.then((data) => data.json()) // to print in console in json format
// .then(data => console.log(data)) // after problem is resolved this will be executed
// .catch ((err) => console.log(err)); // if error occurs



const h1 = document.getElementById("my-h1");

// https://dummyjson.com/todos

const p1 = fetch("https://dummyjson.com/todos");

p1.then((res) => res.json())

  .then((data) => {
    // html add
    // data -> {total  : 254}
    const todo1 = data.todos[0];
    console.log(todo1);

    h1.innerHTML = todo1.todo;
  })

  .catch((err) => console.log(err));