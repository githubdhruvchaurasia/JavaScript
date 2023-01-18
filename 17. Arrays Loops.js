let num = [3, 5, 7, 9, 14]
for (let i = 0; i < num.length; i++) {
  console.log(num[i])
}

// FOR EACH LOOP 
num.forEach((element) => {
  console.log(element * element)
})

// Array.from
let name = "Harry"
let arr = Array.from(name)
console.log(arr)

// For....of
for (let item of num){
  console.log(item)
}

// for...in 
for (let i in num){
  console.log(num[i])
}