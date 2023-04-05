"use strict";
// in js
// function sum(num1, num2) {
//   if (typeof num1 == "number" && typeof num2 == "number") {
//     return num1 + num2;
//   } else {
//     return new Error("values are not number");
//   }
// }
// console.warn(sum("10", 30)); // show error
// function sum(num1, num2) {
//     if (typeof num1 == "number" && typeof num2 == "number") {
//       return num1 + num2;
//     } else {
//       return new Error("values are not number");
//     }
//   }
//   console.warn(sum(20, 30)); // output 50
// in ts
function add(n1, n2) {
    return n1 + n2;
}
let result = add(10, 20);
console.warn(result);
// it reduces complexity
