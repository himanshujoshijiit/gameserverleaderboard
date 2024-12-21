const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/cmsUser');

const secretkey = process.env.jwt_secret | '';

exports.register = async (data) =>{
    const {username,email, password } = data;

    const existinguser = await User.findOne({email});

    if(existinguser){
        throw new Error('User already exists');
    }

    const hashedpassowrd = await bcrypt.hash(passowrd,10);

    const newuser  = new User({
        username,
        email,
        password:hashedpassowrd
    });

    return newuser.save();
 };

 //AUTHENTICATE USER AND GENERATE TOKEN

 exports.login = async (data)=>{

 
 const user = await User.findone({email});

 if(!user){
    throw new Error('Invalid email or password');
 }

 //compare password

 const ispassword = await bcrypt.compare(password,user.password);

 if(!ispassword){
    throw new Error('Invalid email or password');
 }


 //generate token

 const token = jwt.sign({id: user._id,role:user.role},secretkey,{expiresIn:'1h'});
 return {user,token };
}

exports.verifytoken = (token) =>{
    return jwt.verify(token, secretkey);
};