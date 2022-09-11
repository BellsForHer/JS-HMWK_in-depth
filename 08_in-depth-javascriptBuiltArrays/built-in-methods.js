let people = ["John", "James", "Jimmy", "Jame"];
// // console.log("There are four people.");
// console.log(`There are ${people.length} people.`);

// let people = {
//     0: "John",
//     1: "James",
//     2: "Jimmy",
//     3: "Jane",
//     length: 4,
//     map: function (callback) {
//         let newArr = [];
//         for(let i =0; i < this.length; i++) {
//             // console.log(callback(this[i]));
//             newArr.push(callback(this[i]))
//         }
//         return newArr;
//     }
// }

// console.log(people[0]); //John

// console.log(`There are ${people.length} people.`); //There are 4 people

// people.map(); //0,1,2,3

let intrduction = people.map((person)=>{
    return `My name is ${person}.`
})

console.log(intrduction);