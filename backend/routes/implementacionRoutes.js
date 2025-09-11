// Rutas para implementaciones
const express = require('express');
const router = express.Router();
const implementacionController = require('../controllers/implementacionController');

router.get('/', implementacionController.getAll);
router.get('/:id', implementacionController.getById);
router.post('/', implementacionController.create);
router.put('/:id', implementacionController.update);
router.delete('/:id', implementacionController.delete);

module.exports = router;
