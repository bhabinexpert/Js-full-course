// function can be used and assigned as variable, and passed as an arguments.

function wrapper(){
    return "Welcome home"
}

function greeetmessage(inner, name){
    let message = inner()
    console.log(name, message)

}

greeetmessage(wrapper, "Bhabin")
