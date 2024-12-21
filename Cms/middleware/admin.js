const jwt = require('jsonwebtoken')

module.exports = async (req,res,next) => {
   const token = req.header('Authorisation')?.split('') [1];
   if(!token){
    return res.status(404).json({messsage:'token expired'});
   }
   try{
      const decoded =  jwt.verify(token, process.env.JWT_TOKEN);
      req.user = decoded;
      next();
   }catch(error){
      res.status(400).json({message:'invalid token'});
   }
}


