// this keywords refers to the object thatis executing the functions..

const obj = {
    name : "person",
    dispalyMessage: function(){
        console.log("hello " + this.name) // refers to the obj, implicit binding.
    },
}

obj.dispalyMessage()

const user1 = {
    name: "vabin",
    showMessage:()=>{
        console.log(this.name) // in arrow function this doen't have reference so, it doesn't runs.
    }
}

