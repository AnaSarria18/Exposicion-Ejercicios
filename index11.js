/* ejercicio de juan daniel madroñero */

document.getElementById('miEnlace').addEventListener('click', function(event){
    event.preventDefault(); /* evita que el enlace abra una nueva pagina */
    alert('enlace deshabilitado');
});


document.getElementById('formulario').addEventListener('click', function(event) {
    event.preventDefault(); /* evita que el enlace abra una nueva pagina */
    alert('campo deshabilitado');
});



document.getElementById('miBoton').addEventListener('click', function(event) {
    event,preventDefault(); /* evita el comportamiento predeterminado del boton, puedes realizar otras acciones aqui */
    alert('boton clickeado, pero se realizara su accion predeterminada');
});