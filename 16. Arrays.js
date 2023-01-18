let marks = [87, 67, 45, 89,"Rollno_10 Not Present"]
console.log(marks)

METHODS OF ARRAYS

let num = [1, 5, 67, 80]
let b = num.toString()
console.log(b)

let c = num.join("_")
console.log(c)

let d = num.join("and")
console.log(d)

let pop1 = num.pop()
console.log(num, pop1)

let push1 = num.push(555)
console.log(num, push1)

delete num[2]
console.log(num)

let num1 = [1, 2, 3, 4, 5]
let num2 = [11, 12, 13, 14, 15]
let num3 = [111, 122, 133, 144, 155]
let num_new = num.concat(num1, num2, num3)
console.log(num_new)

let num11 = [44, 67, 23, 14]
num11.sort()
console.log(num11)


SPLICE AND SLICE 
let num = [1, 5, 8, 7, 3, 55, 67, 56, 43, 23]
num.splice(4, 5, 555, 555, 555)
console.log(num)