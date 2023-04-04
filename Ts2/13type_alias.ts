// define like a variable and use it

//types
//1.type alias with variable
//2.type alias with function params

let a: string | number | undefined = 10;
let b: string | number | undefined = "hell";
let c: string | number | undefined = undefined;

// alias with variable
type varType = string | number | undefined;
let d: varType = 10;
let e: varType = "hell";
let f: varType = undefined;
