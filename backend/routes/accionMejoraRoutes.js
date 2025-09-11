// Rutas para acciones de mejora
const express = require('express');
const router = express.Router();
const accionMejoraController = require('../controllers/accionMejoraController');

router.get('/', accionMejoraController.getAll);
router.get('/:id', accionMejoraController.getById);
router.post('/', accionMejoraController.create);
router.put('/:id', accionMejoraController.update);
router.delete('/:id', accionMejoraController.delete);

module.exports = router;
