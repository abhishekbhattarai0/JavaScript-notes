// Immediately Invoked Function Expression (IIFE)
// It is used to invoke function because of following reason
// Use Cases Of IIFE

// Avoid polluting the global namespace 
// To create closures
// Avoid conflict of variable names between libraries and programs.
// IIFE is used to create private and  public variables and methods
// It is used to execute the async and await function
// It is used in JQuery Library
// It is used to work with require function


(function chiya(){ // named IIFE bcoz it has name
    console.log(`DATABASE CONNECTED`)
})();  // NOTE : if you do not end this IIFE function with semicolon it may give some error BECAUSE the function will not end without semicolon

// chiya();

((name) => { // unnamed IIFE
    console.log(`DB 2 CONNECTED by ${name}`);
})('Abhi'); // we can give argument also as we give in normal function while calling
