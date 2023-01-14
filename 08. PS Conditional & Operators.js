// Problem 1
// const prompt = require("prompt-sync")({ sigint: true });
const ps = require("prompt-sync");
const prompt = ps();

let age = prompt("What is your age?")
if (age > 10 && age < 20) {
    console.log("You are between age 10 & 20")
}
else {
    console.log("You are not between 10 & 20")
}


