let nbs = require("express");
let server = nbs();

server.set("view engine", "ejs");

server.get("/results/Kat", function(req,res){
    res.render("results.ejs", {"sname": "Kat", "phys": 50, "chem":50, "mat":30} );
    res.end()
})

server.get("/results/Mike", function(req,res){
    res.render("results.ejs", {"sname": "Mike", "phys": 60, "chem":10, "mat":90} );
    res.end()
})

server.listen(3000)
