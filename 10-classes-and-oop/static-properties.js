class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

     static createId(){
        return `123f`
    }
}

class Teacher extends User {
    constructor(email){
        super()
        this.email= email;
    }
}
const abhi = new teacher("abhi", "i@gamil.com");
// console.log(abhi.createId()) //cant be accessed