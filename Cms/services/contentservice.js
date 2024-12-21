const Post =  require('../models/post');
const User =  require('../models/user');

exports.createPost = async  (data) =>{
    const {title, cotent, author} = data;

    //validate the author exist
    const user = await User.findById(author);
    if(!user){
        throw new Error('Author not found');
    }

    const Post = new Post({
            title,
            cotent,
            author,
            status:'draft',
    });
    return Post.save();
}

//getallpost - retrive all post with optionall filtering

exports.getallpost = async (filter = {}) =>{
    const query = {}

    if(filter.status) query.status = filter.status;
    if(filter.tags) query.tags = {$in: filter.tags}

    return Post.find(query).populate('author','username email');
    if(!post){
        throw new Error('Post not found');
    }
    return post;
}

//updatepost

exports.updatepost = async (id,data) =>{
  const {title, content,status, tags} =data;

  const Post = await Post.findById(id);

  if(!post){
    throw new Error('Post not found');
  }
  //update fields if provided
  if(title) post.title = title;
  if(content) post.content = content;
  if(status) post.status = status;
  if(tags) post.tags = tags;

  return post.save();
}

//delete post 


exports.deletepost = async (id) =>{
    const post = await Post.findById(id);
    if(!post){
        throw new Error('Post not found');
    }
    return post.remove();
}
exports.authorbyId = async (authorId) =>{
    const user = await Post.findById(authorId);
    if(!user){
        throw new Error('Author not found');
    }
    return Post.find({
        author:authorId
    }).populate('author','username email');
};

//postby id