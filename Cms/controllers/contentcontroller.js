const content = require('../model/content');
const validatecontnet = require('../validation/contentvalidation')


//create  content
 exports.CreateContent = async (req,res) =>{
    const {name ,content} = req.body;
    
    if(content==null){
        res.status(400).json{message :"content is empty"};
    }

 }

// update content

exports.UpdateContnet = async (req,res) =>{

}

//delete content

exports.DeleteContent = async (req,res) =>{

}