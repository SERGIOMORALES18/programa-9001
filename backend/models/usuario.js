// Modelo para la tabla usuarios
// Soporta dos modos: MySQL (pool desde ../config/db) o almacenamiento local JSON
const fs = require('fs');
const path = require('path');
const useJson = process.env.DB_USE === 'json';

let db;
if (!useJson) {
  db = require('../config/db');
}

const dataFile = path.join(__dirname, '..', 'data', 'usuarios.json');

function ensureDataFile() {
  const dir = path.dirname(dataFile);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(dataFile)) fs.writeFileSync(dataFile, '[]', 'utf8');
}

function readAllFromFile() {
  ensureDataFile();
  const raw = fs.readFileSync(dataFile, 'utf8');
  try { return JSON.parse(raw); } catch (e) { return []; }
}

function writeAllToFile(arr) {
  ensureDataFile();
  fs.writeFileSync(dataFile, JSON.stringify(arr, null, 2), 'utf8');
}

const Usuario = {
  getAll: (callback) => {
    if (!useJson) return db.query('SELECT * FROM usuarios', callback);
    try {
      const arr = readAllFromFile();
      callback(null, arr);
    } catch (err) { callback(err); }
  },
  getById: (id, callback) => {
    if (!useJson) return db.query('SELECT * FROM usuarios WHERE id = ?', [id], callback);
    try {
      const arr = readAllFromFile();
      const found = arr.filter(u => String(u.id) === String(id));
      callback(null, found);
    } catch (err) { callback(err); }
  },
  create: (data, callback) => {
    if (!useJson) return db.query('INSERT INTO usuarios SET ?', data, callback);
    try {
      const arr = readAllFromFile();
      // asignar id autoincremental
      const nextId = arr.reduce((m, u) => Math.max(m, Number(u.id) || 0), 0) + 1;
      const now = Object.assign({}, data);
      now.id = nextId;
      // normalizar boolean
      if (typeof now.activo === 'string') now.activo = now.activo === 'on' || now.activo === 'true';
      if (now.activo === undefined) now.activo = true;
      arr.push(now);
      writeAllToFile(arr);
      // imitar mysql result
      callback(null, { insertId: nextId });
    } catch (err) { callback(err); }
  },
  getByCorreo: (correo, callback) => {
    if (!useJson) return db.query('SELECT * FROM usuarios WHERE correo = ?', [correo], callback);
    try {
      const arr = readAllFromFile();
      const found = arr.filter(u => u.correo === correo);
      callback(null, found);
    } catch (err) { callback(err); }
  },
  update: (id, data, callback) => {
    if (!useJson) return db.query('UPDATE usuarios SET ? WHERE id = ?', [data, id], callback);
    try {
      const arr = readAllFromFile();
      const idx = arr.findIndex(u => String(u.id) === String(id));
      if (idx === -1) return callback(new Error('Usuario no encontrado'));
      arr[idx] = Object.assign({}, arr[idx], data);
      writeAllToFile(arr);
      callback(null);
    } catch (err) { callback(err); }
  },
  delete: (id, callback) => {
    if (!useJson) return db.query('DELETE FROM usuarios WHERE id = ?', [id], callback);
    try {
      const arr = readAllFromFile();
      const filtered = arr.filter(u => String(u.id) !== String(id));
      writeAllToFile(filtered);
      callback(null);
    } catch (err) { callback(err); }
  }
};

module.exports = Usuario;
