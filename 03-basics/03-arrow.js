const user = {
    username : "Abhi",
    price : 390,
    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
    
}
//this  show  current contex

// user.welcomeMessage();
// user.username = "sammy";
// user.welcomeMessage();
// console.log(this);// "this" gives current contex therefore this gives empty

function on(){
    let username = "Abhi"
    console.log(this.username); //this works inside of object
}
on();

