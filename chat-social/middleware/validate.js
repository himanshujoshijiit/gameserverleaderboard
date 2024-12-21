const validate  = (shema) =>{
    return (req,res,next) =>{
        const {error} = shema(req.body);
        if (error) return res.status(400).json({ error: error.details[0].message });
        next();
    }

    module.exports = validate
}