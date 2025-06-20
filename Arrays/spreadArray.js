// spread 
// ...arr

const arr = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9]

const arr3 = [...arr , ...arr2]
// console.log(arr3)
// console.log(arr)
// console.log(arr2)


// destructuring array:

const number = [1, 2, 3]

const [a, b, c] = [1, 2,3]
console.log(a)
console.log(b)
console.log(c) 

// swapping the value:

let x = 5;
let y = 6;

[x, y] = [y,x]

console.log(x)
console.log(y)