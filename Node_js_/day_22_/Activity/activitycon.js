let fs = require('fs');
let data = fs.readFileSync("users.json");
let inputInfo = data.toString();
let inputItems = inputInfo.split(":")
for(let i=0;i<inputItems.length;i++) {
    console.log(`Id: ${inputItems}, Name: ${inputItems}, Age:${inputItems},Salary: ${inputItems}`);
}