let fs = require('fs');
let data = fs.readFileSync("users.json");
let inputInfo = data.toString();
let inputItems = inputInfo.split(":")
for(let j=0;j<inputItems.length;j++) {
    console.log(`Id: ${inputItems}, Name: ${inputItems}, Age:${inputItems},Salary: ${inputItems}`);
}