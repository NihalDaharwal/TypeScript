"use strict";
// function type which return the type of value is the function type.
// for example if function return a number value then the function type is numeric
//by default infer means type shown automatically
// type  number
function add() {
    return 10;
}
//type string
function concat() {
    return "hello";
}
//manually giving type
function add1() {
    return 10;
}
function add2(a, b) {
    return a + b;
}
add2(5, 5);
const a = 5;
const b = "hell0";
const c = undefined;
function add3() {
    return a;
    //   return b; // will show error
}
add3();
// yes a function type can be undefined
