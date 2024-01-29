// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

for (let i = 0; i < 10; i++) {
    console.log(` outer loop = ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`inner loop = ${j} while outer loop ${i}`);
        
    }    
}

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop Value = ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log( i + '*' + j + '='+ i * j);
        
    }    
}

// Loop operation on array
let myArray = ['flassy', 'bitman', 'supermean']
for (let index = 0; index < myArray.length; index++) {
    const element =myArray[index];
    console.log(element);
    
}

// break and continue
// break
for (let index = 0; index < 100; index++) {
    if(index == 5){
        console.log(" PROGRAM TERMINATED");
        break;
    }
    console.log(`Value of i is ${index}`);
}

//continue
for (let index = 0; index < 100; index++) {
    if(index == 5){
        console.log(" 5 DETECTED");
        console.log(" skipped once")
        continue;
    }
    console.log(`Value of i is ${index}`);
}