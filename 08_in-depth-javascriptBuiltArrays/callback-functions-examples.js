// Callback Functions
// a function that is passed in as an arguement in another function.

function executeThreeTimes(callback) {
    for(let i =0; i < 3; i++){
        callback();
    }
}

function printName () {
    console.log("John Doe");
}

executeThreeTimes(printName);

