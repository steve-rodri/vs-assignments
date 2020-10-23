const readline = require("readline-sync");

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

let first = parseInt(readline.question("Please enter your first number: "));
let second = parseInt(readline.question("Please enter your second number: "));
let operation = readline.question(
  "Please enter the operation to perform(add, sub, mul, div): "
);

let result;
if (operation === "add") result = add(first, second);
if (operation === "sub") result = sub(first, second);
if (operation === "mul") result = mul(first, second);
if (operation === "div") result = div(first, second);

console.log(`The result is: ${result}`);
