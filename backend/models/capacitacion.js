// Modelo para la tabla capacitaciones
const db = require('../config/db');

const Capacitacion = {
  getAll: (callback) => {
    db.query('SELECT * FROM capacitaciones', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM capacitaciones WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO capacitaciones SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE capacitaciones SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM capacitaciones WHERE id = ?', [id], callback);
  }
};

module.exports = Capacitacion;
