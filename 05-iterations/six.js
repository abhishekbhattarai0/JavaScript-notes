// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item; // forEach() doesnot return any values
// } )

// console.log(values);

const myNum =[1,2,3,4,5,6,7,8,9,10];
//.filter(callBackfunction) . It returns value so we store it in variable

// const newNums = myNum.filter( (items) => (items >= 4) ); // if we use { } instead of ( ) we have to return values inside { }

// console.log(newNums);

const newNums = [];
myNum.forEach( (num) =>{
    if(num >= 4){
        return newNums.push(num);
    }
} )
 
// console.log(newNums);

const books = [
    { title : 'Book-one', genre: 'Fiction', publishek: 1981, edition: 2004},
    { title : 'Book-two', genre: 'History', publishek: 1992, edition: 2008},
    { title : 'Book-three', genre: 'Non-Fiction', publishek: 1999, edition: 2007},
    { title : 'Book-four', genre: 'Science', publishek: 2000, edition: 2005},
    { title : 'Book-five', genre: 'Fiction', publishek: 2009, edition: 2004},
    { title : 'Book-six', genre: 'History', publishek: 1981, edition: 2006},
    { title : 'Book-seven', genre: 'Chimistry', publishek: 1887, edition: 2001},
    { title : 'Book-eight', genre: 'Science', publishek: 2011, edition: 2023}
]

let selectBook = books.filter( (bk) => (bk.genre === 'History' && bk.edition >= 2007) );

console.log(selectBook);