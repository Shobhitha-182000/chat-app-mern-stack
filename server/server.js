const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const ConnectDB = require('./util/db')
const http = require('http')
const { Server } = require('socket.io')

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*'
  }
})

io.on('connection', (socket) => {
  console.log('connected....')

  socket.on('chat', chat => {
    io.emit('chat', chat)
  })

  socket.on('disconnect', () => {
    console.log('disconnected....')
  })
})

ConnectDB()

const port = process.env.PORT || 5000
console.log(port)
server.listen(port, () => {
  console.log(`${port} has started...`)
})
