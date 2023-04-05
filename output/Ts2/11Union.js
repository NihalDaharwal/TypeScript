"use strict";
// union type  describes a value that can be one of several types
// example
let data = 10;
function combine(a, b) {
    return a + b;
}
console.warn(combine(5, 5));
//
function combine1(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.warn(combine1(9, 8));
console.warn(combine1("hello", "vela"));
