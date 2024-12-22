const express = require('express');
const contentcontroller = require('../controllers/contentcontroller');
const validate = require('../middleware/validate');
const {createpostshema,updatepostshema} = require('../validation/contentvalidation');


const router = express.Router();

//validation needs to add in each methods


router.post(
    '/',
    contentcontroller.CreateContent
);

router.get('/',contentcontroller.getallcontent);

//router.get('/:id',contentcontroller.getPostById);

router.put(
    '/:id',
    contentcontroller.UpdateContnet
);

router.delete('/:id',contentcontroller.DeleteContent);

module.exports = router;



