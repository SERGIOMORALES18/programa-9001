// Rutas para criterios de auditoría
const express = require('express');
const router = express.Router();
const criterioAuditoriaController = require('../controllers/criterioAuditoriaController');

router.get('/', criterioAuditoriaController.getAll);
router.get('/:id', criterioAuditoriaController.getById);
router.post('/', criterioAuditoriaController.create);
router.put('/:id', criterioAuditoriaController.update);
router.delete('/:id', criterioAuditoriaController.delete);

module.exports = router;
