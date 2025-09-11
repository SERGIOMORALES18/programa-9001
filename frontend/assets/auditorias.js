// Script para gestionar auditorías

document.addEventListener('DOMContentLoaded', () => {
  cargarAuditorias();
  document.getElementById('formAuditoria').addEventListener('submit', registrarAuditoria);
});

function cargarAuditorias() {
  fetch('http://localhost:3001/auditorias')
    .then(res => res.json())
    .then(auditorias => {
      const tbody = document.querySelector('#tablaAuditorias tbody');
      tbody.innerHTML = '';
      auditorias.forEach(a => {
        tbody.innerHTML += `
          <tr>
            <td>${a.id}</td>
            <td>${a.empresa_id}</td>
            <td>${a.fecha_auditoria}</td>
            <td>${a.auditor_id}</td>
            <td>${a.resultado}</td>
            <td><button onclick="eliminarAuditoria(${a.id})">Eliminar</button></td>
          </tr>
        `;
      });
    });
}

function registrarAuditoria(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));
  fetch('http://localhost:3001/auditorias', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(() => {
      form.reset();
      cargarAuditorias();
    });
}

function eliminarAuditoria(id) {
  if (!confirm('¿Eliminar esta auditoría?')) return;
  fetch(`http://localhost:3001/auditorias/${id}`, {
    method: 'DELETE'
  })
    .then(() => cargarAuditorias());
}
