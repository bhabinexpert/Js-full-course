// iterating over arrays:

let studentName = ["bhabin",{ "name" : "ram", "class" : "10"}, "rajesh", "salman", "anmol",["html", "css", "js"]]
console.log(studentName)

let lang = ["python", "react", "node", "java"];

// for let of loop"

for(let name of lang){
    console.log(name)
}

// for let in loop:

for(let i in lang){
    console.log(i) // returns the index
    console.log(lang[i])
}