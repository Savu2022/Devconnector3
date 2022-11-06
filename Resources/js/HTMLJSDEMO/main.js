// for default no need of {} and you can uase any name
// if we have only export then use {} ===> can hold a function / value.

import hello3, { add, evenOrOdd, sub } from "./module2.js";

// in case of default we can use any name while importing it.

// mod : hello function and num variable
// mod.num
// mod.hello()

hello3("Sanaa");

let result = add(10, 20);
console.log(result);
let subResult = sub(20, 10);
console.log(subResult);

let resultEvenOrOdd = evenOrOdd("10");
console.log(resultEvenOrOdd);

console.log(100 / 10 == "10");
// == will check the value irrespective of the type
console.log(100 / 10 === "10");
// === will check the value with respect to the type.
