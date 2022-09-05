//write a function sum that works liek this: sum(a)(b) = a+b

//my challenge attempt
// function sum(num) {
//     let a = Number;
//     let b = Number;
//    return function (challenge) {
//     console.log((a) + (b));
//    }

// }

// sum(1)(2);

function sum(a) {
    return function (b) {
        console.log(a+b);
    }
}

sum(1)(2);
sum(5)(-1);

//(a) = first arguement; (b) = second arguement