// for of
// ["","",'',]
// [{}, {},{}]

// for( iterations of objects)  // here objects means array,string etc 
// {
//     //statements;
// }

const arr = [1,2,3,4,5]

for (const num of arr) {
  //  console.log(num);
}

const greetings = 'in string, also works';
for( greet of greetings){
   // console.log(greet);
}


//Maps

const map = new Map()
map.set('NP', 'Nepal');
map.set('NP', 'Nepal');
map.set('USA', 'United States of America');
map.set('NP', 'Nepal'); //only unique values will be added dublicate value will be ignored in maps
map.set('UK', 'United Kingdom');

console.log(map);

for(keys of map ){
    console.log(keys);
} // this will print values in array

for([keys,values] of map){
    console.log(keys ,"=>" ,values);
}

const myObject = {
    'game1' : "NFS",
    'game2' : "Spiderman"
}

/*for(cosnt[keys, values] of myObject){
    console.log(key, "=>", value);
} */

