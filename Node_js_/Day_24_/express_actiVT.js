let fs = require("fs");
let data = fs.readFileSync("jsa.json");
let jsArray = JSON.parse(data);

let ImpoExpress =require("express");
let ap =ImpoExpress();
//  /starting the server

let port=8080
ap.listen(port,() =>{console.log(`express server runs at ${port}`)});


//now webservices 
ap.get('/web',(req,res) =>{
    
    res.json(jsArray);

})