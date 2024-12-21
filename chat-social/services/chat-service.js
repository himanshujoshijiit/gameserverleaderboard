const zrevrange  = require('redis')
const formatLeaderboard = require('../../services/leaderboard-servic');
const Socket = require('socket.io');



module.exports = (io) =>{
    io.on('connection',(Socket)=>{
        console.log('New Client connected');
    
          // Emit the latest leaderboard when a new client connects
          zrevrange('leaderboard', 0, 9, 'WITHSCORES', (err, topPlayers) => {
            if (!err) {
                Socket.emit('leaderboardUpdate', formatLeaderboard(topPlayers));
            }
        });

        Socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    
    });
}
