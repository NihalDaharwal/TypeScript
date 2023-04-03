//numbers  1,10,100,2.5
//string   'a',"hello"
//boolean   true or false

//assign types
let num: number = 10;
//or
let num1: number;
num1 = 10;

function add(n1: number, n2: number) {
  return n1 + n2;
}

// let result = add("10", 20); show error because n1 type is number number and we wrote string there
let result = add(10, 20);
console.warn(result);

function dummy(a: string) {
  return a;
}
let result1 = dummy("hello");
console.warn(result1);
