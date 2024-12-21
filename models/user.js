import { mongo, Mongoose } from "mongoose";

const UserSchema = new Mongoose.Schema({
    usernameL :String,
    friend:[{type: Mongoose.Schema.Types.ObjectId, ref: 'User'}]
})

module.exports = Mongoose.model('User',UserSchema);