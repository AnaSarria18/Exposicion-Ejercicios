/* ejercicio de daniel solarte  */

document.getElementById('inicio').addEventListener('submit', function(){
    let nombreUsuario = document.getElementById('nombreUsuario').value;
    let contraseña = document.getElementById('contraseña').value;


    /* almacenar las credenciales en localStorage */
    localStorage.setItem('nombre de usuario', nombreUsuario);
    localStorage.setItem('contraseña', contraseña);

    alert('credenciales almacenadas en localStorage. Puedes verificarlas en la consola.');
});