// Array
const myArr = [ 0,1,2,3,4,5];
const myHeros = ['Tony Stark', 'spiderman', 'blackpanther', 'flash'];

const myArr2 = new Array(1,2,3,4);
// console.log(myArr, myHeros, myArr2);

// Accessing array elements at certain index
// console.log(myArr[4]); //-> 4
// console.log(myHeros[0]); // -> Tony Stack
// console.log(myArr2[3]); // -> 4

// Adding value inside array and deleting
 const he = myArr.push('abhi');
console.log(he); // 7
console.log(myArr); //[0,1,2,3,4,5, 'abhi']

const newHe = myArr.pop(); // no parameter inside prototype.pop() function.
console.log(myArr); // -> [ 0, 1, 2, 3, 4, 5 ]


// use of unshift() and shift() . It not preferred to use because it adds element at first index
// it will affect all the program as it changes the index of entire elements of array
myArr.unshift(5); // -> it adds element in first in array
console.log(myArr); // -> [5,0,1,2,3,4,5]
myArr.shift(); // it removes first element from array
console.log(myArr)// -> [0,1,2,3,4,5 ]


// use of includes() to check whether the given element is in array or not
console.log(myArr.includes(4)); //-> true  it gives boolean algebra result
console.log(myArr.includes(9)); // ->false


//join() is used to co
console.log(myArr.join()); // -> 0,1,2,3,4,5  
console.log(myArr.join('')); // -> 012345
console.log(typeof myArr.join()); // -> string


//slice() and splice()


//splice()
// slice()
// slice(start)
// slice(start, end)

console.log("A", myArr); // -> A [ 0, 1, 2, 3, 4, 5 ]
const mya1 = myArr.slice(0,3); 
console.log(mya1) // -> [ 0, 1, 2 ] // This doesnot change source array
console.log("B", myArr); // -> B [ 0, 1, 2, 3, 4, 5 ]


// use of splice
// use of splice changes source array. 
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)

const mya2 = myArr.splice(0,3); 
console.log(mya2);// ->[ 0, 1, 2 ]
console.log("C", myArr); // -> C [ 3, 4, 5 ]

