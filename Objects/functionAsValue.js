// functions as a value in a object:
const myObj = {
    name: "Bhabin",
    greeting: function(){
        console.log(`hello, ${this.name}`)
    },
    bye(){ // bye is itself key and value as abye function itself
        console.log("Good Bye")
    }
}

console.log(myObj)
// myObj.greeting()
myObj.bye() 