const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const socialPostSchema = new Schema({
    author:,
    likes:,
    content:,
    timestamp:.
    comments:[
        {
            user:,
            content:,
            timestamp

        }
    ]  
});

module.exports = mongoose.model('Message', socialPostSchema);
