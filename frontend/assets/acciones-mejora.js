// Script para gestionar acciones de mejora

document.addEventListener('DOMContentLoaded', () => {
  cargarAcciones();
  document.getElementById('formAccion').addEventListener('submit', registrarAccion);
});

function cargarAcciones() {
  fetch('http://localhost:3001/acciones-mejora')
    .then(res => res.json())
    .then(acciones => {
      const tbody = document.querySelector('#tablaAcciones tbody');
      tbody.innerHTML = '';
      acciones.forEach(a => {
        tbody.innerHTML += `
          <tr>
            <td>${a.id}</td>
            <td>${a.auditoria_id}</td>
            <td>${a.descripcion}</td>
            <td>${a.responsable}</td>
            <td>${a.fecha_compromiso}</td>
            <td>${a.estado}</td>
            <td><button onclick="eliminarAccion(${a.id})">Eliminar</button></td>
          </tr>
        `;
      });
    });
}

function registrarAccion(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));
  fetch('http://localhost:3001/acciones-mejora', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(() => {
      form.reset();
      cargarAcciones();
    });
}

function eliminarAccion(id) {
  if (!confirm('¿Eliminar esta acción de mejora?')) return;
  fetch(`http://localhost:3001/acciones-mejora/${id}`, {
    method: 'DELETE'
  })
    .then(() => cargarAcciones());
}
