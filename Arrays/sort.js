// sort:

const arr = [ "apple", "mango", "papaya", "banana"]
arr.sort() //sort the array by it's first alphabet
console.log(arr)

const arr2 = [2, 3, 33, 23,11, 6, 5, 9,1]

function sortAscending(a,b){
    return a-b
}
arr2.sort(sortAscending);
console.log(arr2)