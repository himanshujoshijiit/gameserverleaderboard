const User = require('../model/user');

//fetch user by id

const getUserById = async (userId) =>{
    try{
        return await User.findById(userId);
    }catch(error){
        console.error(`failed to fetch user byuserid${error}`);
        throw new Error('Failed to fetch user');
    }
};

// Search users by name for chat or social features

const searchuser = async (query) =>{
    try{
        return await User.find({ name: { $regex: query, $options: 'i' } });
    }catch(Error){
        console.error(`Failed to search users: ${error}`);
        throw new Error('Failed to search users');
    }
}

//Send request to users

const sendfriendrequest = async(senderId,receiverId) =>{
    try{
        const sender = await User.findById(senderId);
        const receiver = await User.findById(receiverId);
        if(receiver.findrequest.include(senderId)){
            receiver.findrequest.push(senderId);
            await receiver.save();
            return { message: 'Friend request already sent.' };
        }
    }catch(error){
        console.error(`Failed to send friend request: ${error}`);
        throw new Error('Failed to send friend request');
    }
};

//Accept the request

cosnt acceptRequest = async (userId,senderId) =>{
    try{
        const sender = await User.findById(senderId);
        const receiver = await User.findById(receiverId);

        if(user.findrequest.include(senderId)){
            user.findrequest = user.findrequest.filter(id => id.toString() !== senderId);
            user.friends.push(senderId);
            sender.friends.push(userId);

            await user.save();
            await sender.save();
            return { message: 'Friend request accepted!' };
        }else{
            return { message: 'No friend request from this user.' };        }
    }catch(error){
        console.error(`Failed to accept friend request: ${error}`);
        throw new Error('Failed to accept friend request');
    }
};

module.exports ={
  getUserById,
  searchUsers,
  sendFriendRequest,
  acceptFriendRequest
}