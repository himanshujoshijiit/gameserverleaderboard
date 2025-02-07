const Message =  require('../model/message');
const { findOne } = require('../model/user');
const User = require('../model/user');
const validateMessage = require('../validation/messagevalidation');

//send message

exports.sendMessage = async(req,res) =>{
    const {error} = validateMessage(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    
    
    const {sender, receiver, content}   = req.body;

    const sendrExist = await User.findOne({username: sender });
    if(!sendrExist) return res.status(400).json({ error : "sender does not exist"});

    const receverExist = await User.findOne({username: receiver });
    if(!receverExist) return res.status(400).json({ error : "recever does not exist"});

    try{
       const message = new Message({sender, receiver, content});
       await message.save();
       res.status(201).json({message:'message sent',data: message});
    }catch(error){
       res.status(500).json({error:'failed to send message'});
    }
}

//get convertion history

exports.getConversation = async (req,res) => {
  const {userId1, userId2} = req.params;

  try{
    const messages = await Message.find({
        $or: [
            { sender: userId1, receiver: userId2 },
            { sender: userId2, receiver: userId1 }
          ]
    }).sort({timestamp: 1});
    res.json(messages);
  }catch(error){
    res.status(500).json({error: 'failed to retreive conversation'});
  }
    
};