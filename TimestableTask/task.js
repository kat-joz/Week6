let nbs = require("express");
let server = nbs();

server.set("view engine", "ejs");

server.get("/", function(req,res){
    res.render("homepage.ejs");
    res.end()
})

server.get("/range/:n", function(req,res){
    res.render("range.ejs", {num:req.params.n});
    res.end()
})

server.get("/timestable/:range/:storedNumber", function(req,res){
    res.render("timestable.ejs", {range:req.params.range, storedNumber:req.params.storedNumber});
    res.end()
})

server.listen(3000)