const express = require('express');

const router = express.Router();

const socialcontroller = require('../controllers/socialcontroller');
//const authenticate = require('../middleware/auth');
//const rateLimiter = require('../middleware/ratelimit');

//TODO : ratelimit and authentication check here in router post 

router.post('/create',socialcontroller.createpost);
router.post('/like', socialcontroller.likepost);
router.post('/unlike', socialcontroller.unlikepost);
router.post('/comment', socialcontroller.addComment);

router.get('/', socialcontroller.getallpost);

 

module.exports = router; 