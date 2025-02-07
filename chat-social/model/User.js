const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
      type:String,
      required:true,
      unique:true
    },
    // email:{
    //     type:String,
    //     required:false,
    //     unique:true,
    // },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['admin','editor','viewer'],
        default:'viewer',
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('User',userSchema);