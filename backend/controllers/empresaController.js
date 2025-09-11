// Controlador para empresas
const Empresa = require('../models/empresa');

module.exports = {
  getAll: (req, res) => {
    Empresa.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  },
  getById: (req, res) => {
    Empresa.getById(req.params.id, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(result[0]);
    });
  },
  create: (req, res) => {
    Empresa.create(req.body, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId });
    });
  },
  update: (req, res) => {
    Empresa.update(req.params.id, req.body, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Empresa actualizada' });
    });
  },
  delete: (req, res) => {
    Empresa.delete(req.params.id, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Empresa eliminada' });
    });
  }
};
