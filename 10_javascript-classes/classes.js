//A class is a bluepring for objects 

//object example
//let obj = {
//    data:
//}

//instance properties -> data
//example 
username = '';

//constructor -> that is executed when an instance gets created
//constructor example: 
constructor() { 
    this.username = newUsername;
    console.log("instance was created");
}


//methods -> define logic to manipulate data
printMyName() {
    console.log(`My name is ${this.username}`)
}

let user = new User("John123");
console.log(user);
user.printMyName;

let user2 = new User("Amy123");
console.log(user);
user.printMyName;

//let userExample = {
//    username: '',
//}