const { Router } = require('express');
const router = Router();
const {getProfile} = require('../controllers/adminController');
const { putUi, putAbout, putServicios, putHabilidades, putPortafolio, putContacto } = require('../controllers/profileController')
// const authJwt = require('./middlewares/authJwt')

router.route('/')
    .get(getProfile)

router.route('/ui')
    .post(putUi)

router.route('/about')
    .post(putAbout)

router.route('/habilidades')
    .post(putHabilidades)    

router.route('/servicios')
    .post(putServicios)

router.route('/portafolio')
    .post(putPortafolio)

router.route('/contacto')
    .post(putContacto)
    
module.exports = router;