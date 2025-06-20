// Star pattern with for loops:

const symbol = "*";
// console.log(symbol.repeat(2));

for (let i = 1; i<=5; i++){
    console.log(symbol.repeat(i)) // repeat() repeat the number of time it iterates as i
}

for( let i = 4; i >=1; i--){
    console.log(symbol.repeat(i))
}

const userName = "Bhabin Dulal"

// console.log(userName.length) 
// doing with for loops:
let count = 0;
for (let i = 0; i<userName.length; i++){
    count++
}
console.log(`The final value of count after iterating on it is ${count}`)