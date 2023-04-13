
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

