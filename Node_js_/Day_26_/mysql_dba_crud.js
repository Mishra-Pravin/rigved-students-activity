let mysql = require('mysql2');
let express = require('express');
let bodyparser = require('body-parser');
let app = express();
app.use(bodyparser.json());

//creating connection with mysql

let mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '*******',
    database: 'TEAM',
    // multipleStatements: true
});

mysqlConnection.connect((err)=> {
    if(!err)
    console.log('Connection Established Successfully');
    else
    console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
});

let port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Sir Yoda you are Listening on port ${port}..`));




     