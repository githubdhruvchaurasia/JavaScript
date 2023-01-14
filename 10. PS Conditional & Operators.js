// Problem 3
// Write a js program to find whether a number is divisible by 2 and 3

const ps = require("");
const prompt = ps();``

let num = prompt("What is the number : ");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Congratulations! Your number is divisible by 2 and 3");
} else {
  console.log("Opps! Your number is not divisible by 2 and 3");
}
