//Hoisting
// Hoisting is when Javascript declares variables/functions at the top of their scope regardless of where they are at. 

//x = 1; // can't declare before variable has been initialized - reference error
//z = 0; //var lets you use before initalization - returns undefined before initalization

//at the top of each scope, always declare variables - hoist
let x = 0;
const y = 1;
var z = 2;

console.log(z);