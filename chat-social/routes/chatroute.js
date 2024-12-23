const express = require('express');

const router = express.Router();

//const validate = require('../middlewares/validate');
//const validateMessage = require('../validations/messageValidation');
const chatcontroller = require('../controllers/chatcontroller');

 
router.get('/',chatcontroller.getConversation);
router.post('/send',chatcontroller.sendMessage);



module.exports = router;