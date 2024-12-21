const express = require('express');
const contentcontroller = require('../controllers/contentcontroller');
const validate = require('../middleware/validate');
const {createpostshema,updatepostshema} = require('../validation/contentvalidation');


const router = express.Router();

router.post(
    '/',
    validate(createpostshema),
    contentcontroller.createContent
);

router.get('/',contentcontroller.getAllpost);

router.get('/:id',contentcontroller.getPostById);

router.put(
    '/:id',
    validate(updatepostshema),
    contentcontroller.updatepost
);

router.delete('/:id',contentcontroller.deletePost);

module.exports = router;



