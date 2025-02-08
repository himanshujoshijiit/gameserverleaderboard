const { required, string } = require('joi')
const mongoose = require('mongoose');

const mediaShema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    url:{
      type: String,
      required:true
    },
    contentType:{
     type:String,
     required: false
    },
    size:{
    type:Number,
    required:false
    },
    uploadAt:{
        type:Date,
        required:true,
        default:Date.now
    },
    uploadBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:false
    },
});

module.exports = mongoose.model('Media',mediaShema);