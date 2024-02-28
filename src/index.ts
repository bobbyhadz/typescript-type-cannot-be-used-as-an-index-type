export {};

// Type 'X' cannot be used as an index type in TypeScript

// EXAMPLE 1 - Use the lowercase primitive types to solve the error

interface Employee {
  name: string; // 👈️ use string lowercase s
}

const obj: Employee = {
  name: 'Bobby Hadz',
};

const str = 'name';

console.log(obj[str]); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // Type 'undefined' cannot be used as an index type in TS

// // EXAMPLE 2 - Use a type guard to solve the error

// // 👇️ key is optional (could be undefined)
// const obj1: { key?: string } = {
//   key: 'name',
// };

// const obj2 = {
//   name: 'Bobby Hadz',
// };

// const result = obj1.key != undefined ? obj2[obj1.key as keyof typeof obj2] : '';

// console.log(result); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 3 - Using an `if` statement to solve the error

// const obj1: { key?: string } = {
//   key: 'name',
// };

// const obj2 = {
//   name: 'Bobby Hadz',
// };

// let result = '';

// if (obj1.key != undefined) {
//   result = obj2[obj1.key as keyof typeof obj2];
// }

// console.log(result); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 4 - Use a type assertion to solve the error

// const arr = ['bobby', 'hadz', 'com'];

// const num: number | undefined = 1;

// const result = arr[num as number]; // 👈️ type assertion

// console.log(result); // 👉️ "hadz"
