const myNums = [1,2,3,4];
//use of reduce() function

// const myTotal = myNums.reduce(function(accumulator, currentvalue){
//     console.log(`accumulator : ${accumulator}, currentValue ${currentvalue}`)
//     return accumulator + currentvalue
// },0)

// console.log(myTotal);

// reduce in arrow function

const myTotal = myNums.reduce( (accumulator,currentvalue) => accumulator + currentvalue,0 )
// const myTotal = myNums.reduce( (accumulator,currentvalue) => {return accumulator + currentvalue},0 )
console.log(myTotal);


const shoppingCart = [
    {
        courseName : 'js-course',
        price : 2999
    },
    {
        courseName : 'app-development',
        price : 19999
    },
    {
        courseName : 'MERN',
        price : 2999
    },
    {
        courseName : 'sql-database',
        price : 2999
    }
];

priceToPay = shoppingCart.reduce( (accumulator, item) => accumulator + item.price,0 );
console.log(priceToPay);