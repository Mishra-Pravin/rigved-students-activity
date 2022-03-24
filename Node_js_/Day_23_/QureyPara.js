

let fs = require("fs");
let read =require("readline-sync");
let dat =fs.readFileSync('jsa.json');
let datString=dat.toString();
let http = require("http");
let url = require("url"); 
let PORT_NO = 3001;



http.createServer((request, response) => {
    let urlString = request.url;
    if(urlString != '/favicon.ico') {
        let urlObject = url.parse(urlString, true); 
        let EMPL = urlObject.query;
        console.log(EMPL); 
        console.log(JSON.stringify(EMPL));
        let jsObj=undefined;
        if (datString.length < 1 || datString == "") {
            jsObj = [];
        }
        else {
            jsObj = JSON.parse(datString)
        }
        jsObj.push(EMPL);
        let jArray = JSON.stringify(jsObj);

        fs.writeFileSync('jsa.json', jArray);
       
        response.writeHead(200, {'content-type': 'text/html'});
        response.write(`<h2>Hello ${EMPL.Name} Sir, your age is ${EMPL.age}</h2>`)
        
       
    }
    response.end();
})
.listen(PORT_NO, () => console.log(`Server running at ${3001}`));