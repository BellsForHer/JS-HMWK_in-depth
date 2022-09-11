// let person = {
//     name: "John",
//     age: 45,
//     printName: function () {
//         console.log(this))
//     }
// }

// person.printName() //person

// function printName () {
//     console.log(this.name);
// } // null value

let student = {
    name:"Jame"
}

function printName () {
    console.log(this.name)
}

printName.call(student);