const multer = require('multer');

const path = require('path');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        
    },
    filename:(req,res,cb) =>{

    }
});

const filefilter = (req,file,cb) =>{
    const  allowedTypes = [];

}

module.exports = multer({
    storage,
    fileFilter,
    limits:{filesize:5 * 1024 * 1024}
});