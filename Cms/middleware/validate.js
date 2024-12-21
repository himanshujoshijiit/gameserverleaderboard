const { Schema } = require("mongoose");

    const validate = (Schema) => (req,res,next) =>{
          const {error} = Schema.validate(req.body);
          if(error){

          }
          next();
    };

module.exports = validate;