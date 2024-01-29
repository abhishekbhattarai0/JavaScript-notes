// let myName = 'Abhishek           '
// console.log(myName.trim().length);

let myHero = ['thor', 'spiderman'];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.nothing = function(){
    console.log(`Nothing is exists in every object`)
}// this gives nothing prototype to all object

Array.prototype.heyAbhi  = function(){
    console.log(`Abhi is saying Abhishek`);
} // it only gives heyAbhi prototype to array only

// heroPower.nothing()
// myHero.nothing()

// myHero.heyAbhi()
// heroPower.heyAbhi()// it doesnot have acces to the prototype heyAbhi

//inheritance

const User = {
    name: 'Abhi',
    email: 'abhi@google.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    // __proto__: TeachingSupport // it is referenced TASupport with TeachingSupport
}

Teacher.__proto__ = User; // old aproach

//modern approach
Object.setPrototypeOf(TeachingSupport, Teacher)
Object.setPrototypeOf(TASupport, TeachingSupport)

// console.log(TASupport.isAvailable);
// console.log(Teacher.name)
// console.log(TeachingSupport.name)



let anotherUserName = " abhishek    ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`The length is: ${this.trim().length}`)
}

anotherUserName.trueLength();
"abhi  ".trueLength()
"Abhishek".trueLength()