const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');
const {check} = require('express-validator');

//Autenticar usuario
// api/proyectos

router.post('/',
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.crearProyecto
);
//obtener todos los proyectos
router.get('/',
    auth,
    proyectoController.obtenerProyectos
);

//actualiza proyecto por su id
router.put('/:id',
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.actualizarProyectos
);

//Eliminar proyecto por su id
router.delete('/:id',
    auth,
    proyectoController.eliminarProyecto
);


module.exports = router;