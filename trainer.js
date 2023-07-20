let nbs = require("express");
let server = nbs();

server.set("view egine", "ejs");

server.get("/trainer/Kat", function(req,res){
    res.render("trainer.ejs", {"tname": "Kat", "taddress": "Manchester"} );
    res.end()
})

server.get("/trainer/Mike", function(req,res){
    res.render("trainer.ejs", {"tname": "Mike", "taddress": "London"} );
    res.end()
})

server.listen(3000)