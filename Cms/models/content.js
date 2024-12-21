const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
    title:{
      type:String,
      required:true
    },
    description:{
      type:String,
      required: true
    },
    author:{
      type:String,
      required:true
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'draft'
  },   
    id{
      type: Character,
      required:true
    },

});

module.exports = mongoose.model('content',contentSchema)