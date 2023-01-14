// Problem 2
// Demonstrate the use of switch case statements in javascript

const ps = require("prompt-sync");
const prompt = ps();

let age = prompt("Enter your age : ");
switch (age) {
  case "12":
    console.log("Your age is 12");
    break;
  case "13":
    console.log("Your age is 13");
    break;
  case "14":
    console.log("Your age is 14");
    break;
  case "15":
    console.log("Your age is 15");
    break;
  case "16":
    console.log("Your age is 16");
    break;
  default:
    console.log("Your age is not defined above.");
}
