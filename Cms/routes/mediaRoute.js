const express = require('express');
const mediacontroller = require('../controllers/mediacontroller');
//const multer = require('../middlewares/multetr');
const router = express.Router();

router.post(
    '/upload',
    mediacontroller.uploadMedia
);

router.get('/',mediacontroller.getAllmedia);

router.get('/:id',mediacontroller.getMediaById);

router.delete('/:id',mediacontroller.deletefiles);

module.exports = router;