/* A promise is one of these states: 
 1.pending : initial state, neither fulfilled nor rejected.
 2.fulfilled: meaning that the operation was completed sucessfully.
 3. Rejected: meaning that the operation was failed

 the eventual state of pending promise can either be fulfiled with a value
 or rejected with a reason(error). When either of these options occur, the
 associated handlers queued up by a promise's 'then' method are called.

 if the promise has alredy been fulfilled or rejected when a corresponding 
 handler is attached, the handler will be called, so there is no race condition
 betweeb ab asynchronous operation completing and its handlers being attached.

 
 */

    /**
 const npromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        console.log("hello work");
        resolve()
    }, 300)
 });

 npromise.then(function(){
    console.log('hello');
});

*/

/*

const promiseTwo = new Promise( function(resolve, reject){

    setTimeout(function(){
        console.log("promise Two is running");
        resolve({
            pointOne: 'function can be passed',
            pointTwo: 'object can be passed'
        });
    },400)
})

promiseTwo.then(function(e){
    console.log(e.pointOne + '  ' + e.pointTwo)
})

*/

/*

const promiseFour = new Promise( function(resolve, reject){
    setTimeout( function(){
        error = false;

        if(!error){
            resolve( function(){
                console.log('code runs smoothly without any error \n make error = true if you want error')
            })
        }else{
            reject('Error : make error = false to resolve the error')
        }
    },400)
})

promiseFour
.then( function(e){
    console.log(e());
})
.catch( function(e){
    console.log(e)
})
.finally( function(){
    console.log('.finally() runs whether resolved or rejected')
})

*/


const promiseSix = new Promise( function(resolve, reject){
    setTimeout( function(){
        const error = true;
        
        if(!error){
            resolve({
                firstName:'Abhishek',
                lastName: 'Bhattarai',
                email: 'abhishekbhattaraiofficial@gmail.com'
            });
        }else{
            reject('Error: Sorry to say but you seems stupid');
        }
    },300)
})

async function consumePromiseSix(){
   try{
    const response = await promiseSix;
    console.log(response);
   }catch(error){
        console.log(error)
   }
}

consumePromiseSix()