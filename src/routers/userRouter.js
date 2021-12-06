const { Router } = require('express');
const userCtl = require('../controllers/userControllers');
const router = Router();

router.post('/sigin', userCtl.createNewUser);
router.post('/login', userCtl.logginUser);
router.get('/', userCtl.getAllUsers)

module.exports = router;