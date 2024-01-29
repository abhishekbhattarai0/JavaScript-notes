// this will run the content of if section
const user = [];
 
if (user){
    console.log("Got user Email");
}else{
    console.log("Don't have user email");
}

// this will run the content of else section
const email = "";
if (email){
    console.log("Got user Email");
}else{
    console.log("Don't have user email");
}

/**
 * falsy value : false, 0 , -0, BigInt(0n), null, undefined, NaN
 * 
 * truthy values : "0", 'false', [], {}, function(){}
 */

const userEmail = [];
if (userEmail.length === 0) {
    console.log("array is empty");
}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0)  // Object,keys(obj_variable) convert object into array.
{
    console.log("Object is empty");
}


// if we compare
//false == 0 -> true
//false == '' -> true
// 0 == '' -> true


//+++++++++++++++++++++++++++++++++ Nullish Coalescing Operator (??) : null undefined +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//The nullish coalescing ( ?? ) operator is a logical operator that
//returns its right-hand side operand when its left-hand side operand
// is null or undefined , and otherwise returns its left-hand side operand.
let val1 ;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
// val1 = null ?? 10 ??20;
val1 = null ??20 ?? 10;

console.log(val1)

//++++++++++++++  TERNARY OPERATOR  +++++++++++++++++++
// condition ? true : false

const coldCoffeePrice = 100;
coldCoffeePrice > 99 ? console.log("premium coffeee") : console.log("standard coffee");



