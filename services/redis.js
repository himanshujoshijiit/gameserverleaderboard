const { createClient } = require('redis');

console.log("Attempting to create Redis client...");

let redisClient;

(async () => {
  try {
    redisClient = createClient({
      socket: {
        host: '127.0.0.1',
        port: 6379,
      },
    });

    redisClient.on('connect', () => {
      console.log('Redis client connected');
    });

    redisClient.on('ready', () => {
      console.log('Redis client is ready');
    });

    redisClient.on('error', (err) => {
      console.error('Redis client error:', err);
    });

    redisClient.on('end', () => {
      console.log('Redis client disconnected');
    });

    // Wait for Redis connection to be established
    await redisClient.connect();
  } catch (err) {
    console.error('Failed to connect to Redis:', err);
  }
})();

module.exports.default = redisClient;
