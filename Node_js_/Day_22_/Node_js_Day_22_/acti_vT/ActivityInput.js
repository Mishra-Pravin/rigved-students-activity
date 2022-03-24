// Importing
let fs = require('fs');
let read = require("readline-sync");

let id = read.questionInt("Enter Your ID: ");
let name = read.question("Enter your name: ");
let age =read.questionInt("Enter your Age:");
let salary = read.questionInt("Enter your salary: ");
let input = [id,name,age,salary];
let jsonString = JSON.stringify(input);
fs.writeFileSync('users.json', jsonString.concat(",\n"), {flag: 'a+'});
console.log("Added to the file");