class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const abhi = new Teacher("abhi","abhi@google.com", "905");
abhi.addCourse();
abhi.logMe()
console.log(abhi.password)
console.log(abhi instanceof Teacher)
console.log(abhi instanceof User)