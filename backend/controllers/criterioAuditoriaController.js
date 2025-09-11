// Controlador para criterios de auditoría
const CriterioAuditoria = require('../models/criterioAuditoria');

module.exports = {
  getAll: (req, res) => {
    CriterioAuditoria.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  },
  getById: (req, res) => {
    CriterioAuditoria.getById(req.params.id, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(result[0]);
    });
  },
  create: (req, res) => {
    CriterioAuditoria.create(req.body, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId });
    });
  },
  update: (req, res) => {
    CriterioAuditoria.update(req.params.id, req.body, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Criterio actualizado' });
    });
  },
  delete: (req, res) => {
    CriterioAuditoria.delete(req.params.id, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Criterio eliminado' });
    });
  }
};
