function multiplyBy5(num){
    return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}
const chai = new createUser("chai", 25);
const tea = createUser("tea", 259);

chai.printMe()

/*
Here's what happens behind the scenes when the new keyword
is used:

A new object is created: the new keyword initiates the
creation of a new JavaScript object.

A prototype is linked: THe newly created object gets linked
to prototype property of the constructor function. This
this means that it has access to properties methods defined
on the constructor's prototype.

The constructor is calles : The constructor function is 
called with the specified arguments and this bound to 
the newly created object. If no explict return value is
specified from the constructor, JavaScript assumes this,
the newly created object, to be the intended return value.

The new object is returned : After the constructor function
has been called, is it doesn't return a non-primitive value
(object, array, function, etc.), the new created object
is returned.

*/