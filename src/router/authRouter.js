const { Router } = require('express');
const router = Router();
const {getLogin, getRegister, postAuthLogin, postAuthRegister} = require('../controllers/authController')

// Peticiones para recibir datos
router.route('/authLogin')
    .post(postAuthLogin)

router.route('/authRegister')
    .post(postAuthRegister)

// Peticiones para las vistas  
router.route('/login')
    .get(getLogin)
    
router.route('/register')
    .get(getRegister)

module.exports = router;