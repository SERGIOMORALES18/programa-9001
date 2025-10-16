// Script para proteger páginas y navegación tras login
(function() {
  // No proteger login.html
  if (window.location.pathname.includes('login.html')) return;
  const usuario = localStorage.getItem('usuario');
  if (!usuario) {
    // Redirigir correctamente según la ubicación
    window.location.href = '/pages/login.html';
    return;
  }
  // Mostrar nombre de usuario en header si existe
  const user = JSON.parse(usuario);
  let header = document.querySelector('header');
  if (header && !document.getElementById('userInfo')) {
    const div = document.createElement('div');
    div.id = 'userInfo';
    div.style.float = 'right';
    div.innerHTML = `Bienvenido, <b>${user.nombre}</b> | <a href="#" id="logoutBtn">Cerrar sesión</a>`;
    header.appendChild(div);
    document.getElementById('logoutBtn').onclick = function() {
      localStorage.removeItem('usuario');
      window.location.href = '/pages/login.html';
    };
  }
})();
