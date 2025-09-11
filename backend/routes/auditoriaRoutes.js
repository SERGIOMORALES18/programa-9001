// Rutas para auditorias
const express = require('express');
const router = express.Router();
const auditoriaController = require('../controllers/auditoriaController');

router.get('/', auditoriaController.getAll);
router.get('/:id', auditoriaController.getById);
router.post('/', auditoriaController.create);
router.put('/:id', auditoriaController.update);
router.delete('/:id', auditoriaController.delete);

module.exports = router;
