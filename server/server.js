 const express=require('express')
 const app=express();
 const cors=require('cors')
 const mongoose=require('mongoose')
 const ConnectDB=require('./util/db')
 //socket io
 const http=require('http')
 const Server=require('socket.io').Server;

const server=http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:'*'
    }
})
io.on('connection',(socket)=>{
    console.log('connected....')
    //when ever somebody communicate it will come here
    socket.on('chat',chat=>{
        io.emit('chat',chat);//that chat should be emit
    })

    socket.on('disconnect',()=>{
        console.log('disconnected....')
    })
})

//  app.use(express.json())
//  app.use(cors())
 ConnectDB();

const port=process.env.PORT||5000;
console.log(port)
 server.listen(port,()=>{
    console.log(`${port} has started...`)
 })