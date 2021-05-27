const express = require('express');
const app = express();
const http = require('http');
const { isObject } = require('util');
const server = http.createServer(app);
const {Server} = require("socket.io")
const port = 3000;

const io = new Server(server);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });

io.on('connection', (socket)=>{
    console.log('a user connected')
    socket.broadcast.emit('chat message','welcome to Linee')

    socket.on('chat message', (msg)=>{
        console.log('message: ' + msg)
        io.emit('chat message',msg)
    })

    socket.on('disconnect', () =>{
        console.log('user disconnected')
    })
})

server.listen(port, () => {
  console.log('listening on *:3000');
});