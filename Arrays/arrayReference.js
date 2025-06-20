// copy of array:



let arr1 = [1, 2, 3, 4] // trferring to the memory location
let arr2 = arr1; // also ponting/ referring to the same memory location

console.log("arr1", arr1)
console.log("arr2", arr2)

arr2.push(6) // also changes the arr1

console.log("Updated arr1", arr1)
console.log("Updated arr2", arr2)

// shallow Copy : changes the value to the both array

//Spread Operator;

let arr3 = [...arr1]
console.log("arr3" , arr3)

arr3.push(9) // only changes the value to the arr3 because of ...Spread OPERATOR
console.log("updated arr3:", arr3)
console.log("updated arr1:", arr1)


const myName = "bhabin"
const arrName = [...myName] //changes the string to the array 

console.log(arrName)
