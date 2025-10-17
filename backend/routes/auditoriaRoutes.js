// Rutas para auditorias
const express = require('express');
const router = express.Router();
const auditoriaController = require('../controllers/auditoriaController');

router.get('/', auditoriaController.getAll);
router.get('/:id', auditoriaController.getById);
router.post('/', auditoriaController.create);
router.put('/:id', auditoriaController.update);
router.delete('/:id', auditoriaController.delete);

// Ruta para guardar auditoría desde el wizard (recibe el objeto completo)
router.post('/wizard', auditoriaController.guardarAuditoriaWizard);

module.exports = router;
