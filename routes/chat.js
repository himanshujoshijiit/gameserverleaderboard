import {express} from express
const router = express.Router()

router.get('/history',async(req,res)=>{

    const chatHistory = await Chat.find();
    
    res.json(chatHistory);
})

module.exports =  router;  