const Joi = require('joi');
const { ModifiedPathsSnapshot } = require('mongoose');

const postValidation = Joi.object({
            author: Joi.string().required(),
            content: Joi.string().min(1).max(500).required()
});

const validatePost = (data) =>{
    return postValidation.validate(data);
}

module.exports = validatePost;