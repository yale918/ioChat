const express = require("express")
const port = 5555

const server = express()


server.use(express.static('public'))

server.listen(port,()=>{
    console.log("static server is listening: ",port)
})