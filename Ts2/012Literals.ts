// apply values rather than apply types to a variable or parameter

// let Data : string | number ="hello"
// let Data : "abc" |123 ="abc"
//
function combine1(
  a: number | string,
  b: number | string,
  type: "as-number" | "as-string"
) {
  if (type === "as-number") {
    return +a + +b;
  } else {
    return a.toString() + b.toString();
  }
}
console.warn(combine1(9, 8, "as-number"));
console.warn(combine1("hello", "vela", "as-number"));
