// iterating over strings:


let displayMessage = "I am learning JS";
let count = 0;

for(let char of displayMessage){
    if(char === 'a'){
        count++;
    }
}
console.log(count);

// console.log(displayMessage[0])

for(let i = 0; i<displayMessage.length ; i++){
    console.log(displayMessage[i])

}


// string methods:
//chatAt

const index = 15;
console.log( displayMessage.charAt(index - 1))
console.log(displayMessage.charCodeAt(index)) // ascii code of J

//  exercise to encode:
// iffmu:

const string = "iffmu";
for (let i = 0; i< string.length; i++){
    console.log(`the ascci value of ${string[i]} = ${string.charCodeAt(i)}`)
}

//  indexOf Method:


console.log(displayMessage.indexOf('a')) // gives the first come value of a
console.log(displayMessage.indexOf('a', 3)) // gives the value after the third index
console.log(displayMessage.indexOf('J'))

const findCharacter = (text, char) => text.indexOf(char) === -1? "character not found": "character found"

const result = findCharacter("Bhabin dada", "b");
console.log(result)

//  includes Method:

const include = displayMessage.includes("JS")
console.log(include)