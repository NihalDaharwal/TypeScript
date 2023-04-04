//for string array => string[]
let strArray: string[] = ["react", "native", "node", "express"];

strArray.push("123");
// strArray.push(123) //shows error

console.warn(strArray);

//for like this  put these in sequence
let array: [string, number, boolean] = ["1230", 5, true];

//any
let array2: any[] = ["1230", 5, true];

// by default any is taken
let array3 = ["1230", 5, true];
