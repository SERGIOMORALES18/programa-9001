// Script para login de usuarios

document.getElementById('formLogin').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));
  fetch('http://localhost:3001/usuarios')
    .then(res => res.json())
    .then(usuarios => {
      const user = usuarios.find(u => u.correo === data.correo && u.contraseña === data.contraseña && u.activo);
      const msg = document.getElementById('loginMsg');
      if (user) {
        msg.textContent = '¡Bienvenido, ' + user.nombre + '!';
        msg.style.color = 'green';
        // Aquí podrías redirigir a la página principal o guardar sesión
        setTimeout(() => window.location.href = '../index.html', 1200);
      } else {
        msg.textContent = 'Usuario o contraseña incorrectos, o usuario inactivo.';
        msg.style.color = 'red';
      }
    });
});
