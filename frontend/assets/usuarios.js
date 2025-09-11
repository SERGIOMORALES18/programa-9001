// Script para gestionar usuarios

document.addEventListener('DOMContentLoaded', () => {
  cargarUsuarios();
  document.getElementById('formUsuario').addEventListener('submit', registrarUsuario);
});

function cargarUsuarios() {
  fetch('http://localhost:3001/usuarios')
    .then(res => res.json())
    .then(usuarios => {
      const tbody = document.querySelector('#tablaUsuarios tbody');
      tbody.innerHTML = '';
      usuarios.forEach(u => {
        tbody.innerHTML += `
          <tr>
            <td>${u.id}</td>
            <td>${u.nombre}</td>
            <td>${u.correo}</td>
            <td>${u.rol}</td>
            <td>${u.activo ? 'Sí' : 'No'}</td>
            <td><button onclick="eliminarUsuario(${u.id})">Eliminar</button></td>
          </tr>
        `;
      });
    });
}

function registrarUsuario(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));
  data.activo = form.activo.checked;
  fetch('http://localhost:3001/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(() => {
      form.reset();
      cargarUsuarios();
    });
}

function eliminarUsuario(id) {
  if (!confirm('¿Eliminar este usuario?')) return;
  fetch(`http://localhost:3001/usuarios/${id}`, {
    method: 'DELETE'
  })
    .then(() => cargarUsuarios());
}
