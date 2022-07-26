const { Router } = require('express');
const router = Router();
const { putUi, putAbout, putHabilidades } = require('../controllers/profileController')

router.route('/ui')
    .get(putUi)

router.route('/about')
    .put(putAbout)

router.route('/habilidades')
    .post(putHabilidades)

module.exports = router;
