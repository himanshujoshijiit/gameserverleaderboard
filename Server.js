const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const bodyParser = require('body-parser');
//import express from 'express';
//import http from 'http';
//import socketIo from 'socket.io';
const leaderboardRoutes = require('./routes/leaderboard');
//const chatService =  require('./chat-social/services/chat-service');
const redisClient = require('./services/redis');
//const contentRoute = require('./Cms/routes/contentRoutes');
//const mediaRoute = require('./Cms/routes/mediaRoute');



//create express app

const app = express();
app.use(express.json());

//create http server for socket.io

const server = http.createServer(app);
const io = socketIo(server);

//intialize scoket.io for real time updates

//chatService(io);

//use the leaderboard api modules

 


app.use(bodyParser.json()); // Middleware to parse JSON requests
app.use('/api/leaderboard', leaderboardRoutes); // Mount leaderboard routes
//app.use('/api/contentRoutes',contentRoute);
//app.use('/api/mediaRoutes',mediaRoute);



app.get('/',(req,res)=>{
    res.send("server is up")
})

app.get('/api/leaderboard',(req,res)=>{
    res.send('leaderboard');
})
app.get('/api/contentRoutes',(req,res)=>{
    res.send('content section');
})
app.get('/api/mediaRoutes',(req,res)=>{
    res.send('media section');
})


// Redis test route
app.get('/redis', (req, res) => {
    redisClient.set('test-key', 'test-value', redis.print);
    console.log("redis");
    redisClient.get('test-key', (err, reply) => {
        if (err) {
            return res.status(500).json({ message: 'Error connecting to Redis', error: err });
        }
        res.json({ message: 'Redis value:', value: reply });
    });
})

//start the server

const PORT = process.env.PORT || 3000;

server.listen(PORT,()=>{
    console.log(`server is running on post ${PORT}`);
})
