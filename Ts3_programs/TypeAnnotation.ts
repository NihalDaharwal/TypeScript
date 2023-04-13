
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
