//export (normal)
import { age } from "./script.js"; // need to link to run

export const userName = "salman";

export function greet() {
    console.log("Good morning");
}

function doSomething() {
    console.log("doing something");
}

//export default --> one file can have only one export default
// a file can contain only one export default
export default doSomething;






