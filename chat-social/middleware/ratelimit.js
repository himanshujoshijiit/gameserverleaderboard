const ratelimit = require('express-rate-limit')

const createratelimit = ratelimit.rateLimit({
    windowMS:15*60*1000,
    max:100,
    message:'Too many requests from this IP, please try again after 15 minutes'
});


module.exports = createratelimit;