// Problem 4
// Print "You can drive" or "You can't drive" based on age being greater than 18 using ternary operator.

const ps = require("prompt-sync");
const prompt = ps();

let age = 17;
let a = age > 18 ? "You can drive" : "You can't drive";
console.log(a);
