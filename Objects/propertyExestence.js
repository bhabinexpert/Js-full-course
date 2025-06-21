//  for in:

const obj ={
    name : "vabin",
    city: "damak"
}

const isPropertyFound = 'age' in obj
// console.log(isPropertyFound)

for( let key in  obj){
    console.log(key, obj[key])
}

