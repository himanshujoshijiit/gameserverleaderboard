const socialpost = require('../model/socialPOst');
const validatePost = require('../validation/postvalidation');
//const User = require('../models/user');

//create new post

exports.createpost = async (req,res)=>{
    const {error } = validatePost(req.body);
    if(error) return res.status(400).json({ error});

    const {author, content} = req.body;
    console.log("post req body is ",req.body);

    try{
      const post = new socialpost({author,content});
      await post.save();
      res.status(201).json({message:'post created',data:post});
    }catch(error){
        res.status(500).json({error:'failed to create post'});
    }
};

//like post

exports.likepost = async (req,res) =>{
    const {postid, userid} = req.body;

    try{
            const post = await socialpost.findbyidandupdate(postid,
                { $addToSet: { likes: userId } }, // Prevents duplicate likes
                { new: true }
            );

            if(!post) return res.status(404).json({error:'post not found'});
            res.json({ error: 'Failed to like post' });

    }catch(error){
        res.status(500).json({ error: 'Failed to like post' });
    }
}

//unlike post

exports.unlikepost = async (req,res) =>{
    const {postid,userId} = req.body;
    try{
      const post = await socialpost.findbyidandupdate(postid,
        { $pull: { likes: userId } }, // Removes the user's like from the list
        { new: true }
      );
      if (!post) return res.status(404).json({ error: 'Post not found' });
      res.json({ message: 'Post unliked!', data: post });

    }catch(error){
        res.status(500).json({ error: 'Failed to unlike post' });
    }
}

//add comment to a post 

exports.addComment  = async (req,res) =>{
    const {postid,userid, content} = req.body;

    try{
       const post = await socialpost.findbyid(postid);
       if(!post) return res.status(404).json({ error: 'Post not found' });

       post.commnets.push({
        user:userid,
        content,
        timestamps: new Date()
       });

       await post.save();
       res.status(201).json({ message: 'Comment added!', data: post });
    }catch(error){
        res.status(500).json({ error: 'Failed to add comment' });
    }
}

exports.getPostbyid = async (req,res) =>{
    const {postid} = req.params;

    try{
        const post = await socialpost.findbyid(postid)
        .populate('author', 'name')
        .populate('comments.user', 'name');
        if (!post) return res.status(404).json({ error: 'Post not found' });
        res.json(post);
    }catch(error){
        res.status(500).json({ error: 'Failed to retrieve post' });
    }
}

exports.getallpost = async (req,res) =>{
    try{
        const posts = await socialpost.find()
        .populate('author', 'name')
        .populate('comments.user', 'name')
        .sort({ timestamp: -1 }); // Sort by most recent
        res.json(posts);
    }catch(error){
        res.status(500).json({ error: 'Failed to retrieve posts' });
    }

;} 