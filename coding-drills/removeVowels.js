const string = "The quick brown fox jump over the lazy dog"

function getStringWithNoVowels(str){
    const vowels = ["a", "e", "i", "o","u"] 
    let result = ''
    for (let char of str){
        if(!vowels.includes(char.toLowerCase())){
            result += char
        }
    }
    return result

}
const updatedStr = getStringWithNoVowels(string)
console.log(updatedStr)