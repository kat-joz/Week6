let express = require("express");
let server = express();
let mysql = require("mysql");

let db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"katnbs"
});

db.connect();

server.get("/show", function(req,res){
    db.query("select * from employees", function(err,data){
        console.log(data)
    })
    res.write("Hello")
    res.end()
});

server.listen(3000)