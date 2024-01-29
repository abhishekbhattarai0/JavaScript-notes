/**
 * 
 */

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) // here number1 and number 2 are parameters
{

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) // here 3 and 5 are arguments

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))




// passing multiple value in function
function calculateCartPrice(...num1) // ... is a rest operator whice=h will store and return multiple values
{
    return num1;
}

console.log(calculateCartPrice(12,6514,548,146));

const user = {
    username : "abhi",
    price : 133
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);

const myNewArray = [231,56,879];
function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));