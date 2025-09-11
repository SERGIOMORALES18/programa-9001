// Controlador para resultados por criterio
const ResultadoCriterio = require('../models/resultadoCriterio');

module.exports = {
  getAll: (req, res) => {
    ResultadoCriterio.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  },
  getById: (req, res) => {
    ResultadoCriterio.getById(req.params.id, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(result[0]);
    });
  },
  create: (req, res) => {
    ResultadoCriterio.create(req.body, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId });
    });
  },
  update: (req, res) => {
    ResultadoCriterio.update(req.params.id, req.body, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Resultado actualizado' });
    });
  },
  delete: (req, res) => {
    ResultadoCriterio.delete(req.params.id, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Resultado eliminado' });
    });
  }
};
