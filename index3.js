/* ejercicios rivera */
var productos = document.querySelectorAll('.producto');
var imagenAmpliada = document.querySelector('.imagen-ampliada');

productos.forEach(function(producto) {
  producto.addEventListener('click', function() {
    var nuevaUrl = this.getAttribute('data-imagen-ampliada');
    imagenAmpliada.setAttribute('src', nuevaUrl);
  });
});