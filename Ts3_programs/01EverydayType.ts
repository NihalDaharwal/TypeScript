// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue";
color = "red";

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`;

// Boolean
let isDone: boolean = false;

// Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;


// Object Types
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  printCoord({ x: 3, y: 7 });

// Object
declare function create(o: object | null): void;
create({ prop: 0 });
create(null);

// Optional Properties
function printName(obj: { first: string; last?: string }) {
    // ...
  }
  // Both OK
  printName({ first: "Bob" });
  printName({ first: "Alice", last: "Alisson" });


  function printName1(obj: { first: string; last?: string }) {
    // Error - might crash if 'obj.last' wasn't provided!
    console.log(obj.last.toUpperCase());
  'obj.last' is possibly 'undefined'.
    if (obj.last !== undefined) {
      // OK
      console.log(obj.last.toUpperCase());
    }
   
    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());
  }





//   /////////////////////////////////////////////////////

//Type Annotations on Variables
let myName: string = "Alice";

// No type annotation needed -- 'myName1' inferred as type 'string'
let myName1 = "Alice";

// Functions
//todo Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

// When a parameter has a type annotation, arguments to that function will be checked:
// Would be a runtime error if executed!
greet(42);
// Argument of type 'number' is not assignable to parameter of type 'string'

//todo Return Type Annotations
// You can also add return type annotations. Return type annotations appear after the parameter list:
function getFavoriteNumber(): number {
  return 26;
}

// Anonymous Functions
// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function
names.forEach(function (s) {
  console.log(s.toUppercase());
Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUppercase());
Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});




