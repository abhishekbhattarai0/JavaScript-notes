// something_name.forEach(callBackFunction)

const coding = ["js", "ruby", "java", "python", "cpp", "c", "swift", "rust", "kotlin"]

coding.forEach(function (item) {
    console.log(item);
})

// forEach() in arrow function
coding.forEach((item) => {
    console.log(item)
})

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe); // here we have to give reference of function , we do not have to call function

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

//object inside array

const myCoding = [
    {
        languageName: "Javascript",
        languageExtension: "js"
    },
    {
        languageName: "Python",
        languageExtension: "py"
    },
    {
        languageName: "JAVA",
        languageExtension: "java"
    }
];

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )