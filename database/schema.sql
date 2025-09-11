CREATE TABLE auditorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fecha DATE NOT NULL,
  auditor VARCHAR(100) NOT NULL,
  resultado VARCHAR(50) NOT NULL,
  observaciones TEXT
);
-- Base de datos para el sistema de auditorías ISO 9001

CREATE DATABASE IF NOT EXISTS auditorias_iso9001;
USE auditorias_iso9001;

-- Tabla de empresas
CREATE TABLE empresas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  razon_social VARCHAR(255),
  nit VARCHAR(50),
  representante_legal VARCHAR(255),
  sector_economico VARCHAR(100),
  tipo_empresa VARCHAR(100),
  direccion TEXT,
  telefonos VARCHAR(100),
  numero_empleados INT,
  email VARCHAR(100),
  web VARCHAR(100),
  facebook VARCHAR(100),
  instagram VARCHAR(100),
  tiktok VARCHAR(100),
  fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de usuarios (auditores, administradores)
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  correo VARCHAR(100),
  contraseña VARCHAR(255),
  rol ENUM('admin', 'auditor') NOT NULL,
  activo BOOLEAN DEFAULT TRUE
);

-- Tabla de auditorías
CREATE TABLE auditorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  empresa_id INT,
  fecha_auditoria DATE,
  tipo_verificacion ENUM('I', 'II'),
  auditor_id INT,
  observaciones TEXT,
  resultado ENUM('Aprobado', 'No Aprobado', 'Pendiente'),
  FOREIGN KEY (empresa_id) REFERENCES empresas(id),
  FOREIGN KEY (auditor_id) REFERENCES usuarios(id)
);

-- Tabla de criterios de auditoría
CREATE TABLE criterios_auditoria (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  descripcion TEXT,
  clausula_iso VARCHAR(50)
);

-- Tabla de resultados por criterio
CREATE TABLE resultados_criterios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  auditoria_id INT,
  criterio_id INT,
  cumplimiento ENUM('Cumple', 'No Cumple', 'Parcial'),
  evidencia TEXT,
  observaciones TEXT,
  FOREIGN KEY (auditoria_id) REFERENCES auditorias(id),
  FOREIGN KEY (criterio_id) REFERENCES criterios_auditoria(id)
);

-- Tabla de acciones de mejora
CREATE TABLE acciones_mejora (
  id INT AUTO_INCREMENT PRIMARY KEY,
  auditoria_id INT,
  descripcion TEXT,
  responsable VARCHAR(100),
  fecha_compromiso DATE,
  estado ENUM('Pendiente', 'En Proceso', 'Completada'),
  FOREIGN KEY (auditoria_id) REFERENCES auditorias(id)
);

-- Tabla de documentos de soporte
CREATE TABLE documentos_soporte (
  id INT AUTO_INCREMENT PRIMARY KEY,
  auditoria_id INT,
  nombre_archivo VARCHAR(255),
  ruta_archivo TEXT,
  tipo_documento VARCHAR(50),
  fecha_subida DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (auditoria_id) REFERENCES auditorias(id)
);

-- Tabla de capacitaciones
CREATE TABLE capacitaciones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  empresa_id INT,
  tema VARCHAR(255),
  fecha DATE,
  responsable VARCHAR(100),
  observaciones TEXT,
  FOREIGN KEY (empresa_id) REFERENCES empresas(id)
);

-- Tabla de implementación
CREATE TABLE implementaciones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  empresa_id INT,
  etapa VARCHAR(100),
  descripcion TEXT,
  fecha_inicio DATE,
  fecha_fin DATE,
  estado ENUM('Pendiente', 'En Proceso', 'Completada'),
  FOREIGN KEY (empresa_id) REFERENCES empresas(id)
);
