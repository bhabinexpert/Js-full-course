// cosntructor function are regular function which are named with first letter capital and are executed only with "new" Operator


function User(name, age){
    (this.name = name), (this.age = age)
}
const user1 = new User("bhabin", 20)
const user2= new User("ram", 20)
const user3 = new User("hari", 20)
const user4 = new User("sita", 20)
const user5 = new User("gita", 20)
const user6 = new User("shyam", 20)
console.log(user1)
console.log(user2)
console.log(user3)
console.log(user4)
console.log(user5)
console.log(user6)
