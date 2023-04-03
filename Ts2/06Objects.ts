//normal objects
// const person = {
//   name: "nihal",
//   age: 27,
// };

// console.warn(person);

//with ts
const person: object = {
  name: "nihal",
  age: 27,
};

console.warn(person); //will not show error because it behave like blank objects {}
// console.warn(person.name); // shows error

//or

const person1: {} = {
  name: "nihal",
  age: 27,
};
console.warn(person1);

//

const person2: { name: string; age: number } = {
  name: "nihal",
  age: 27,
};
console.warn(person2.name);

const user: { name: string; age: number } = {
  name: "nihal",
  age: 27,
};
console.warn(user.name);

// here we duplication so many time so we use like this

//

type objType = { name: string; age: number };

const person3: objType = {
  name: "nihal",
  age: 27,
};
console.warn(person2.name);

const user1: objType = {
  name: "nihal",
  age: 27,
};
console.warn(user.name);
