// Rutas para capacitaciones
const express = require('express');
const router = express.Router();
const capacitacionController = require('../controllers/capacitacionController');

router.get('/', capacitacionController.getAll);
router.get('/:id', capacitacionController.getById);
router.post('/', capacitacionController.create);
router.put('/:id', capacitacionController.update);
router.delete('/:id', capacitacionController.delete);

module.exports = router;
