/* 2 ejercicio andres rivera */

// Cambiar dinámicamente el color de fondo al hacer clic en un botón
var miDiv = document.getElementById('miDiv');
var cambiarColorBtn = document.getElementById('cambiarColorBtn');

cambiarColorBtn.addEventListener('click', function() {
  miDiv.setAttribute('style', 'width: 200px; height: 200px; background-color: #00ff00;');
});