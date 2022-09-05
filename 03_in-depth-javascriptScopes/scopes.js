// Scope
// Accessibility of variables

// Global Scopes
// These variables are visible thorughout the entire program/script
let x = 0;

// Local Scopes/ inner scope/ block scope
// A local scope has access to its own variables as well as its outer scope variables It does not have access to it's inner scope.
// Examples
// functions, conditional statements, classes, loops, ect.

function logToConsole () {
    let y = 1;
    console.log(x, y);

}

logToConsole();

console.log(y); 