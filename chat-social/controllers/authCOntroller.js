const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const user =  require('../models/user');
const SECRET_KEY = process.env.JWT_SECRET || 'your_jwt_secret_key';

exports.login = async(req,res) =>{
    const {email, passwords} = req.body;

    try{
       const user1 = async user.findone({email});
       if(!user || !bcrypt.compareSync(passwords
        ,user.passwords
       )){
        return res.status(401).json({ error: 'Invalid email or password' });
       }

       const token = jwt.sign({id:user._id,name:user.name},SECRET_KEY,{ expiresIn: '1h' });
       res.json({token});
    }catch(){
        res.status(500).json({ error: 'Failed to login' });
    }
}
