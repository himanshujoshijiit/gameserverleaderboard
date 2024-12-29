const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User =  require('../model/User');
const SECRET_KEY = process.env.JWT_SECRET || 'your_jwt_secret_key';// ??


const authcontroller = {
    //user signup

    signup: async (req,res) => {
        try{
            const {username, password} = req.body;

            //check if user already exist

            const extuser = await User.findone({username});
            if(extuser){
                return res.status(400).json({message:"user already exit"});
            }
            //hash the password

            const hashedpasd = await bcrypt.hash(password,10);

            //save user to database

            const newUser = new User({username,password:hashedpasd});

            await newUser.save();

            res.status(201).json({messgae:"user created successfully"});
        }catch(err){
            console.error(err);
            res.status(500).json({message: "internal server error"});
        }
    },

    //user login

    login: async (req,res) =>{
        try{
            const {username, password} = req.body;

            //find in database

            const user = await User.findone({username});

            if(!user){
                return res.status(404).json({message:"user not exist"})
            }

            //compare password

            const ispassword = await bcrypt.compare(password, user.password);
            if(!ispassword){
                return res.status(401).json({message:'Invalid credential'});
            }

            //generate jst-token

            const token = jwt.sign({id: user._id ,username: user.username},JWT_SECRET,{
                expiresIn:'1h',
            });//how it works??

            res.status(200).json({message: "login successfull"});
        }catch(err){
            console.error(err);
            res.status(500).json({message:"Internal server error"});
        }
    },
};

// exports.login = async(req,res) =>{
//     const {email, passwords} = req.body;

//     try{
//        const user1 = async user.findone({email});
//        if(!user || !bcrypt.compareSync(passwords
//         ,user.passwords
//        )){
//         return res.status(401).json({ error: 'Invalid email or password' });
//        }

//        const token = jwt.sign({id:user._id,name:user.name},SECRET_KEY,{ expiresIn: '1h' });
//        res.json({token});
//     }catch(){
//         res.status(500).json({ error: 'Failed to login' });
//     }
// }


module.exports = authcontroller;