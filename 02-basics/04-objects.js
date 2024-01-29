// const tinderUser = new Object() //singleton object
const tinderUser = {}; // non singleton object
// console.log(tinderUser); // -> {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = true;
// console.log(tinderUser); // -> { id: '123abc', name: 'Sammy', isLoggedIn: true }


const regularUser = {
    email : "someone@gmail.com",
    fullName: {
        userFullName : {
            firstname: "abhi",
            lastname: "abhi"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstname);

//combining two objects
const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    1:"b",
    2:"c"
}

const obj3 = { obj1, obj2};
// console.log(obj3);

const obj4 = { 1:"a", 2:"b"};
const obj5 = { 3:"a", 4:"b"};
const obj6 = { 5:"a", 6:"b"};

//to combine more than two objects
const obj7 = Object.assign({}, obj4, obj5, obj6); // Object.assign(target-object, source-objects)
// console.log(obj7);

const obj8 = {...obj4, ...obj5, ...obj7}; // spread operator
// console.log(obj8);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedin')); //to check whether object has property or not
// console.log(tinderUser.hasOwnProperty('name'));


// Object destructring

const course = {
    coursename : "React",
    price : "100",
    courseinstructor : "Abhi"
}

// console.log(course.courseinstructor);
// console.log(course["courseinstructor"]);

const {courseinstructor:instructor, price} = course; // this is destructing . we do this because we can access values of object  by just
                                                    //  using their name rather than using dot operator every time
// console.log(courseinstructor); 
console.log(instructor);
console.log(price);
