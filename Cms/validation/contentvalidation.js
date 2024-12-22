const Joi = require('joi');



const contentSchema = Joi.object({
    title:Joi.string().min(3).max(100).required().messages({
        'string.base': 'Title should be a string.',
        'string.min': 'Title must be at least 3 characters long.',
        'string.max': 'Title cannot exceed 100 characters.',
        'any.required': 'Title is required.',
    }),
    description:Joi.string().min(10).max(500).required().messages({
        'string.min': 'Description must be at least 10 characters long.',
        'string.max': 'Description cannot exceed 500 characters.',
        'any.required': 'Description is required.',
    }),
    tags: Joi.array().items(Joi.string()).max(10).messages({
     'array.max': 'You can add a maximum of 10 tags.',
    'string.base': 'Each tag must be a string.',
    }),
    published: Joi.boolean().default(false).messages({
        'boolean.base': 'Published must be a boolean value.',
    })
});

const validatecontent = (data) =>{
    const {error, value} = contentSchema.validate(data,{abortEarly:false});
    if(error){
        throw new Error(
            `Validation Error: ${error.details.map((err)=>err.message).json(',')}`
        );
    }
    return value;
}

module.exports = validatecontent;