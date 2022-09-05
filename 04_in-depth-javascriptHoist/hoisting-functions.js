

let paycheck = 300;


function addRandomNumber(num) {
    let randomeNumber = Math.random() * 100;
    logNumberToConsole(randomeNumber + num);
}

function logNumberToConsole (num) {
    console.log(num);
}

function addRandomNumber(num) {
    let randomeNumber = Math.random() * 100;
    logNumberToConsole(randomeNumber + num);
}


addRandomNumber(paycheck);

//hoisting will move functions to the top of the file
//scripts are like timelines, follows info down the page
//functions do not follow timeline (unlike variables)
//best practice -- should know what the function does before using 