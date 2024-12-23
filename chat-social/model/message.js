 const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    sender:{
        type:String,
        required:true
    },
    receiver:{
        type:String,
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
    read:{
      type:Boolean,
      default:false
    },  
});

module.exports = mongoose.model('Message', messageSchema);
