// palindrome:

const str = "madam"
// const arrOfChar = str.split("").reverse().join("")
// console.log(arrOfChar)

// // const reverseChar = arrOfChar.reverse()

// // const reversedStr = reverseChar.join("")

// if(str === arrOfChar){
//     console.log(`${str} is a palindrome String`)
// } else{
//     console.log(`${str} is not a plaindrome`)
// }

// palindrome check with function and loop:
function getReversedStr(str){
    let reversedStr='';
    for(let i = str.length -1 ; i>=0; i--){
        reversedStr = reversedStr + str[i]
        // console.log(reversedStr)
    }
    return reversedStr
}
const result = getReversedStr(str)
// console.log(result)

if(str === result){
    console.log(`${str} is a palindrome String`)
} else{
    console.log(`${str} is not a plaindrome`)
}

