 const redisClient = require('../services/redis').default;

function formatleaderboard(redisdata){
    const leaderboard = [];
    for(let i=0;i<redisdata.length;i+=2){
        leaderboard.push({
            plyerId: redisdata[i],
            score: redisdata[i+1]
        });
    }
    return leaderboard;

};

exports.submitscore = async (userId, score) => {
    try {
      if (!redisClient) {
        throw new Error('Redis client is not initialized properly');
      }
  
      console.log('Attempting to submit score to Redis...');
      // Correct method usage for Redis v4.x
      await redisClient.zAdd('leaderboard', [{ score: score, value: userId }]);
      
      console.log("Score successfully submitted to leaderboard");
      return { success: true, message: 'Score submitted successfully' };
    } catch (error) {
      console.error('Redis error in submitscore:', error);
      return { success: false, message: error.message };
    }
  };
// Get top N players

    exports.getTopPlayers = async(req,res)=>{
        const {topN } = req.query;
            console.log("this is submitscore");
        const n = topN?parseInt(topN):10;

        try {
            const topPlayers = await redisclient.zrevrange('leaderboard', 0, n - 1, 'WITHSCORES');
            res.status(200).send({ leaderboard: formatleaderboard(topPlayers) });
        } catch (error) {
            console.error('Error fetching top players:', error);
            res.status(500).send({ message: 'Error fetching top players' });
        }
    };

    // Get user rank

    exports.getUserRank = async (req,res)=>{
        const {id} = req.params;
        try{
            const rank = await redisclient.zrevrank('leaderboard',id);
            if(rank===null){
              return res.status(404).send({message:"player not found"});
            }

            res.status(200).send({playerId: id,rank: rank+1});
        }catch(error){
            console.log("Error fetching user rank",rank);
            res.status(500).send({message:'Error fetching user rank'});
        }

    };

