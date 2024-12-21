const express = require('express');

const router = express.Router();

const validate = require('../middlewares/validate');
const validateMessage = require('../validations/messageValidation');
const chatcontroller = require('../controller/chatCOntroller');

router.post();
router.get();
router.post('/send', validate(validateMessage), chatController.sendMessage);



module.exports = router;