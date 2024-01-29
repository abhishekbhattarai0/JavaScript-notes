//singleton
//object.create
//object literals


const JsUser = {
    name : "Abhi",
    "full name" : "Abhi Abhi",
    age : 20,
    location : "Butwal",
    isLoggedIn : true,
    lastLoginDays : ["Monday", "Tuesday"]
}

console.log(JsUser.name);
console.log(JsUser["name"]); // in this way we can access the value of object. It is specially useful when there is space in key.
console.log(JsUser["full name"]);
console.log(JsUser.age);

JsUser.email = "abhishek@google.com";
console.log(JsUser.email);
// Object.freeze(JsUser); // This is used to make object uneditable


//
JsUser.greeting = function(){
    console.log("Hello myself");

}

console.log(JsUser);
console.log(JsUser.greeting); // it gives reference
console.log(JsUser.greeting());
console.log(`hello ${this.name}`);

// to store symbol in object and print

const sym = Symbol("hello");
const obj = {
    name : "doesn't matter",
    [sym] : "hello1"
}

console.log(obj[sym]);
console.log(typeof obj[sym]);
console.log(obj)

