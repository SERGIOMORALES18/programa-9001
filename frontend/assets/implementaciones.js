// Script para gestionar implementaciones

document.addEventListener('DOMContentLoaded', () => {
  cargarImplementaciones();
  document.getElementById('formImplementacion').addEventListener('submit', registrarImplementacion);
});

function cargarImplementaciones() {
  fetch('http://localhost:3001/implementaciones')
    .then(res => res.json())
    .then(implementaciones => {
      const tbody = document.querySelector('#tablaImplementaciones tbody');
      tbody.innerHTML = '';
      implementaciones.forEach(i => {
        tbody.innerHTML += `
          <tr>
            <td>${i.id}</td>
            <td>${i.empresa_id}</td>
            <td>${i.etapa}</td>
            <td>${i.fecha_inicio}</td>
            <td>${i.fecha_fin || ''}</td>
            <td>${i.estado}</td>
            <td><button onclick="eliminarImplementacion(${i.id})">Eliminar</button></td>
          </tr>
        `;
      });
    });
}

function registrarImplementacion(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));
  fetch('http://localhost:3001/implementaciones', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(() => {
      form.reset();
      cargarImplementaciones();
    });
}

function eliminarImplementacion(id) {
  if (!confirm('¿Eliminar esta implementación?')) return;
  fetch(`http://localhost:3001/implementaciones/${id}`, {
    method: 'DELETE'
  })
    .then(() => cargarImplementaciones());
}
