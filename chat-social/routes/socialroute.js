const express = require('express');

const router = express.Router();

const chatcontroller = require('../controller/socialCOntroller');
const authenticate = require('../middlewares/auth');
const rateLimiter = require('../middlewares/rateLimit');

router.post('/create', rateLimiter, authenticate, socialController.createPost);
router.post('/like', rateLimiter, authenticate, socialController.likePost);
router.post('/unlike', rateLimiter, authenticate, socialController.unlikePost);
router.post('/comment', rateLimiter, authenticate, socialController.addComment);


router.post();
router.get();

module.exports = router; 