const fs = require('fs');
const path = require('path');

// POST /auditorias (wizard)
exports.guardarAuditoriaWizard = (req, res) => {
  const auditoria = req.body;
  const filePath = path.join(__dirname, '../data/auditorias.json');
  let auditorias = [];
  if (fs.existsSync(filePath)) {
    try {
      auditorias = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
      auditorias = [];
    }
  }
  auditoria.id = auditorias.length > 0 ? auditorias[auditorias.length-1].id + 1 : 1;
  auditorias.push(auditoria);
  fs.writeFileSync(filePath, JSON.stringify(auditorias, null, 2));
  res.status(201).json({ message: 'Auditoría guardada correctamente' });
};
// Controlador para auditorias
const Auditoria = require('../models/auditoria');

module.exports = {
  getAll: (req, res) => {
    Auditoria.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  },
  getById: (req, res) => {
    Auditoria.getById(req.params.id, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(result[0]);
    });
  },
  create: (req, res) => {
    Auditoria.create(req.body, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId });
    });
  },
  update: (req, res) => {
    Auditoria.update(req.params.id, req.body, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Auditoría actualizada' });
    });
  },
  delete: (req, res) => {
    Auditoria.delete(req.params.id, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Auditoría eliminada' });
    });
  }
};
