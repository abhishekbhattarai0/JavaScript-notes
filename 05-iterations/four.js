const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift: "swift by apple"
}
// to get keys of objects
for (const key in myObject) {
  console.log(key);
}

//to get values of objects
for (const key in myObject) {
  console.log(myObject[key]);
}

// can forin loop be used in array :> 
const programming = ["js", "rb", "py", "java", "python"]
for( const keys in programming){
    console.log(keys);
}// output => 0 1 2 3 4  this is because by default array keys is number starts from 0 and forin


for( const keys in programming){
    console.log(programming[keys]);
}

// NOTE : map is non iteratable