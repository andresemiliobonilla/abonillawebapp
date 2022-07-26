const { Router } = require('express');
const router = Router();
const {getProfile} = require('../controllers/profileController')

router.route('/')
    .get(getProfile)

module.exports = router;