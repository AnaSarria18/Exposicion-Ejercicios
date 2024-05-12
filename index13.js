/* ejercicios de julian */

/* Obtener referencia al botón
const boton = document.getElementById('boton');

Agregar evento MouseEnter al botón
boton.addEventListener('mouseenter', () => {
       Cambiar el color del botón cuando el cursor entra
    boton.style.backgroundColor = 'green';
});

 Agregar evento MouseLeave al botón
boton.addEventListener('mouseleave', () => {
      Restaurar el color original del botón cuando el cursor sale
    boton.style.backgroundColor = '';
}); */




/* ejercicio de julian */

/* Obtener referencia al elemento que se va a seguir con el mouse
const elemento = document.getElementById('elemento');

 Agregar evento mousemove al documento
document.addEventListener('mousemove', function(evento) {
     Obtener las coordenadas del mouse dentro del documento
    const x = evento.clientX;
    const y = evento.clientY;
     Actualizar la posición del elemento para que siga al mouse
    elemento.style.left = (x - elemento.offsetWidth / 2) + 'px';
    elemento.style.top = (y - elemento.offsetHeight / 2) + 'px';
});
 */




/* ejercicio de julian */

// Obtener referencia al lienzo y al contexto 2D
const lienzo = document.getElementById('lienzo');
const contexto = lienzo.getContext('2d');

// Bandera para indicar si se está dibujando
let dibujando = false;

// Función para comenzar a dibujar
function iniciarDibujo(evento) {
    dibujando = true;
    contexto.beginPath();
    contexto.moveTo(evento.clientX - lienzo.offsetLeft, evento.clientY - lienzo.offsetTop);
}

// Función para dibujar mientras el mouse se mueve
function dibujar(evento) {
    if (dibujando) {
    contexto.lineTo(evento.clientX - lienzo.offsetLeft, evento.clientY - lienzo.offsetTop);
    contexto.stroke();
}
}

// Función para detener el dibujo
function detenerDibujo() {
    dibujando = false;
}

// Agregar evento mousedown al lienzo
lienzo.addEventListener('mousedown', iniciarDibujo);

// Agregar evento mousemove al lienzo
lienzo.addEventListener('mousemove', dibujar);

// Agregar evento mouseup al lienzo
lienzo.addEventListener('mouseup', detenerDibujo);

// Agregar evento mouseleave al lienzo (por si el mouse sale del área del lienzo mientras se está dibujando)
lienzo.addEventListener('mouseleave', detenerDibujo);
