"use strict";
// apply values rather than apply types to a variable or parameter
// let Data : string | number ="hello"
// let Data : "abc" |123 ="abc"
//
function combine1(a, b, type) {
    if (type === "as-number") {
        return +a + +b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.warn(combine1(9, 8, "as-number"));
console.warn(combine1("hello", "vela", "as-number"));
// let  type: "as-number" | "as-string" =10; // show error
let type = "as-string";
