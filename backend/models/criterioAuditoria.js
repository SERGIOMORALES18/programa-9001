// Modelo para la tabla criterios_auditoria
const db = require('../config/db');

const CriterioAuditoria = {
  getAll: (callback) => {
    db.query('SELECT * FROM criterios_auditoria', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM criterios_auditoria WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO criterios_auditoria SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE criterios_auditoria SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM criterios_auditoria WHERE id = ?', [id], callback);
  }
};

module.exports = CriterioAuditoria;
