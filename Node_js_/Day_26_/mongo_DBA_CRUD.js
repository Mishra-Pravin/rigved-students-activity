let express = require("express");
let cors=require("cors");
let mymongoclint=require("mongodb").MongoClient;
let myparser=require("body-parser");
const { listen } = require("express/lib/application");
const res = require("express/lib/response");
const { request } = require("express");

let myapp =express();
let dbaUrl ="mongodb://localhost:27017";
let port = 3002;

myapp.listen(port,() => console.log(`sir Yoda your server running in ${port} `));

myapp.use(myparser.json());
myapp.use(cors());

myapp.get("/user",(req,res)=>{
    mymongoclint.connect(dbaUrl,{useNewUrlParser:true},(error,clint) =>{
        if(error)
        throw error;
        let database = clint.db("mydbaa");
        let curso =database.collection("employees").find();
        let usors =[];
        curso.forEach((doc,err) => {
            if(err)
            throw err;
            usors.push(doc);
        
        },()=>{
            res.json(usors);
            clint.close();
        });
    });

});


//now storing 

myapp.post("/user", (request, response) => {
    let userDoc = request.body;
    mymongoclint.connect(dbaUrl, { useNewUrlParser: true }, (error, clint) => {
        if (error)
            throw error;
        let databaseVar = clint.db("mydbaa");
        databaseVar.collection("employees").insertOne(userDoc, (err, res) => {
            if (err) {
               response.status(409).json({"message":`user with id ${userDoc._id}exists`});
            }
            response.status(201).json(res);
            clint.close();
        });
    });
});

//finding based on name
myapp.get("/user/:name",(request,response) => {
    let id = parseInt(request.params.name);
    mymongoclint.connect(dbaUrl,{useNewUrlParser:true},(error,client)=>{
        if(error)
        throw error;
        let databaseVar1 =client.db("mydbaa");
        databaseVar1.collection("employees").findOne({_id:id})
        .then((doc) => {
            if(doc != null) {
                response.json(doc);
            } else {
                response.status(404).json({"Oy":`Sorry ${id} Nahi Mill raha hai`})
            }
            client.close();

        });
    });
});

// delete 
myapp.delete("/user/:id", (request, response) => {
    let id = parseInt(request.params.id);
    mymongoclint.connect(dbaUrl, {useNewUrlParser:true}, (error, client) => {
        if(error) throw error;
        let databaseVar2 = client.db("mydbaa");
        databaseVar2.collection("employees").deleteOne({_id:id})
        .then((doc) => {
            response.json(doc);
            client.close();
        })
    });
});

//put
myapp.put("/user/:id/:pin", (request, response) => {
    let id = parseInt(request.params.id);
    let pinNew = parseInt(request.params.pin);
    mymongoclint.connect(dbaUrl, {useNewUrlParser:true}, (error, client) => {
        if(error) throw error;
        let databaseVar3= client.db("mydbaa");
        databaseVar3.collection("employees").updateOne({_id:id}, {$set:{pin: pinNew}})
        .then((doc) => {
            response.json(doc);
            client.close();
        })
    });
});

        