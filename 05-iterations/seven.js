const myNumber = [1,2,3,4,5,6,7,8,9,0];

// const newNums = myNumber.map( (num) => ( num + 9) )
// console.log(newNums);

// chaining of map is also possible

const newNums = myNumber.map( (num) => num * 2 )
                    .map( (num) => num + 3 )
                    .map( (num) => num + 4 )
                    .filter( (num) => num >= 15 )

console.log(newNums);


