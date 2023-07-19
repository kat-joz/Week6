let nbs = require("express") 
let server=nbs()

server.use(whatever)
function process1(req,res){

    res.write(" Ok , please")
    res.write("Take him to Training")
    res.write("Room no 1")
    res.end()
}
function shafeeqIT(request,response){

    
    response.write("<center> Shafeeq </center>")
    response.write("<br> Working as Trainer")
    response.end()
}
function shafeeqHR(request,response){
  
    
    response.write("<h1> Shafeeq </h1>")
    response.write("<br> Human Resource MAnager")
    response.end()
}

function whatever(req,res,next){
    res.write("NationWide.")
    res.write("Building Society")
    next()
}

server.get("/tom",process1)
server.get("/training/shafeeq",shafeeqIT)
server.get("/hr/shafeeq",shafeeqHR)

server.listen(3000)