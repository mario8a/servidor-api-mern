// rutas para autenticar usuario
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
//validator
const {check} = require('express-validator');
//controller
const authController = require('../controllers/authController');


//Iniciar sesion
// api/auth
router.post('/',
    authController.autenticarUsuario
);

//Obtiene el usuario autenticado
router.get('/',
    auth,
    authController.usuarioAutenticado
);

module.exports = router;