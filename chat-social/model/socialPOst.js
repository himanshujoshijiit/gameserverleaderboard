 const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const socialPostSchema = new Schema({
    author:{
        type:String,
        required:true
    },
    likes:{
        type:Number,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    timestamp:{
        type:Date,
        default:Date.now
    },
    comments:[
        {
            user:{
                type:String,
                required:true
            },
            content:{
                type:String,
                required:true
            },
            timestamp:{
                type:Date,
                required:true
            }

        }
    ]  
});

module.exports = mongoose.model('SocialPost', socialPostSchema);
