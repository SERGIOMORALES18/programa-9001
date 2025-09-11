// Controlador para acciones de mejora
const AccionMejora = require('../models/accionMejora');

module.exports = {
  getAll: (req, res) => {
    AccionMejora.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  },
  getById: (req, res) => {
    AccionMejora.getById(req.params.id, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(result[0]);
    });
  },
  create: (req, res) => {
    AccionMejora.create(req.body, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId });
    });
  },
  update: (req, res) => {
    AccionMejora.update(req.params.id, req.body, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Acción de mejora actualizada' });
    });
  },
  delete: (req, res) => {
    AccionMejora.delete(req.params.id, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Acción de mejora eliminada' });
    });
  }
};
