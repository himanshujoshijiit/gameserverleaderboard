const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT)SECRET || 'your_jwt_secret_key';

const authenticate = (req,res,next) =>{
    const token = req.headers['authorisation'];

    if (!token) return res.status(401).json({ error: 'Access denied, token missing!' });

    try{
        const decode = jwt.verify(token.split(" ")[1],SECRET_KEY);
        req.user = decoded;
        next();
    }catch(error){
        res.status(400).json({ error: 'Invalid token' });
    }
}

module.exports = authenticate;