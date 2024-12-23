const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const bodyParser = require('body-parser');
 
//  const redisClient = require('./services/redis');
 const chatroute = require('./routes/chatroute');
 const socialroute = require('./routes/socialroute');



//create express app

const app = express();
app.use(express.json());

//create http server for socket.io

const server = http.createServer(app);
const io = socketIo(server);

//intialize scoket.io for real time updates

// chatService(io);

//use the leaderboard api modules

 


app.use(bodyParser.json()); // Middleware to parse JSON requests
app.use('/api/chat', chatroute); // Mount leaderboard routes
app.use('/api/social',socialroute);
// app.use('/api/mediaRoutes',mediaRoute);



app.get('/',(req,res)=>{
    res.send("chat server is up")
})

 


// Redis test route
// app.get('/redis', (req, res) => {
//     redisClient.set('test-key', 'test-value', redis.print);
//     console.log("redis");
//     redisClient.get('test-key', (err, reply) => {
//         if (err) {
//             return res.status(500).json({ message: 'Error connecting to Redis', error: err });
//         }
//         res.json({ message: 'Redis value:', value: reply });
//     });
// })

//start the server

const PORT = process.env.PORT || 3001;

server.listen(PORT,()=>{
    console.log(`server is running on post ${PORT}`);
})
