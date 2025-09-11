// Controlador para documentos de soporte
const DocumentoSoporte = require('../models/documentoSoporte');

module.exports = {
  getAll: (req, res) => {
    DocumentoSoporte.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  },
  getById: (req, res) => {
    DocumentoSoporte.getById(req.params.id, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(result[0]);
    });
  },
  create: (req, res) => {
    DocumentoSoporte.create(req.body, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId });
    });
  },
  update: (req, res) => {
    DocumentoSoporte.update(req.params.id, req.body, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Documento actualizado' });
    });
  },
  delete: (req, res) => {
    DocumentoSoporte.delete(req.params.id, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Documento eliminado' });
    });
  }
};
