// Rutas para documentos de soporte
const express = require('express');
const router = express.Router();
const documentoSoporteController = require('../controllers/documentoSoporteController');

router.get('/', documentoSoporteController.getAll);
router.get('/:id', documentoSoporteController.getById);
router.post('/', documentoSoporteController.create);
router.put('/:id', documentoSoporteController.update);
router.delete('/:id', documentoSoporteController.delete);

module.exports = router;
