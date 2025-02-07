 const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const socialPostSchema = new Schema({
    author:{
        type:String,
        required:true
    },
    likes:{
        type:Number,
        required:false
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
                required:false
            },
            content:{
                type:String,
                required:false
            },
            timestamp:{
                type:Date,
                required:false
            }

        }
    ]  
});

module.exports = mongoose.model('SocialPost', socialPostSchema);
