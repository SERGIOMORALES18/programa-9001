// Rutas para resultados por criterio
const express = require('express');
const router = express.Router();
const resultadoCriterioController = require('../controllers/resultadoCriterioController');

router.get('/', resultadoCriterioController.getAll);
router.get('/:id', resultadoCriterioController.getById);
router.post('/', resultadoCriterioController.create);
router.put('/:id', resultadoCriterioController.update);
router.delete('/:id', resultadoCriterioController.delete);

module.exports = router;
