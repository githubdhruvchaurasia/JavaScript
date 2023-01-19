// PROBLEM 1 

let arr = [1,4,6,3,89]
let a = prompt("Enter a number you want to add in an array")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)


// PROBLEM 2

let arr = [1,4,6,3,89] 
let a;
do {
  a = prompt("Enter a number you want to add in an array")
a = Number.parseInt(a)
arr.push(a)
} while (a != 0)
console.log(arr)


// Problem 3

let arr = [10,20,54,78,80,90]
  let n = arr.filter((x)=>{
    return x%10 == 0
  })
console.log(n)


// PROBLEM 4

 let arr = [10,20,54,78,80,90]
  let n = arr.map((x)=>{
    return x*x
  })
console.log(n)


// PROBLEM 5

let arr = [1,2,3]
  let n = arr.reduce((x1, x2)=>{
    return x1 * x2
  })
console.log(n)


