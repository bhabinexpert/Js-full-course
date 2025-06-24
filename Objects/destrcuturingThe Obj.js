let obj = {
    name: "bhabin",
    address: {
        state: "koshi",
        city: "dmk",
        locality: "Bhangbari"
    },
    courses : ["html", "css", "js"],
}

// let {name, ...rest} = obj;
// console.log(userName)
// console.log(address)

// console.log(name)
// console.log(rest)

// let {name: userName} = obj
// // console.log(name)
// console.log(userName)

let {address:{state, city, locality}} = obj // destructured the objects to access the properties individually.
console.log(city, state, locality)


