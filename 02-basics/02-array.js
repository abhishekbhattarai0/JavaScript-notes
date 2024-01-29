const marvelHeros = ["Ironman", "Thor", "Hulk", "Spiderman"];
const dcHeros = ["Superman", "Batman", "Flash", "Shazam"];

// marvelHeros.push(dcHeros); // -> it will add dcHeros array as a element of marvelHeros
// console.log(marvelHeros); //-> ['Ironman','Thor','Hulk','Spiderman',[ 'Superman', 'Batman', 'Flash', 'Shazam' ]]
// console.log(marvelHeros[4][1]); // -> Batman

const allHeros = marvelHeros.concat(dcHeros); // concat() will join two array and make one
console.log(allHeros); // ['Ironman', "Thor", "Hulk", "Spiderman", "Batman", "Flash", "Shazam"]

//most perferred way to join two array into single array
const all_new_array = [...marvelHeros, ...dcHeros];
console.log(all_new_array) // -> ["Ironman", "Thor", "Hulk","Spiderman", "Superman", "Batman", "Flash", "Shazam"]

//if there is nested arrays
const newArray = [1,2,3,[4,5,6],7,[8,[2,3,[7,8]]],3];
const noArray = newArray.flat(3) // -> we have to pass maximum recursion depth
console.log(noArray);

//isArray() is used check arugment is array
console.log(Array.isArray("hello")); // -> false

// Array.from("string") convert given string to array
const arr = Array.from("NOTHING is interesting");
console.log(arr);

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
console.log(Array.of("hello","everything", "is improtant"));