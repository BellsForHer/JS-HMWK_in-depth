// Return a boolean if a number is divisible by 10
// Here you'll create a function that'll give you a true or false boolean as its output. The inputted number should only return a true if it's divisible by 10. Otherwise, your program should return a false anser

let optionOne = 3;
let optionTwo = 30;

function isDivisbleby10 () {
 let result = null;
 if ((optionTwo % 10) === 0) {
     result = true;
 }   else {
     result = false;
 }

 return result;

}

console.log(isDivisbleby10());


//scopes doesn't have a variable it's using or declared (i.e. result), looks outside the scope(if statement) (i.e. let result = null;)