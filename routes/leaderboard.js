const express = require('express');
const router = express.Router(); // Use express.Router directly
const leaderboardService = require('../services/leaderboard-servic'); // Fix typo in filename

const redisClient = require('../services/redis'); // Remove `.default`

 
router.post('/score', async (req, res) => {
  try {
    const { userId, score } = req.body;

    if (!userId || score === undefined) {
      return res.status(400).json({ message: 'Invalid input. userId and score are required.' });
    }

    // Pass `res` to the service
    await leaderboardService.submitscore(userId, parseInt(score, 10), res);
  } catch (err) {
    console.error('Unexpected server error:', err);
    res.status(500).json({ message: 'Unexpected server error' });
  }
});


// Get top players
router.post('/top', async (req, res) => {
    try {
        const { limit } = req.body;
        const topPlayers = await leaderboardService.getTopPlayers(limit || 10);
        res.status(200).json(topPlayers);
    } catch (err) {
        console.error('Error fetching top players:', err);
        res.status(500).json({ message: 'Error fetching top players', error: err.message });
    }
});

// Get rank of a user
router.get('/user/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const rank = await leaderboardService.getUserRank(userId);
        if (rank !== null) {
            res.status(200).json({ userId, rank });
        } else {
            res.status(404).json({ message: 'User not found in leaderboard' });
        }
    } catch (err) {
        console.error('Error fetching user rank:', err);
        res.status(500).json({ message: 'Error fetching user rank', error: err.message });
    }
});

module.exports = router;
