// Modelo para la tabla acciones_mejora
const db = require('../config/db');

const AccionMejora = {
  getAll: (callback) => {
    db.query('SELECT * FROM acciones_mejora', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM acciones_mejora WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO acciones_mejora SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE acciones_mejora SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM acciones_mejora WHERE id = ?', [id], callback);
  }
};

module.exports = AccionMejora;
