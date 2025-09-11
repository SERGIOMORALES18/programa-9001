// Script para gestionar capacitaciones

document.addEventListener('DOMContentLoaded', () => {
  cargarCapacitaciones();
  document.getElementById('formCapacitacion').addEventListener('submit', registrarCapacitacion);
});

function cargarCapacitaciones() {
  fetch('http://localhost:3001/capacitaciones')
    .then(res => res.json())
    .then(capacitaciones => {
      const tbody = document.querySelector('#tablaCapacitaciones tbody');
      tbody.innerHTML = '';
      capacitaciones.forEach(c => {
        tbody.innerHTML += `
          <tr>
            <td>${c.id}</td>
            <td>${c.empresa_id}</td>
            <td>${c.tema}</td>
            <td>${c.fecha}</td>
            <td>${c.responsable}</td>
            <td><button onclick="eliminarCapacitacion(${c.id})">Eliminar</button></td>
          </tr>
        `;
      });
    });
}

function registrarCapacitacion(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));
  fetch('http://localhost:3001/capacitaciones', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(() => {
      form.reset();
      cargarCapacitaciones();
    });
}

function eliminarCapacitacion(id) {
  if (!confirm('¿Eliminar esta capacitación?')) return;
  fetch(`http://localhost:3001/capacitaciones/${id}`, {
    method: 'DELETE'
  })
    .then(() => cargarCapacitaciones());
}
