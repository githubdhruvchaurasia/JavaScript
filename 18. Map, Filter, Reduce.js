
// ARRAY MAP METHOD
let arr = [23, 56, 78]
let a = arr.map((value, index, array) => {
  console.log(value, index, array)
  return value + index 
})
console.log(a)


// ARRAY FILTER METHOD 
let arr2 = [234, 565, 738, 78, 68, 30]
let a2 = arr2.filter((a) => {
  return a < 100
})
console.log(a2)


// ARRAY REDUCE METHOD 
let arr3 = [23, 56, 78, 59, 68]
let newarr3 = arr3.reduce((h1, h2) => {
  return h1 + h2
})
console.log(newarr3)