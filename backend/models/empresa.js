// Modelo para la tabla empresas
const db = require('../config/db');

const Empresa = {
  getAll: (callback) => {
    db.query('SELECT * FROM empresas', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM empresas WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO empresas SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE empresas SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM empresas WHERE id = ?', [id], callback);
  }
};

module.exports = Empresa;
