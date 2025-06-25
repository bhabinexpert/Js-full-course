// Function Burrowing with call- apply and bind.

const user1 = {
    name:"vabin",
    age: 20,
    // dispalymessage() {
    //     console.log(this.name)
    // } implicit binding...
}
const user2 = {
    name:"salman",
    age: 50
}
const user3 = {
    name:"anmol",
    age: 30
}
const user4 = {
    name:"surakshya",
    age: 20
}

function sayHi(degree, year){
    console.log(this.name, degree, year) 
}

//explicit Binding
sayHi.call(user1,"hons-Computing","2026") // the value of this is user1
sayHi.call(user2,"jhadu-Pochha", 2020) // the value of this is user2
sayHi.call(user3,"MCT", 2025) // the first parameterr should be the object calling the function and other parameter are the parameters of the function.
sayHi.call(user4, "Vada", 2025)

// sayHi.apply(user1,["hons-computing", 2025]) same as .call methods

const result = sayHi.bind(user3, "Computing")
result(2025)