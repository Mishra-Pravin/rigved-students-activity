console.log("Third party modules");
let read =require("readline-sync");
let name=read.question("Enter last name: ");

let fname=read.question("Enter first name: ");
console.log(`So Mr. ${name+fname}`);