const Joi = require('joi');
const { ModifiedPathsSnapshot } = require('mongoose');

const messagevalidation = Joi.object({
            sender: Joi.string().required(),
            receiver: Joi.string().required(),
            content: Joi.string().min(1).max(500).required()
});

const validateMessage = (data) =>{
    return messagevalidation.validate(data);
}

module.exports = validateMessage;