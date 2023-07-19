let nbs = require("express")
let server=nbs()

server.use(["/balance", "depostit"], login)

function login(req,res,next){
res.write("Plese Login First")
next()
}

function whatever(req,res,next){
res.write("NationWide.")
res.write("Building Society")
next()
}

function checkBalance(req,res){
    res.write("Your Balance is 200£")
    res.end()
}

server.get("/",function(req,res){
res.write("WElcome to NationWide")
res.end()
})

server.get("/shafeeq",function(req,res){
res.write("SHAFEEQ is BACK")
res.end()
})

server.get("/balance",checkBalance)


server.listen(3000)