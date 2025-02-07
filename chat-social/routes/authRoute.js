const express = require('express');
const authcontroller = require('../controllers/authCOntroller');
const authmiddleware = require('../middleware/auth');


const  router = express.Router();


//public routes

router.post('/signup',authcontroller.signup);
router.post('/login',authcontroller.login);

//protected route example

router.get('./',(req,res) =>{
    console.log("auth api is up");
})

router.post('/protected',authmiddleware,(req,res)=>{
    res.status(200).json({message:'you have access to this route',user:req.user});
});

module.exports = router;