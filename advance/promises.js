/*const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network

    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    }, 1000);
})

promiseOne.then(function(){  //.then(callback) has direct relation with resolve
    console.log("Promise consumed");
}) 
*/


// Promised without storing in variable

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async 2 completed');
        resolve();
    },1000)
}).then(function(){
    console.log('Promise consumed');
})





const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Abhishek", email: "abhishek@gmail.com" });
  }, 3000);
});

promiseThree.then(function (user) {
  console.log(user);
});




const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Abhishek", password: "123456" });
    } else {
      reject("Error : Something went wrong");
    }
  }, 1000);
});





  promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally( () => {
    console.log("The promise is either resolved or rejected")
  });




const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true
    if (!error) {
      resolve({ username: "javascript", password: "123" })
    } else {
      reject('ERROR: JS went wrong')
    }
  }, 1000)
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();


async function getAllUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(response);
    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log("E : ", error);
  }
}

getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
  return response.json() //.json() convert to json data
})
.then( (data) => {
  console.log(data);
})