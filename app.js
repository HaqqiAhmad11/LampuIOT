//npm init
//npm install express --s

//inisialisasi express
const express = require("express")
const app = express()

var statuslampu = 0;

app.listen(3000, function(){
    console.log("Server is running")
})

app.get("/:lampu",function(req,res){
    statuslampu = req.params.lampu
    res.redirect("/")
})

app.get("/",function(req,res){
    res.send({
        lampu:statuslampu
    })
})
