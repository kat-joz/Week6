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

server.get("/", function(req,res){
    res.render("homepage.ejs");
    res.end()
})

server.get("/allemployees", function(req,res){
    db.query("select * from employees", function(err, data){
    res.render("employeelist.ejs", {employees:data});
    res.end()
   })
})

server.get("/departments", function(req,res){
    db.query("select distinct department from employees", function(err, data){
    res.render("departments.ejs", {deptName:data});
    res.end()
    })
})


server.get("/show", function(req,res){
    db.query("select * from employees", function(err,data){
        console.log(data)
    })
    res.write("Hello")
    res.end()
});

server.listen(3000)