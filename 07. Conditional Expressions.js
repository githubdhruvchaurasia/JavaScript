let a = prompt("Hey What's your age?");
a = Number.parsenInt(a); // Converting the string to a number

if (a < 0) {
  alert("You are not eligible to apply for DL");
} else if (a < 9) {
  alert("You are a kid");
} else {
  alert("You are not eligible to apply for DL");
}
