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
  data.activo = form.activo ? form.activo.checked : true;
  fetch('http://localhost:3001/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(respuesta => {
      form.reset();
      // Si estamos en la página de registro (sin tablaUsuarios), redirigir a login
      if (!document.getElementById('tablaUsuarios')) {
        const msg = document.getElementById('registerMsg');
        msg.textContent = '¡Registro exitoso! Ahora puedes iniciar sesión.';
        msg.style.color = 'green';
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 1500);
      } else {
        cargarUsuarios();
      }
    });
}

function eliminarUsuario(id) {
  if (!confirm('¿Eliminar este usuario?')) return;
  fetch(`http://localhost:3001/usuarios/${id}`, {
    method: 'DELETE'
  })
    .then(() => cargarUsuarios());
}
