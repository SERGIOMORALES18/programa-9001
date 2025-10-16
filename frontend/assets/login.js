// Script para login de usuarios

document.getElementById('formLogin').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));
  fetch('http://localhost:3001/usuarios/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(respuesta => {
      const msg = document.getElementById('loginMsg');
      if (respuesta.usuario) {
        msg.textContent = '¡Bienvenido, ' + respuesta.usuario.nombre + '!';
        msg.style.color = 'green';
        // Guardar usuario en localStorage
        localStorage.setItem('usuario', JSON.stringify(respuesta.usuario));
        setTimeout(() => window.location.href = '/pages/dashboard.html', 1200);
      } else {
        msg.textContent = respuesta.error || 'Usuario o contraseña incorrectos, o usuario inactivo.';
        msg.style.color = 'red';
      }
    })
    .catch(() => {
      const msg = document.getElementById('loginMsg');
      msg.textContent = 'Error de conexión con el servidor.';
      msg.style.color = 'red';
    });
});
