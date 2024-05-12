/* ejercicio de danyely */

/* function guardarDatos() {
    var nombreUsuario = prompt("Ingrese su nombre de usuario:");
    guardar datos en sessionstorage = setItem
    sessionStorage.setItem('usuario', nombreUsuario);
    alert("Nombre de usuario guardado en sessionStorage.");
}

function mostrarDatos() {
     recuperar datos = getItem
    var usuario = sessionStorage.getItem('usuario');
    Si se encuentra contenido en nombreUsuario 
    if (usuario) {
        alert("Nombre de usuario almacenado en sessionStorage: " + usuario);
    } else {  si no se encuentra contenido
        alert("No se encontró ningún nombre de usuario en sessionStorage.");
    }
} */





/* ejercicio 2 de danyely */

// guardar el nombre de un usuario en SessionStorage cuando inicia sesion
sessionStorage.setItem('usuario', 'José');

// recuperar el nombre de usuario y mostrarlo en la página de bienvenida
const usuario = sessionStorage.getItem('usuario');
document.getElementById('bienvenida').textContent = 'Bienvenido, ' + usuario + '!';
