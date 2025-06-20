// uppercase and lowercase:

const myName = "bhabin";
console.log(myName.toUpperCase())

const hobby = "I love to code and want's to be the programmer"
const vowels = "aeiou"

for (let char of hobby){
    if(char.includes(" ")){
        continue

    }
    else if(vowels.includes(char.toLowerCase().trim())){
        console.log(`${char} is a vowel`)
    }
    else{
        console.log(`${char} is not a vowel`)
    }
}