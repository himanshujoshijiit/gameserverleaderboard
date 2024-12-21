const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    sender:,
    reveiver:,
    content:,
    timestamp:.
    read:,  
});

module.exports = mongoose.model('Message', messageSchema);
