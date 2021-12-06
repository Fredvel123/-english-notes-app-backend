const {Router} = require('express');
const router = Router();
const videoCtl = require('../controllers/videoController');

router.get('/', videoCtl.getAllVideos);
router.post('/', videoCtl.createNewVideo);
router.get('/:id', videoCtl.getVideoById);
router.put('/:id', videoCtl.updateVideoById);
router.delete('/:id', videoCtl.removeVideoById);




module.exports = router;
