const Media = require('../models/media');
//const Storageservice = require('../services/storageservice');
//const validatecontnet = require('../validation/mediaValidation');


//upload media

exports.uploadMedia = async (req,res) =>{
  try{
    //validate upload request 
    console.log("upload media data",req.body);
    //const {error } = validateMedia(req.body);
   // if(error) return res.status(400).json({error:error.details[0].message });

    //check if files exits
    if(!req.body) return res.status(400).json({error :'No files uploaded'});

    //const uploadresult  = await Storageservice.uploadfile(req.file);
    
    const media = new Media({
        title:req.body.title,
        url: req.body.url  
    });

    await media.save();

   res.status(201).json({message: 'Media files uplaoded successfully'});

}catch(error){
    res.status(500).json({message: 'failed to fles '});
}
};


//getall media

exports.getAllmedia = async (req,res) =>{
   try{
       const medafiles = await Media.find()
        res.json({data: mediafiles});
   }catch(error){
    res.status(500).json({error: 'failed to retrieve media files'});
   }
}

//getMedia

exports.getMediaById = async (req,res) => { 
   try{
    const media = await Media.mediabyId(req.params.id);

    if(!media)  return res.status(404).json({error:"Media not find"});
    res.json(media);
   }catch(error){
    res.status(500).json({error:"failed to retrive media files"});
   }
}

//delelte media


exports.deletefiles = async (req,res) =>{
    try{
    const mediaf = await Media.findMediabyid(req.params.id);
    if(!media) return res.status(404).json({error: 'Media not find'})
    
        // Delete media files from storage
        //await Storageservice.deletefile(media.file);

        //delete media documentys from mongodb
        await media.remove();
        res.json({message:'media deleted successfully'});
    }catch(error){
        res.status(500).json({message:'failed to delete files'})
    }
    
}
