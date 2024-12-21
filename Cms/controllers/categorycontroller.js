const category =require("../models//content")

//create category

exports.createcategory = async (req,res) =>{
    
    try{
    const {name, category } = req.body

    const existingcategory = await category.findone({name})

    if(existingcategory){
        return res.status(400).json(message:'category already exit');
    }

    const category1 = new category({name.description});
    await category1.save();
    
    res.status(200).json({message:"category created successfully"});
  }catch(error){
        res.status(500).json({message:'error creating category',error})
  }
    
}

//get all category

exports.getallcategory = async (req,res) =>{
    try{
        const category2 = await Category.find();

        res.status(200).json(category2);
    }catch(error){
        res.status(500).json({message:"all category did not get"});
    }
}


//update all category

exports.updatecateegory = async (req,res) =>{
    try{
    const {name category } = req.body;
   const {id} = req.params;

   const category3  = await Category.findbyIdandUpdate({
    id,
    {name.description},
    {new :true}
   )
    if(!category3){
        res.status(404).json({message:"category is null"})
    }   
    res.status(200).josn();
}catch(error){
   res.status(500).json();
}
//delete category

})




}