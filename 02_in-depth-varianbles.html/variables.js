// var, let, const
var x; // before ES6, old way of declaring variables

// modern way, ES6
let y; 
const z = 10;
// const different than var and let; can't just declar, must equal value or initilaize 
// const cannot be reassigned once declared.


console.log('x: ', x);
console.log("y: ", y);
console.log("z ", z);
x = 1;
y = 2;

console.log('x: ', x);
console.log("y: ", y);
console.log("z ", z);

// var x; no error
// let y; results in error

// let some dog: can't put space inbetween