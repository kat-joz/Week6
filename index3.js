let nbs = require("express");
let server = nbs();

server.set("view egine", "ejs");

server.get("/", function(req,res){
    res.render("homepage.ejs");
    res.end()
})

server.listen(3000)