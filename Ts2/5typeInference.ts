// ts variable automatically detects upcoming value is string on number depends on what is given at initial time
let data = "string";
// data = 6; // shows error

let num = 5;
// num = "string"; // shows error

//by default it is "any" type
let data1;
data1 = "anc";
data1 = 123;
data1 = true;

//specific number can also be a type
let num2: 5;
num2 = 5;

//specific string can also be a type
let string: "123";
string = "123";

// anything specific can be a type

let a = 10; // vale can be change that is why it is number
a = 50;
const val = 10; // vale can not be change that is why it is number

// val=20 //error
