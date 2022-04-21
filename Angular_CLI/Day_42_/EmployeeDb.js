// importing all the necessary libraries
let express = require("express");
let cors = require("cors");
let mongoClient = require("mongodb").MongoClient;
let parser = require("body-parser");

// referencing top level express function 
let app = express();
// database url
let dbURL = "mongodb://localhost:27017";
// express server port
let PORT = 3001;

// start the express server
app.listen(PORT, () => console.log(`Server running in ${PORT}`));

// middleware to parse request & enable cors
app.use(parser.json());
app.use(cors());
// on GET: /Emp you must able to returns all the Product object 
app.get("/Emp", (request, response) => {
    // connect(url, parser, callback)
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error) 
            throw error;
        let db = client.db("mydb");
        let cursor = db.collection("Product").find();
        let Emp = [];
        //cursor.forEach(callback1, callback2)
        cursor.forEach((doc, err) => {
            if(err)
                throw err;
            Emp.push(doc);
        }, () => {
            response.json(Emp);
            client.close();
        });
    });
});
// on POST: /Emp you must able to store the Product object
app.post("/Emp", (request, response) => {
    let ProductDocument = request.body;
    // connect(url, parser, callback)
    // parser parses the url to establish connection
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error)
            throw error;
        // connect to the mydb instance
        let db = client.db("mydb");
        // use the collection 'Product' to insert the document
        db.collection("Product").insertOne(ProductDocument, (err, res) => {
            if(err) {
                // 409 status code is for conflict
                response.status(409).json({"messSKU": `Product with an id ${ProductDocument._id} exists`});
            }
            // 201 status code is used when resource is created
            response.status(201).json(res);
            client.close();
        });
    });
});
//on GET: /Emp/:id to get a single document based on id
app.get("/Emp/:id", (request, response) => {
    // reading the path parameter, converting id in int format
    let id = parseInt(request.params.id);
    // connect(url, parser, callback)
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error)
            throw error;
        // use the mydb instance
        let db = client.db("mydb");
        // use the collection 'Product'
        db.collection("Product").findOne({_id:id})
        .then((doc) => {
            if(doc != null) {
                response.json(doc);
            } else {
                response.status(404).json({"messSKU":`Sorry ${id} doesn't exist`})
            }
            client.close();
        });
    });
});






//on DELETE: /Emp/:id to delete the document based on id
app.delete("/Emp/:id", (request, response) => {
    let id = parseInt(request.params.id);
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error) throw error;
        let db = client.db("mydb");
        // use the collection 'Product' and deleteOne() to delete based on id
        db.collection("Product").deleteOne({_id:id})
        .then((doc) => {
            response.json(doc);
            client.close();
        })
    });
});
// on PUT: /Emp/:id/:SKU to update SKU from id
app.put("/Emp/:id/:SKU", (request, response) => {
    let id = parseInt(request.params.id);
    let SKUNew = parseInt(request.params.SKU);
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error) throw error;
        let db = client.db("mydb");
        // use the collection 'Product' and updateOne() to update the SKU on id
        db.collection("Product").updateOne({_id:id}, {$set:{SKU: SKUNew}})
        .then((doc) => {
            response.json(doc);
            client.close();
        })
    });
});