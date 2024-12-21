const e = require('express');
const content = require('../model/content');
const validatecontnet = require('../validation/contentvalidation')


//create  content
 exports.CreateContent = async (req,res) =>{
    //const {name ,content} = req.body;
    try{
      const content = new content(req.body)
      await content.save();
      res.status(201).json({message:'content created successfully',data:content});
    }catch(error ){
        res.status(400).json({error:error.message})
    }
 };

// update content

exports.UpdateContnet = async (req,res) =>{
    try{
        const content = await content.findByIdAndUpdate(req.params.id, req.body,{new :true})
        if(!content){
            res.status(404).json({message:"content not found"});
        }
        res.status(200).json({message:"content created successfully",data:content});
    }catch(error){
        res.status(400).json({error:error.message});
    }
}

//get all content

exports.getallcontent = async (req,res) =>{
    try{
        const contents = await content.findById(req.params.id)
        if(!content){
            res.status(404).json({message:"content not found"});
        }
        res.status(200).json({message:"content updated successfully"})
    }catch(error){
        res.status(400).json({error:error.message});
    }
}


//delete content

exports.DeleteContent = async (req,res) =>{
     try{
       const content = await content.findByIdAndDelete(req.params.id);
       if(!content) res.status(404).json({message:"content not found"});
       res.status(200).json({message:"content deleted successfully"});
     }catch(error){
       res.status(400).json({error:error.message});
     }
}