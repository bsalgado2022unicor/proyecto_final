const express = require('express')
const router = express.Router()

const alumnoControlador = require('../controllers/alumnoControlador')

router.get('/', alumnoControlador.mostrar)
router.post('/crear', alumnoControlador.crear)
router.post('/editar', alumnoControlador.editar)

router.get('/borrar/:id', alumnoControlador.borrar)
module.exports = router