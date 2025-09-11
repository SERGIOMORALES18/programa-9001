// Controlador para capacitaciones
const Capacitacion = require('../models/capacitacion');

module.exports = {
  getAll: (req, res) => {
    Capacitacion.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  },
  getById: (req, res) => {
    Capacitacion.getById(req.params.id, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(result[0]);
    });
  },
  create: (req, res) => {
    Capacitacion.create(req.body, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId });
    });
  },
  update: (req, res) => {
    Capacitacion.update(req.params.id, req.body, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Capacitación actualizada' });
    });
  },
  delete: (req, res) => {
    Capacitacion.delete(req.params.id, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Capacitación eliminada' });
    });
  }
};
